import { Code2, Server, Workflow, Lightbulb } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Web Development",
    description:
      "Web applications built with React, Next.js, and TypeScript, from landing pages to full-scale platforms.",
    href: "/contact?service=Web+Development",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description:
      "Backend systems in Python, Django, and PostgreSQL that handle your business logic, data, and integrations, including legacy code that has to keep running.",
    href: "/contact?service=Backend+Development",
    icon: Server,
  },
  {
    title: "Systems Integration",
    description:
      "CRMs, analytics, and third-party APIs connected into one workflow, so data moves automatically and manual entry disappears.",
    href: "/contact?service=Systems+Integration",
    icon: Workflow,
  },
  {
    title: "Technology Consulting",
    description:
      "An outside view on your stack and architecture, weighing speed, cost, and long-term maintainability.",
    href: "/contact?service=Technology+Consulting",
    icon: Lightbulb,
  },
];

const Services = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-14">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            How I can help
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every engagement starts by understanding what success looks like for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
