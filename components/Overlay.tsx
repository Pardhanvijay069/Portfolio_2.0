"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import { ReactNode } from "react";

type OverlayProps = {
  scrollProgress: MotionValue<number>;
};

const copyBlocks = [
  {
    content: (
      <>
        Vijay - <span className="text-accent">Full Stack Developer</span>
      </>
    ),
    align: "items-center text-center",
    measure: "max-w-[14ch] sm:max-w-[15ch]",
    range: [0, 0.18, 0.3],
    y: [0, -28, -72]
  },
  {
    content: (
      <>
        I build <span className="text-accent">modern</span>{" "}
        <span className="text-stone-300 whitespace-nowrap">web experiences</span>
      </>
    ),
    align: "items-start text-left pl-6 sm:pl-12 lg:pl-24",
    measure: "max-w-[13ch] sm:max-w-[14ch]",
    range: [0.22, 0.34, 0.5],
    y: [60, 0, -46]
  },
  {
    content: (
      <>
        Bridging <span className="text-accent">design</span> and engineering
      </>
    ),
    align: "items-end text-right pr-6 sm:pr-12 lg:pr-24",
    measure: "max-w-[12ch] sm:max-w-[13ch]",
    range: [0.52, 0.64, 0.82],
    y: [58, 0, -42]
  }
] as const;

export default function Overlay({ scrollProgress }: OverlayProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-center">
      <div className="relative h-full w-full">
        {copyBlocks.map((block, idx) => (
          <OverlayText
            key={idx}
            align={block.align}
            measure={block.measure}
            range={block.range as [number, number, number]}
            scrollProgress={scrollProgress}
            content={block.content}
            y={block.y as [number, number, number]}
          />
        ))}
      </div>
    </div>
  );
}

function OverlayText({
  align,
  measure,
  range,
  scrollProgress,
  content,
  y
}: {
  align: string;
  measure: string;
  range: [number, number, number];
  scrollProgress: MotionValue<number>;
  content: ReactNode;
  y: [number, number, number];
}) {
  const inputRange = [...range];
  const opacity = useTransform(scrollProgress, inputRange, [0, 1, 0]);
  const translateY = useTransform(scrollProgress, inputRange, [...y]);
  const blur = useTransform(scrollProgress, inputRange, ["12px", "0px", "12px"]);

  return (
    <motion.div
      className={`absolute inset-x-0 top-1/2 flex -translate-y-1/2 px-[clamp(1rem,2vw,2rem)] ${align}`}
      style={{ opacity, y: translateY, filter: blur }}
    >
      <h1
        className={`${measure} w-full text-[clamp(2.35rem,5.4vw,6.4rem)] font-semibold leading-[0.96] tracking-[-0.035em] text-stone-50 [text-wrap:balance] drop-shadow-2xl sm:text-[clamp(2.8rem,5.1vw,6rem)] lg:text-[clamp(3.3rem,4.8vw,5.75rem)]`}
      >
        {content}
      </h1>
    </motion.div>
  );
}
