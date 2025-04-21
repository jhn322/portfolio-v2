"use client";

import type React from "react";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  type PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, MapPin, X, ChevronUp } from "lucide-react";
import { MovingButton } from "../ui/moving-border-button";
import Lottie from "lottie-react";
import contactAnimation from "../lottie/contact.json";
import sentAnimation from "../lottie/sent.json";

export default function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const controls = useAnimation();
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 300], [1, 0]);

  // Reset form after success message is shown
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isSubmitted) {
      timeout = setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isSubmitted]);

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "johan.soderlund96@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Umeå, Sweden",
    },
  ];

  const handleOpen = () => {
    setIsOpen(true);
    // y.set(100); // TODO Fix for bug?
    controls.start({
      y: 0,
      transition: { type: "spring", damping: 30, stiffness: 400 },
    });
  };

  const handleClose = () => {
    controls
      .start({
        y: "100%",
        transition: { type: "spring", damping: 30, stiffness: 400 },
      })
      .then(() => {
        setIsOpen(false);
      });
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y > 100) {
      handleClose();
    } else {
      controls.start({
        y: 0,
        transition: { type: "spring", damping: 30, stiffness: 400 },
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/send-confirmation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      formRef.current?.reset();
    } catch (error) {
      setIsSubmitting(false);
      setFormError(
        error instanceof Error ? error.message : "An error occurred"
      );
      console.error("Contact form error:", error);
    }
  };

  return (
    <>
      {/* Contact button */}
      <section id="contact" className="py-20 md:py-32 relative z-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
              Get In Touch
              <span className="absolute -bottom-2 left-1/3 w-1/3 h-1 bg-purple-600"></span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
              Have a project in mind or just want to say hello? Feel free to
              reach out!
            </p>

            <MovingButton
              onClick={handleOpen}
              borderRadius="9999px"
              containerClassName="rounded-full"
              className="bg-gradient-to-r from-purple-900 to-purple-700 hover:from-purple-800 hover:to-purple-600 text-white px-8 py-3 flex items-center justify-center"
              borderClassName="bg-[radial-gradient(theme(colors.purple.200)_40%,transparent_60%)]"
            >
              <ChevronUp className="mr-2 h-5 w-5" />
              Open Contact Form
            </MovingButton>
          </motion.div>
        </div>
      </section>

      {/* Contact drawer */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" // TODO Fix for bug?
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        />
      )}

      <motion.div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-purple-900/50 rounded-t-3xl ${
          isOpen ? "shadow-[0_-5px_25px_rgba(139,92,246,0.3)]" : ""
        } h-[80vh]`}
        initial={{ y: "100%" }}
        animate={controls}
        style={{ y, opacity }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 500 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
        onDragEnd={handleDragEnd}
        dragMomentum={false}
      >
        {/* Drag handle */}
        <div className="flex justify-center items-center py-4 cursor-grab active:cursor-grabbing">
          <div className="w-12 h-1.5 bg-gray-600 rounded-full"></div>
        </div>

        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            aria-label="Close contact form"
            className="rounded-full text-gray-400 hover:text-white hover:bg-purple-900/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="h-[80vh] overflow-y-auto px-6 pb-16">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Let&apos;s Connect
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto bg-gradient-to-br from-black/40 to-purple-900/20 backdrop-blur-md border border-purple-900/30 rounded-2xl p-6 shadow-lg w-full text-center"
              >
                <div className="h-80 w-full mb-4">
                  <Lottie
                    animationData={sentAnimation}
                    loop={true}
                    style={{ height: "100%" }}
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className="text-gray-300">
                  Thank you for reaching out. I&apos;ll get back to you as soon
                  as possible.
                </p>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-xl font-bold mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6 mb-10">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-center">
                        <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-900 mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{item.label}</p>
                          <p className="text-white font-medium">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="hidden md:block">
                    <div className="h-80 w-full">
                      <Lottie
                        animationData={contactAnimation}
                        loop={true}
                        style={{ height: "100%" }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {formError && (
                      <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-4 text-center">
                        <p className="text-red-300">{formError}</p>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Name"
                          required
                          className="bg-black/50 border-purple-900/50 focus:border-purple-500 focus:ring-purple-500 h-12 !rounded-2xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email"
                          required
                          className="bg-black/50 border-purple-900/50 focus:border-purple-500 focus:ring-purple-500 h-12 !rounded-2xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What would you like to discuss?"
                        required
                        className="bg-black/50 border-purple-900/50 focus:border-purple-500 focus:ring-purple-500 h-12 !rounded-2xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your oppertunity, or just say hello!"
                        rows={6}
                        required
                        className="bg-black/50 border-purple-900/50 focus:border-purple-500 focus:ring-purple-500 resize-none !rounded-2xl"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 h-12 mt-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}
