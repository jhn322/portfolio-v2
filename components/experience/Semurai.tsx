import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const ProjectDetails = ({
  isOpen,
  toggleAccordion,
}: {
  isOpen: boolean;
  toggleAccordion: () => void;
}) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-300 text-sm pt-4 pb-2 pl-7 border-l border-purple-700 ml-2"
        >
          <ul className="space-y-6">
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                <Link
                  href="https://egen-lista.vercel.app/"
                  target="_blank"
                  className="group flex items-center gap-1 hover:text-purple-300 transition-colors"
                >
                  EgenLista
                  <ExternalLink size={12} />
                </Link>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Next.js
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Tailwind
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Shadcn
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Prisma
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  NextAuth
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Bcryptjs
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Zod
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Recharts
                </span>
              </div>
              <p className="mt-2">
                Led the development of EgenLista, a customer list-building tool
                for Swedish entrepreneurs. Engineered a full stack solution
                using Next.js, Prisma, and NextAuth, featuring OAuth and
                email/password authentication, email/phone validation, and APIs
                for customer, lead, and contact management. Implemented advanced
                form capabilities with script embedding, user-specific QR codes,
                UI skeletons, and a superAdmin role for subscription testing.
                The platform includes a &apos;my pages&apos; section with
                Markdown note-taking (react-md) with free/pro tiers, CSV export,
                comprehensive list filtering (search, type, date-range),
                sorting, pagination, and Recharts for data visualization.
                Automated weekly cleanup of unverified users via Vercel cron
                jobs and tracked contact interactions.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                <Link
                  href="https://blueredgold.vercel.app/"
                  target="_blank"
                  className="group flex items-center gap-1 hover:text-purple-300 transition-colors"
                >
                  BlueRedGold
                  <ExternalLink size={12} />
                </Link>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Next.js
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Tailwind
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Shadcn
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Sanity CMS
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Framer Motion
                </span>
              </div>
              <p className="mt-2">
                Developed a corporate website for a client with advanced
                animations and dynamic content. Created reusable components
                including parallax heroes, image carousels, and animated
                navigation menus. Integrated Sanity CMS for content management
                and Brevo API for email functionality. Implemented SEO
                optimizations and accessibility features.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                <Link
                  href="https://offertu.vercel.app/"
                  target="_blank"
                  className="group flex items-center gap-1 hover:text-purple-300 transition-colors"
                >
                  Offertu
                  <ExternalLink size={12} />
                </Link>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Next.js
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Tailwind
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Shadcn
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  MongoDB
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Prisma
                </span>
              </div>
              <p className="mt-2">
                Built a lead generation platform with admin dashboard featuring
                dynamic charts, date range filtering, and real-time data
                visualization. Implemented authentication with NextAuth.js and
                protected routes. Created form validation with Zod and
                integrated email functionality with Brevo. Optimized for SEO
                using semantic HTML and Google Page Insights.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                <Link
                  href="https://www.leadvio.se/"
                  target="_blank"
                  className="group flex items-center gap-1 hover:text-purple-300 transition-colors"
                >
                  Leadvio
                  <ExternalLink size={12} />
                </Link>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Next.js
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Tailwind
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Shadcn
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  LinkedIn API
                </span>
              </div>
              <p className="mt-2">
                Enhanced a LinkedIn automation tool by developing company search
                functionality alongside existing people search. Created dynamic
                table rendering based on search queries. Debugged XHR requests
                with Postman and implemented title filtering across companies.
                Developed Chrome extension components for LinkedIn profile
                interactions.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                <Link
                  href="https://librechat.himitsu.ai/"
                  target="_blank"
                  className="group flex items-center gap-1 hover:text-purple-300 transition-colors"
                >
                  LibreChat
                  <ExternalLink size={12} />
                </Link>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Docker
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  MongoDB
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Digital Ocean
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Cloudflare
                </span>
              </div>
              <p className="mt-2">
                Deployed and configured an internal AI chatbot using OpenAI and
                Anthropic models. Set up Digital Ocean droplet with Ubuntu,
                Docker, and MongoDB. Configured DNS with Cloudflare and
                implemented SSL for secure connections. Managed user access and
                database administration to maintain security.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                <Link
                  href="https://theresina.templweb.com/"
                  target="_blank"
                  className="group flex items-center gap-1 hover:text-purple-300 transition-colors"
                >
                  Dico
                  <ExternalLink size={12} />
                </Link>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  WordPress
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  PHP
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  CSS
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  ACF
                </span>
              </div>
              <p className="mt-2">
                Created custom templates and components for WordPress site
                without relying on plugins. Developed company pages with
                Advanced Custom Fields (ACF) and Single Custom Fields (SCF).
                Implemented custom footer and post templates using PHP and CSS
                in a plugin-free environment.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                <Link
                  href="https://semurai-dev-blog.vercel.app/"
                  target="_blank"
                  className="group flex items-center gap-1 hover:text-purple-300 transition-colors"
                >
                  Dev Blog
                  <ExternalLink size={12} />
                </Link>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Next.js
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Tailwind
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Markdown
                </span>
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  Vercel
                </span>
              </div>
              <p className="mt-2">
                Built a personal development blog with Next.js and Tailwind CSS
                based on a template. Integrated markdown support for content
                creation with Obsidian. Set up GitHub Actions to synchronize
                content between two repositories and automate deployment to
                Vercel.
              </p>
            </li>
          </ul>
          <div className="flex justify-center mt-6">
            <button
              onClick={toggleAccordion}
              className="flex items-center gap-1 text-purple-300"
            >
              <span>Show less</span>
              <ChevronUp size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const Semurai = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col p-2 xs:p-4 w-full"
    >
      <motion.h3
        variants={item}
        initial="hidden"
        animate="show"
        className="flex flex-col xs:flex-row text-white gap-1 font-medium text-xl"
      >
        Full stack Web Developer Intern
        <Link
          href="https://semurai.se/"
          target="_blank"
          className="text-purple-300 tracking-wide group flex items-center gap-1"
        >
          @Semurai
          <ExternalLink size={12} />
        </Link>
      </motion.h3>
      <motion.p
        variants={item}
        initial="hidden"
        animate="show"
        className="text-sm mt-1 font-medium text-gray-400"
      >
        January 2025 - May 2025
      </motion.p>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-6 flex flex-col gap-4"
      >
        <motion.li
          variants={item}
          className="text-base flex gap-2 text-gray-300"
        >
          <span className="text-purple-300 mt-1">
            <ArrowRight size={16} />
          </span>
          <div>
            <span className="font-bold text-white">
              Multiple Project Development
            </span>
            <br />
            Was involved and developed on several key projects for Semurai,
            including EgenLista (customer list-building tool), Offertu (lead
            generation platform), BlueRedGold (corporate website), and Leadvio
            (LinkedIn automation tool). Created responsive UIs with the most
            modern libraries & frameworks and full stack solutions using
            Next.js, TypeScript, Shadcn and Tailwind CSS.
          </div>
        </motion.li>
        <motion.li
          variants={item}
          className="text-base flex gap-2 text-gray-300"
        >
          <span className="text-purple-300 mt-1">
            <ArrowRight size={16} />
          </span>
          <div>
            <span className="font-bold text-white">
              Dashboard & Backend Integration
            </span>
            <br />
            Engineered dynamic dashboard experiences with advanced features like
            date ranges, charts, and real-time filtering through calendar.
            Integrated MongoDB, Prisma, and NextAuth for authentication systems.
            Deployed projects to Vercel and Digital Ocean with proper DNS and
            SSL configurations.
          </div>
        </motion.li>
        <motion.li
          variants={item}
          className="text-base flex gap-2 text-gray-300"
        >
          <span className="text-purple-300 mt-1">
            <ArrowRight size={16} />
          </span>
          <div>
            <span className="font-bold text-white">
              UI/UX & Content Management
            </span>
            <br />
            Implemented modern component libraries including Shadcn and custom
            animations with Framer Motion. Built reusable components such as
            carousels, accordions, and parallax heroes. Integrated Sanity CMS
            for dynamic content management on client projects and optimized for
            SEO performance.
          </div>
        </motion.li>
        <motion.li
          variants={item}
          className="text-base flex gap-2 text-gray-300"
        >
          <span className="text-purple-300 mt-1">
            <ArrowRight size={16} />
          </span>
          <div>
            <span className="font-bold text-white">Project Management</span>
            <br />
            Participated in agile development workflow by maintaining Kanban
            boards on GitHub for project tracking and organization self
            sufficiently. Followed proper Git etiquette with feature branches,
            pull requests, and code reviews. Collaborated in dev sprints with
            regular follow-ups with the scrum master to ensure timely delivery
            of features and maintain project momentum.
          </div>
        </motion.li>
      </motion.ul>

      {!isAccordionOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-6"
        >
          <button
            onClick={toggleAccordion}
            className="flex items-center gap-1 text-purple-300"
          >
            <span>View projects</span>
            <ChevronDown size={16} />
          </button>
        </motion.div>
      )}

      <ProjectDetails
        isOpen={isAccordionOpen}
        toggleAccordion={toggleAccordion}
      />
    </motion.div>
  );
};

export default Semurai;
