import React from 'react';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="text-center pt-6 pb-4 bg-green-100 sm:w-full">
      <p className="text-sm text-[1.3rem] text-gray-600">All rights reserved &copy; by Thanyakan Maneetool</p>
      <Link href="mailto:your.thanyakanfs.33@gmail.com">
        <button className="text-sm text-gray-600 hover:underline">&#128231; thanyakanfs.33@gmail.com</button>
      </Link>
    </footer>
  );
}

export default Footer;
