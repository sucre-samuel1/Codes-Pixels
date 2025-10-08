import React from 'react';
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon } from 'lucide-react';

export function Projects() {
 const featuredProjects = [
    {
      id: 1,
      title: 'LSSB Portal',
      description: 'A comprehensive portal system for students and staff with dashboard, course management, and administrative tools.',
      image: 'https://portal.lagosscholarship.org/asset/homeImage.png',
      technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
      category: 'Web Portal',
      liveUrl: 'https://portal.lagosscholarship.org/login',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'LASUCOM HRM',
      description: 'Human Resource Management system for managing employee data, leave requests, performance reviews, and payroll.',
      image: 'https://hrm.lasucom.edu.ng/static/media/logo(small).824a602c86d258e8f1100d0322356515.svg',
      technologies: ['React', 'JavaScript', 'Context API', 'Material UI'],
      category: 'Enterprise System',
      liveUrl: 'https://hrm.lasucom.edu.ng/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'PAYLODE Payment Gateway',
      description: 'Paylode Payment Gateway is a secure and seamless payment gateway that enables businesses to accept cards, bank transfers, USSD, and mobile money with ease, offering fast transactions and real-time reporting.',
      image: 'https://paylodeservices.com/seamlesss.png',
      technologies: ['React', 'JavaScript', 'Context API', 'Material UI'],
      category: 'Fintech',
      liveUrl: 'https://paylodeservices.com/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Noas Delight Limited',
      description: 'Noas Delight is a proudly local food brand offering mouthwatering dishes and snacks that celebrate authentic taste and homemade goodness.',
      image: 'https://www.noasdelightsltd.com/images/1.png',
      technologies: ['React', 'TypeScript', 'GraphQL', 'Styled Components'],
      category: 'E-commerce',
      liveUrl: 'https://www.noasdelightsltd.com/',
      githubUrl: '#',
      featured: true
    }
  ];
//   const otherProjects = [
//     {
//       id: 4,
//       title: "Portfolio Website",
//       description: "Modern portfolio website with smooth animations and responsive design.",
//       technologies: ["Next.js", "Framer Motion", "CSS3"],
//       githubUrl: "#"
//     },
//     {
//       id: 5,
//       title: "Weather Dashboard",
//       description: "Real-time weather application with location-based forecasts and interactive maps.",
//       technologies: ["JavaScript", "API Integration", "Chart.js"],
//       githubUrl: "#"
//     },
//     {
//       id: 6,
//       title: "Blog CMS",
//       description: "Content management system for bloggers with markdown support and SEO optimization.",
//       technologies: ["PHP", "MySQL", "Tailwind CSS"],
//       githubUrl: "#"
//     }
//   ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest work and see how we've helped businesses transform
            their ideas into successful digital products
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm"
                  >
                    Live Demo
                    <ExternalLinkIcon size={16} className="ml-1" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium text-sm"
                  >
                    Code
                    <GithubIcon size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {/* <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white text-gray-700 px-2 py-1 rounded text-xs border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm"
                >
                  View Code
                  <GithubIcon size={14} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. We'll help you create
              a digital solution that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center justify-center font-medium"
              >
                Start a Project
                <ArrowRightIcon size={20} className="ml-2" />
              </a>
              <a
                href="#services"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors inline-flex items-center justify-center font-medium"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}