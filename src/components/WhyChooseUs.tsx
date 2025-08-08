import { CheckCircle2, Shield, SlidersHorizontal, LifeBuoy, Gauge } from "lucide-react";

const Item = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-6 rounded-xl bg-gradient-feature border border-border/50 shadow-feature">
    <div className="flex items-center gap-3 mb-3">
      <span className="text-accent"><CheckCircle2 className="h-6 w-6" /></span>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">لماذا تختار نبراس التقنية؟</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            خبرة، تخصيص، دعم مستمر، أمان عالٍ، وكفاءة تُترجم إلى نتائج ملموسة لعملك.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Item icon={<Gauge />} title="الخبرة والتخصص" desc="خبراء في الحلول التقنية والذكاء الاصطناعي عبر قطاعات متعددة." />
          <Item icon={<SlidersHorizontal />} title="التخصيص الكامل" desc="حلول مُصمّمة خصيصاً لعملياتك وتحدياتك الفريدة." />
          <Item icon={<LifeBuoy />} title="الدعم المستمر" desc="صيانة ومساعدة دائمة لتطوّر الأنظمة مع احتياجاتك." />
          <Item icon={<Shield />} title="التحكم والأمان" desc="استضافة مرنة وخيارات سحابية آمنة، وخصوصية قصوى لبياناتك." />
          <Item icon={<Gauge />} title="التوفير والكفاءة" desc="تحسينات توفّر حتى 80% من الوقت في المهام الروتينية." />
        </div>
      </div>
    </section>
  );
}
