import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const Home = () => {
  const allServices = [
    {
      icon: 'fas fa-procedures',
      title: 'Ultrasound',
      scanType: 'ultrasound',
      description:
        'Comprehensive ultrasound imaging for various medical conditions and pregnancy monitoring with advanced technology.',
    },
    {
      icon: 'fas fa-microscope',
      title: '4D Color Doppler',
      scanType: 'doppler',
      description:
        'Advanced 4D color Doppler imaging for detailed blood flow assessment and cardiovascular evaluation.',
    },
    {
      icon: 'fas fa-tv',
      title: 'TVS (Transvaginal Scan)',
      scanType: 'tvs',
      description:
        'Specialized transvaginal ultrasound for detailed pelvic and reproductive health assessment.',
    },
    {
      icon: 'fas fa-ribbon',
      title: 'Mammography (Breast)',
      scanType: 'mammography',
      description:
        'Comprehensive breast imaging and mammography services for early detection and breast health monitoring.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Level II Ultrasound',
      scanType: 'level2',
      description:
        'Advanced Level II ultrasound for detailed fetal anatomy assessment and anomaly detection.',
    },
    {
      icon: 'fas fa-search',
      title: 'Liver Scan',
      scanType: 'liver',
      description:
        'Detailed liver imaging for assessment of liver function, structure, and detection of abnormalities.',
    },
    {
      icon: 'fas fa-expand',
      title: 'Gall Bladder',
      scanType: 'gallbladder',
      description:
        'Specialized gallbladder ultrasound for stone detection and gallbladder function evaluation.',
    },
    {
      icon: 'fas fa-user-md',
      title: 'C.B.D. (Common Bile Duct)',
      scanType: 'cbd',
      description:
        'Common bile duct imaging for detection of obstructions and bile duct abnormalities.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Thyroid Scan',
      scanType: 'thyroid',
      description:
        'Comprehensive thyroid ultrasound for thyroid nodules, enlargement, and function assessment.',
    },
    {
      icon: 'fas fa-search-plus',
      title: 'Upper Abdomen',
      scanType: 'upperabdomen',
      description:
        'Complete upper abdominal imaging including liver, gallbladder, pancreas, and spleen evaluation.',
    },
    {
      icon: 'fas fa-search-minus',
      title: 'Lower Abdomen',
      scanType: 'lowerabdomen',
      description:
        'Lower abdominal ultrasound for bladder, reproductive organs, and pelvic structure assessment.',
    },
    {
      icon: 'fas fa-file-medical',
      title: 'Whole Abdomen',
      scanType: 'wholeabdomen',
      description:
        'Comprehensive complete abdominal ultrasound covering all abdominal organs and structures.',
    },
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
      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.pixabay.com/photo/2024/04/01/09/20/ai-generated-8668436_1280.png" 
            alt="Modern medical background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply"></div>
        </div>
        
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
              className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Book Your Appointment
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services" 
        className="px-4"
        style={{
          paddingTop: 'var(--services-padding-top, 2rem)',
          paddingBottom: 'var(--services-padding-bottom, 3rem)'
        }}
      >
        <div className="max-w-6xl mx-auto mt-[30px] mb-[30px]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-black">
            Facilities Available
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-12 items-stretch">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="fade-in h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section 
        className="bg-gradient-to-b from-white to-indigo-50"
        style={{
          paddingTop: 'var(--testimonials-padding-top, 3rem)',
          paddingBottom: 'var(--testimonials-padding-bottom, 3rem)'
        }}
      >
        <div className="w-full max-w-full mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 mb-3 sm:mb-4">
              Our Patient Success Stories
            </h2>
            <div className="w-48 sm:w-64 md:w-80 h-1 bg-indigo-500 mx-auto mb-4 sm:mb-6"></div>
            
            <p className="text-sm md:text-base lg:text-lg text-indigo-800 max-w-3xl mx-auto px-2 mb-6 sm:mb-8 md:mb-10">
              Hear you can see what our patients say about their experiences.
            </p>
          </div>
          
          <div className="relative mb-6 sm:mb-8 md:mb-10">
            <div className="relative bg-white/90 p-3 sm:p-5 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-indigo-200 overflow-hidden">
              <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="slow"
                pauseOnHover={true}
                className="max-w-full sm:max-w-6xl lg:max-w-7xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="bg-indigo-800 text-white pt-6 sm:pt-8 md:pt-10"
        style={{
          paddingBottom: 'var(--cta-padding-bottom, 2rem)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-1">
          <h6 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">
            Ready for Your Diagnostic Test?
          </h6>
          <p className="text-xl mb-10 text-indigo-100 mb-4">
            Schedule your appointment today and experience compassionate care with accurate results. 
          </p>
          <Link
            to="/booking"
            className="bg-white text-indigo-800 hover:bg-green-600 px-6 md:px-10 py-2 md:py-3 rounded-lg text-base md:text-lg font-bold inline-block transition-all duration-300 hover:shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
