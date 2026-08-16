'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription logic
  };

  return (
    <footer className="bg-[#252641] text-white py-4 md:py-8 px-2 md:px-4 font-sans w-full">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-10">
        
        {/* Logo Header */}
        <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/" aria-label="TOTC Home" className="inline-block">
          <Image 
            src="/images/logo.png" 
            alt="TOTC Virtual Class for Zoom Logo" 
            width={114}
            height={83}
            className="h-10 w-15 object-contain" 
            // className="object-contain w-36 md:w-48 h-auto"
            priority
          />
        </Link>
                  <span className="text-[#626381]">|</span>
                            <h6 className="text-[#B2B3CF] text-lg md:text-xs font-semibold tracking-wide text-wrap">
                              Virtual Class 
                              for Zoom
                            </h6>
</div>

        {/* Newsletter Section */}
        <div className="w-full max-w-sm md:max-w-md space-y-3 md:space-y-4">
          <h3 className="text-[#B2B3CF] text-lg md:text-2xl font-semibold tracking-wide">
            Subscribe to get our Newsletter
          </h3>
          
          {/* Compact Inline Form for Mobile & Desktop */}
          <form onSubmit={handleSubmit} className="relative w-full">
            <input 
              type="email" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-5 pr-28 py-2.5 md:py-3 bg-transparent border border-[#83839A] rounded-full text-sm md:text-base text-white placeholder-[#83839A] focus:outline-none focus:border-[#49BBBD] transition-colors"
            />
            <button 
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-5 bg-[#49BBBD] hover:bg-[#3db0b2] text-white text-xs md:text-sm font-medium rounded-full transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-6 text-[#B2B3CF] text-xs sm:text-sm md:text-lg font-medium pt-2">
          <Link href="/careers" className="hover:text-white transition-colors">
            Careers
          </Link>
          <span className="text-[#626381]">|</span>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="text-[#626381]">|</span>
          <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-[#B2B3CF] text-xs md:text-base">
          © 2021 Class Technologies Inc.
        </p>

      </div>
    </footer>
  );
};

export default Footer;