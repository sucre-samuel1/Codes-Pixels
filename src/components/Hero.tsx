import React from 'react';
import { ArrowRightIcon, CodeIcon } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Modern Web Development Solutions for Your Business
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Transform your digital presence with cutting-edge web applications,
                responsive designs, and scalable solutions built with the latest technologies
                by Code&Pixels Development Team.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center"
                >
                  Get Started <ArrowRightIcon size={16} className="ml-2" />
                </a>
                <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center">
                  <a href="#projects" className="flex items-center text-blue-600 hover:text-blue-700">
                    <CodeIcon size={16} className="mr-2" />
                    View Projects
                  </a>
                </button>
              </div>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Responsive Web Design
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Full-Stack Development
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  E-commerce Solutions
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Web development workspace with code editor"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}