import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-procedures',
      title: 'Ultrasound',
      description:
        'Comprehensive ultrasound imaging for various medical conditions and pregnancy monitoring with advanced technology.',
    },
    {
      icon: 'fas fa-microscope',
      title: '4D Color Doppler',
      description:
        'Advanced 4D color Doppler imaging for detailed blood flow assessment and cardiovascular evaluation.',
    },
    {
      icon: 'fas fa-tv',
      title: 'TVS (Transvaginal Scan)',
      description:
        'Specialized transvaginal ultrasound for detailed pelvic and reproductive health assessment.',
    },
    {
      icon: 'fas fa-ribbon',
      title: 'Mammography (Breast)',
      description:
        'Comprehensive breast imaging and mammography services for early detection and breast health monitoring.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Level II Ultrasound',
      description:
        'Advanced Level II ultrasound for detailed fetal anatomy assessment and anomaly detection.',
    },
    {
      icon: 'fas fa-search',
      title: 'Liver Scan',
      description:
        'Detailed liver imaging for assessment of liver function, structure, and detection of abnormalities.',
    },
    {
      icon: 'fas fa-expand',
      title: 'Gall Bladder',
      description:
        'Specialized gallbladder ultrasound for stone detection and gallbladder function evaluation.',
    },
    {
      icon: 'fas fa-user-md',
      title: 'C.B.D. (Common Bile Duct)',
      description:
        'Common bile duct imaging for detection of obstructions and bile duct abnormalities.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Thyroid Scan',
      description:
        'Comprehensive thyroid ultrasound for thyroid nodules, enlargement, and function assessment.',
    },
    {
      icon: 'fas fa-search-plus',
      title: 'Upper Abdomen',
      description:
        'Complete upper abdominal imaging including liver, gallbladder, pancreas, and spleen evaluation.',
    },
    {
      icon: 'fas fa-search-minus',
      title: 'Lower Abdomen',
      description:
        'Lower abdominal ultrasound for bladder, reproductive organs, and pelvic structure assessment.',
    },
    {
      icon: 'fas fa-file-medical',
      title: 'Whole Abdomen',
      description:
        'Comprehensive complete abdominal ultrasound covering all abdominal organs and structures.',
    },
  ];

  return (
    <section className="pt-20 pb-20 px-4">
      <div className="max-w-6xl mx-auto mt-[30px] mb-[30px]">

        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Facilities Available
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
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
