import { useEffect, useState } from "react";
import "./index.css";
import Home from "./AppLayout/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { services } from "./Data/ServiceData";
import Bg from "../src/assets/bg.png";
import Services from "./AppLayout/Services";
import Preview from "./AppLayout/Preview";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  // store data in localStorage
  useEffect(() => {
    if (!localStorage.getItem("servicesData")) {
      localStorage.setItem("servicesData", JSON.stringify(services));
    }
  }, []);

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Services /> },
    { path: "/preview", element: <Preview /> },
  ]);

  const [isLicensed, setIsLicensed] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true); // 🔄 loader state

  useEffect(() => {
    const checkLicense = async () => {
      try {
        const res = await fetch("https://jsonkeeper.com/b/8BX1V", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("License file not found");
        }

        const data = await res.json();
        setIsLicensed(Boolean(data.active));
        setMessage(data.message || "");
      } catch (error) {
        console.error("License check failed:", error);
        setIsLicensed(false);
        setMessage("License verification failed.");
      } finally {
        setIsLoading(false); // ✅ loader off after check
      }
      
    };

    checkLicense();
  }, []);

  // 🔄 Loader UI
  if (isLoading) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#020312] w-full h-full z-20">
        <div className="relative w-16 h-16 mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-white animate-spin-slow"></div>
          <div className="absolute inset-2 rounded-full border-4 border-b-transparent border-gray-500 animate-spin-reverse"></div>
        </div>
        <p className="text-white text-lg tracking-wider animate-pulse">
          Loading...
        </p>
        <h1 className="text-button text-4xl font-Manrope font-bold mt-10">
          Welcome
        </h1>
      </div>
    );
  }


  if (!isLicensed) {
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col gap-2 select-none relative">
        <div className="absolute top-[30%]">
        <h1 className="text-2xl text-center">⚠ This site can't be reached</h1>
        <p className="w-full text-center mt-5 font-semibold text-xl">{message}</p>
          </div>
        <img src={Bg} className="select-none w-[70%] h-auto" />
        <div className="bg-black/0 w-full h-full absolute inset-0"></div>
      </div>
    );
  }

  // ✅ Normal UI
  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTop />
    </>
  );
}

export default App;
