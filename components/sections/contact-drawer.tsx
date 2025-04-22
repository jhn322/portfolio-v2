"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, useAnimation, type PanInfo } from "framer-motion";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, MapPin, X, ChevronUp } from "lucide-react";
import { MovingButton } from "../ui/moving-border-button";
import Lottie from "lottie-react";
import contactAnimation from "../lottie/contact.json";
import sentAnimation from "../lottie/sent.json";
import Link from "next/link";
import { FadeIn } from "../ui/fade-in";

// Zod schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const controls = useAnimation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  // Reset form after success message is shown
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isSubmitted) {
      timeout = setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
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
    controls.start({
      y: 0,
      transition: { type: "spring", damping: 30, stiffness: 400 },
    });
  };

  const handleClose = () => {
    controls.start({
      y: "100%",
      transition: { type: "spring", damping: 30, stiffness: 400 },
    });
    setIsOpen(false);
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

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    setFormError(null);

    try {
      const response = await fetch("/api/send-mail", {
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

      setIsSubmitted(true);
      reset();
    } catch (error) {
      setFormError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
      console.error("Contact form error:", error);
    }
  };

  return (
    <>
      {/* Contact button */}
      <section id="contact" className="py-20 md:py-32 relative z-20">
        <div className="container mx-auto px-4 text-center">
          <FadeIn threshold={0.1} className="text-center mb-10">
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
              className="bg-gradient-to-r from-purple-900 to-purple-700 hover:from-purple-800 hover:to-purple-600 px-8 py-3 flex items-center justify-center"
              borderClassName="bg-[radial-gradient(theme(colors.purple.200)_40%,transparent_60%)]"
            >
              <ChevronUp className="mr-2 h-5 w-5" />
              Open Contact Form
            </MovingButton>
          </FadeIn>
        </div>
      </section>

      {/* Contact drawer */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0 }}
          onClick={handleClose}
        />
      )}

      <motion.div
        className={`fixed bottom-0 left-0 right-0 z-[60] bg-black/90 backdrop-blur-xl border-t border-purple-500/30 rounded-t-3xl ${
          isOpen ? "shadow-[0_-5px_30px_rgba(147,51,234,0.35)]" : ""
        } h-[80vh] md:h-[85vh] max-h-[900px] overflow-hidden`}
        initial={{ y: "100%" }}
        animate={controls}
        drag="y"
        dragConstraints={{ top: 0, bottom: 500 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
        onDragEnd={handleDragEnd}
        dragMomentum={false}
      >
        {/* Purple gradient overlay on drawer */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-purple-800/10 to-transparent pointer-events-none"></div>

        {/* Drag handle */}
        <div className="flex justify-center items-center py-4 cursor-grab active:cursor-grabbing relative z-10">
          <div className="w-12 h-1.5 bg-purple-400/40 rounded-full"></div>
        </div>

        <div className="absolute top-6 right-6 z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            aria-label="Close contact form"
            className="rounded-full text-purple-200 hover:text-white hover:bg-purple-600/20 h-10 w-10 flex items-center justify-center p-0"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="h-[calc(80vh-40px)] md:h-[calc(85vh-40px)] overflow-y-auto overflow-x-hidden px-6 pb-16 md:pb-24 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">
              Let&apos;s Connect
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 shadow-lg w-full text-center"
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
              <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
                <div className="w-full overflow-x-hidden">
                  <h3 className="text-xl md:text-2xl font-bold mb-8 inline-block relative">
                    Contact Information
                    <span className="absolute -bottom-2 left-0 w-1/4 h-0.5 bg-purple-400"></span>
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-8">
                    If you are interested in hiring me, please feel free to use
                    the form or contact me directly via email. I&apos;m always
                    open to new opportunities!
                  </p>

                  <div className="space-y-7 mb-10 relative z-10">
                    {contactInfo.map((contactItem) => {
                      const content = (
                        <div
                          key={contactItem.label}
                          className="flex items-center group"
                        >
                          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-900 mr-5 shrink-0 group-hover:from-purple-800 group-hover:to-purple-600 transition-colors">
                            {contactItem.icon}
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm font-medium mb-1">
                              {contactItem.label}
                            </p>
                            <p className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors">
                              {contactItem.value}
                            </p>
                          </div>
                        </div>
                      );

                      if (contactItem.label === "Email") {
                        return (
                          <Link
                            key={contactItem.label}
                            href={`mailto:${contactItem.value}`}
                            className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
                            aria-label={`Send email to ${contactItem.value}`}
                            tabIndex={0}
                          >
                            {content}
                          </Link>
                        );
                      } else if (contactItem.label === "Location") {
                        return (
                          <Link
                            key={contactItem.label}
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactItem.value)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
                            aria-label={`View ${contactItem.value} on Google Maps`}
                            tabIndex={0}
                          >
                            {content}
                          </Link>
                        );
                      }

                      return <div key={contactItem.label}>{content}</div>;
                    })}
                  </div>

                  <div className="hidden lg:flex lg:justify-center h-80 w-full -mt-20 lg:-mt-16 relative z-0 pointer-events-none">
                    <motion.div
                      className="h-full w-full max-w-[300px]"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Lottie
                        animationData={contactAnimation}
                        loop={true}
                        style={{ height: "100%", width: "100%" }}
                      />
                    </motion.div>
                  </div>
                </div>

                <div className="relative w-full">
                  <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-purple-600/10 blur-3xl"></div>
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-purple-600/10 blur-3xl"></div>

                  <h3 className="text-xl md:text-2xl font-bold mb-8 inline-block relative">
                    Send Me a Message
                    <span className="absolute -bottom-2 left-0 w-1/4 h-0.5 bg-purple-400"></span>
                  </h3>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6 relative z-10"
                  >
                    {formError && (
                      <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-5 text-center shadow-md">
                        <p className="text-red-300">{formError}</p>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-300"
                        >
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Name"
                          {...register("name")}
                          className={`bg-purple-900/10 border-purple-500/20 focus:border-purple-400 focus:ring-purple-400/20 h-12 !rounded-xl shadow-sm placeholder:text-gray-500 ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                          aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-400 mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-300"
                        >
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Email"
                          {...register("email")}
                          className={`bg-purple-900/10 border-purple-500/20 focus:border-purple-400 focus:ring-purple-400/20 h-12 !rounded-xl shadow-sm placeholder:text-gray-500 ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                          aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-400 mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className="text-sm font-medium text-gray-300"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="What would you like to discuss?"
                        {...register("subject")}
                        className={`bg-purple-900/10 border-purple-500/20 focus:border-purple-400 focus:ring-purple-400/20 h-12 !rounded-xl shadow-sm placeholder:text-gray-500 ${errors.subject ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                        aria-invalid={errors.subject ? "true" : "false"}
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-400 mt-1">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-300"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your opportunity, or just say hello!"
                        rows={6}
                        {...register("message")}
                        className={`bg-purple-900/10 border-purple-500/20 focus:border-purple-400 focus:ring-purple-400/20 resize-none !rounded-xl shadow-sm placeholder:text-gray-500 ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                        aria-invalid={errors.message ? "true" : "false"}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-400 mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="py-4">
                      <MovingButton
                        type="submit"
                        borderRadius="9999px"
                        containerClassName="rounded-full w-full"
                        className="bg-gradient-to-r from-purple-900 to-purple-700 hover:from-purple-800 hover:to-purple-600 px-8 py-3 flex items-center justify-center"
                        borderClassName="bg-[radial-gradient(theme(colors.purple.200)_40%,transparent_60%)]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </div>
                        )}
                      </MovingButton>
                    </div>
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
