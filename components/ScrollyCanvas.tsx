"use client";

import { useImageSequence } from "@/hooks/useImageSequence";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Overlay from "./Overlay";

const FRAME_COUNT = 240;

export default function ScrollyCanvas() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const { frames, isLoaded, progress } = useImageSequence(FRAME_COUNT);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.55, 0.25, 0.68]);
  const loadOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextFrame = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.round(latest * (FRAME_COUNT - 1)))
    );

    setFrameIndex((current) => (current === nextFrame ? current : nextFrame));
  });

  useEffect(() => {
    const updateCanvasSize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize, { passive: true });

    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  const renderFrame = useCallback(() => {
    const canvas = canvasRef.current;
    const image = frames[frameIndex] ?? frames.find(Boolean);

    if (!canvas || !image || canvasSize.width === 0 || canvasSize.height === 0) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvasSize.width;
    const height = canvasSize.height;

    if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    }

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, width, height);

    // Cover-fit: scale image to fill the entire canvas, crop overflow
    const imageRatio = image.naturalWidth / image.naturalHeight;
    const canvasRatio = width / height;
    const drawWidth = canvasRatio > imageRatio ? width : height * imageRatio;
    const drawHeight = canvasRatio > imageRatio ? width / imageRatio : height;
    const offsetX = (width - drawWidth) / 2;
    const offsetY = (height - drawHeight) / 2;

    context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  }, [canvasSize.height, canvasSize.width, frameIndex, frames]);

  useEffect(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(renderFrame);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [renderFrame]);

  return (
    <section ref={sectionRef} className="relative h-[500vh] bg-canvas">
      <div className="sticky top-0 h-screen overflow-hidden bg-canvas">
        <canvas ref={canvasRef} className="h-full w-full bg-canvas" aria-hidden="true" />

        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,rgba(10,26,48,0.06)_42%,rgba(10,26,48,0.72)_100%)]"
          style={{ opacity: vignetteOpacity }}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#1a110a] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#0a1a30]/80 to-transparent" />

        <Overlay scrollProgress={scrollYProgress} />

        {!isLoaded && (
          <motion.div
            className="absolute inset-0 z-20 grid place-items-center bg-canvas text-xs font-medium uppercase tracking-[0.28em] text-stone-400"
            style={{ opacity: loadOpacity }}
          >
            Loading {Math.round(progress * 100)}%
          </motion.div>
        )}
      </div>
    </section>
  );
}
