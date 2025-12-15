import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  scanType?: string;
}

const ServiceCard = ({ icon, title, description, scanType }: ServiceCardProps) => {
  const bookingUrl = scanType ? `/booking?scanType=${encodeURIComponent(scanType)}` : '/booking';

  return (
      //default // <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover h-full flex flex-col"> 
      //    //<div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover hover:shadow-[0px_2px_30px_rgba(56,189,248,0.4),_0_20px_40px_rgba(14,165,233,0.3)] transition-all duration-300 h-full flex flex-col">

          //<div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200 card-hover hover:shadow-[0px_2px_30px_rgba(56,189,248,0.4),_0_20px_40px_rgba(14,165,233,0.3)] transition-all duration-300 h-full flex flex-col">
       <div className="bg-gray-200 p-8 rounded-2xl shadow-lg border border-transparent hover:border-[2px] hover:border-blue-400 card-hover hover:shadow-[0px_2px_30px_rgba(56,189,248,0.4),_0_20px_40px_rgba(14,165,233,0.3)] transition-all duration-300 h-full flex flex-col">

      <i className={`${icon} text-3xl md:text-4xl text-blue-500 mb-4 md:mb-6 block`}></i>
      <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">{title}</h3>
      <p className="text-base md:text-lg text-black leading-relaxed flex-grow mb-4 md:mb-6">{description}</p>
      <div className="flex justify-center mt-auto">
        <Link
          to={bookingUrl}
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 md:px-5 py-1 md:py-1.5 rounded-lg text-center text-sm md:text-base lg:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 w-auto max-w-[60%]"
        >
          Book Slot
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
