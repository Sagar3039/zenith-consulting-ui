import { ArrowUpRight, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Tech Startup Scaling",
      industry: "Technology",
      challenge: "Rapid growth management and organizational structure",
      solution: "Implemented scalable processes and leadership framework",
      results: [
        { icon: TrendingUp, metric: "300%", description: "Revenue Growth" },
        { icon: Users, metric: "150", description: "Team Members" },
        { icon: DollarSign, metric: "$5M", description: "Funding Raised" }
      ],
      timeline: "6 months",
      description: "Helped a promising tech startup navigate hypergrowth challenges by establishing robust operational frameworks, implementing scalable hiring processes, and creating a leadership structure that supports sustainable expansion.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Retail Chain Expansion",
      industry: "Retail",
      challenge: "Multi-location franchise development",
      solution: "Developed comprehensive franchise model and training systems",
      results: [
        { icon: TrendingUp, metric: "25", description: "New Locations" },
        { icon: Users, metric: "500+", description: "Employees Trained" },
        { icon: DollarSign, metric: "40%", description: "Profit Increase" }
      ],
      timeline: "12 months",
      description: "Transformed a successful local retail business into a thriving franchise operation, creating standardized processes, comprehensive training programs, and sustainable growth strategies.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Manufacturing Optimization",
      industry: "Manufacturing",
      challenge: "Process efficiency and digital transformation",
      solution: "Implemented lean methodologies and digital automation",
      results: [
        { icon: TrendingUp, metric: "45%", description: "Efficiency Gain" },
        { icon: Users, metric: "200", description: "Jobs Created" },
        { icon: DollarSign, metric: "$2M", description: "Cost Savings" }
      ],
      timeline: "9 months",
      description: "Modernized a traditional manufacturing operation through digital transformation, lean process implementation, and strategic workforce development.",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Success <span className="text-gradient">Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real businesses. Discover how we've helped companies 
            achieve transformational growth and operational excellence.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.title} className="card-elevated animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {study.timeline}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {study.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {study.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Challenge</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Solution</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, idx) => {
                      const IconComponent = result.icon;
                      return (
                        <div key={idx} className="text-center p-4 bg-secondary rounded-lg">
                          <IconComponent className="w-6 h-6 text-accent mx-auto mb-2" />
                          <div className="text-2xl font-bold text-foreground">
                            {result.metric}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {result.description}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <button className="btn-secondary inline-flex items-center space-x-2 group">
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>

                {/* Image */}
                <div className="lg:order-first">
                  <div className="aspect-[4/3] bg-gradient-secondary rounded-xl overflow-hidden">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="card-elevated max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join the ranks of successful businesses that have transformed their operations 
              and achieved remarkable growth with our strategic guidance.
            </p>
            <button className="btn-hero">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;