import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, FlaskConical, ExternalLink } from 'lucide-react';
import newsDataRaw from '../data/news.json';
import type { NewsItem } from '../types';

// Cast JSON data to strongly typed interface
const newsData: NewsItem[] = newsDataRaw as NewsItem[];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/logo/top.png)` }}
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-slate-900/85"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight !text-white drop-shadow-2xl">
              Oishi Lab
            </h1>
            <p className="text-xl text-slate-100 mb-8 leading-relaxed drop-shadow-md">
              We conduct cutting-edge research on medical imaging and neuroimaging, 
              advancing brain connectivity analysis and neurological disorder diagnosis through innovative computational methods.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link 
                to="/publications" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                View Our Publications <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/30 shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8 border-b-2 border-blue-200 pb-4">
            <h2 className="text-3xl font-bold text-slate-900 m-0">Latest News</h2>
            <Link to="/news" className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">View all news &rarr;</Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {newsData.map((news, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center text-sm text-slate-600 font-medium gap-1">
                    <Calendar className="h-4 w-4 text-blue-500" /> {news.date}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                    news.category === 'Publication' 
                      ? 'bg-blue-500 text-white' 
                      : news.category === 'Project'
                      ? 'bg-green-500 text-white'
                      : 'bg-purple-500 text-white'
                  }`}>
                    {news.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {news.link ? (
                    <a 
                      href={news.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-900 hover:text-blue-600 flex items-center gap-2 transition-colors"
                    >
                      {news.title}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <span>{news.title}</span>
                  )}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Preview */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Research Focus</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Computer Vision', desc: 'Deep learning approaches for image understanding and restoration.', iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
              { title: 'Medical Imaging', desc: 'AI-assisted diagnosis and medical image analysis.', iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
              { title: 'Machine Learning', desc: 'Advanced machine learning algorithms and applications.', iconBg: 'bg-green-100', iconColor: 'text-green-600' },
            ].map((area, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md border-2 border-slate-200 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 hover:border-blue-300">
                <div className={`h-16 w-16 ${area.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 ${area.iconColor}`}>
                  <FlaskConical className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{area.title}</h3>
                <p className="text-slate-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
