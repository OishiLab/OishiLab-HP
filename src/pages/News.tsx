import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import newsDataRaw from '../data/news.json';
import type { NewsItem } from '../types';

const newsData: NewsItem[] = newsDataRaw as NewsItem[];

const News: React.FC = () => {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">All News</h1>
          <p className="text-lg text-slate-600">
            Latest updates and announcements from Oishi Lab.
          </p>
        </div>

        <div className="space-y-6">
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
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span>{news.title}</span>
                )}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;

