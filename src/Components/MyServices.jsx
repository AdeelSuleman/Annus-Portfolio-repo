import React, { useEffect, useRef, useState, useMemo } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { motion } from "framer-motion";
import { services as servicesData } from "../Data/ServiceData";

gsap.registerPlugin(ScrollTrigger);

const MyServices = () => {
  const [activeService, setActiveService] = useState(servicesData[0]);
  const [showAll, setShowAll] = useState(false);

  const navigate = useNavigate();

  // ------------------------------------------------------------
  // 1️⃣ Use Memo for computed visible cards (Performance Boost)
  // ------------------------------------------------------------
  const visibleCards = useMemo(() => {
    const cards = activeService?.cards || [];
    return showAll ? cards : cards.slice(0, 3);
  }, [activeService, showAll]);

  // ------------------------------------------------------------
  // 2️⃣ Heading Animation (optimized cleanup)
  // ------------------------------------------------------------
  const headingRef = useRef(null);
  const splitRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // 👇 Split the text into characters
    splitRef.current = new SplitText(headingRef.current, {
      type: "chars",
      charsClass: "char",
    });

    // 👇 Create ScrollTrigger animation
    ScrollTrigger.create({
      trigger: headingRef.current,
      start: "top 90%", // when heading hits 80% of viewport
      // markers: true,
      onEnter: () => {
        // Kill old animation if exists
        animationRef.current?.revert();

        // New GSAP animation
        animationRef.current = gsap.from(splitRef.current.chars, {
          x: 150,
          opacity: 0,
          duration: 0.7,
          ease: "power4",
          stagger: 0.04,
        });
      },
    });

    return () => {
      // Cleanup on unmount
      animationRef.current?.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // ------------------------------------------------------------
  // 3️⃣ Sub-Text Animation (optimized clean animation)
  // ------------------------------------------------------------
  const textRef = useRef(null);
  
  useEffect(() => {
    let split = new SplitText(textRef.current, { type: "lines" });

    let animation = gsap.from(split.lines, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%", // jab text viewport me 80% per aye
        end: "bottom 20%", // optional
        toggleActions: "play none none reverse", // play on enter, reverse on leave
        markers: false, // true karke markers check kar sakte ho
      },
      rotationX: -40,
      transformOrigin: "50% 50% -160px",
      opacity: 0,
      duration: 0.8,
      ease: "power3",
      stagger: 0.25,
    });

    // cleanup jab component unmount ho
    return () => {
      animation && animation.revert();
      split && split.revert();
    };
  }, []);

  return (
    <section id="Myservices" className="bg-[#020312] py-24">
      <div className="mx-auto xs:w-[90%] md:w-[95vw] lg:w-[90%] xl:w-[90vw] 2xl:w-[1280px]">
        
        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-center font-Manrope font-medium text-button
            xs:text-Heading6 lg:text-Heading4 xl:text-Heading1"
        >
          <span className="text-colortext">My</span> Services
        </h1>

        {/* Sub Heading */}
        <p
          ref={textRef}
          className="text-center font-outfit font-light text-colortext mt-3
            xs:text-Paragraph6
            sm:w-[400px] mx-auto
            md:w-[500px]
            lg:w-[50vw] xl:w-[40vw] xl:text-Paragraph4"
        >
          I offer complete digital solutions designed to help your business grow, increase conversions, and improve customer experience.
        </p>

        {/* Service Tabs */}
        <div
          className={`mx-auto mt-8 grid xs:w-[80vw] xs:grid-cols-2 xs:gap-3 sm:w-[65%]
              md:w-[600px] md:gap-10 lg:w-[80%] xl:w-[70%] md:grid-cols-auto`}
        >
          {servicesData.map((service) => (
            <button
              key={service.id}
              onClick={() => {
                setActiveService(service);
                setShowAll(false);
              }}
              className={`px-0 xs:py-2 lg:py-3 rounded-full font-Manrope font-semibold transition-all duration-300 cursor-pointer
                ${
                  activeService.id === service.id
                    ? "bg-transparent border-2 border-button text-button scale-105 active:border-button focus:border-button"
                    : "bg-[#151729] text-colortext hover:bg-button border-2 border-[#151729] active:border-button focus:border-button"
                }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          className="mt-8 grid gap-5 mx-auto
            xs:grid-cols-1 xs:w-[70vw]
            md:w-[720px] md:grid-cols-3
            lg:grid-cols-3 xl:w-[85%]"
        >
          {visibleCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{
                x: idx % 3 === 0 ? 150 : idx % 3 === 2 ? -150 : 0,
                opacity: 0,
                scale: idx % 3 === 1 ? 0.9 : 1,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-[#11121E] border border-gray-700 rounded-2xl shadow-lg relative"
            >
              <h1 className="text-center py-3 border-b border-gray-700 font-semibold text-colortext xs:text-Paragraph1 xl:text-Paragraph1 p-2">
                {card.title}
              </h1>

              <div className="mt-4">
                <div className="w-[80%] mx-auto h-[20px] bg-[#1D1E29] rounded-t-xl" />
                <div className="w-[90%] mx-auto h-[20px] bg-gray-600 rounded-t-2xl" />
                <div className="rounded-2xl bg-gray-100 overflow-hidden xs:h-[180px] sm:h-[250px] md:h-[180px] xl:h-[220px]">
                  <img src={card.img} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Button */}
              <div className="bg-[#020312] p-4 rounded-tl-[50px] absolute z-10 bottom-[-15px] right-[-15px]">
                <button
                  onClick={() => {
                    localStorage.setItem("selectedCard", JSON.stringify(card));
                    navigate("/projects");
                  }}
                  className="bg-button cursor-pointer p-2 rounded-full text-colortext text-Heading5 hover:bg-[#020312] hover:text-button"
                >
                  <GoArrowUpRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More */}
        {activeService?.cards?.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 text-button font-semibold font-outfit rounded-full border-2 border-button hover:bg-button hover:text-colortext cursor-pointer"
            >
              {showAll ? "Hide" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyServices;
