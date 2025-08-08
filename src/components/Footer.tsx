import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">A Plus Ultrasound Centre</h3>
          <p className="text-sm">
            A modern, fully-computerized pathology and <br />
            imaging center with state-of-the-art ultrasound <br />
            and diagnostic technologies.
          </p>
        </div>

        {/* Column 2: Quick Links with 2 columns */}
        <div className="pl-6">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-4">
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:underline flex items-center gap-2">
                  <span className="text-white font-bold">{'>'}</span> Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline flex items-center gap-2">
                  <span className="text-white font-bold">{'>'}</span> Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:underline flex items-center gap-2">
                  <span className="text-white font-bold">{'>'}</span> Book Appointment
                </Link>
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/reports" className="hover:underline flex items-center gap-2">
                  <span className="text-white font-bold">{'>'}</span> Reports
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline flex items-center gap-2">
                  <span className="text-white font-bold">{'>'}</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline flex items-center gap-2">
                  <span className="text-white font-bold">{'>'}</span> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: Contact Info */}
        <div className="pl-10">
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
          <p className="text-sm">📍 Opp. Baraha Burji Masjid Qila, Aonla (Bareilly)</p>
          <p className="text-sm mt-2">📞 +91 8937047246</p>
          <p className="text-sm mt-2">✉️ contact@aplusultrasound.in</p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} A Plus Ultrasound Centre. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
