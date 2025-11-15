import React, { useState } from 'react';
import { Calendar, Code, ShoppingCart, Cloud, Mail, ExternalLink, Users, Zap, X } from 'lucide-react';

export function RateCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappNumber = "2349024129891";
  const whatsappMessage = "Hello! I'm interested in getting a quote for your web development services. Can we discuss my project requirements?";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Landing Page / Portfolio Website",
      price: "$500 – $1,200",
      features: ["Responsive design", "SEO optimized", "Contact forms", "Basic animations"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Corporate Multi-Page Website",
      price: "$1,200 – $2,500",
      features: ["5-10 pages", "Content management", "Team sections", "Blog integration"]
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-Commerce Website",
      price: "$2,500 – $6,000",
      features: ["Product catalog", "Shopping cart", "Payment integration", "Inventory management"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "SaaS Web App",
      price: "$5,000 – $10,000+",
      features: ["Custom dashboards", "User authentication", "API integration", "Admin panel"]
    }
  ];

  const addOns = [
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Hosting & Deployment Setup",
      price: "$100 – $300",
      description: "Complete deployment to your preferred platform"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Ongoing Maintenance & Support",
      price: "$150 – $500/month",
      description: "Regular updates, security patches, and technical support"
    }
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Centered Rates Button */}
      <div className="flex justify-center">
        <button
          onClick={openModal}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
        >
          Rates
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="bg-white rounded-2xl shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl z-10">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-900">Service Rates & Packages</h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>

              {/* Skills Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  React.js
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  JavaScript
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  TypeScript
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                  Node.js
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Daily Rates Card */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Daily Rates</h2>

                    <div className="space-y-6">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-lg font-semibold text-gray-900">Standard Development Day</h3>
                        <p className="text-2xl font-bold text-blue-600 mt-1">$200 – $350/day</p>
                        <p className="text-gray-500 text-sm mt-1">8 hours of development work</p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4">
                        <h3 className="text-lg font-semibold text-gray-900">Dedicated Sprint</h3>
                        <p className="text-2xl font-bold text-green-600 mt-1">$1,000 – $1,500/week</p>
                        <p className="text-gray-500 text-sm mt-1">5 days/week full commitment</p>
                      </div>
                    </div>

                    <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Agile development methodology</li>
                        <li>• Daily progress updates</li>
                        <li>• Code reviews and best practices</li>
                        <li>• Product management insights</li>
                      </ul>
                    </div>

                    {/* WhatsApp CTA in Daily Rates */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-6 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>

                {/* Project-Based Rates */}
                <div className="lg:col-span-2">
                  <div className="bg-green-50 rounded-2xl shadow-lg p-8 border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Project-Based Rates</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {services.map((service, index) => (
                        <div key={index} className="border border-gray-300 rounded-xl p-6 hover:shadow-md transition-shadow bg-white">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                              {service.icon}
                            </div>
                            <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                          </div>

                          <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>

                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full mt-6 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center"
                          >
                            Get Quote
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add-Ons Section */}
                  <div className="mt-8 bg-green-50 rounded-2xl shadow-lg p-8 border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Add-Ons & Extras</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {addOns.map((addOn, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl p-6 bg-white">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                              {addOn.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{addOn.title}</h3>
                              <p className="text-lg font-bold text-purple-600">{addOn.price}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">{addOn.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Contact Section */}
              <div className="mt-8 bg-green-50 rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Let's discuss your project requirements and create something amazing together.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    Chat with Me
                  </a>

                  <a
                    href="mailto:akinboroo@gmail.com"
                    className="inline-flex items-center px-6 py-3 border border-purple-600 text-gray-700 rounded-lg hover:bg-purple-50 transition-colors font-medium"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me
                  </a>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 rounded-b-2xl">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}