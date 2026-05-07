import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import blogRetail from '../assets/blog_retail.png';
import blogRestaurant from '../assets/blog_restaurant.png';
import blogLoyalty from '../assets/blog_loyalty.png';

const blogs = [
  {
    id: 1,
    title: "How to Choose the Right POS System for Your Retail Business",
    excerpt: "Selecting the perfect Point of Sale system can be overwhelming. Discover the key features you need to look for...",
    date: "May 12, 2024",
    author: "Admin",
    image: blogRetail,
    category: "Retail"
  },
  {
    id: 2,
    title: "The Future of Restaurant Management: Trends to Watch in 2024",
    excerpt: "From AI-driven ordering to integrated delivery systems, explore how technology is reshaping the dining experience...",
    date: "May 15, 2024",
    author: "Tahir Farman",
    image: blogRestaurant,
    category: "Restaurant"
  },
  {
    id: 3,
    title: "Boosting Your Sales with Loyalty Programs and Gift Cards",
    excerpt: "Learn how to keep your customers coming back with effective loyalty strategies built directly into your G POS system...",
    date: "May 20, 2024",
    author: "Team GPos",
    image: blogLoyalty,
    category: "Business"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="blog">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-navy font-bold tracking-widest uppercase text-sm mb-3">Our Blog</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary-navy">
            Latest Insights & News
          </h3>
          <p className="mt-4 text-brand-textSecondary text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends in POS technology and business management strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border border-navy-600 border-3 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-navy text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-xs text-brand-textMuted mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    {blog.author}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-primary-navy/80 transition-colors">
                  {blog.title}
                </h4>

                <p className="text-brand-textSecondary text-sm leading-relaxed mb-6 flex-grow">
                  {blog.excerpt}
                </p>

                <div className="border-t border-gray-50 mt-auto">
                  <button className="flex items-center text-primary-navy font-bold text-sm group/btn">
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-secondary">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
