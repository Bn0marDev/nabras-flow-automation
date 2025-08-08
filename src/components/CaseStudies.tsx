import { Card, CardContent } from "@/components/ui/card";
import { Bot, BarChart3, Link2, FileText } from "lucide-react";

const Case = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <Card className="bg-gradient-feature border-border/50 shadow-feature">
    <CardContent className="p-6">
      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
    </CardContent>
  </Card>
);

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">دراسات حالة وأمثلة عملية</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            أمثلة حقيقية لحلول طوّرناها وحققت نتائج ملموسة.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Case icon={<Bot className="h-6 w-6 text-primary" />} title="بوت خدمة العملاء عبر Telegram" desc="بوت ذكي يجيب على الأسئلة ويعالج الطلبات البسيطة 24/7، خفّض عبء العمل 70% ورفع رضا العملاء." />
          <Case icon={<BarChart3 className="h-6 w-6 text-accent" />} title="نظام تقارير تلقائية" desc="جمع بيانات المبيعات من مصادر متعددة وإرسال تقارير صباحية مفصلة، موفّراً ساعات عمل يومياً." />
          <Case icon={<Link2 className="h-6 w-6 text-primary" />} title="ربط CRM مع أدوات التسويق" desc="تكامل يتتبع سلوك العملاء ويرسل رسائل شخصية، وزاد معدل التحويل 45%." />
          <Case icon={<FileText className="h-6 w-6 text-accent" />} title="وكيل ذكاء اصطناعي للمحادثة" desc="وكيل يقرأ المستندات ويولّد ملخصات وتوصيات متعددة اللغات لتسريع تحليل المشاريع." />
        </div>
      </div>
    </section>
  );
}
