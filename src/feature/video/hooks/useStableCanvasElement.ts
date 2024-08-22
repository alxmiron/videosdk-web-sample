import { useEffect, useRef, useState } from 'react';

export const useStableCanvasElement = (key: string) => {
  const videoRef = useRef<HTMLCanvasElement | null>(null);
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!videoWrapperRef.current) {
      throw new Error('Wrapper ref is not set');
    }

    const canvasElement = getCanvasElement(key);
    videoWrapperRef.current.appendChild(canvasElement);
    videoRef.current = canvasElement;
    setIsMounted(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    videoRef,
    videoWrapperRef,
    isMounted
  } as const;
};

// Canvas should be singleton otherwise it will create memory leak (zoom sdk issue)
// zoom issue: `WARNING: Too many active WebGL contexts. Oldest context will be lost.`
const getCanvasElement = (key: string): HTMLCanvasElement => {
  let canvas = cache[key];
  if (canvas) {
    return canvas;
  }

  canvas = window.document.createElement('canvas');
  cache[key] = canvas;

  return canvas;
};

const cache: Record<string, HTMLCanvasElement | undefined> = {};
