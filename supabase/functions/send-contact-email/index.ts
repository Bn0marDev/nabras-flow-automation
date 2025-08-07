import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  company_name?: string;
  service_type: string;
  additional_details?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();

    console.log("Processing contact form submission:", {
      name: formData.name,
      email: formData.email,
      service_type: formData.service_type
    });

    // Map service types to Arabic
    const serviceTypeMap: Record<string, string> = {
      "orders_automation": "أتمتة الطلبات والفواتير",
      "delivery_management": "إدارة خدمات التوصيل",
      "booking_system": "نظام الحجوزات",
      "complete_solution": "الحل الشامل",
      "consultation": "استشارة فقط",
      "other": "أخرى"
    };

    const serviceTypeArabic = serviceTypeMap[formData.service_type] || formData.service_type;

    // Send notification email to Nabras Technical
    const emailResponse = await resend.emails.send({
      from: "نبراس التقنية <onboarding@resend.dev>",
      to: ["info@nabrastech.com"], // Replace with actual company email
      subject: `طلب جديد من العميل: ${formData.name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #1a1f2e 0%, #2a3441 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">🌟 طلب جديد من موقع نبراس التقنية</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #e97948; margin-top: 0;">تفاصيل العميل:</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px; font-weight: bold; background: #f8f9fa;">الاسم:</td>
                <td style="padding: 12px;">${formData.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px; font-weight: bold; background: #f8f9fa;">البريد الإلكتروني:</td>
                <td style="padding: 12px;">${formData.email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px; font-weight: bold; background: #f8f9fa;">رقم الهاتف:</td>
                <td style="padding: 12px;">${formData.phone}</td>
              </tr>
              ${formData.company_name ? `
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px; font-weight: bold; background: #f8f9fa;">اسم الشركة:</td>
                <td style="padding: 12px;">${formData.company_name}</td>
              </tr>
              ` : ''}
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px; font-weight: bold; background: #f8f9fa;">الخدمة المطلوبة:</td>
                <td style="padding: 12px;"><span style="background: #e97948; color: white; padding: 4px 8px; border-radius: 4px;">${serviceTypeArabic}</span></td>
              </tr>
            </table>

            ${formData.additional_details ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #2c7a7b;">تفاصيل إضافية:</h3>
              <div style="background: #f7fafc; padding: 15px; border-right: 4px solid #e97948; border-radius: 4px;">
                ${formData.additional_details.replace(/\n/g, '<br>')}
              </div>
            </div>
            ` : ''}

            <div style="margin-top: 30px; padding: 20px; background: #e6fffa; border-radius: 8px; border: 1px solid #81e6d9;">
              <p style="margin: 0; color: #234e52;">
                <strong>⏰ تم استلام هذا الطلب في:</strong> ${new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Tripoli' })}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the customer
    const confirmationResponse = await resend.emails.send({
      from: "نبراس التقنية <onboarding@resend.dev>",
      to: [formData.email],
      subject: "شكراً لتواصلك مع نبراس التقنية! ✨",
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #1a1f2e 0%, #2a3441 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">🌟 أهلاً بك في نبراس التقنية</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="font-size: 18px; color: #2d3748;">مرحباً ${formData.name}،</p>
            
            <p style="color: #4a5568; line-height: 1.6;">
              شكراً لك على اهتمامك بخدمات نبراس التقنية! لقد تم استلام طلبك بنجاح وسيقوم فريقنا بمراجعته والتواصل معك في أقرب وقت ممكن.
            </p>

            <div style="background: #e6fffa; padding: 20px; border-radius: 8px; border-right: 4px solid #38b2ac; margin: 20px 0;">
              <h3 style="color: #234e52; margin-top: 0;">ملخص طلبك:</h3>
              <p style="margin: 5px 0; color: #2c7a7b;"><strong>الخدمة المطلوبة:</strong> ${serviceTypeArabic}</p>
              <p style="margin: 5px 0; color: #2c7a7b;"><strong>رقم المرجع:</strong> ${Date.now().toString().slice(-6)}</p>
            </div>

            <div style="background: #fff5f5; padding: 20px; border-radius: 8px; border-right: 4px solid #e97948; margin: 20px 0;">
              <h3 style="color: #c53030; margin-top: 0;">ماذا بعد؟</h3>
              <ul style="color: #742a2a; padding-right: 20px;">
                <li>سيتواصل معك أحد خبرائنا خلال 24 ساعة</li>
                <li>سنقوم بتحليل احتياجاتك وتقديم الحل المناسب</li>
                <li>ستحصل على استشارة مجانية مخصصة لمشروعك</li>
              </ul>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #4a5568;">للاستفسارات العاجلة، يمكنك التواصل معنا:</p>
              <p style="color: #e97948; font-weight: bold;">📞 +218-XX-XXXXXXX</p>
              <p style="color: #e97948; font-weight: bold;">📧 info@nabrastech.com</p>
            </div>

            <p style="color: #718096; font-size: 14px; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px;">
              نبراس التقنية - سبها، ليبيا<br>
              حلول ذكية لأتمتة مهامك اليومية
            </p>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", {
      notification: emailResponse.data?.id,
      confirmation: confirmationResponse.data?.id
    });

    return new Response(JSON.stringify({ 
      success: true, 
      notificationId: emailResponse.data?.id,
      confirmationId: confirmationResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to send email",
        details: error.toString()
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);