const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">Zenith Consulting</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering businesses to reach their peak potential through strategic consulting, 
            innovative solutions, and transformative growth strategies.
          </p>
        </div>

        {/* Company Story Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="card-elevated animate-fade-in">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Founded with Vision</h3>
                  <p className="text-muted-foreground">
                    Established with a mission to bridge the gap between ambitious business goals 
                    and strategic execution, helping companies unlock their true potential.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated animate-fade-in">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
                  <p className="text-muted-foreground">
                    Developed deep expertise across multiple industries, creating tailored solutions 
                    that drive sustainable growth and competitive advantage.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated animate-fade-in">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Innovation Leadership</h3>
                  <p className="text-muted-foreground">
                    Leading the industry with innovative approaches to business transformation, 
                    digital adoption, and organizational excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground">
              Industry experts dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="card-elevated text-center group">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-xl font-semibold mb-2">Team Member {member}</h3>
                <p className="text-muted-foreground mb-4">Senior Consultant</p>
                <p className="text-sm text-muted-foreground">
                  Expert in strategic planning and business transformation with 10+ years of experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;