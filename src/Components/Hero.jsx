import React from "react";
import { motion } from "framer-motion";
import { TiStarFullOutline } from "react-icons/ti";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import bgHero from "../assets/HeroBg.webp";
import Navbar from "../AppLayout/Navbar";
import hero from "../assets/Annus2.webp";
import icon from "../assets/icon.webp";

// =====================
//  Motion Variants
// =====================
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
};

const slideUp = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1.4, ease: "easeInOut" } },
};

const floatVariant = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1.8, ease: "easeInOut" } },
};

// Unified scroll function
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

// =====================
//        HERO
// =====================
const Hero = () => {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${bgHero})` }}
      className="bg-cover bg-center bg-no-repeat text-colortext xs:h-fit xl:h-fit overflow-hidden pt-6 xs:pb-20 xl:pb-40"
    >
      <Navbar />

      <div
        className="mx-auto grid gap-16 
        xs:w-[90%] xs:mt-24 xs:grid-cols-1
        md:w-[80vw]
        lg:grid-cols-2 lg:mt-40
        xl:w-[90vw]
        2xl:w-[1280px]"
      >
        {/* ===========================
         LEFT SIDE 
        ============================ */}
        <div className="xs:order-2 lg:order-1">
          {/* Desktop heading */}
          <div className="hidden lg:block relative">
            <h1 className="bg-black/30 px-3 py-2 w-fit text-Paragraph6 font-semibold font-outfit rounded-full border-2 border-button">
              Hello !
            </h1>

            <motion.h1
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              className="font-Manrope font-bold mt-5 leading-16
              xs:text-Heading6 
              sm:text-Heading3 
              lg:text-Heading5 
              xl:text-Heading2"
            >
              I'm <span className="text-button">Annus Irfan,</span> Automation
              Specialist
            </motion.h1>

            <motion.img
              variants={floatVariant}
              initial="hidden"
              whileInView="show"
              src={icon}
              className="absolute xs:-top-5 xs:left-[70px]"
            />
          </div>

          {/* Paragraph */}
          <motion.p
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            className="font-outfit mt-5 leading-7.5
            xs:text-Paragraph5 xs:text-center
            sm:text-Paragraph4 
            lg:text-Paragraph5 lg:text-left
            xl:text-Paragraph5"
          >
            I help businesses streamline operations, automate workflows, and build high-converting websites that generate real revenue.
            <br/>
            From CRM systems to modern websites — I turn complex ideas into seamless digital experiences.
          </motion.p>

          {/* Buttons */}
          <div className="bg-[#17182C] border border-gray-600 mt-10 flex justify-between items-center gap-3 w-fit p-3 rounded-full xs:mx-auto lg:mx-0 overflow-hidden">
            <motion.button
              variants={slideUp}
              initial="hidden"
              whileInView="show"
              onClick={() => scrollToSection("Myservices")}
              className="bg-button px-6 py-2 flex items-center gap-2 cursor-pointer
              text-Paragraph6 font-semibold font-outfit rounded-full transition-all border border-transparent
              hover:bg-transparent hover:border hover:border-button hover:text-button"
            >
              Services <FaArrowRightFromBracket />
            </motion.button>

            <motion.button
              variants={slideUp}
              initial="hidden"
              whileInView="show"
              onClick={() => scrollToSection("about")}
              className="px-6 py-2 text-Paragraph6 font-semibold font-outfit rounded-full transition-all hover:bg-button cursor-pointer border border-transparent"
            >
              Hire me
            </motion.button>
          </div>
        </div>

        {/* ===========================
         RIGHT SIDE 
        ============================ */}
        <div className="relative xs:order-1 lg:order-2">
          {/* Mobile Heading */}
          <div className="lg:hidden xs:mb-14">
            <h1 className="relative bg-black/30 px-3 py-2 w-fit mx-auto text-Paragraph6 font-semibold font-outfit rounded-full border-2 border-button">
              Hello !
              <motion.img
                variants={floatVariant}
                initial="hidden"
                whileInView="show"
                src={icon}
                className="absolute xs:-top-5 xs:left-[70px]"
              />
            </h1>

            <motion.h1
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              className="text-center font-Manrope font-bold mt-5
              xs:text-Heading6 
              sm:text-Heading3"
            >
              I'm <span className="text-button">Annus Irfan,</span>
              <br className="sm:inline hidden" /> Automation Specialist
            </motion.h1>
          </div>

          {/* Circle Container */}
          <div className="flex justify-center items-center">
            <div
              className="border-button xs:border lg:border-2 rounded-full flex justify-center items-center relative 
              xs:w-[330px] xs:h-[330px] xl:w-[450px] xl:h-[450px]"
            >
              <motion.div
                variants={floatVariant}
                initial="hidden"
                whileInView="show"
                className="border-button xs:border lg:border-2 rounded-full flex justify-center items-center 
                xs:w-[250px] xs:h-[250px] xl:w-[360px] xl:h-[360px]"
              >
                <motion.div
                  variants={floatVariant}
                  initial="hidden"
                  whileInView="show"
                  className="border-button xs:border lg:border-2 rounded-full 
                  xs:w-[200px] xs:h-[200px] xl:w-[280px] xl:h-[280px]"
                ></motion.div>
              </motion.div>

              <img src={hero} className="absolute xs:w-[70vw] xl:w-auto" />

              {/* Badge */}
              <motion.div
                variants={slideUp}
                initial="hidden"
                whileInView="show"
                className="bg-white/13 rounded-xl font-outfit absolute z-10
                xs:p-2 xs:-top-10 xs:-right-3
                lg:p-3 lg:-top-14 lg:-right-16
                xl:p-3 xl:-top-8 xl:-right-5"
              >
                <div className="flex gap-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <TiStarFullOutline
                        key={i}
                        className="text-button xs:text-Paragraph6 text-xl"
                      />
                    ))}
                </div>

                <h1 className="xs:text-Paragraph5 xs:mt-2 text-xl">10+ Years</h1>
                <p className="xs:text-Paragraph6">Experience</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
