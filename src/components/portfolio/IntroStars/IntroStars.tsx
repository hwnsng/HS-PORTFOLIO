"use client";
// 사이트 진입 시 중앙에서 별이 회전하며 퍼지는 인트로 애니메이션 컴포넌트

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const stars = Array.from({ length: 84 }, (_, index) => {
  const angle = index * 17;
  const distance = 140 + (index % 8) * 48 + Math.floor(index / 8) * 20;
  const size = 3.2 + (index % 4) * 0.9;
  const delay = (index % 12) * 0.04;
  const duration = 2.15 + (index % 6) * 0.1;

  return { angle, delay, distance, duration, size };
});

export function IntroStars() {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const timer = window.setTimeout(() => setIsMounted(false), 3900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="intro-stars" aria-hidden="true">
      <div className="intro-center-glow" />
      <div className="intro-star-field">
        {stars.map((star, index) => (
          <span
            className="intro-star"
            key={`${star.angle}-${index}`}
            style={
              {
                "--star-angle": `${star.angle}deg`,
                "--star-delay": `${star.delay}s`,
                "--star-distance": `${star.distance}px`,
                "--star-duration": `${star.duration}s`,
                "--star-size": `${star.size}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
