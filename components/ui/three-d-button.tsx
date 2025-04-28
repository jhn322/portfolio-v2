"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  MotionConfig,
  MotionValue,
  HTMLMotionProps,
} from "framer-motion";
import useMeasure from "react-use-measure";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Torus, Cone, Icosahedron } from "@react-three/drei";
import * as THREE from "three";
import { usePerformanceMode } from "@/hooks/use-performance-mode";

// Extend HTMLMotionProps<"button"> instead of React.ButtonHTMLAttributes
// Omit children as we define it explicitly
interface ThreeDButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

// Regular button props for mobile version
interface SimpleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

const AnimatedGroup = ({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.x = mouseX.get() * 0.3;
      groupRef.current.position.y = mouseY.get() * 0.3;
      groupRef.current.rotation.y = mouseX.get() * 0.15;
      groupRef.current.rotation.x = -mouseY.get() * 0.15;
      // Optional: Add subtle individual rotation to each shape
      groupRef.current.children.forEach((mesh, i) => {
        mesh.rotation.x += 0.005 * (i % 2 === 0 ? 1 : -1);
        mesh.rotation.y += 0.003 * (i % 2 === 0 ? -1 : 1);
      });
    }
  });

  // Render multiple shapes inside the group
  return (
    <group ref={groupRef}>
      {/* Sphere */}
      <Sphere args={[1.6, 32, 32]} position={[-2.5, -1.5, 0.5]}>
        <meshStandardMaterial color="#A78BFA" roughness={0.2} metalness={0.1} />
      </Sphere>
      {/* Torus */}
      <Torus
        args={[1.4, 0.5, 16, 100]}
        position={[2.2, 3, -0.8]}
        rotation={[0.5, -0.5, 0]}
      >
        <meshStandardMaterial color="#C4B5FD" roughness={0.2} metalness={0.1} />
      </Torus>
      {/* Cone */}
      <Cone
        args={[1.4, 2.4, 32]}
        position={[-2.8, 3.0, 1]}
        rotation={[0.2, 0.3, -0.3]}
      >
        <meshStandardMaterial color="#8B5CF6" roughness={0.2} metalness={0.1} />
      </Cone>
      {/* Icosahedron */}
      <Icosahedron args={[2.2, 0]} position={[2.8, -1.2, 0.2]}>
        <meshStandardMaterial
          color="#7C3AED"
          flatShading={false}
          roughness={0.2}
          metalness={0.1}
        />
      </Icosahedron>
    </group>
  );
};

const ThreeDButton = ({
  children,
  className,
  containerClassName,
  ...props
}: ThreeDButtonProps) => {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { shouldOptimize } = usePerformanceMode();

  // Spring physics for smooth animation
  const springConfig = { damping: 15, stiffness: 250, mass: 0.8 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (shouldOptimize) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = bounds;
    // Map mouse position to a range relative to button center
    const mappedX = ((clientX - left) / width - 0.5) * 2;
    const mappedY = ((clientY - top) / height - 0.5) * -2;
    mouseX.set(mappedX);
    mouseY.set(mappedY);
  };

  const handleMouseLeave = () => {
    if (shouldOptimize) return;

    mouseX.set(0);
    mouseY.set(0);
    mouseXSpring.set(0);
    mouseYSpring.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    if (shouldOptimize) return;

    setIsHovered(true);
  };

  // If we're on mobile, render a simple button without any animations
  if (shouldOptimize) {
    // Convert motion props to regular button props
    const simpleProps: SimpleButtonProps = {
      className: `relative grid place-items-center rounded-full bg-purple-700 px-8 py-4 font-semibold border border-purple-500 text-white shadow-lg transition-colors duration-300 hover:border-purple-400 hover:from-purple-800 hover:to-purple-600 ${containerClassName ?? ""}`,
      onClick: props.onClick,
      type: props.type,
      disabled: props.disabled,
      children: (
        <span
          className={`relative z-10 transition-colors duration-300 ${className ?? ""}`}
        >
          {children}
        </span>
      ),
    };

    return <button ref={ref} {...simpleProps} />;
  }

  // Desktop version with all animations
  return (
    <MotionConfig transition={{ type: "spring", ...springConfig }}>
      <motion.button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        whileTap={{ scale: 0.97 }}
        whileHover={{
          scale: 1.3,
          boxShadow: "0 0 25px 5px rgba(168, 85, 247, 0.2)",
        }}
        className={`relative grid place-items-center rounded-full bg-purple-700 px-8 py-4 font-semibold border border-purple-500 text-purple-50 shadow-lg transition-colors duration-300 hover:border-purple-400 hover:from-purple-800 hover:to-purple-600 ${containerClassName ?? ""}`}
        style={{ perspective: "1000px" }}
        {...props}
      >
        <motion.div
          className="absolute -top-32 -left-32 -bottom-32 -right-32 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {bounds.width > 0 && ( // Only render canvas once measured
            <Canvas
              orthographic
              camera={{ position: [0, 0, 12], zoom: 25 }}
              style={{ pointerEvents: "none" }}
              className="!absolute !inset-0"
              resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
            >
              {/* Lighting */}
              <ambientLight intensity={0.4} />
              <pointLight
                position={[10, 10, 10]}
                intensity={250}
                color="#FFD06B"
              />
              <pointLight
                position={[-10, -5, 5]}
                intensity={150}
                color="#C4B5FD"
              />
              <directionalLight
                position={[0, -5, 5]}
                intensity={0.8}
                color="#FFFFFF"
              />
              <AnimatedGroup mouseX={mouseXSpring} mouseY={mouseYSpring} />
            </Canvas>
          )}
        </motion.div>
        {/* Text content */}
        <motion.span
          className={`relative z-10 transition-colors duration-300 ${className ?? ""}`}
        >
          {children}
        </motion.span>
      </motion.button>
    </MotionConfig>
  );
};

export default ThreeDButton;
