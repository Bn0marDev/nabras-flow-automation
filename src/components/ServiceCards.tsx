import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ordersImg from "@/assets/assistants/orders_automation.svg";
import deliveryImg from "@/assets/assistants/delivery_management.svg";
import bookingImg from "@/assets/assistants/booking_system.svg";
import completeImg from "@/assets/assistants/complete_solution.svg";

const services = [
  {
    title: "أتمتة الطلبات والفواتير",
    image: ordersImg,
  },
  {
    title: "إدارة خدمات التوصيل",
    image: deliveryImg,
  },
  {
    title: "نظام الحجوزات",
    image: bookingImg,
  },
  {
    title: "الحل الشامل",
    image: completeImg,
  },
];

export default function ServiceCards() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">خدماتنا الرئيسية</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden hover-scale transition-smooth">
              <img src={service.image} alt={service.title} className="w-full h-64 md:h-80 object-contain p-8" loading="lazy" decoding="async" />
              <CardHeader>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
