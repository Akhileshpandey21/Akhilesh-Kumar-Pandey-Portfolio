"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import StarsBackground from "./components/StarBackground";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // Import Next.js navigation hooks

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            document.title = `Akhilesh Portfolio | ${
              sectionId.charAt(0).toUpperCase() + sectionId.slice(1)
            }`;
            // Update URL hash without reloading
            router.replace(`#${sectionId}`, { scroll: false });
          }
        });
      },
      { threshold: 0.5 } // Fires when 50% of the section is in view
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        {/* Stars in the background */}
        <StarsBackground />

        {/* Content Wrapper */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
