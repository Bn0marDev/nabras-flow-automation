import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">الأسئلة الشائعة</h2>
          <p className="text-xl text-muted-foreground">إجابات واضحة عن أكثر الأسئلة تكراراً.</p>
        </div>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="q1">
            <AccordionTrigger>ما هي الحلول التقنية التي تقدمونها؟</AccordionTrigger>
            <AccordionContent>
              نقدم حلولاً متطورة لربط وتحسين عمليات عملك، وتكاملات مخصصة بين التطبيقات والخدمات لتبسيط الإجراءات وزيادة الكفاءة.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>هل يمكنني استضافة الحلول بنفسي؟</AccordionTrigger>
            <AccordionContent>
              نعم، نوفر استضافة مرنة تضمن بقاء بياناتك تحت سيطرتك الكاملة، مع دعم إعداد وإدارة الاستضافة.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>ما أنواع الحلول التي يمكن تطويرها؟</AccordionTrigger>
            <AccordionContent>
              من بوتات الدردشة إلى تحليل البيانات المعقّد ونقل المعلومات، الإمكانيات شبه غير محدودة حسب متطلباتك.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger>كيف تختلف خدماتكم عن الحلول الجاهزة؟</AccordionTrigger>
            <AccordionContent>
              نوفّر خبرة وتخصيصاً عميقاً لحلول متقدمة مع دعم وصيانة مستمرة لأفضل أداء.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q5">
            <AccordionTrigger>كم يستغرق تطوير الحل؟</AccordionTrigger>
            <AccordionContent>
              يعتمد على تعقيد المشروع؛ نوفر جدولاً زمنياً واضحاً ونلتزم بالمواعيد.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q6">
            <AccordionTrigger>هل تقدمون تدريباً على استخدام الأنظمة؟</AccordionTrigger>
            <AccordionContent>
              نعم، نقدّم تدريباً شاملاً لفريقك لضمان الاستفادة الكاملة وإجراء التعديلات عند الحاجة.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
