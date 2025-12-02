import React, { useState, useRef, useEffect, useCallback } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";

import Logo from "../assets/AnnusLogo.webp";
import logo1 from "../assets/AnnusLogo1.webp";

const NAV_ITEMS = [
  { nam: "Home", url: "hero" },
  { nam: "About", url: "about" },
  { nam: "Services", url: "Myservices" },
  { nam: "Contact", url: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scrolling
  const handleScroll = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Navigation handler
  const handleNavClick = useCallback(
    (id) => {
      setIsOpen(false);

      if (location.pathname === "/") {
        handleScroll(id);
      } else {
        navigate("/");
        setTimeout(() => handleScroll(id), 500);
      }
    },
    [location.pathname, navigate, handleScroll]
  );

  // Sidebar GSAP Animation
  useEffect(() => {
    if (!sidebarRef.current || !overlayRef.current) return;

    if (isOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        pointerEvents: "auto",
      });

      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        pointerEvents: "none",
      });

      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="bg-white mx-auto flex justify-between items-center gap-5 rounded-full shadow-lg shadow-gray-600 
        xs:w-[90%] xs:py-1 xs:px-2
        md:w-[80vw] xl:w-[90vw] 2xl:w-[1280px]"
      >
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="xs:w-[120px] xl:w-[180px]" />
        </Link>

        {/* Desktop Menu */}
        <ul className="text-colorDark hidden lg:flex gap-10 font-semibold text-Paragraph5">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={i}
              onClick={() => handleNavClick(item.url)}
              className="cursor-pointer hover:text-[#FF6F49] transition-all"
            >
              {item.nam}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          onClick={() => handleNavClick("contact")}
          className="hidden lg:flex items-center gap-3 bg-button px-6 py-3 text-white 
          font-semibold text-Paragraph5 rounded-full"
        >
          <span>Let's Talk</span>
          <FaArrowRightFromBracket className="text-xl" />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden bg-button p-3 rounded-full text-white"
        >
          <RiMenu3Line className="text-2xl" />
        </button>
      </nav>

      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none z-40"
      ></div>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-[70%] sm:w-[60%] bg-[#11121E] 
        text-white z-50 p-6 flex flex-col gap-8 translate-x-full"
      >
        <div className="flex justify-between items-center">
          <img src={logo1} alt="Logo" className="w-[120px]" />
          <IoClose
            className="text-3xl cursor-pointer hover:text-[#FF6F49]"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-6 mt-10 text-lg font-semibold">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={i}
              onClick={() => handleNavClick(item.url)}
              className="cursor-pointer hover:text-[#FF6F49]"
            >
              {item.nam}
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavClick("contact")}
          className="flex items-center justify-center gap-3 bg-button px-6 py-3 
          font-semibold rounded-full mt-10"
        >
          <span>Let's Talk</span>
          <FaArrowRightFromBracket className="text-xl" />
        </button>
      </aside>
    </>
  );
};

export default Navbar;
