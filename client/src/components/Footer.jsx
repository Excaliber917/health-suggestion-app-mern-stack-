import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


function Footer() {
    return (
        <footer className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300  text-white border-t border-t-teal-200 p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3">



                {/* Links to About Us and Contact Us */}
                {/* <div className="mt-4 md:mt-0 flex space-x-8">
                    <Link to="/about" className="hover:text-gray-400">About Us</Link>
                    <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
                </div> */}

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaFacebookF className="h-6 w-6" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaTwitter className="h-6 w-6" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaInstagram className="h-6 w-6" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaYoutube className="h-6 w-6" />
                    </a>
                </div>

                {/* Copyright Notice */}
                <div className="md:mt-0 text-sm text-gray-800">
                    © 2024 Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
