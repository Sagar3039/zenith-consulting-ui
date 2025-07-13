import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Award, Zap, Target, Building2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Building2,
      title: "Business Strategy",
      description: "Strategic planning and market analysis to drive sustainable growth",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Growth Acceleration",
      description: "Data-driven approaches to accelerate revenue and expansion",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Team Development",
      description: "Build high-performing teams and leadership capabilities",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Market Expansion",
      description: "Strategic guidance for entering new markets and scaling operations",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Digital Innovation",
      description: "Technology solutions to modernize and streamline operations",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Franchise Development",
      description: "End-to-end support for creating scalable franchise systems",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Zenith Consulting transformed our startup from a struggling team to a $10M company. Their strategic guidance was invaluable.",
      rating: 5,
      company: "TechStart Inc."
    },
    {
      name: "Michael Chen",
      role: "Founder, RetailChain",
      content: "The franchise development program exceeded our expectations. We went from 1 location to 25 in just 18 months.",
      rating: 5,
      company: "RetailChain"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, Manufacturing Co.",
      content: "Their digital transformation strategy increased our efficiency by 45% and saved us over $2M annually.",
      rating: 5,
      company: "Manufacturing Co."
    }
  ];

  const logos = [
    "TechStart", "RetailChain", "Manufacturing Co.", "GlobalCorp", "InnovateNow", "GrowthLabs"
  ];

  const stats = [
    { number: "500+", label: "Businesses Transformed" },
    { number: "98%", label: "Client Success Rate" },
    { number: "$50M+", label: "Revenue Generated" },
    { number: "50+", label: "Industry Awards" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-hero mb-8 leading-tight">
              Transform Your Business 
              <br />
              <span className="text-gradient bg-gradient-to-r from-accent-light to-white bg-clip-text text-transparent">
                Achieve Excellence
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '300ms'}}>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Strategic consulting services that help businesses grow, expand, and franchise. 
              Unlock your potential with expert guidance and proven methodologies.
            </p>
          </div>

          <div className="animate-fade-in flex flex-col sm:flex-row gap-6 justify-center items-center" style={{animationDelay: '600ms'}}>
            <Button asChild className="btn-hero text-lg px-10 py-4">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-primary text-lg px-10 py-4">
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in" style={{animationDelay: '900ms'}}>
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your business growth and operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.title} 
                  className="card-service animate-fade-in"
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <Button asChild variant="outline" className="btn-secondary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                    <Link to="/services">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Trusted by Industry Leaders
            </h3>
            <p className="text-muted-foreground">
              Join hundreds of successful businesses that have transformed with our guidance
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-16">
              {[...logos, ...logos].map((logo, index) => (
                <div 
                  key={`${logo}-${index}`}
                  className="flex-shrink-0 h-12 flex items-center justify-center text-2xl font-bold text-muted-foreground/60 hover:text-primary transition-colors"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Client <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-elevated text-center p-12 animate-fade-in">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl text-foreground mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-foreground text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="text-sm text-accent mt-1">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Join hundreds of successful businesses that have achieved remarkable growth 
              with our strategic consulting services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-4 shadow-glow">
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4">
                <Link to="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20 animate-fade-in" style={{animationDelay: '300ms'}}>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-accent-light" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-white/80">Track record of delivering measurable business outcomes</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-accent-light" />
              <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
              <p className="text-white/80">Deep knowledge across multiple industries and markets</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-accent-light" />
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p className="text-white/80">Ongoing partnership and support throughout your journey</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
