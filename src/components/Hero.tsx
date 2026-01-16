import React from 'react';
import { ArrowRight, Code, Sparkles, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <Sparkles size={14} className="text-purple-600" />
              <span className="text-xs font-semibold text-purple-700 uppercase tracking-wide">
                Available for new projects
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6 font-display">
              We craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">digital</span> experiences that matter
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Transform your vision into reality with premium web development solutions.
              We build scalable, high-performance applications tailored to your business goals.
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 hover:-translate-y-1"
              >
                Start a Project
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
              >
                <Code size={18} className="mr-2 text-purple-600" />
                View Projects
              </a>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-500">
              {[
                "Modern Tech Stack",
                "Responsive Design",
                "SEO Optimized"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px] lg:max-w-none">
              {/* Abstract decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-3xl transform rotate-3 scale-105" />
              <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                  alt="Web development workspace"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Floating cards */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Project Stats</p>
                      <p className="text-xs text-gray-500">Last 30 days</p>
                    </div>
                    <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                      +12.5%
                    </div>
                  </div>
                  <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}