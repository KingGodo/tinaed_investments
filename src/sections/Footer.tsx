import Image from "next/image";
import logo from "@/assets/tinaed_logo.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo + About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="Tinaed Investments logo" height={40} />
              <span className="font-semibold text-lg text-white">
                Tinaed Investments
              </span>
            </div>
            <p className="text-sm text-gray-200 mt-3 leading-relaxed">
              Pioneering growth, focused energy — delivering excellence in
              construction, steel works, and infrastructure solutions across
              Zimbabwe.
            </p>
            <div className="flex gap-4 mt-4">
              <Facebook className="w-5 h-5 hover:text-green-300 cursor-pointer transition" />
              <Instagram className="w-5 h-5 hover:text-green-300 cursor-pointer transition" />
              <Linkedin className="w-5 h-5 hover:text-green-300 cursor-pointer transition" />
              <Twitter className="w-5 h-5 hover:text-green-300 cursor-pointer transition" />
              <Youtube className="w-5 h-5 hover:text-green-300 cursor-pointer transition" />
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-300">About Us</a></li>
              <li><a href="#" className="hover:text-green-300">Services</a></li>
              <li><a href="#" className="hover:text-green-300">Projects</a></li>
              <li><a href="#" className="hover:text-green-300">Clients</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-300">Help Center</a></li>
              <li><a href="#" className="hover:text-green-300">FAQ</a></li>
              <li><a href="#" className="hover:text-green-300">Feedback</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-300">Careers</a></li>
              <li><a href="#" className="hover:text-green-300">Blog</a></li>
              <li><a href="#" className="hover:text-green-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-300" />
                +263 77 391 3242
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-300" />
                info@tinaedinvestments.co.zw
              </li>
              <li>15 Market Street, Harare, Zimbabwe</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-600 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-200">
          <p>
            © {new Date().getFullYear()} Tinaed Investments. All rights reserved.
          </p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-green-300">Privacy Policy</a>
            <a href="#" className="hover:text-green-300">Terms of Use</a>
            <a href="#" className="hover:text-green-300">Legal</a>
            <a href="#" className="hover:text-green-300">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
