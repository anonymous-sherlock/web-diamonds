"use client";
import ReactLenis from "lenis/react";
import { ReactNode, useRef } from "react";

// Define the props type
interface SmoothScrollingProps {
  children: ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  const lenisRef = useRef(null);

  return (
    <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
