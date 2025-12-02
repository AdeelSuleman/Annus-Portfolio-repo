import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Ghl from "../assets/workSkill/highlevel.webp";
import wordpress from "../assets/workSkill/wordpress.webp";
import webDevelop from "../assets/workSkill/appdevelopment.webp";
import MarketingAutomation from "../assets/workSkill/Marketing-automation.webp";
import ClickFunnels from "../assets/workSkill/clickfunnels.webp";
import zapier from "../assets/workSkill/zapier.webp";
import ActiveCamp from "../assets/workSkill/Active-Campaign.webp";
import Kajabi from "../assets/workSkill/Kajabi.webp";
import ThriveCart from "../assets/workSkill/Thrivecart.webp";
import jot_and_Type from "../assets/workSkill/jot_and_type_form.webp";
import Clickup from "../assets/workSkill/Clickup.webp";

const skills = [
  { id: "01", name: "Go High Level", pic: Ghl, rating: 98 },  
  { id: "02", name: "WordPress", pic: wordpress, rating: 90 },
  { id: "03", name: "Web Development", pic: webDevelop, rating: 98 },
  { id: "05", name: "Marketing Automation", pic: MarketingAutomation, rating: 89 },
  { id: "06", name: "Zapier / Pabbly / Make", pic: zapier, rating: 80 },
  { id: "08", name: "ClickFunnels", pic: ClickFunnels, rating: 98 },
  { id: "09", name: "Active Campaign", pic: ActiveCamp, rating: 98 },
  { id: "10", name: "Kajabi", pic: Kajabi, rating: 98 },
  { id: "11", name: "ThriveCart", pic: ThriveCart, rating: 98 },
  { id: "12", name: "Jotform & Typeform", pic: jot_and_Type, rating: 98 },
  { id: "13", name: "ClickUp / Hubstaff / Monday / Slack", pic: Clickup, rating: 98 },
];

const SkillsWorks = () => {

    // Section Heading Animation
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
  
    // // section text animtion
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
    <section className="bg-[#020312] py-24 xl:py-32">
      <div className="mx-auto xs:w-[90%] md:w-[80vw] xl:w-[90vw] 2xl:w-[1280px]">

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-center font-medium font-Manrope text-button
            xs:text-Heading6
            lg:text-Heading4
            xl:text-Heading1"
        >
          <span className="text-colortext">My Work</span> Skills
        </h1>

        {/* Section Sub Heading */}
        <p
          ref={textRef}
          className="text-center font-light font-outfit text-colortext mt-3
                    xs:w-full xs:text-Paragraph6
                    sm:w-[400px] mx-auto
                    md:w-[500px]
                    lg:w-[50vw] lg:mx-auto lg:text-Paragraph5
                    xl:w-[40vw] xl:text-Paragraph4"
        >
          I possess a strong set of modern front-end development skills, enabling me to build fast, responsive, and visually polished digital experiences. I focus on clean code, smooth performance, and seamless integrations to deliver high-quality results.
        </p>

        {/* Skills Grid */}
        <div className="mt-14 grid gap-5 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-gray-700 py-6 px-6 flex flex-col items-center justify-center rounded-lg shadow-md gap-3"
            >
              <img src={skill.pic} alt={skill.name} className="w-12 h-12 mb-3" />
              <h1 className="font-bold xs:text-Paragraph6 text-colortext text-center">{skill.name}</h1>

              {/* Animated Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden mt-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.rating}%` }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="bg-button h-6 flex items-center justify-center text-white text-sm font-bold rounded-full"
                >
                  {skill.rating}%
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsWorks;
