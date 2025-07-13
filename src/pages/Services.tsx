import { Building2, TrendingUp, Users, Target, Briefcase, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Business Strategy",
      description: "Comprehensive strategic planning to align your business goals with market opportunities and drive sustainable growth.",
      features: ["Market Analysis", "Strategic Planning", "Competitive Intelligence", "Growth Roadmaps"]
    },
    {
      icon: TrendingUp,
      title: "Growth Acceleration",
      description: "Data-driven approaches to accelerate your business growth through optimized processes and strategic initiatives.",
      features: ["Revenue Optimization", "Process Improvement", "Digital Transformation", "Performance Metrics"]
    },
    {
      icon: Users,
      title: "Organizational Development",
      description: "Build high-performing teams and create organizational structures that support your business objectives.",
      features: ["Team Building", "Leadership Development", "Culture Transformation", "Change Management"]
    },
    {
      icon: Target,
      title: "Market Expansion",
      description: "Strategic guidance for entering new markets, launching products, and scaling your business operations.",
      features: ["Market Research", "Entry Strategy", "Risk Assessment", "Launch Planning"]
    },
    {
      icon: Briefcase,
      title: "Franchise Development",
      description: "End-to-end support for franchising your business model and creating scalable franchise systems.",
      features: ["Franchise Modeling", "Legal Framework", "Training Systems", "Brand Standards"]
    },
    {
      icon: Zap,
      title: "Digital Innovation",
      description: "Leverage technology and digital solutions to modernize operations and enhance customer experiences.",
      features: ["Technology Strategy", "Digital Tools", "Automation", "Customer Experience"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive consulting solutions designed to transform your business, 
            accelerate growth, and achieve sustainable success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={service.title} className="card-service animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button className="w-full btn-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="card-elevated max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how our services can help you achieve your business goals 
              and unlock new opportunities for growth.
            </p>
            <button className="btn-hero">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;