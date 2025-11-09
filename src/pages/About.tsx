import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const About = () => {
  const testimonials = [
    {
      quote:
        "Expert radiologist specializing in ultrasound and diagnostic imaging.",
      name: "Dr. MAHREEN KHAN",
      designation: "M.B.B.S., M.D (Radiologist)",
      src: "/images/mehreen.jpg",
    },
    {
      quote:
        "Experienced medical professional with expertise in ultrasound diagnostics.",
      name: "Prop. Dr. Amanat Ali",
      designation: "Senior Consultant",
      src: "/images/Amaanat.jpg",
    },
    {
      quote:
        "Specialized in advanced imaging and diagnostic procedures.",
      name: "Dr. Mohd. Khalid",
      designation: "Consultant Radiologist",
      src: "/images/kha.jpg",
    },
    {
      quote:
        "Leading the center with commitment to quality healthcare.",
      name: "M. ZARRAR",
      designation: "Managing Director",
      src: "/images/Zaraar.png",
    },
  ];

  return (
    <section className="py-20 px-5">
      <div className="max-w-4xl mx-auto mt-[30px] mb-[30px]">
        <div className="text-center mb-16">
           <h2 className="text-center text-4xl font-bold mb-6 text-gray-800">
      About A Plus Ultra Sound Centre
    </h2>
 <p className="text-left text-xl leading-relaxed text-gray-600">
      A Plus Ultra Sound Centre is a fully computerized pathology lab with state-of-the-art ultrasound technology. We provide comprehensive diagnostic imaging services with experienced medical professionals and modern equipment. 
      <br />Our center is dedicated to delivering accurate, timely, and affordable diagnostic results that assist in effective medical decision-making. With a patient-first approach, we ensure a comfortable and hygienic environment, along with advanced imaging techniques that support early detection and treatment. A Plus Ultra Sound Centre is committed to improving community health by offering reliable services tailored to the needs of every individual.
</p>

        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
           Meet Our Expert Team
          </h3>
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
      </div>
    </section>
  );
};

export default About;
