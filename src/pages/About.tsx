import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const modules = import.meta.glob("../assets/**/*.svg", { eager: true, as: "url" });

const serviceImages = Object.entries(modules).map(([path, url]) => {
  const name = path
    .split("/")
    .pop()
    ?.replace(/\.svg$/, "")
    .replace(/[-_]/g, " ");
  return { name, url } as { name: string; url: string };
});

const About = () => (
  <section className="container mx-auto py-12">
    <h1 className="text-3xl font-bold text-center mb-8">خدماتنا</h1>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {serviceImages.map(({ name, url }) => (
        <Card key={name} className="overflow-hidden">
          <CardContent className="p-4 flex items-center justify-center">
            <img src={url} alt={name} className="object-contain h-40" loading="lazy" decoding="async" />
          </CardContent>
          <CardHeader>
            <CardTitle className="text-center text-base font-medium">{name}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  </section>
);

export default About;
