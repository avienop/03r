import { Link } from 'react-router-dom';
import { 
  FaPhone,       // Phone icon
  FaFacebookF,   // Facebook icon
  FaEnvelope,    // Email icon
  FaMapMarkerAlt // Location icon
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-3">
            {/* Location */}
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-700" />
              <a 
                href="https://www.google.com/maps/place/Shanghai+Cafe/@46.7206204,-122.9526862,17z/data=!3m1!4b1!4m6!3m5!1s0x54916081bbf215ef:0xe71a26ba5cc6d1a1!8m2!3d46.7206204!4d-122.9526862!16s%2Fg%2F1v26ltjc?entry=ttu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-400 transition"
              >
                519 N Tower Ave, Centralia, WA 98531
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <FaPhone className="text-gray-700" />
              <a href="tel:+13606695999" className="hover:text-red-400 transition">
                (360) 669-5999
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-gray-700" />
              <a href="mailto:shanghaicafecentralia@gmail.com" className="hover:text-red-400 transition">
                shanghaicafecentralia@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-red-500 transition">Home</Link>
            <Link to="/about" className="hover:text-red-400 transition">About Us</Link>
            <Link to="/contactus" className="hover:text-red-400 transition">Contact</Link>
          </div>
        </div>

        {/* Social Media Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex flex-col space-y-3">
            <a href="https://facebook.com/shanghaicafecentralia" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hover:text-red-400 transition flex items-center gap-2">
              <FaFacebookF className="text-blue-600" />
              Facebook
            </a>
            
            <a href="mailto:shanghaicafecentralia@gmail.com" 
               className="hover:text-red-400 transition flex items-center gap-2">
              <FaEnvelope className="text-red-500" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Shanghai Cafe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;