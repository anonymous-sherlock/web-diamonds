"use client";
import React, { useEffect } from "react";
import "@/public/css/cursor.css";
import gsap from "gsap";

type Props = {};

export const Cursor = (props: Props) => {
  useEffect(() => {
    const cursor = document.querySelector("#magic-cursor");

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div id="magic-cursor" style={{ opacity: 1, visibility: "inherit" }}>
      <div id="ball"></div>
    </div>
  );
};
