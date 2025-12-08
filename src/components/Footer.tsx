import React, { useState, useEffect } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, InstagramIcon, TwitterIcon, LinkedinIcon, GlobeIcon } from 'lucide-react';

export function Footer() {
  const [userLocation, setUserLocation] = useState('Detecting location...');
  const [locationData, setLocationData] = useState({
    country: '',
    region: '',
    city: '',
    loading: true
  });

  useEffect(() => {
    // Get user's location using browser geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            
            // Reverse geocoding using OpenStreetMap Nominatim
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            
            if (data.address) {
              const { country, state, city, town, village } = data.address;
              const location = `${city || town || village || ''}, ${state || ''}, ${country || ''}`;
              setUserLocation(location);
              setLocationData({
                country: country || '',
                region: state || '',
                city: city || town || village || '',
                loading: false
              });
            }
          } catch (error) {
            setUserLocation('Vancouver, British Columbia');
            setLocationData({ ...locationData, loading: false });
          }
        },
        (error) => {
          // Fallback to IP-based location if geolocation fails or is denied
          getIPLocation();
        }
      );
    } else {
      // Fallback if geolocation is not supported
      getIPLocation();
    }
  }, []);

  const getIPLocation = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      setUserLocation(`${data.city}, ${data.region}, ${data.country_name}`);
      setLocationData({
        country: data.country_name,
        region: data.region,
        city: data.city,
        loading: false
      });
    } catch (error) {
      setUserLocation('Vancouver, British Columbia');
      setLocationData({ ...locationData, loading: false });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              Code&Pixels
            </h3>
            <p className="text-gray-300">
              Crafting cutting-edge digital experiences with modern technologies.
              From responsive websites to complex web applications.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.linkedin.com/in/samuelakinboro/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://www.instagram.com/sucre_papii?igsh=cWszZTR2NWY4NzA0&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                <InstagramIcon size={20} />
              </a>
              <a href="https://x.com/sucre_papii?s=21&t=QnoqdrIaByUDrhoWj0KuLA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-purple-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#delivery" className="text-gray-300 hover:text-purple-400">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-purple-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon size={18} className="text-purple-400 mt-1 mr-2" />
                <span className="text-gray-300">+234 9024129891</span>
              </li>
              <li className="flex items-start">
                <MailIcon size={18} className="text-purple-400 mt-1 mr-2" />
                <span className="text-gray-300">akinboroo@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon size={18} className="text-purple-400 mt-1 mr-2" />
                <span className="text-gray-300">
                  Lagos, Nigeria
                </span>
              </li>
              {/* New Location Display */}
              <li className="flex items-start mt-4 pt-4 border-t border-gray-700">
                <GlobeIcon size={18} className="text-green-400 mt-1 mr-2" />
                <div>
                  <p className="text-xs text-gray-400 mb-1">Website opened from:</p>
                  <span className="text-gray-300 text-sm">
                    {locationData.loading ? 'Detecting location...' : userLocation}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest offers and new menu items.
            </p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Your email address" className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 Code&Pixels Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}