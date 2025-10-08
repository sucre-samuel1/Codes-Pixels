import { RocketIcon, ClockIcon, CodeIcon, MapPinIcon, ShieldIcon, ZapIcon } from 'lucide-react';

export function Delivery() {
  return (
    <section id="delivery" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Global Web Development Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We deliver high-quality web solutions worldwide with our premium development service, 
              ensuring your project is built to perfection and deployed successfully.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <RocketIcon size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Global Project Delivery
                  </h3>
                  <p className="mt-1 text-gray-600">
                    We work with clients worldwide across all timezones, delivering 
                    robust web applications and digital solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ClockIcon size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Agile Development Sprints
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Structured development cycles with regular updates, demos, 
                    and flexible timelines to meet your business needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CodeIcon size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Clean Code & Best Practices
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Production-ready code following industry standards, with 
                    comprehensive documentation and scalability in mind.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ShieldIcon size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Secure Deployment
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Secure hosting setup with SSL, regular backups, and 
                    performance optimization for your peace of mind.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPinIcon size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Real-Time Project Tracking
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Monitor project progress through dedicated dashboards with 
                    live updates and milestone tracking.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ZapIcon size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Performance Optimized
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Lightning-fast applications optimized for speed, SEO, and 
                    exceptional user experience across all devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md">
                <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-700">
              Start your Project
            </a>
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
              alt="Developer working on code with multiple screens" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold text-gray-900">Fast Delivery</span>
              </div>
              <p className="text-sm text-gray-600 mt-2 max-w-xs">
                Projects typically delivered in 2-6 weeks depending on complexity
              </p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-lg font-semibold text-gray-900">24/7 Support</span>
              </div>
              <p className="text-sm text-gray-600 mt-2 max-w-xs">
                Ongoing maintenance and technical support available
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600 mt-2">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600">15+</div>
            <div className="text-gray-600 mt-2">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600">99%</div>
            <div className="text-gray-600 mt-2">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600 mt-2">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}