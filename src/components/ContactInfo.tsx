import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <aside className="mb-10 grid gap-4 sm:grid-cols-2">
      <div className="p-4 rounded-xl bg-gradient-feature border border-border/50">
        <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><span className="font-medium">البريد:</span><a href="mailto:info@nibras-altaqnia.com" className="hover:underline">info@nibras-altaqnia.com</a></div>
      </div>
      <div className="p-4 rounded-xl bg-gradient-feature border border-border/50">
        <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-accent" /><span className="font-medium">الهاتف:</span><a href="tel:+1234567890" className="hover:underline">+1234567890</a></div>
      </div>
      <div className="p-4 rounded-xl bg-gradient-feature border border-border/50">
        <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /><span className="font-medium">العنوان:</span><span>[عنوان شركة نبراس التقنية]</span></div>
      </div>
      <div className="p-4 rounded-xl bg-gradient-feature border border-border/50">
        <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-accent" /><span className="font-medium">ساعات العمل:</span><span>الأحد - الخميس، 9:00 ص - 6:00 م</span></div>
      </div>
    </aside>
  );
}
