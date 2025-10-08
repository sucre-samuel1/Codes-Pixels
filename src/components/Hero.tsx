import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function Hero() {
  return <section className="relative bg-emerald-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Delicious & Healthy Food Delivered To Your Door
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Experience the finest selection of nutritious food bowls,
                catering services, and nationwide delivery from Code&Pixels.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition-colors flex items-center">
                  Order Now <ArrowRightIcon size={16} className="ml-2" />
                </button>
                <button className="bg-white text-emerald-600 border border-emerald-600 px-6 py-3 rounded-md font-medium hover:bg-emerald-50 transition-colors">
                  View Menu
                </button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Colorful food bowl with fresh ingredients" className="rounded-lg shadow-xl w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}