"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#featured-projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 100) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleOpenResume = () => {
    if (typeof window !== "undefined") {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-6 inset-x-0 z-50 w-[90%] max-w-3xl mx-auto px-4 py-3 rounded-full backdrop-blur-md border transition-all duration-300",
          isScrolled
            ? "bg-black/70 border-purple-900/50 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
            : "bg-black/30 border-transparent"
        )}
      >
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex-shrink-0">
            <Image
              src="/js.png"
              alt="JS Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <div className="hidden md:flex items-center justify-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative px-3 py-2 rounded-full text-sm transition-all duration-300",
                  activeSection === item.href.substring(1)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-900/50 to-purple-600/50"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleOpenResume}
            className="hidden md:flex items-center gap-2 rounded-full border-purple-700 text-purple-300 hover:bg-purple-900/30 hover:text-white"
          >
            Resume
          </Button>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white h-10 w-10"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 pt-24 bg-black/95 backdrop-blur-lg md:hidden"
        >
          <div className="flex flex-col items-center gap-4 p-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.indexOf(item) * 0.1 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "text-lg w-full justify-center",
                    activeSection === item.href.substring(1)
                      ? "text-white rounded-full bg-gradient-to-r from-purple-900/50 to-purple-600/50"
                      : "text-gray-400"
                  )}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
            {/* Resume btn mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              className="mt-4"
            >
              <Button
                variant="outline"
                onClick={handleOpenResume}
                className="text-lg justify-center text-purple-400 border-purple-400/50 hover:text-white hover:bg-purple-400/10 flex items-center gap-2 rounded-full"
              >
                Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
