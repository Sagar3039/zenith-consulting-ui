import { Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "The Future of Business Consulting: AI, Automation, and Human Expertise",
    excerpt: "Exploring how artificial intelligence and automation are reshaping the consulting landscape while highlighting the irreplaceable value of human insight and strategic thinking.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&crop=center"
  };

  const blogPosts = [
    {
      title: "Building a Scalable Franchise Model: Key Success Factors",
      excerpt: "Essential elements and best practices for creating a franchise system that can grow sustainably across multiple markets.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Franchise Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Digital Transformation in Small to Medium Businesses",
      excerpt: "Practical strategies for SMBs to embrace digital tools and technologies without overwhelming their existing operations.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Digital Strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Market Entry Strategies for Emerging Markets",
      excerpt: "Navigating the complexities of expanding into new geographical markets with calculated risk assessment and strategic planning.",
      author: "David Kumar",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Market Expansion",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Leadership Development in the Modern Workplace",
      excerpt: "Cultivating next-generation leaders who can navigate hybrid work environments and drive organizational excellence.",
      author: "Lisa Wang",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Financial Planning for Business Growth",
      excerpt: "Strategic financial management techniques to support sustainable growth and expansion initiatives.",
      author: "Robert Thompson",
      date: "March 3, 2024",
      readTime: "8 min read",
      category: "Financial Strategy",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Customer Experience Optimization in the Digital Age",
      excerpt: "Leveraging technology and data analytics to create exceptional customer experiences that drive loyalty and growth.",
      author: "Amanda Foster",
      date: "March 1, 2024",
      readTime: "5 min read",
      category: "Customer Experience",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Insights & <span className="text-gradient">Perspectives</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with expert insights, industry trends, and actionable strategies 
            to drive your business forward.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <div className="card-elevated overflow-hidden animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-[16/10] lg:aspect-auto">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                    Featured
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-4">
                    <span>{featuredPost.author}</span>
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <button className="btn-hero self-start group">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={post.title} className="card-elevated group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="aspect-[16/10] mb-6 overflow-hidden rounded-lg">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <div className="card-elevated text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Informed
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights, industry trends, 
              and business strategies delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="btn-hero">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;