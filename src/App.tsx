import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RateCard } from './components/Ratecard';
import { Contact } from './components/Contact';
import { Services } from './components/Services';
import { Delivery } from './components/Delivery';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
export function App() {
  return <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <main className="flex-grow">
      <Hero />
      <Services />
      <Projects />
      {/* <RateCard /> */}
      <Delivery />
      <Contact />
    </main>
    <Footer />
  </div>;
}