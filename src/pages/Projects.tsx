import React, { useState } from 'react';
import { X } from 'lucide-react';
import projectsDataRaw from '../data/projects.json';
import type { ProjectItem } from '../types';

const projects: ProjectItem[] = projectsDataRaw as ProjectItem[];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const openModal = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Research Projects</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our lab focuses on cutting-edge research in medical imaging, neuroimaging, and computational neuroscience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
                {/* Project Image */}
                <div className="h-48 bg-slate-200 w-full flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-slate-400 font-medium">Project Image Placeholder</span>
                  )}
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <button 
                    onClick={() => openModal(project)}
                    className="mt-auto text-accent font-semibold hover:text-sky-600 transition-colors text-sm self-start"
                  >
                    Read More &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl w-full max-w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h2>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              {selectedProject.image && (
                <div className="mb-6 rounded-lg overflow-hidden flex justify-center">
                  <img src={selectedProject.image} alt={selectedProject.title} className="max-w-2xl w-full h-auto" />
                </div>
              )}
              
              <div className="mb-6">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wide">
                  {selectedProject.category}
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Overview</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                
                {selectedProject.details && (
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Details</h3>
                    <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                      {selectedProject.details}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
