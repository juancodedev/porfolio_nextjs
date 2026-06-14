"use client";

import { motion } from "framer-motion";
import { Code2, Server, Workflow, Lightbulb } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Your online presence is your hardest-working salesperson — 24/7, never off the clock. I build fast, accessible, and responsive web applications that turn visitors into customers. From landing pages to full-scale platforms, every pixel and interaction is crafted to drive real business results, not just look good in a portfolio.",
    href: "/contact?service=Web+Development",
    icon: Code2,
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Great user experiences start with invisible infrastructure. I design and build robust, scalable backend systems that handle your business logic, data, and integrations — so your app stays fast and reliable as you grow. Think of it as the engine room: you never see it, but you feel it every time something just works.",
    href: "/contact?service=Backend+Development",
    icon: Server,
  },
  {
    num: "03",
    title: "Systems Integration",
    description:
      "Your tools should talk to each other — not to your team. I connect CRMs, payment gateways, analytics, and third-party APIs into a single cohesive workflow. The result: data flows automatically, manual entry disappears, and your team spends time on decisions, not data entry.",
    href: "/contact?service=Systems+Integration",
    icon: Workflow,
  },
  {
    num: "04",
    title: "Technology Consulting",
    description:
      "Choosing the right tech stack can make or break a project before a single line of code is written. I work alongside your team to evaluate tradeoffs, validate architecture decisions, and chart a pragmatic path forward — one that balances speed, cost, and long-term maintainability. No hype, no vendor lock-in, just honest engineering judgment.",
    href: "/contact?service=Technology+Consulting",
    icon: Lightbulb,
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col py-12"
    >
      <div className="container mx-auto max-w-[1200px] px-4 md:px-8">
        {/* Section intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            How I can help
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Technology is the means — your business goals are the end. Every
            engagement starts by understanding what success looks like for you,
            and then building the right solution to get there. Together.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.num}
              num={service.num}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
