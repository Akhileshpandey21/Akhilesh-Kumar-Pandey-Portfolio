import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import social icons

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] text-white bg-[#121212] h-full">
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo & Branding */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/A.png"
            alt="A.P."
            className="w-12 h-12 object-contain"
            width={48}
            height={48}
          />
          {/* <span className="text-xl font-semibold">A.P. Portfolio</span> */}
        </Link>

        {/* Copyright Notice */}
        <p className="text-slate-500 text-sm mt-4 md:mt-0">© {new Date().getFullYear()} A.P. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://github.com/Akhileshpandey21" target="_blank">
            <FaGithub className="text-xl hover:text-primary-500 transition duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/akhilesh-kumar-pandey-52b254258/" target="_blank">
            <FaLinkedin className="text-xl hover:text-primary-500 transition duration-300" />
          </Link>
          <Link href="https://x.com/PandeyAkhil4369" target="_blank">
            <FaTwitter className="text-xl hover:text-primary-500 transition duration-300" />
          </Link>
          <Link href="https://www.instagram.com/its_me_akhil81/" target="_blank">
            <FaInstagram className="text-xl hover:text-primary-500 transition duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;