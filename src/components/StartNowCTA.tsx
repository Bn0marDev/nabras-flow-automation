export default function StartNowCTA() {
  return (
    <section id="get-started" className="py-20 bg-gradient-feature border-y border-border/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">ابدأ التحول الرقمي مع نبراس التقنية اليوم</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          استشارة مجانية لتقييم احتياجاتك وعرض أسعار مخصص بخطوات واضحة من التصميم إلى التنفيذ والدعم.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#contact" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth">احجز استشارة مجانية</a>
          <a href="#contact" className="px-6 py-3 rounded-lg border border-border hover:bg-background/50 transition-smooth">تحدث مع خبير</a>
        </div>
      </div>
    </section>
  );
}
