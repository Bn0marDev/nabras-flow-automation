import { Card, CardContent } from "@/components/ui/card";
import {
  MessageSquare,
  Mail,
  Share2,
  Table,
  Database,
  Cloud,
  Brain,
  Bot,
  Users,
  ListChecks,
  Calendar,
  GitBranch,
  Link2,
  Braces
} from "lucide-react";

const Category = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <article className="mb-12">
    <h3 className="text-2xl md:text-3xl font-bold mb-6">{title}</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
  </article>
);

const ServiceCard = ({
  icon,
  title,
  description,
  accent = "primary",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: "primary" | "accent";
}) => (
  <Card className="bg-gradient-feature border-border/50 shadow-feature hover:shadow-glow transition-smooth group">
    <CardContent className="p-6">
      <div
        className={`w-14 h-14 ${accent === "primary" ? "bg-primary/20" : "bg-accent/20"} rounded-2xl flex items-center justify-center mb-4 group-hover:${accent === "primary" ? "bg-primary/30" : "bg-accent/30"} transition-smooth`}
      >
        {icon}
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
            icon={<Bot className="h-7 w-7 text-primary" />}
            title="بوتات الدردشة الذكية"
            description="بوتات متقدمة على Telegram و Slack و Discord، مع تكاملات WhatsApp مخصصة لمعالجة الاستفسارات والعمليات التجارية."
            accent="primary"
          />
          <ServiceCard
            icon={<Mail className="h-7 w-7 text-accent" />}
            title="إدارة البريد الإلكتروني"
            description="تكامل شامل مع Gmail وخدمات البريد لمعالجة الرسائل، تصنيفها، واستخراج البيانات من المرفقات وتحويلها لمهام."
            accent="accent"
          />
          <ServiceCard
            icon={<Share2 className="h-7 w-7 text-primary" />}
            title="وسائل التواصل الاجتماعي"
            description="نشر مجدول، مراقبة الإشارات، والردود الذكية على X وغيرها، مع أتمتة للتفاعل."
            accent="primary"
          />
        </Category>

        {/* حلول إدارة البيانات */}
        <Category title="حلول إدارة البيانات">
          <ServiceCard
            icon={<Table className="h-7 w-7 text-accent" />}
            title="جداول البيانات والتقارير"
            description="تكامل متقدم مع Google Sheets و Microsoft Excel 365 لتوليد تقارير آلية وتحديث البيانات بشكل ذكي."
            accent="accent"
          />
          <ServiceCard
            icon={<Database className="h-7 w-7 text-primary" />}
            title="قواعد البيانات المتنوعة"
            description="تكامل مع Airtable و Notion و PostgreSQL و MySQL و MongoDB لضمان تدفق سلس وآمن للبيانات."
            accent="primary"
          />
          <ServiceCard
            icon={<Cloud className="h-7 w-7 text-accent" />}
            title="التخزين السحابي"
            description="حلول لإدارة الملفات في Google Drive وخدمات التخزين: تنظيم، نسخ احتياطي، ومشاركة مبنية على قواعد."
            accent="accent"
          />
        </Category>

        {/* حلول الذكاء الاصطناعي */}
        <Category title="حلول الذكاء الاصطناعي">
          <ServiceCard
            icon={<Brain className="h-7 w-7 text-primary" />}
            title="نماذج اللغة الكبيرة"
            description="تكامل مع OpenAI و Google Gemini و Anthropic لبناء قدرات تحليل النصوص، الترجمة، وإنشاء المحتوى."
            accent="primary"
          />
          <ServiceCard
            icon={<Bot className="h-7 w-7 text-accent" />}
            title="وكلاء الذكاء الاصطناعي"
            description="وكلاء متخصصون لتلخيص المستندات، تحليل البيانات، والتفاعل الطبيعي مع العملاء بموثوقية عالية."
            accent="accent"
          />
        </Category>

        {/* حلول العمليات التجارية */}
        <Category title="حلول العمليات التجارية">
          <ServiceCard
            icon={<Users className="h-7 w-7 text-primary" />}
            title="إدارة علاقات العملاء (CRM)"
            description="تكاملات مع HubSpot و Mautic لأتمتة المبيعات، تتبع العملاء المحتملين، وحملات تسويق مخصصة."
            accent="primary"
          />
          <ServiceCard
            icon={<ListChecks className="h-7 w-7 text-accent" />}
            title="إدارة المشاريع والمهام"
            description="ربط Notion وأدوات إدارة المشاريع للتخطيط، تتبع التقدم، وإرسال تذكيرات ذكية للفريق."
            accent="accent"
          />
          <ServiceCard
            icon={<Calendar className="h-7 w-7 text-primary" />}
            title="إدارة التقويم والمواعيد"
            description="جدولة مواعيد في Google Calendar، تذكيرات آلية، وربط أنظمة الحجز لتنسيق مواعيد العملاء."
            accent="primary"
          />
        </Category>

        {/* حلول المطورين والتقنية */}
        <Category title="حلول المطورين والتقنية">
          <ServiceCard
            icon={<GitBranch className="h-7 w-7 text-accent" />}
            title="التحكم في الإصدارات والتطوير"
            description="تكاملات GitHub: PRs تلقائية، اختبارات، ونشر مع تنبيهات فرق التطوير عند الأحداث المهمة."
            accent="accent"
          />
          <ServiceCard
            icon={<Link2 className="h-7 w-7 text-primary" />}
            title="طلبات HTTP و Webhooks"
            description="ربط أي خدمة أو API عبر طلبات HTTP و Webhooks مخصصة لتكاملات غير محدودة."
            accent="primary"
          />
          <ServiceCard
            icon={<Braces className="h-7 w-7 text-accent" />}
            title="استعلامات GraphQL"
            description="دعم GraphQL لاستعلامات مرنة وفعالة عبر مصادر متعددة، مع تحسين الأداء وتقليل الاستهلاك."
            accent="accent"
          />
        </Category>
      </div>
    </section>
  );
}
