"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

export default function Home() {
  const [screenHeight, setScreenHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Calculate aspect ratio once instead of in render
  const isLandscape = useMemo(() => screenWidth / screenHeight > 1.5, [screenWidth, screenHeight]);

  useEffect(() => {
    // Function to update the screen height
    const updateScreenSize = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    };

    // Set initial screen height
    updateScreenSize();

    // Add event listener for window resize with debouncing
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateScreenSize, 100);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);
  
  // Gradient styles for landscape images
  const gradientMaskStyle = {
    maskImage: "linear-gradient(to right, black 80%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to right, black 80%, transparent 100%)",
  };

  return (
    <div className="flex flex-col bg-black/50 min-h-screen">
      <div className="relative w-full h-screen">
        {!screenHeight ? (
          <div className="w-full h-screen bg-gray-800 animate-pulse" />
        ) : isLandscape ? (
          <Image  // landscape
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
          <Image  // portrait
            src="/hero_v.jpg"
            alt="Hero Image"
            fill
            className="object-cover object-[left_top]"
            priority
            onLoad={() => setImageLoaded(true)}
            onError={() => console.error("Failed to load hero image")}
          />
        )}
        <div className={`absolute top-30 left-1/2 flex items-center justify-center transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl font-bold text-white">
            Welcome to My Website
          </h1>
        </div>
      </div>
      {/* Page content section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to My Website
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          This is a simple example of a responsive hero image.
        </p>
        {/* Add more content here */}
      </div>
    </div>
  );
}
