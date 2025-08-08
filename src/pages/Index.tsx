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

      {/* Features Section */}
      <section id="features" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              مميزات منصة نبراس التقنية
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نظام شامل ومتطور لأتمتة العمليات اليومية وتحسين الكفاءة التشغيلية لشركتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-feature border-border/50 shadow-feature hover:shadow-glow transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-smooth">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">أتمتة الطلبات والفواتير</h3>
                <p className="text-muted-foreground">
                  معالجة الطلبات وإنشاء الفواتير تلقائياً دون تدخّل يدوي
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-feature border-border/50 shadow-feature hover:shadow-glow transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-smooth">
                  <Truck className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">خدمات التوصيل ومراقبتها</h3>
                <p className="text-muted-foreground">
                  تتبّع الطلبات في الوقت الفعلي وإدارة عمليات التوصيل بذكاء
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-feature border-border/50 shadow-feature hover:shadow-glow transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-smooth">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">نظام حجوزات ذكي</h3>
                <p className="text-muted-foreground">
                  جدولة المواعيد والاستراحات بشكل تلقائي دون تداخل
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-feature border-border/50 shadow-feature hover:shadow-glow transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-smooth">
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">لوحة تحكّم واحدة</h3>
                <p className="text-muted-foreground">
                  واجهة بسيطة لإدارة جميع العمليات ومتابعة التقارير
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              كيف يعمل النظام؟
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              منصة نبراس التقنية تتكامل مع صفحات Facebook ووسائل التواصل الأخرى لأتمتة الردود
              وقراءة الطلبات وتحديثها في قاعدة البيانات
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-smooth">
                <MessageSquare className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">تكامل مع وسائل التواصل</h3>
              <p className="text-muted-foreground">
                ربط تلقائي مع صفحات Facebook وWhatsApp لاستقبال الطلبات ومعالجتها
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-smooth">
                <Clock className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">معالجة فورية</h3>
              <p className="text-muted-foreground">
                تحديث فوري لقاعدة البيانات وإرسال الإشعارات عند استلام أو تحديث الطلبات
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-smooth">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">دقة عالية</h3>
              <p className="text-muted-foreground">
                تقليل الأخطاء البشرية وتوفير الوقت مع تحسين تجربة العملاء
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-feature rounded-2xl border border-border/50">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-accent ml-3" />
              <h3 className="text-2xl font-bold">مناسب للسوق الليبي</h3>
            </div>
            <p className="text-center text-muted-foreground text-lg">
              خاصة للمطاعم والمتاجر الإلكترونية وشركات التوصيل في سبها وطرابلس وجميع أنحاء ليبيا.
              نحن نفهم احتياجات السوق المحلي ونقدم حلول مخصصة تناسب طبيعة العمل في المنطقة.
            </p>
          </div>
        </div>
      </section>

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