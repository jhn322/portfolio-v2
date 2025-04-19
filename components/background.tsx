"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const purpleColor = new THREE.Color(0x7c3aed);
    const darkPurpleColor = new THREE.Color(0x3b0764);

    for (let i = 0; i < particlesCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 100; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // z

      // Color - interpolate between dark purple and purple
      const mixedColor = purpleColor
        .clone()
        .lerp(darkPurpleColor, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      alphaTest: 0.001,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });

    // Points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Add some larger glowing points
    const glowGeometry = new THREE.BufferGeometry();
    const glowPositions = new Float32Array(200 * 3);
    const glowSizes = new Float32Array(200);

    for (let i = 0; i < 200; i++) {
      glowPositions[i * 3] = (Math.random() - 0.5) * 100;
      glowPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      glowPositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      glowSizes[i] = Math.random() * 0.5 + 0.1;
    }

    glowGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(glowPositions, 3)
    );
    glowGeometry.setAttribute("size", new THREE.BufferAttribute(glowSizes, 1));

    const glowMaterial = new THREE.PointsMaterial({
      size: 0.5,
      color: 0x9333ea,
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.8,
    });

    const glowPoints = new THREE.Points(glowGeometry, glowMaterial);
    scene.add(glowPoints);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event: MouseEvent) => {
      if (isInHeroSection) {
        mouseX = (event.clientX - windowHalfX) / 100;
        mouseY = (event.clientY - windowHalfY) / 100;
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isInHeroSection && event.touches.length === 1) {
        mouseX = (event.touches[0].clientX - windowHalfX) / 100;
        mouseY = (event.touches[0].clientY - windowHalfY) / 100;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);

    // Handle scroll to detect hero section
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Only consider in hero section when at least 50% of the hero is visible
        // and the hero occupies at least 50% of the viewport
        const heroVisiblePortion =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const heroVisiblePercentage = heroVisiblePortion / viewportHeight;

        setIsInHeroSection(heroVisiblePercentage > 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      if (isInHeroSection) {
        // In hero section: follow mouse movement
        targetX = mouseX * 0.5;
        targetY = -mouseY * 0.5;

        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.0003;

        // Add mouse interaction
        particles.rotation.x += (targetY - particles.rotation.x) * 0.02;
        particles.rotation.y += (targetX - particles.rotation.y) * 0.02;
      } else {
        // Outside hero section: automatic movement
        particles.rotation.x += 0.0002;
        particles.rotation.y += 0.00045;

        // Add subtle movement based on time
        particles.rotation.x += Math.sin(elapsedTime * 0.2) * 0.0005;
        particles.rotation.y += Math.cos(elapsedTime * 0.2) * 0.0005;
      }

      glowPoints.rotation.x = particles.rotation.x * 0.5;
      glowPoints.rotation.y = particles.rotation.y * 0.5;

      // Pulse the glow points
      glowMaterial.opacity = 0.6 + Math.sin(elapsedTime) * 0.2;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Clean up
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);

      scene.remove(particles);
      scene.remove(glowPoints);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      renderer.dispose();
    };
  }, [isInHeroSection]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
