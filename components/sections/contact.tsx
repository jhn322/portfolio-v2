"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            Get In Touch
            <span className="absolute -bottom-2 left-1/3 w-1/3 h-1 bg-purple-600"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Have an oppertunity for me or just want to say hello? Feel free to
            reach out!
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-900 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.div>
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
                  ideas or opportunities. Feel free to reach out via email and
                  I&apos;ll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-900 rounded-2xl blur opacity-25" />
            <div className="relative bg-black/60 backdrop-blur-sm border border-purple-900/30 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
