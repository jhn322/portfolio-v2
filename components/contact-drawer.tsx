"use client";

import type React from "react";

import { useRef, useState } from "react";
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

export default function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const controls = useAnimation();
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 300], [1, 0]);

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "hello@johndoe.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "San Francisco, CA",
    },
  ];

  const handleOpen = () => {
    setIsOpen(true);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      formRef.current?.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      {/* Contact button */}
      <section id="contact" className="py-20 md:py-32 relative">
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

            <Button
              onClick={handleOpen}
              className="rounded-full px-8 py-6 bg-gradient-to-r from-purple-900 to-purple-700 hover:from-purple-800 hover:to-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]"
            >
              <ChevronUp className="mr-2 h-5 w-5" />
              Open Contact Form
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact drawer */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        />
      )}

      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-purple-900/50 rounded-t-3xl shadow-[0_-5px_25px_rgba(139,92,246,0.3)]"
        initial={{ y: "100%" }}
        animate={controls}
        style={{ y, opacity }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 500 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        dragMomentum={false}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
      >
        {/* Drag handle */}
        <div className="flex justify-center items-center py-4 cursor-grab active:cursor-grabbing">
          <div className="w-12 h-1.5 bg-gray-600 rounded-full"></div>
        </div>

        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="rounded-full text-gray-400 hover:text-white hover:bg-purple-900/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto px-4 pb-8">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Let&apos;s Connect
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6 mb-8">
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

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-900 rounded-2xl blur opacity-25" />
                  <div className="relative bg-black/60 backdrop-blur-sm border border-purple-900/30 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold mb-4">
                      Let&apos;s create something amazing together
                    </h4>
                    <p className="text-gray-300 mb-4">
                      I&apos;m always open to discussing new projects, creative
                      ideas or opportunities to be part of your vision. Feel
                      free to reach out via email and I&apos;ll get back to you
                      as soon as possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-900 rounded-2xl blur opacity-25" />
                <div className="relative bg-black/60 backdrop-blur-sm border border-purple-900/30 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-4 text-center"
                    >
                      <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                      <p className="text-gray-300">
                        Thank you for reaching out. I&apos;ll get back to you as
                        soon as possible.
                      </p>
                    </motion.div>
                  ) : (
                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            required
                            className="bg-black/50 border-purple-900/50 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            required
                            className="bg-black/50 border-purple-900/50 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="Subject"
                          required
                          className="bg-black/50 border-purple-900/50 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Your message"
                          rows={5}
                          required
                          className="bg-black/50 border-purple-900/50 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full rounded-full bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500"
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
