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
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 font-display mb-6">
              Code&Pixels
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Crafting cutting-edge digital experiences with modern technologies.
              From responsive websites to complex web applications.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <LinkedinIcon size={20} />, href: "https://www.linkedin.com/in/samuelakinboro/" },
                { icon: <InstagramIcon size={20} />, href: "https://www.instagram.com/sucre_papii?igsh=cWszZTR2NWY4NzA0&utm_source=qr" },
                { icon: <TwitterIcon size={20} />, href: "https://x.com/sucre_papii?s=21&t=QnoqdrIaByUDrhoWj0KuLA" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'Projects', 'Delivery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-gray-800 p-2 rounded-lg mr-3">
                  <PhoneIcon size={18} className="text-purple-400" />
                </div>
                <span className="text-gray-400 mt-1">+234 9024129891</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-800 p-2 rounded-lg mr-3">
                  <MailIcon size={18} className="text-purple-400" />
                </div>
                <span className="text-gray-400 mt-1">akinboroo@gmail.com</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-800 p-2 rounded-lg mr-3">
                  <MapPinIcon size={18} className="text-purple-400" />
                </div>
                <span className="text-gray-400 mt-1">Lagos, Nigeria</span>
              </li>
              <li className="flex items-start pt-4 border-t border-gray-800 mt-2">
                <div className="bg-gray-800 p-2 rounded-lg mr-3">
                  <GlobeIcon size={18} className="text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Website opened from:</p>
                  <span className="text-gray-300 text-sm font-medium">
                    {locationData.loading ? 'Detecting location...' : userLocation}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Subscribe</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Stay updated with our latest offers and new menu items.
            </p>
            <form className="flex flex-col space-y-3">
              <input type="email" placeholder="Your email address" className="px-4 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 placeholder-gray-500" />
              <button type="submit" className="bg-purple-600 text-white px-4 py-3 rounded-xl hover:bg-purple-700 transition-colors font-medium shadow-lg shadow-purple-900/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>
    </footer>
  );
}