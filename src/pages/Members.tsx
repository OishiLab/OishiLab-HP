import React from 'react';
import { ExternalLink } from 'lucide-react';
import membersData from '../data/members.json';

const Members: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { pi, members } = membersData as any;

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Team</h1>
          <p className="text-lg text-slate-600">
            Meet the researchers and students behind our innovations.
          </p>
        </div>

        {/* Professor Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-accent pl-4">Principal Investigator</h2>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {pi && pi.map((prof: any, index: number) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-8">
              <div className="w-full md:w-1/5 aspect-[3/4] bg-slate-200 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                {prof.photo ? (
                  <img src={prof.photo.startsWith('/') ? `${import.meta.env.BASE_URL}${prof.photo.slice(1)}` : `${import.meta.env.BASE_URL}${prof.photo}`} alt={prof.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-slate-400">Professor Photo</span>
                )}
              </div>
              <div className="flex-grow">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{prof.name}</h3>
                <p className="text-accent font-medium mb-4">{prof.role}</p>
                {prof.bio && (
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {prof.bio}
                  </p>
                )}
                {prof.researchAreas && prof.email && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-500 mb-6">
                    {prof.researchAreas && (
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-700">Research Areas:</span>
                        <span>{prof.researchAreas.join(', ')}</span>
                      </div>
                    )}
                    {prof.email && (
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-700">Contact:</span>
                        <span>{prof.email}</span>
                      </div>
                    )}
                  </div>
                )}
                {prof.publications && prof.publications.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-bold text-slate-700 mb-2 text-sm">Publications:</h4>
                    <div className="space-y-2">
                      {prof.publications.map((pub: any, idx: number) => (
                        <a
                          key={idx}
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-2"
                        >
                          <span>{pub.title}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Members Grid */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-accent pl-4">Members</h2>
          
          {members && members.length > 0 && (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {members.map((member: any, i: number) => (
                  <div key={i} className="group text-center">
                    <div className="aspect-square bg-slate-100 rounded-full mb-4 mx-auto overflow-hidden border-2 border-transparent group-hover:border-accent transition-colors w-40 h-40 flex items-center justify-center">
                      {member.photo ? (
                         <img src={member.photo.startsWith('/') ? `${import.meta.env.BASE_URL}${member.photo.slice(1)}` : `${import.meta.env.BASE_URL}${member.photo}`} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xs text-slate-400">Photo</span>
                      )}
                    </div>
                    <h4 className="font-bold text-slate-900">{member.name}</h4>
                    <p className="text-sm text-slate-500 mb-3">{member.role}</p>
                    {member.publications && member.publications.length > 0 && (
                      <div className="mt-3 space-y-1">
                        {member.publications.map((pub: any, idx: number) => (
                          <a
                            key={idx}
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1"
                          >
                            <span className="truncate">{pub.title}</span>
                            <ExternalLink className="h-3 w-3 flex-shrink-0" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Members;
