import React from 'react';
import { CodeIcon, PaletteIcon, SmartphoneIcon } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Web Development Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From responsive websites to complex web applications, we provide
            cutting-edge web solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Development */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <PaletteIcon size={24} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Frontend Development
            </h3>
            <p className="mt-2 text-gray-600">
              Create stunning, responsive user interfaces with modern frameworks
              that provide exceptional user experiences across all devices.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                <span>React, Vue, Angular</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                <span>Responsive Design</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                <span>UI/UX Optimization</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              Get Started
            </a>
          </div>

          {/* Backend Development */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z" />
                <path d="M12 22v-6.5" />
                <path d="M22 8.5l-10 7-10-7" />
                <path d="M2 15.5l10-7 10 7" />
                <path d="M12 2v6.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Product Strategy & Roadmapping
            </h3>
            <p className="mt-2 text-gray-600">
              Comprehensive product vision development, market analysis, and strategic roadmaps
              that align business objectives with user needs and market opportunities.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                <span>Product Vision & Strategy</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                <span>Market Research & Analysis</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                <span>Roadmap Planning</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700 transition-colors inline-flex items-center"
            >
             Learn More
            </a>
          </div>

          {/* Mobile Development */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <SmartphoneIcon size={24} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Mobile Development
            </h3>
            <p className="mt-2 text-gray-600">
              Cross-platform mobile applications that deliver native-like
              performance and seamless user experiences on iOS and Android.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                <span>React Native & Flutter</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                <span>Progressive Web Apps</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                <span>App Store Deployment</span>
              </li>
            </ul>
           <a
              href="#contact"
              className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              Build your App
            </a>
          </div>
        </div>

        {/* Additional Services Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* E-commerce Development */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              E-commerce Solutions
            </h3>
            <p className="text-gray-600 text-sm">
              Custom online stores with secure payment gateways, inventory management,
              and seamless shopping experiences.
            </p>
          </div>

          {/* Maintenance & Support */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Maintenance & Support
            </h3>
            <p className="text-gray-600 text-sm">
              Ongoing website maintenance, security updates, performance
              optimization, and technical support services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}