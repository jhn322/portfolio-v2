import { ReactNode } from "react";

// Inline SVGs for core skills
export const skillLogos: Record<string, ReactNode> = {
  React: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <circle cx="16" cy="16" r="2.5" fill="#61DAFB" />
      <ellipse
        rx="15"
        ry="6"
        cx="16"
        cy="16"
        stroke="#61DAFB"
        strokeWidth="2"
        fill="none"
      />
      <ellipse
        rx="15"
        ry="6"
        cx="16"
        cy="16"
        stroke="#61DAFB"
        strokeWidth="2"
        fill="none"
        transform="rotate(60 16 16)"
      />
      <ellipse
        rx="15"
        ry="6"
        cx="16"
        cy="16"
        stroke="#61DAFB"
        strokeWidth="2"
        fill="none"
        transform="rotate(120 16 16)"
      />
    </svg>
  ),
  "Next.js": (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="32" height="32" rx="16" fill="#000" />
      <path d="M10 10h2v12h-2zM20 10h2v12h-2z" fill="#fff" />
      <path d="M10 10l12 12" stroke="#fff" strokeWidth="2" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <path
        d="M16 10c-4 0-6 2-8 6 2-2 4-2 6 0 2 2 4 2 6 0 2-2 4-2 6 0-2-4-4-6-8-6z"
        fill="#38BDF8"
      />
      <path
        d="M8 18c-4 0-6 2-8 6 2-2 4-2 6 0 2 2 4 2 6 0 2-2 4-2 6 0-2-4-4-6-8-6z"
        fill="#38BDF8"
      />
    </svg>
  ),
  TypeScript: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="32" height="32" rx="6" fill="#3178C6" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontSize="14"
        fill="#fff"
        fontFamily="Arial"
      >
        TS
      </text>
    </svg>
  ),
  JavaScript: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="32" height="32" rx="6" fill="#F7DF1E" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontSize="14"
        fill="#000"
        fontFamily="Arial"
      >
        JS
      </text>
    </svg>
  ),
  "HTML/CSS": (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="32" height="32" rx="6" fill="#E44D26" />
      <text x="10" y="22" fontSize="10" fill="#fff" fontFamily="Arial">
        HTML
      </text>
      <rect x="16" width="16" height="32" rx="6" fill="#1572B6" />
      <text x="22" y="22" fontSize="10" fill="#fff" fontFamily="Arial">
        CSS
      </text>
    </svg>
  ),
  "Vue.js": (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <polygon points="16,6 26,26 6,26" fill="#42b883" />
      <polygon points="16,10 23,24 9,24" fill="#35495e" />
    </svg>
  ),
  "Node.js": (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <circle cx="16" cy="16" r="16" fill="#3C873A" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontSize="14"
        fill="#fff"
        fontFamily="Arial"
      >
        Node
      </text>
    </svg>
  ),
  MongoDB: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <ellipse cx="16" cy="16" rx="12" ry="16" fill="#47A248" />
      <rect x="14" y="8" width="4" height="16" rx="2" fill="#fff" />
    </svg>
  ),
  Prisma: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <polygon points="16,6 28,26 4,26" fill="#0C344B" />
      <polygon points="16,10 24,24 8,24" fill="#56A6E0" />
    </svg>
  ),
  Docker: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="32" height="32" rx="6" fill="#2496ED" />
      <rect x="8" y="16" width="4" height="4" fill="#fff" />
      <rect x="14" y="16" width="4" height="4" fill="#fff" />
      <rect x="20" y="16" width="4" height="4" fill="#fff" />
      <rect x="11" y="12" width="4" height="4" fill="#fff" />
      <rect x="17" y="12" width="4" height="4" fill="#fff" />
    </svg>
  ),
  Git: (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="32" height="32" rx="6" fill="#F05032" />
      <circle cx="16" cy="16" r="6" fill="#fff" />
      <rect x="15" y="10" width="2" height="12" fill="#F05032" />
      <rect x="10" y="15" width="12" height="2" fill="#F05032" />
    </svg>
  ),
};
