import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import me from "../assets/AnnusHalf.webp";
import OrangeCircle from "../assets/CircleOrange.webp";
import YellowCircle from "../assets/CircleYellow.webp";

const fadeIn = (duration = 1.2) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration, ease: "easeInOut" },
  // viewport: { once: true },
});

const About = () => {
  return (
    <section id="about" className="bg-[#0A0C18]">
      <div className="mx-auto grid justify-between items-center gap-10
          xs:w-[90%] xs:grid-cols-1 xs:py-16
          md:w-[80vw]
          lg:grid-cols-2 lg:py-20
          xl:w-[90vw] 2xl:w-[1280px]">

        {/* LEFT IMAGE SECTION */}
        <div className="flex justify-center items-center">
          <div className="relative">

            {/* Orange Circle */}
            <motion.img
              {...fadeIn(1.8)}
              src={OrangeCircle}
              className="absolute 
                xs:top-[-5%] xs:left-[-8%] xs:w-40
                sm:top-[-4%] sm:left-[-8%]
                lg:top-[-4%] lg:left-[-6%]
                xl:top-0 xl:left-[-2%]"
              alt="design element"
            />

            {/* Main Image */}
            <div
              className="border-8 border-button rounded-full overflow-hidden
                xs:w-[300px] xs:h-[300px]
                sm:w-[350px] sm:h-[350px]
                lg:w-[420px] lg:h-[420px]
                xl:w-[500px] xl:h-[500px]"
            >
              <img src={me} className="w-full h-auto object-contain" alt="Annus" />
            </div>

            {/* Yellow Circle */}
            <motion.img
              {...fadeIn(1.8)}
              src={YellowCircle}
              className="absolute
                xs:bottom-0 xs:right-[-3%] xs:w-28
                sm:bottom-0 sm:right-[0%]
                lg:bottom-0 lg:right-[0%]
                xl:bottom-10"
              alt="design element"
            />
          </div>
        </div>

        {/* RIGHT TEXT SECTION */}
        <div>
          {/* Title Tag */}
          <motion.h1 
          {...fadeIn(1.5)}
            className="font-semibold font-outfit bg-[#181923] text-colortext w-fit rounded-full border-2 border-button
              xs:px-6 xs:py-2 xs:text-Paragraph6
              lg:px-4 lg:py-1.5 lg:text-[14px]
              xl:px-6 xl:py-2 xl:text-Paragraph6"
          >
            About Me
          </motion.h1>

          {/* Heading */}
          <motion.h1 
          {...fadeIn(1.6)}
            className="font-medium font-Manrope mt-3 text-colortext 
              xs:text-Heading5 xs:leading-10
              lg:text-Heading6 lg:leading-8
              xl:text-Heading4 xl:leading-10"
          >
            Transform Your Digital Presence with Websites That Create Lasting Impressions
          </motion.h1>

          {/* Paragraph */}
          <motion.p 
          {...fadeIn(1.2)}
            className="font-outfit text-colortext
              xs:text-Paragraph5 xs:mt-3
              lg:text-Paragraph6 lg:mt-2 
              xl:text-Paragraph5 xl:mt-3"
          >
            I specialize in crafting cutting-edge, high-performance websites that combine modern design aesthetics with seamless functionality. Every project I deliver is optimized for speed, user experience, and conversion—helping your brand establish a powerful online presence that resonates with your target audience and drives meaningful engagement.
          </motion.p>

          {/* Info Grid */}
          <motion.div
            {...fadeIn(1.3)}
            className="bg-[#181923] rounded-xl w-full grid xs:grid-cols-1 md:grid-cols-2 gap-5
              xs:mt-5 xs:py-5 xs:px-5
              lg:mt-3 lg:py-4 lg:px-6"
          >
            {[
              { title: "Name:", value: "Annus Irfan" },
              { title: "Phone:", value: "+(234) 567-8910" },
              { title: "Email:", value: "annusirfan01@gmail.com" },
              { title: "Twitter:", value: "Sairakarim0011" },
            ].map((item, index) => (
              <div key={index}>
                <h1 className="text-button font-ubuntu xs:text-Paragraph5 lg:text-Paragraph6 xl:text-Paragraph5">
                  {item.title}
                </h1>
                <p className="text-colortext font-outfit xs:text-Paragraph6 xs:mt-3 lg:text-[14px] lg:mt-1 xl:text-Paragraph6 xl:mt-3">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Contact Button */}
          <motion.button
            {...fadeIn(0.8)}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-button text-colortext border-2 border-transparent flex items-center font-semibold font-outfit rounded-full cursor-pointer transition-all duration-200
              xs:px-6 xs:py-3 xs:gap-2 xs:text-Paragraph6
              lg:px-4 lg:py-2 lg:gap-1 lg:text-[14px]
              xl:px-6 xl:py-3 xl:gap-2 xl:text-Paragraph6
              hover:bg-transparent hover:border-button hover:text-button mt-10 w-fit"
          >
            Contact me <FaArrowRightFromBracket />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
