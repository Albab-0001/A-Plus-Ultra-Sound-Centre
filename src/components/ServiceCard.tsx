
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
      //default // <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover h-full flex flex-col"> 
      //    //<div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover hover:shadow-[0px_2px_30px_rgba(56,189,248,0.4),_0_20px_40px_rgba(14,165,233,0.3)] transition-all duration-300 h-full flex flex-col">

          //<div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200 card-hover hover:shadow-[0px_2px_30px_rgba(56,189,248,0.4),_0_20px_40px_rgba(14,165,233,0.3)] transition-all duration-300 h-full flex flex-col">
       <div className="bg-gray-200 p-8 rounded-2xl shadow-lg border border-transparent hover:border-[2px] hover:border-blue-400 card-hover hover:shadow-[0px_2px_30px_rgba(56,189,248,0.4),_0_20px_40px_rgba(14,165,233,0.3)] transition-all duration-300 h-full flex flex-col">

      <i className={`${icon} text-5xl text-blue-500 mb-6 block`}></i>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-black leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
