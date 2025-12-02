import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import me from "../assets/Annus.webp";
import OrangeCircle from "../assets/CircleOrange.webp";
import YellowCircle from "../assets/CircleYellow.webp";

const fadeIn = (delay = 0, y = 40) => ({
  initial: { y, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 1, delay, ease: "easeInOut" },
});

const HireMe = () => {
  return (
    <section className="bg-[#0A0C18] py-16 lg:py-20">
      <div
        className="mx-auto grid xs:w-[90%] md:w-[80vw] xl:w-[90vw] 2xl:w-[1280px] 
                      gap-10 lg:grid-cols-2 items-center"
      >
        {/* LEFT SIDE */}
        <div className="w-full xs:order-2 lg:order-1">
          {/* Heading */}
          <motion.h1
            {...fadeIn(0)}
            className="font-Manrope font-semibold text-button 
                       xs:text-Heading5 lg:text-Heading6 xl:text-Heading4"
          >
            <span className="text-colortext">Why</span> Hire Me?
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeIn(0.2)}
            className="font-outfit text-colortext mt-3 leading-8
                       xs:text-Paragraph5 lg:text-Paragraph6 xl:text-Paragraph5"
          >
            I deliver clean, modern, and high-performing digital solutions
            tailored to your business goals. 
            <br/>
            My focus is on creating user-friendly interfaces, smooth functionality, and scalable systems
            that support long-term growth. 
            <br/> I combine strong technical expertise
            with a strategic mindset to ensure every project delivers real
            value. From front-end development to automation setups, I approach
            each task with precision and attention to detail. 
            <br/> With a commitment
            to quality, communication, and on-time delivery I make your
            digital experience seamless and results-driven.
          </motion.p>

          {/* Stats */}
          <div className="bg-[#181923] rounded-xl grid sm:grid-cols-3 gap-5 mt-5 p-6">
            {[
              { num: "10+", label: "Years of Experience" },
              { num: "6k", label: "Project Completed" },
              { num: "12k", label: "Happy Customers" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn(0.3 + i * 0.2)}
              >
                <h1 className="text-button font-bold text-center xs:text-Heading5">
                  {item.num}
                </h1>
                <p className="text-[#FFC876] text-center font-outfit mt-2 text-sm">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.button
            {...fadeIn(0.4)}
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 bg-button text-colortext border-2 border-transparent cursor-pointer
                       flex items-center gap-2 rounded-full px-6 py-3 font-outfit
                       hover:bg-transparent hover:border-button hover:text-button 
                       transition-all"
          >
            Hire Me <FaArrowRightFromBracket />
          </motion.button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full flex justify-center xs:order-1 lg:order-2">
          <div className="relative">
            {/* Orange Circle */}
            <motion.img
              {...fadeIn(0.4, 20)}
              src={OrangeCircle}
              className="absolute xs:w-40 xs:top-[-5%] xs:left-[-8%] xl:top-0 xl:left-[-2%]"
            />

            {/* Image Circle */}
            <div
              className="relative rounded-full overflow-hidden border-8 border-button
                            xs:w-[300px] xs:h-[300px]
                            sm:w-[350px] sm:h-[350px]
                            lg:w-[420px] lg:h-[420px]
                            xl:w-[500px] xl:h-[500px]"
            >
              <img
                src={me}
                alt="Annus"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Yellow Circle */}
            <motion.img
              {...fadeIn(0.6, -20)}
              src={YellowCircle}
              className="absolute xs:w-28 xs:bottom-0 xs:right-[-3%] xl:bottom-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
