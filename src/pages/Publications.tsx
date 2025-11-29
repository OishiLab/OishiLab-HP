import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import publicationsDataRaw from '../data/publications.json';
import type { PublicationYear } from '../types';

const publicationsData: PublicationYear[] = publicationsDataRaw as PublicationYear[];

const Publications: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Publications</h1>
          <p className="text-lg text-slate-600">
            Selected publications in top-tier conferences and journals.
          </p>
        </div>

        <div className="space-y-12">
          {publicationsData.map((group) => (
            <div key={group.year} className="relative">
              <div className="sticky top-20 z-10 bg-slate-50/95 backdrop-blur py-2 mb-4 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                  <span className="bg-primary text-white px-3 py-1 rounded-lg text-lg">{group.year}</span>
                </h2>
              </div>
              
              <ul className="space-y-6 ml-4 md:ml-12 border-l-2 border-slate-200 pl-6 md:pl-8 py-2">
                {group.papers.map((paper, index) => (
                  <li key={index} className="relative group">
                    {/* Dot connector */}
                    <div className="absolute -left-[31px] md:-left-[39px] top-2 h-4 w-4 rounded-full border-4 border-white bg-slate-300 group-hover:bg-accent transition-colors"></div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                        {paper.link ? (
                          <a 
                            href={paper.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-900 hover:text-accent flex items-center gap-2"
                          >
                            {paper.title}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          <span className="text-slate-900">{paper.title}</span>
                        )}
                      </h3>
                      <p className="text-slate-600 mb-2 text-sm">
                        {paper.authors}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-sm mb-2">
                        {paper.date && (
                          <span className="flex items-center gap-1 text-slate-500 text-xs">
                            <Calendar className="h-3 w-3" /> {paper.date}
                          </span>
                        )}
                        <span className="font-medium text-slate-800 italic">
                          {paper["journal/conference"]}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        {paper.award && (
                          <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-semibold">
                            <Award className="h-3 w-3" /> {paper.award}
                          </span>
                        )}
                        {paper.link && (
                          <a 
                            href={paper.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-auto flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-medium"
                          >
                            <ExternalLink className="h-3 w-3" /> View Paper
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
