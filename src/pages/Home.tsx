'use client';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: 'fas fa-procedures',
      title: 'Ultrasound',
      description: 'Comprehensive prenatal care including 2D, 3D, and 4D imaging to monitor your baby\'s development safely.'
    },
    {
      icon: 'fas fa-microscope',
      title: '4D Color Doppler',
      description: 'Advanced 4D color Doppler imaging for detailed blood flow assessment and cardiovascular evaluation.'
    },
    {
      icon: 'fas fa-ribbon',
      title: 'Mammography (Breast)',
      description: 'Comprehensive breast imaging and mammography services for early detection and breast health monitoring.'
    }
  ];

const testimonials = [
    {
      quote: "Their advanced ultrasound services helped us see our baby in amazing detail. Truly heartwarming experience.",
      name: "Priya Sharma",
      title: "Mother-to-be",
    },
    {
      quote: "Top-notch technology and accurate reports. The color doppler gave us much-needed clarity.",
      name: "Rahul Mehta",
      title: "Expecting Father",
    },
    {
      quote: "Very professional team and quick service. The mammography process was smooth and reassuring.",
      name: "Neeta Desai",
      title: "Breast Cancer Survivor",
    },
    {
      quote: "The liver scan detected my condition early. Grateful for their precise imaging that helped save my life.",
      name: "Rajiv Malhotra",
      title: "Liver Patient",
    },
    {
      quote: "As someone with thyroid issues for years, their detailed scans finally gave me clear answers about my condition.",
      name: "Anjali Kapoor",
      title: "Thyroid Patient",
    },
    {
      quote: "The gallbladder ultrasound was completely painless and the radiologist explained every finding in simple terms.",
      name: "Vikram Joshi",
      title: "Gallbladder Patient",
    },
    {
      quote: "After my whole abdomen scan, I finally understood what was causing my chronic pain. The 3D images were so clear!",
      name: "Deepika Reddy",
      title: "Chronic Pain Patient",
    }
];

  return (
    <div className="font-sans">
      {/* Hero Section with New Background */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://cdn.pixabay.com/photo/2024/04/01/09/20/ai-generated-8668436_1280.png" 
            alt="Modern medical background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Advanced <span className="text-indigo-300">Diagnostic</span> Care <br className="hidden md:block"/> 
            for Modern <span className="text-indigo-300">Medication</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-indigo-100 max-w-3xl mx-auto">
            Cutting-edge medical imaging technology with compassionate patient care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Book Your Appointment
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Scrolling indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              Our Premium Services
            </h2>
            <div className="w-80 h-1 bg-indigo-500 mx-auto mb-6"></div>
           <p className="text-lg text-indigo-800 max-w-8xl text-left">
  
</p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      
{/* Testimonials Section */}
<section className="py-5 bg-gradient-to-b from-white to-indigo-50">
  <div className="w-full max-w-full mx-auto px-4">

    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              Our Patient Success Stories
            </h2>
      <div className="w-80 h-1 bg-indigo-500 mx-auto mb-6"></div>
      
      <p className="text-lg text-indigo-800 max-w-3xl mx-auto">
        Hear you can see what our patients say about their experiences.
      </p>
    </div>
    
   <div className="relative">
  <div className="relative bg-white/90 p-8 rounded-2xl shadow-lg border border-indigo-200">
    <InfiniteMovingCards
      items={testimonials}
      direction="left"
      speed="slow"
      pauseOnHover={true}
      className="max-w-10xl mx-auto"
    />
  </div>
</div>

  </div>
</section>

      {/* CTA Section */}
      <section className="py-8 bg-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-1">
          <h6 className="text-1xl md:text-2xl font-bold mb-3">

            Ready for Your Diagnostic Test?
          </h6>
          <p className="text-xl mb-10 text-indigo-100 mb-4">
            Schedule your appointment today and experience compassionate care with accurate results. 
          </p>
          <Link
            to="/booking"
            className="bg-white text-indigo-800 hover:bg-green-600 px-10 py-3 rounded-lg text-lg font-bold inline-block transition-all duration-300 hover:shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;