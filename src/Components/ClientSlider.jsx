import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Client Logos
import actionera from "../assets/ClientsLogo/actionera.webp";
import caterCloud from "../assets/ClientsLogo/CaterCloud.webp";
import ClienteleSolution from "../assets/ClientsLogo/clientEle.webp";
import e2w from "../assets/ClientsLogo/e2w.webp";
import eyePartner from "../assets/ClientsLogo/eyePartner.webp";
import Flowjot from "../assets/ClientsLogo/flowjot.webp";
import Fyp from "../assets/ClientsLogo/Fyp.webp"
import healthyStart from "../assets/ClientsLogo/healthy.webp";
import leadcare from "../assets/ClientsLogo/leadcare.webp";
import ml from "../assets/ClientsLogo/ml.webp";
import Mtw from "../assets/ClientsLogo/melanie.webp";
import myGrowth from "../assets/ClientsLogo/growthEngine.webp";
import SmartGrowth from "../assets/ClientsLogo/smartGrowth.webp";
import vicolize from "../assets/ClientsLogo/vicolize.webp";
import portfolioWealth from "../assets/ClientsLogo/portfolioWealth.webp"



const ClientSlider = () => {
  const logos = [
    actionera,
    caterCloud,
    ClienteleSolution,
    e2w,
    eyePartner,
    Flowjot,
    Fyp,
    healthyStart,
    leadcare,
    ml,
    Mtw,
    myGrowth,
    SmartGrowth,
    vicolize,
    portfolioWealth,
  ];

  // 🔥 Key Trick: Duplicate array for real infinite loop
  const infiniteLogos = [...logos, ...logos];

  return (
    <section className="mx-auto overflow-hidden py-4">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={50}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={6000}            // ⭐ Smooth linear movement
        loop={false}           // ⭐ Loop false — important for linear flow
        allowTouchMove={false} // ⭐ User scroll disable
        className="flex items-center"
      >
        {infiniteLogos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto flex justify-center items-center"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] 
              object-contain opacity-90 hover:opacity-100 transition-all duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientSlider;