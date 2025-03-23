"use client";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <Hero />
    </div>
  );
}
