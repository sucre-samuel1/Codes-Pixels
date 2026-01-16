import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Create mailto link
    const mailtoLink = `mailto:akinboroo@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Open email client
    window.location.href = mailtoLink;

    // Simulate submission success
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const steps = [
    {
      id: 1,
      title: "Send Message",
      description: "Fill out the form and your email client will open with your message",
      color: "purple"
    },
    {
      id: 2,
      title: "Initial Response",
      description: "I'll review your message and get back to you within 24 hours",
      color: "blue"
    },
    {
      id: 3,
      title: "Project Discussion",
      description: "We'll schedule a call to discuss your project in detail",
      color: "green"
    }
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(activeStep === stepId ? null : stepId);
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string }> = {
      purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600' }
    };
    return colorMap[color] || colorMap.purple;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(120deg, #a78bfa 0%, #60a5fa 100%)',
          filter: 'blur(150px)'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                I'm always interested in new opportunities and exciting projects.
                Whether you need a website, web application, or product strategy consultation,
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a
                    href="mailto:akinboroo@gmail.com"
                    className="text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    akinboroo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a
                    href="tel:+2349024129891"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    (+234) 90-2412-9891
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Available for remote work worldwide</p>
                </div>
              </div>
            </div>

            {/* Service Highlights */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Response Time</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  Typically respond within 24 hours
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  Free initial consultation
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  Detailed project proposal
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-4">
                  Thank you for reaching out. Your email client should open automatically.
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  If it doesn't open, please send your message to: akinboroo@gmail.com
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Web Development</option>
                      <option value="billing">Mobile Development</option>
                      <option value="feedback">Product Strategy & Roadmapping</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, timeline, and budget..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Opening Email...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* What Happens Next Section - Updated with interactive numbers */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
            <p className="text-gray-600 mb-8">Click on each number to reveal the next step</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => {
                const colorClasses = getColorClasses(step.color);
                const isActive = activeStep === step.id;

                return (
                  <div
                    key={step.id}
                    className="text-center cursor-pointer"
                    onClick={() => handleStepClick(step.id)}
                  >
                    <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
                      <span className={`text-2xl font-bold ${colorClasses.text}`}>
                        {step.id}
                      </span>
                    </div>

                    <div className={`transition-all duration-500 overflow-hidden ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}