import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Shanghai Cafe</h3>
          <p>519 N Tower Ave, Centralia, WA 98531</p>
          <p>(360) 669-5999</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-red-400 transition">
              Home
            </Link>
            <Link to="/menu" className="hover:text-red-400 transition">
              Menu
            </Link>
            <Link to="/about" className="hover:text-red-400 transition">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-red-400 transition">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link to="/facebook" className="hover:text-red-400 transition">
              Facebook
            </Link>
            <Link to="/instagram" className="hover:text-red-400 transition">
              Instagram
            </Link>
            <Link to="/yelp" className="hover:text-red-400 transition">
              Yelp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;