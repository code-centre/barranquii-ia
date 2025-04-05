/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { cn } from "../utils/cn";
import React, { useEffect, useState } from "react";

interface Props {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  horizontalScroll?: boolean;
  children: React.ReactNode;
}

export const InfiniteMovingCards = ({
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  horizontalScroll = true,
  children,
}: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
      if (horizontalScroll) {
        scrollHorizontal();
      }
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "90s");
      }
    }
  };

  function scrollHorizontal() {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--scroll-horizontal",
        `${containerRef.current.scrollWidth}px`
      );
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full w-max items-center gap-x-10 py-4  flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </ul>
    </div>
  );
};

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/exhaustive-deps */


/* eslint-disable react-hooks/exhaustive-deps */
