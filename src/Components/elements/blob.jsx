"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Blob = ({ d1, d2, text }) => {
  const lines = text.split(" ");
  const blobFrom = d1;
  const blobTo = d2;
  const blobRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 100, damping: 20 });
  const path = useTransform(smoothProgress, [0, 1], [blobFrom, blobTo]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const scale = useTransform(springX, [-50, 50], [0.95, 1.05]);
  const rotate = useTransform(springY, [-50, 50], [-5, 5]);

  useEffect(() => {
    if (!isHovering) {
      progress.set(0);
      mouseX.set(0);
      mouseY.set(0);
      return;
    }

    const handleMove = (e) => {
      if (!blobRef.current) return;
      const rect = blobRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      mouseX.set(dx / 10);
      mouseY.set(dy / 10);
      progress.set(e.clientX / window.innerWidth);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isHovering]);

  return (
    <div className="container">
      <motion.svg
        ref={blobRef}
        viewBox="-100 -100 200 200" // center and prevent clipping
        width="250"
        height="250"
        style={{
          x: springX,
          y: springY,
          scale: scale,
          rotate: rotate,
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          progress.set(0);
          mouseX.set(0);
          mouseY.set(0);
        }}
      >
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000" />
            <stop offset="100%" stopColor="#000" />
          </linearGradient>
        </defs>
        <motion.path
          d={path}
          fill="url(#blobGradient)"
          transition={{ duration: 0.2 }}
        />

        <text textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="18">
          {lines.map((word, index) => (
            <tspan
              x="0"
              // For the very first word, we can keep dy at 0
              // For subsequent words, move it down by 1.2em or so
              dy={index === 0 ? "0" : "1.2em"}
              key={index}
            >
              {word}
            </tspan>
          ))}
        </text>
      </motion.svg>
    </div>
  );
};

export default Blob;
