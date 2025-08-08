// src/components/MapComponent.tsx

const MapComponent = () => {
  return (
    <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg z-0 relative">
      <iframe
        title="A Plus Ultrasound Centre Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7010.802647963719!2d79.17170776602845!3d28.27790235879473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDE2JzQwLjUiTiA3OcKwMTAnMTguMiJF!5e0!3m2!1sen!2sin!4v1721040000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
