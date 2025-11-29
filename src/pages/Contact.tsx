import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600">
            Get in touch with us for research collaborations or student applications.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-slate-50 p-12 rounded-2xl border border-slate-100 text-center">
            <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Mail className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Email</h2>
            <a 
              href="mailto:koishi2@jhmi.edu" 
              className="text-2xl text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              koishi2@jhmi.edu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
