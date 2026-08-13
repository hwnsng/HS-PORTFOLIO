"use client";
// 첫 화면에 Frontend Developer KimHwanSeong 타이틀을 보여주는 Hero 섹션 컴포넌트

import { smoothScrollToElement } from "@/utils/smoothScroll";

export function HeroSection() {
  const scrollToAchievements = () => {
    const target = document.querySelector<HTMLElement>("#achievements");

    if (!target) {
      return;
    }

    void smoothScrollToElement(target);
  };

  return (
    <section className="hero section" id="main">
      <div className="hero-content">
        <h1 className="hero-title">
          <span>Frontend</span>
          <span>Developer</span>
          <span>KimHwanSeong</span>
        </h1>
        <button className="hero-scroll-cue" type="button" onClick={scrollToAchievements} aria-label="다음 섹션으로 이동">
          <span />
          <span />
        </button>
      </div>
    </section>
  );
}
