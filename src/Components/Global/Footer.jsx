import { useState } from "react";

const Footer = () => {
  const [flag, setFlag] = useState("UK");

  const handleFlag = (event) => {
    setFlag(event.target.value);
  };

  return (
    <footer className="body-font bg-black w-full text-white pt-14 px-4 md:px-8">
      <div className="flex w-full justify-evenly pb-12">
        <div className="flex-grow flex flex-wrap md:pr-20 w-full justify-evenly text-center order-first">
          {/* Link list 1*/}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest mb-3">Services</h2>
            <nav className="list-none mb-10 flex flex-col gap-3 text-sm">
              <li><a href="/social-media" className="text-gray-400 hover:text-gray-500">Social Media Marketing</a></li>
              <li><a href="/branding" className="text-gray-400 hover:text-gray-500">Brand Strategy & Identity</a></li>
              <li><a href="/content-production" className="text-gray-400 hover:text-gray-500">Content Production</a></li>
              <li><a href="/event-marketing" className="text-gray-400 hover:text-gray-500">Event Marketing</a></li>
            </nav>
          </div>
          
          {/* Link list 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest mb-3">Company</h2>
            <nav className="list-none mb-10 flex flex-col gap-3 text-sm">
              <li><a href="/about" className="hover:text-gray-500 text-gray-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-500 text-gray-400">Contact</a></li>
            </nav>
          </div>
        </div>
      </div>

      {/* Change Language & Access account button bar */}
      <div className="w-full justify-between flex border-t pt-8 border-gray-600 md:flex-row flex-col-reverse gap-3 pb-12 items-center px-8 lg:px-20">
        <div className="text-gray-500 font-bold text-sm gap-2 text-center flex items-center">
          {/* Choose country */}
          <div className="flex gap-2 items-center border-gray-500 rounded-full p-1 border">
            <select className="outline-none bg-inherit cursor-pointer" onChange={handleFlag} value={flag}>
              <option value="UK">UK</option>
              <option value="US">US</option>
            </select>
          </div>

          {/* Choose Language */}
          <div className="flex gap-2 items-center border-gray-500 rounded-full p-1 border">
            <select className="outline-none bg-inherit cursor-pointer">
              <option>EN</option>
            </select>
          </div>
        </div>

        {/* Access Account button */}
        <div className="flex">
          <a href="/account" className="text-white border hover:bg-black bg-[#202020] px-4 py-2 rounded-2xl">
            Access Your Account
          </a>
        </div>
      </div>

      {/* Bottom Paragraph */}
      <div className="flex w-full px-8 lg:px-20 text-gray-500 text-center md:text-left pb-10">
        <p>Plugg Marketing Services specializes in digital solutions, branding, and content marketing to help businesses grow.</p>
      </div>
    </footer>
  );
};

export default Footer;
