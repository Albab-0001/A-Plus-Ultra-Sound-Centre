import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
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

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-black">
          Facilities Available
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-12 items-stretch">
          {services.map((service, index) => (
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
  );
};

export default Services;
