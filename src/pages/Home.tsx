'use client';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import MapComponent from '../components/MapComponent';
import { toast } from 'sonner';

const Home = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedScanType, setSelectedScanType] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // All services list
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

  // Booking form handlers
  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;

    const appointmentId = 'APT-' + Math.floor(100000 + Math.random() * 900000);

    setTimeout(() => {
      setIsLoading(false);
      toast.success(
        `✅ Appointment booked successfully! Your appointment ID is ${appointmentId}. You will receive SMS and email confirmation shortly.`
      );
      form.reset();
      setSelectedScanType('');

      setTimeout(() => {
        const phoneNumber = "917895317700";
        const bigMessage = `Dear Sir, \n My appointment has been successfully booked.\n\n Name: ${firstName} ${lastName}\n Appointment ID: ${appointmentId}\n\nPlease confirm my appointment. Thank you!`;
        window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(bigMessage)}`;
      }, 8000);
    }, 2000);
  };

  const handleReportsLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const patientId = formData.get('patientId');
    const phone = formData.get('phoneLogin');

    if (patientId && phone) {
      setIsLoggedIn(true);
      toast.success('Login successful! Welcome to your patient portal.');
    } else {
      toast.error('Invalid credentials. Please check your details and try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.info('You have been logged out successfully.');
  };

  const downloadReport = (filename: string) => {
    toast.success(`Downloading ${filename}...`);
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  useEffect(() => {
    const scanTypeFromUrl = searchParams.get('scanType');
    if (scanTypeFromUrl) {
      setSelectedScanType(scanTypeFromUrl);
      // Scroll to booking section
      setTimeout(() => {
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [searchParams]);

  const aboutTestimonials = [
    {
      quote: "Expert radiologist specializing in ultrasound and diagnostic imaging.",
      name: "Dr. MAHREEN KHAN",
      designation: "M.B.B.S., M.D (Radiologist)",
      src: "/images/mehreen.jpg",
    },
    {
      quote: "Experienced medical professional with expertise in ultrasound diagnostics.",
      name: "Prop. Dr. Amanat Ali",
      designation: "Senior Consultant",
      src: "/images/Amaanat.jpg",
    },
    {
      quote: "Specialized in advanced imaging and diagnostic procedures.",
      name: "Dr. Mohd. Khalid",
      designation: "Consultant Radiologist",
      src: "/images/kha.jpg",
    },
    {
      quote: "Leading the center with commitment to quality healthcare.",
      name: "M. ZARRAR",
      designation: "Managing Director",
      src: "/images/Zaraar.png",
    },
  ];

  const reports = [
    {
      title: 'Pregnancy Ultrasound Report',
      date: 'March 15, 2024',
      status: 'Ready',
      filename: 'pregnancy-report.pdf'
    },
    {
      title: 'Abdominal Scan Report',
      date: 'February 28, 2024',
      status: 'Ready',
      filename: 'abdominal-report.pdf'
    },
    {
      title: '3D Ultrasound Images',
      date: 'January 20, 2024',
      status: 'Ready',
      filename: '3d-images.pdf'
    }
  ];

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      content: 'Opp. Baraha Burji Masjid Qila, Aonla (Bareilly)'
    },
    {
      icon: 'fas fa-phone',
      title: 'Mohd. ZARRAR Khan',
      content: 'Managing Director\nM. 8937047246'
    },
    {
      icon: 'fas fa-clock',
      title: 'Opening Hours',
      content: 'Mon-Fri: 8:00 AM - 8:00 PM\nSat: 9:00 AM - 6:00 PM\nSun: 10:00 AM - 4:00 PM'
    }
  ];

  const getIconColor = (title: string) => {
    switch (title) {
      case 'Address':
        return 'text-black';
      case 'Mohd. ZARRAR Khan':
        return 'text-black';
      case 'Opening Hours':
        return 'text-black';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="font-sans">
      {/* Hero Section with New Background */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
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

        {/* Scrolling indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      {/* Adjust space --> AK */}
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
{/* Adjust space --> AK */}
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
      {/* Adjust space --> AK */}
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

      {/* Booking Section */}
      {/* Adjust space -------------------------------------------------------------------------------> AK */}
      <section 
        id="booking" 
        className="px-4 bg-white"
        style={{
          paddingTop: 'var(--booking-padding-top, 2rem)',
          paddingBottom: 'var(--booking-padding-bottom, 4rem)'
        }}
      >
        <div className="max-w-2xl mx-auto mt-[30px] mb-[30px]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Book Your Appointment
          </h2>

          <div className="bg-gray-200 p-8 md:p-12 rounded-2xl shadow-xl">
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-black mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-black mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="appointmentDate" className="block text-sm font-semibold text-black mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    min={minDate}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="appointmentTime" className="block text-sm font-semibold text-black mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="appointmentTime"
                    name="appointmentTime"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select Time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="09:30">9:30 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option disabled>1:00 - 2:00 PM Lunch Time</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="15:30">3:30 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="16:30">4:30 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="scanType" className="block text-sm font-semibold text-black mb-2">
                  Type of Scan *
                </label>
                <select
                  id="scanType"
                  name="scanType"
                  value={selectedScanType}
                  onChange={(e) => setSelectedScanType(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select Scan Type</option>
                  <option value="ultrasound">Ultrasound</option>
                  <option value="doppler">4D Color Doppler</option>
                  <option value="tvs">TVS (Transvaginal Scan)</option>
                  <option value="mammography">Mammography (Breast)</option>
                  <option value="level2">Level II Ultrasound</option>
                  <option value="liver">Liver Scan</option>
                  <option value="gallbladder">Gall Bladder</option>
                  <option value="cbd">C.B.D. (Common Bile Duct)</option>
                  <option value="thyroid">Thyroid Scan</option>
                  <option value="upperabdomen">Upper Abdomen</option>
                  <option value="lowerabdomen">Lower Abdomen</option>
                  <option value="wholeabdomen">Whole Abdomen</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-black mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Any special requirements or medical history..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="bg-green-500 w-full text-white py-3 md:py-4 rounded-lg text-base md:text-lg font-bold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="spinner w-5 h-5 border-2 border-t-2 border-white rounded-full animate-spin"></div>
                    Booking...
                  </div>
                ) : (
                  'Book Appointment'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      {/* Adjust space --> AK */}
      <section 
        id="reports" 
        className="px-4 bg-gray-50"
        style={{
          paddingTop: 'var(--reports-padding-top, 2rem)',
          paddingBottom: 'var(--reports-padding-bottom, 1rem)'
        }}
      >
        <div className="max-w-6xl mx-auto mt-[30px] mb-[30px]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-7 text-black">
            Patient Report Portal
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 bg-gradient-to-r from-yellow-300 via-yellow-300 to-yellow-300 bg-clip-text text-transparent">
            You can Download your report from here!......
          </h3>
          <h6 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-8 md:mb-12 text-black">
            Just Enter Your Patient ID and Phone Number
          </h6>

          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <div className="bg-gray-200 p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 text-black">
                  Secure Login
                </h3>
                <form onSubmit={handleReportsLogin} className="space-y-6">
                  <div>
                    <label htmlFor="patientId" className="block text-sm font-semibold text-black mb-2">
                      Patient ID *
                    </label>
                    <input
                      type="text"
                      id="patientId"
                      name="patientId"
                      required
                      placeholder="Enter your Patient ID"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneLogin" className="block text-sm font-semibold text-black mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneLogin"
                      name="phoneLogin"
                      required
                      placeholder="Enter registered phone number"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 md:py-3 rounded-lg text-base md:text-lg font-bold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Access Reports
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 text-gray-800">
                Your Reports
              </h3>
              <div className="space-y-4 mb-8">
                {reports.map((report, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center card-hover"
                  >
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-800">
                        {report.title}
                      </h4>
                      <p className="text-gray-600">
                        Date: {report.date} | Status: {report.status}
                      </p>
                    </div>
                    <button
                      onClick={() => downloadReport(report.filename)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
                    >
                      <i className="fas fa-download"></i>
                      Download
                    </button>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={handleLogout}
                  className="gradient-gold text-gray-800 px-6 md:px-8 py-2 md:py-3 rounded-lg text-base md:text-lg font-bold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      {/* Adjust space --> AK */}
      <section 
        id="about" 
        className="px-5 bg-white"
        style={{
          paddingTop: 'var(--about-padding-top, 2rem)',
          paddingBottom: 'var(--about-padding-bottom, 0.0001rem)'
        }}
      >
        <div className="max-w-4xl mx-auto mt-[30px] mb-[30px]">
          <div className="text-center mb-16">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-800">
              About A Plus Ultra Sound Centre
            </h2>
            <p className="text-left text-base md:text-lg lg:text-xl leading-relaxed text-gray-600">
              A Plus Ultra Sound Centre is a fully computerized pathology lab with state-of-the-art ultrasound technology. We provide comprehensive diagnostic imaging services with experienced medical professionals and modern equipment.
              <br />Our center is dedicated to delivering accurate, timely, and affordable diagnostic results that assist in effective medical decision-making. With a patient-first approach, we ensure a comfortable and hygienic environment, along with advanced imaging techniques that support early detection and treatment. A Plus Ultra Sound Centre is committed to improving community health by offering reliable services tailored to the needs of every individual.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
              Meet Our Expert Team
            </h3>
            <AnimatedTestimonials testimonials={aboutTestimonials} autoplay />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Adjust space --> AK */}
      <section 
        id="contact" 
        className="px-4 bg-gray-50"
        style={{
          paddingTop: 'var(--contact-padding-top, 2rem)',
          paddingBottom: 'var(--contact-padding-bottom, 4rem)'
        }}
      >
        <div className="max-w-6xl mx-auto mt-[30px] mb-[30px]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Contact Us
          </h2>

          <div className="grid lg:grid-cols-2 gap-20">
            <div
              className="text-black p-8 rounded-2xl"
              style={{ backgroundColor: 'rgba(242, 230, 222, 1)' }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 fade-in">
                    <i className={`${info.icon} text-2xl ${getIconColor(info.title)} mt-1`}></i>
                    <div>
                      <h4 className="font-semibold text-base md:text-lg mb-1">{info.title}</h4>
                      <p className="text-black whitespace-pre-line leading-relaxed">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <MapComponent />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;