import { motion } from "framer-motion";
import Image from "next/image";

interface TiltImageProps {
  image: string;
  hoverImage?: string;
  title: string;
  priority: boolean;
  isAlternate?: boolean;
}

export const TiltImage = ({
  image,
  hoverImage,
  title,
  priority,
  isAlternate = false,
}: TiltImageProps) => {
  return (
    <div className="relative group">
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-purple-900/50"
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          rotateX: isAlternate ? 10 : -10,
          rotateY: isAlternate ? -12 : 12,
          scale: 1.1,
          zIndex: 20,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 35,
        }}
      >
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-900/50 transition-colors duration-300 pointer-events-none z-10" />

        <div className="relative aspect-video w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-2xl"
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {hoverImage && (
            <Image
              src={hoverImage}
              alt={`${title} hover preview`}
              fill
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
      </motion.div>

      {/* Purple spotlights */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-purple-600/50 to-purple-900/50 rounded-full blur-2xl opacity-30 z-30" />
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-600/50 to-purple-900/50 rounded-full blur-2xl opacity-30 z-30" />
    </div>
  );
};
