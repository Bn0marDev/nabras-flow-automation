import { Card, CardContent } from "@/components/ui/card";
import chatBotAmico from "@/assets/Chat bot-amico.svg";
import chatBotRafiki from "@/assets/Chat bot-rafiki.svg";
import mailSent from "@/assets/Mail sent-bro.svg";
import digitalLifestyle from "@/assets/Digital lifestyle-bro.svg";
import dataExtraction from "@/assets/Data extraction-bro.svg";
import businessSolution from "@/assets/Business solution-cuate.svg";
import digitalTransformation from "@/assets/Digital transformation-amico.svg";
import inSync from "@/assets/In sync-rafiki.svg";
import scheduleRafiki from "@/assets/Schedule-rafiki.svg";
import onlineCalendar from "@/assets/Online calendar-rafiki.svg";
import versionControl from "@/assets/Version control-rafiki.svg";
import codingWorkshop from "@/assets/Coding workshop-bro.svg";
import customerSurvey from "@/assets/Customer Survey-rafiki.svg";

const Category = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <article className="mb-12">
    <h3 className="text-2xl md:text-3xl font-bold mb-6">{title}</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
  </article>
);

const ServiceCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  accent = "primary",
}: {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  accent?: "primary" | "accent";
}) => (
  <Card className="bg-gradient-feature border-border/50 shadow-feature hover:shadow-glow transition-smooth group">
    <CardContent className="p-6">
      <div
        className={`w-14 h-14 ${accent === "primary" ? "bg-primary/20" : "bg-accent/20"} rounded-2xl flex items-center justify-center mb-4 group-hover:${accent === "primary" ? "bg-primary/30" : "bg-accent/30"} transition-smooth`}
      >
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          loading="lazy"
          decoding="async"
          className="h-8 w-8 object-contain"
        />
      </div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

export default function ServicesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">الخدمات والحلول التي نقدمها</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            حلول متكاملة تربط تطبيقاتك وتُشغّل عملياتك بكفاءة عالية، مع إمكانيات تخصيص عميقة ووكلاء ذكاء اصطناعي متقدمين.
          </p>
        </div>

        {/* حلول التواصل والرسائل */}
        <Category title="حلول التواصل والرسائل">
          <ServiceCard
            imageSrc={chatBotAmico}
            imageAlt="بوتات الدردشة الذكية"
            title="بوتات الدردشة الذكية"
            description="بوتات متقدمة على Telegram و Slack و Discord، مع تكاملات WhatsApp مخصصة لمعالجة الاستفسارات والعمليات التجارية."
            accent="primary"
          />
          <ServiceCard
            imageSrc={mailSent}
            imageAlt="إدارة البريد الإلكتروني"
            title="إدارة البريد الإلكتروني"
            description="تكامل شامل مع Gmail وخدمات البريد لمعالجة الرسائل، تصنيفها، واستخراج البيانات من المرفقات وتحويلها لمهام."
            accent="accent"
          />
          <ServiceCard
            imageSrc={digitalLifestyle}
            imageAlt="وسائل التواصل الاجتماعي"
            title="وسائل التواصل الاجتماعي"
            description="نشر مجدول، مراقبة الإشارات، والردود الذكية على X وغيرها، مع أتمتة للتفاعل."
            accent="primary"
          />
        </Category>

        {/* حلول إدارة البيانات */}
        <Category title="حلول إدارة البيانات">
          <ServiceCard
            imageSrc={dataExtraction}
            imageAlt="جداول البيانات والتقارير"
            title="جداول البيانات والتقارير"
            description="تكامل متقدم مع Google Sheets و Microsoft Excel 365 لتوليد تقارير آلية وتحديث البيانات بشكل ذكي."
            accent="accent"
          />
          <ServiceCard
            imageSrc={businessSolution}
            imageAlt="قواعد البيانات المتنوعة"
            title="قواعد البيانات المتنوعة"
            description="تكامل مع Airtable و Notion و PostgreSQL و MySQL و MongoDB لضمان تدفق سلس وآمن للبيانات."
            accent="primary"
          />
          <ServiceCard
            imageSrc={inSync}
            imageAlt="التخزين السحابي"
            title="التخزين السحابي"
            description="حلول لإدارة الملفات في Google Drive وخدمات التخزين: تنظيم، نسخ احتياطي، ومشاركة مبنية على قواعد."
            accent="accent"
          />
        </Category>

        {/* حلول الذكاء الاصطناعي */}
        <Category title="حلول الذكاء الاصطناعي">
          <ServiceCard
            imageSrc={digitalTransformation}
            imageAlt="نماذج اللغة الكبيرة"
            title="نماذج اللغة الكبيرة"
            description="تكامل مع OpenAI و Google Gemini و Anthropic لبناء قدرات تحليل النصوص، الترجمة، وإنشاء المحتوى."
            accent="primary"
          />
          <ServiceCard
            imageSrc={chatBotRafiki}
            imageAlt="وكلاء الذكاء الاصطناعي"
            title="وكلاء الذكاء الاصطناعي"
            description="وكلاء متخصصون لتلخيص المستندات، تحليل البيانات، والتفاعل الطبيعي مع العملاء بموثوقية عالية."
            accent="accent"
          />
        </Category>

        {/* حلول العمليات التجارية */}
        <Category title="حلول العمليات التجارية">
          <ServiceCard
            imageSrc={customerSurvey}
            imageAlt="إدارة علاقات العملاء (CRM)"
            title="إدارة علاقات العملاء (CRM)"
            description="تكاملات مع HubSpot و Mautic لأتمتة المبيعات، تتبع العملاء المحتملين، وحملات تسويق مخصصة."
            accent="primary"
          />
          <ServiceCard
            imageSrc={scheduleRafiki}
            imageAlt="إدارة المشاريع والمهام"
            title="إدارة المشاريع والمهام"
            description="ربط Notion وأدوات إدارة المشاريع للتخطيط، تتبع التقدم، وإرسال تذكيرات ذكية للفريق."
            accent="accent"
          />
          <ServiceCard
            imageSrc={onlineCalendar}
            imageAlt="إدارة التقويم والمواعيد"
            title="إدارة التقويم والمواعيد"
            description="جدولة مواعيد في Google Calendar، تذكيرات آلية، وربط أنظمة الحجز لتنسيق مواعيد العملاء."
            accent="primary"
          />
        </Category>

        {/* حلول المطورين والتقنية */}
        <Category title="حلول المطورين والتقنية">
          <ServiceCard
            imageSrc={versionControl}
            imageAlt="التحكم في الإصدارات والتطوير"
            title="التحكم في الإصدارات والتطوير"
            description="تكاملات GitHub: PRs تلقائية، اختبارات، ونشر مع تنبيهات فرق التطوير عند الأحداث المهمة."
            accent="accent"
          />
          <ServiceCard
            imageSrc={codingWorkshop}
            imageAlt="طلبات HTTP و Webhooks"
            title="طلبات HTTP و Webhooks"
            description="ربط أي خدمة أو API عبر طلبات HTTP و Webhooks مخصصة لتكاملات غير محدودة."
            accent="primary"
          />
          <ServiceCard
            imageSrc={dataExtraction}
            imageAlt="استعلامات GraphQL"
            title="استعلامات GraphQL"
            description="دعم GraphQL لاستعلامات مرنة وفعالة عبر مصادر متعددة، مع تحسين الأداء وتقليل الاستهلاك."
            accent="accent"
          />
        </Category>
      </div>
    </section>
  );
}
