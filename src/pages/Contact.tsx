// src/pages/Contact.tsx
import MapComponent from '../components/MapComponent';

const Contact = () => {
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
    <section 
        id="booking" 
        className="px-4 bg-white"
        style={{
          paddingTop: 'var(--booking-padding-top, 6rem)',
          paddingBottom: 'var(--booking-padding-bottom, 4rem)'
        }}
      >
      <div className="max-w-6xl mx-auto mt-[30px] mb-[30px]">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Us
        </h2>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Details */}
          <div
  className="text-black p-8 rounded-2xl"
  style={{ backgroundColor: 'rgba(242, 230, 222, 1)' }}
>
  <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>

  <div className="space-y-6">
    {contactInfo.map((info, index) => (
      <div key={index} className="flex items-start gap-4 fade-in">
        <i className={`${info.icon} text-2xl ${getIconColor(info.title)} mt-1`}></i>
        <div>
          <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
          <p className="text-black whitespace-pre-line leading-relaxed">
            {info.content}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


          {/* Map Section */}
          <MapComponent />
        </div>
      </div>
    </section>
  );
};

export default Contact;
