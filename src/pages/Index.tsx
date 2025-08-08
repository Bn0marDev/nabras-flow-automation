import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import CountdownTimer from "@/components/CountdownTimer";
import ServicesSection from "@/components/ServicesSection";
import AboutIntro from "@/components/AboutIntro";
import ApproachSection from "@/components/ApproachSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudies from "@/components/CaseStudies";
import StartNowCTA from "@/components/StartNowCTA";
import FAQSection from "@/components/FAQSection";
import ContactInfo from "@/components/ContactInfo";
import ServiceCards from "@/components/ServiceCards";
import {
  CheckCircle,
  Zap,
  BarChart3,
  Calendar,
  Truck,
  MessageSquare,
  Clock,
  Target
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company_name: "",
    service_type: "",
    additional_details: ""
  });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [customService, setCustomService] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare payload (support custom service type)
      const payload = {
        ...formData,
        service_type: formData.service_type === "custom" ? customService : formData.service_type,
      };

      if (payload.service_type === "" || (formData.service_type === "custom" && !customService.trim())) {
        toast({
          title: "يرجى تحديد نوع الخدمة",
          description: "اختر نوع الخدمة أو اكتب نوع الخدمة المخصص.",
          variant: "destructive",
        });
        return;
      }

      // Save to database
      const { error: dbError } = await supabase
        .from("contact_inquiries")
        .insert([payload]);

      if (dbError) throw dbError;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
        body: payload
      });

      if (emailError) {
        console.warn("Email sending failed:", emailError);
      }

      toast({
        title: "تم الإرسال بنجاح! ✨",
        description: "شكراً لتواصلك معنا، سنعاود الاتصال بك قريباً.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        company_name: "",
        service_type: "",
        additional_details: ""
      });
      setCustomService("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من إرسال رسالتك، يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground" dir="rtl">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 25, 35, 0.85), rgba(20, 25, 35, 0.85)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent leading-tight">
              نبراس التقنية: شريكك في التحول الرقمي الذكي
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              نحول عملياتك اليدوية إلى أنظمة ذكية تعمل بكفاءة عالية وتوفر الوقت والجهد، باستخدام أحدث الحلول التقنية المتطورة ووكلاء الذكاء الاصطناعي.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-6 text-lg rounded-lg shadow-glow transition-smooth">
                <a href="#contact" aria-label="ابدأ التحول الرقمي معنا الآن">ابدأ التحول الرقمي معنا الآن</a>
              </Button>
              <Button variant="secondary" asChild className="px-6 py-6 text-lg rounded-lg">
                <a href="#contact" aria-label="احجز استشارة مجانية">احجز استشارة مجانية</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      <AboutIntro />
      <ServicesSection />
      <ServiceCards />

      <ApproachSection />
      <WhyChooseUs />
      <CaseStudies />
      <StartNowCTA />
      <FAQSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                تواصل معنا اليوم
              </h2>
              <p className="text-xl text-muted-foreground">
                احصل على استشارة مجانية وابدأ رحلتك نحو الأتمتة الذكية
              </p>
            </div>
            <ContactInfo />

            <Card className="bg-gradient-feature border-border/50 shadow-feature">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                        الاسم *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-background/50 border-border"
                        placeholder="اسمك الكامل"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                        رقم الهاتف *
                      </Label>
                      <Input
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-background/50 border-border"
                        placeholder="+218..."
                        inputMode="tel"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                        البريد الإلكتروني *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-background/50 border-border"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company_name" className="text-sm font-medium mb-2 block">
                        اسم الشركة
                      </Label>
                      <Input
                        id="company_name"
                        value={formData.company_name}
                        onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                        className="bg-background/50 border-border"
                        placeholder="اسم شركتك (اختياري)"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service_type" className="text-sm font-medium mb-2 block">
                      الخدمة المطلوبة *
                    </Label>
                    <Select value={formData.service_type} onValueChange={(value) => setFormData({...formData, service_type: value})}>
                      <SelectTrigger className="bg-background/50 border-border">
                        <SelectValue placeholder="اختر الخدمة المطلوبة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="orders_automation">أتمتة الطلبات والفواتير</SelectItem>
                        <SelectItem value="delivery_management">إدارة خدمات التوصيل</SelectItem>
                        <SelectItem value="booking_system">نظام الحجوزات</SelectItem>
                        <SelectItem value="complete_solution">الحل الشامل</SelectItem>
                        <SelectItem value="consultation">استشارة فقط</SelectItem>
                        <SelectItem value="custom">أخرى - اكتب نوع الخدمة</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {formData.service_type === "custom" && (
                    <div className="mt-4">
                      <Label htmlFor="custom_service_type" className="text-sm font-medium mb-2 block">
                        نوع الخدمة (مخصص) *
                      </Label>
                      <Input
                        id="custom_service_type"
                        required
                        value={customService}
                        onChange={(e) => setCustomService(e.target.value)}
                        className="bg-background/50 border-border"
                        placeholder="اكتب نوع الخدمة المطلوبة"
                      />
                    </div>
                  )}

                   <div>
                    <Label htmlFor="additional_details" className="text-sm font-medium mb-2 block">
                      تفاصيل إضافية
                    </Label>
                    <Textarea
                      id="additional_details"
                      value={formData.additional_details}
                      onChange={(e) => setFormData({...formData, additional_details: e.target.value})}
                      className="bg-background/50 border-border min-h-[120px]"
                      placeholder="أخبرنا المزيد عن احتياجاتك وطبيعة عملك..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-lg shadow-glow transition-smooth"
                  >
                    {isSubmitting ? "جارٍ الإرسال..." : "إرسال الطلب"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;