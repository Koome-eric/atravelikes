import { Poppins } from "next/font/google"; // Import Poppins font
import localFont from "next/font/local";
import "./globals.css";

import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";
import { StoreProvider } from "@/app/StoreProvider";
import { SessionProvider } from "next-auth/react";
import mongoose from "mongoose";

import dynamic from "next/dynamic";

import openGraph from "./opengraph-image.jpg";
import SetCookies from "./_setCookies";

// Import Poppins font with desired weight and subsets
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins", // Set the variable for Poppins font
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const tradegothic = localFont({
  src: "../public/fonts/gothic_extended.otf",
  variable: "--font-tradegothic",
  display: "swap",
});

export const metadata = {
  title: "Atravelikes",
  description:
    "Atravelikes is a travel company dedicated to making your travel seamless, efficient, and enjoyable.",
  keywords: [
    "travel",
    "agency",
    "atravelikes",
    "travel agency",
    "atravelikes travel agency",
    "nextjs",
    "react",
    "javascript",
    "tailwind css",
    "next auth",
    "mongodb",
    "node js",
    "redux",
    "web app",
  ],
  metadataBase: new URL("https://atravelikes.vercel.app"),
  openGraph: {
    title: "Atravelikes Travel Agency",
    description:
      "Atravelikes Travel Agency is a travel agency that provides top-notch travel services.",
    siteName: "Atravelikes Travel Agency",
    images: [
      {
        url: openGraph.src,
        width: openGraph.width,
        height: openGraph.height,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({ children }) {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
    } catch (e) {
      console.log(e.message);
    }
  }

  const Notification = dynamic(
    () => import("@/app/_notification").then((mod) => mod.Notification),
    {
      ssr: false,
    }
  );
  return (
    <html lang="en" className={`${tradegothic.variable} ${poppins.variable}`}> {/* Apply Poppins font here */}
      <body className={poppins.className}> {/* Set body font to Poppins */}
        <StoreProvider>
          <SessionProvider>
            <div className="max-w-[1440px] mx-auto">
              <Notification />
              {children}
            </div>
          </SessionProvider>
        </StoreProvider>
        <NextTopLoader showSpinner={false} color="hsl(159, 44%, 69%)" />
        <Toaster className="bg-secondary" />
        <SetCookies />
      </body>
    </html>
  );
}
