"use client";

import Image from "next/image";
import { useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [isLandscape, setIsLandscape] = useState(false);
  const [screenHeight, setScreenHeight] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useLayoutEffect(() => {
    setScreenHeight(window.innerHeight);
    setIsLandscape(window.innerWidth > window.innerHeight);
  }, []);

  // Gradient styles for landscape images
  const gradientMaskStyle = {
    maskImage: "linear-gradient(to right, black 80%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to right, black 80%, transparent 100%)",
  };

  // Render a fallback while waiting for the client-side values
  if (typeof window === "undefined" || screenHeight === 0) {
    return (
      <div className="flex flex-col bg-background min-h-screen">
        <div className="w-full h-screen bg-gray-800 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen">
      {isLandscape ? (
        <Image // landscape
          src="/hero_h.jpg"
          alt="Hero Image"
          width={screenHeight * 1.5}
          height={screenHeight}
          className="object-cover object-[left_top]"
          style={gradientMaskStyle}
          priority
          onLoad={() => setImageLoaded(true)}
          onError={() => console.error("Failed to load hero image")}
        />
      ) : (
        <Image // portrait
          src="/hero_v.jpg"
          alt="Hero Image"
          fill
          className="object-cover object-[left_top]"
          priority
          onLoad={() => setImageLoaded(true)}
          onError={() => console.error("Failed to load hero image")}
        />
      )}
      <div
        className={cn(
          "absolute top-1/2 left-6/10 transform -translate-y-1/2 max-w-[40vw]",
          `transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`
        )}
      >
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {Array.from("Hi, I am Austin").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h2
          className="text-3xl font-semibold mt-4 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          I am{" "}
          <span className="text-chart-2">
            <Typewriter
              words={[
                "an open source contributor",
                "a photographer",
                "a gamer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <p>
            Based in <span className="text-chart-1">Bay Area 🌉</span>
          </p>
        </motion.h2>
      </div>
    </div>
  );
}
