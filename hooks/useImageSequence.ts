"use client";

import { useEffect, useMemo, useState } from "react";

type ImageSequenceState = {
  frames: HTMLImageElement[];
  isLoaded: boolean;
  progress: number;
};

const buildFramePath = (index: number) =>
  `/sequence/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;

export function useImageSequence(frameCount = 192): ImageSequenceState {
  const [frames, setFrames] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  const sources = useMemo(
    () => Array.from({ length: frameCount }, (_, index) => buildFramePath(index)),
    [frameCount]
  );

  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = new Array(frameCount);
    let complete = 0;

    setFrames([]);
    setLoadedCount(0);

    sources.forEach((src, index) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;

      const markLoaded = () => {
        if (cancelled) return;

        images[index] = image;
        complete += 1;
        setLoadedCount(complete);

        if (complete === frameCount) {
          setFrames(images);
        }
      };

      image.onload = markLoaded;
      image.onerror = markLoaded;
    });

    return () => {
      cancelled = true;
    };
  }, [frameCount, sources]);

  return {
    frames,
    isLoaded: frames.length === frameCount,
    progress: frameCount === 0 ? 1 : loadedCount / frameCount
  };
}
