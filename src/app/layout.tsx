import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "../styles/globals.css";
import { MainNav } from "@/components/NavBars";
import SocialsCard from "@/components/Socials";
import { cn } from "@/lib/utils";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and bold weights
});

export const metadata: Metadata = {
  title: "Austin Yu",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${firaCode.variable}`,
          "antialiased relative"
        )}
      >
        <MainNav className="fixed left-10 top-1/2 transform -translate-x-1/2 z-99" />
        {children}
        <SocialsCard className="fixed bottom-4 right-4" />
      </body>
    </html>
  );
}
