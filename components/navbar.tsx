"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/navbar.css";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#featured-projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(() => {
        const isNowWideScreen = window.innerWidth >= 1200;
        setIsWideScreen(isNowWideScreen);

        if (isNowWideScreen && mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      });
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      // Get current scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      if (window.scrollY < 20) {
        setActiveSection("hero");
        return;
      }

      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (isBottom) {
        // Set active section to contact if at the bottom of the page
        setActiveSection("contact");
        return;
      }

      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id") || "";
        }
      });

      // Consider other-projects as part of "Projects"
      if (current === "other-projects") {
        setActiveSection("featured-projects");
        return;
      }

      // Handle experience section
      if (current === "experience") {
        setActiveSection("experience");
        return;
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

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

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
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
            ? "bg-purple-950/40 border-purple-700/50 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
            : "bg-purple-950/20 border-purple-700/20",
          mobileMenuOpen ? "bg-transparent border-transparent shadow-none" : "",
          isWideScreen ? "wideScreen" : ""
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
                    : "text-gray-300 hover:text-white"
                )}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-900 to-purple-700"
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
            <div
              className="menuIcon cursor-pointer"
              onClick={toggleMenu}
              role="button"
              tabIndex={0}
              aria-label="Toggle menu"
            >
              <svg
                className={`ham hamRotate ham1 ${mobileMenuOpen ? "active" : ""}`}
                viewBox="0 0 100 100"
                width="70"
                height="70"
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={cn(
            "fixed inset-0 z-40 bg-[#0a0010]/90 backdrop-blur-lg md:hidden",
            isWideScreen ? "hidden" : ""
          )}
        >
          <div className="flex flex-col items-center justify-center w-full h-full pb-20">
            <div className="flex flex-col items-center w-full max-w-xs gap-6">
              <div className="flex flex-col w-full gap-6">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.indexOf(item) * 0.1 }}
                    className="w-full"
                  >
                    <Button
                      variant="ghost"
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "text-xl sm:text-2xl w-full justify-center relative font-semibold",
                        activeSection === item.href.substring(1)
                          ? "text-white rounded-full"
                          : "text-gray-400"
                      )}
                    >
                      <div className="relative px-8">
                        {item.name}
                        {activeSection === item.href.substring(1) && (
                          <motion.span
                            layoutId="mobileActiveIndicator"
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500"
                            transition={{ type: "spring", duration: 0.6 }}
                          />
                        )}
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>
              {/* Resume btn mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-2"
              >
                <Button
                  variant="outline"
                  onClick={handleOpenResume}
                  className="justify-center text-purple-300 border-purple-700 hover:text-white hover:bg-purple-400/10 flex items-center gap-2 rounded-full px-6 py-2"
                >
                  Resume
                </Button>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.1 }}
                className="mt-4 flex gap-4"
              >
                <Link href="https://github.com/jhn322" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="GitHub Profile"
                    className="rounded-full border-purple-700 text-purple-300 hover:bg-purple-900/30 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/johan-s%C3%B6derlund-31b9862b7/"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="LinkedIn Profile"
                    className="rounded-full border-purple-700 text-purple-300 hover:bg-purple-900/30 hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
