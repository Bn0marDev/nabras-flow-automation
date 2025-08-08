import { Card, CardContent } from "@/components/ui/card";
import { Palette, Settings2, Clock, Activity, Rocket } from "lucide-react";

const Item = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <Card className="bg-gradient-feature border-border/50 shadow-feature">
    <CardContent className="p-6">
      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
    </CardContent>
  </Card>
);

export default function ApproachSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">كيف نخدمك في نبراس التقنية؟</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نبني حلولاً عملية وسريعة بواجهات بديهية وتخصيص عميق، ونشغّلها على أحداث متعددة مع مراقبة وتحليل مستمر.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Item icon={<Palette className="h-6 w-6 text-primary" />} title="التصميم المرئي المبتكر" desc="واجهات بديهية وسهلة الاستخدام تتيح رؤية النتائج فوراً أثناء التطوير." />
          <Item icon={<Settings2 className="h-6 w-6 text-accent" />} title="التخصيص المتقدم" desc="بناء حلول مخصصة ببرمجة متقدمة (JavaScript و Python) لتحويلات معقّدة." />
          <Item icon={<Clock className="h-6 w-6 text-primary" />} title="تشغيل متنوع" desc="تشغيل عبر Webhooks، الجداول الزمنية، أو تفاعل المستخدم لضبط التدفقات حسب عملك." />
          <Item icon={<Activity className="h-6 w-6 text-accent" />} title="مراقبة وتحليل" desc="تنبيهات مخصصة، معالجة أخطاء فورية، وتدفّق سجلات لنظم مراقبة خارجية." />
          <Item icon={<Rocket className="h-6 w-6 text-primary" />} title="حلول جاهزة" desc="قوالب جاهزة للبداية السريعة في التسويق، إدارة البيانات، وبناء وكلاء الذكاء الاصطناعي." />
        </div>
      </div>
    </section>
  );
}
