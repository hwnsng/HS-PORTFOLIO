"use client";
// 측정 가능한 성과 카드를 보여주는 Achievements 섹션 컴포넌트

import { useState } from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { Achievement } from "@/types/portfolio";
import { smoothScrollToElement } from "@/utils/smoothScroll";
import { SectionHeading } from "../SectionHeading/SectionHeading";

type AchievementsSectionProps = {
  achievements: Achievement[];
};

function getProjectId(projectName: string) {
  return `project-${projectName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const modalBackdropRef = useRef<HTMLDivElement | null>(null);

  const handleProjectJump = (projectName: string) => {
    const projectId = getProjectId(projectName);
    setSelectedAchievement(null);

    window.setTimeout(() => {
      const projectElement = document.getElementById(projectId);

      if (!projectElement) {
        return;
      }

      void smoothScrollToElement(projectElement, { block: "center", duration: 1050 }).then(() => {
        projectElement.classList.add("is-project-focused");
        projectElement.focus({ preventScroll: true });

        window.setTimeout(() => {
          projectElement.classList.remove("is-project-focused");
        }, 1800);
      });
    }, 80);
  };

  useEffect(() => {
    if (!selectedAchievement) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedAchievement(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modalBackdropRef.current?.scrollTo({ top: 0, left: 0 });
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedAchievement]);

  const achievementModal = selectedAchievement
    ? createPortal(
        <>
          <button className="achievement-modal-back-button" type="button" onClick={() => setSelectedAchievement(null)}>
            ← 뒤로가기
          </button>
          <div className="achievement-modal-backdrop" role="presentation" ref={modalBackdropRef} onClick={() => setSelectedAchievement(null)}>
            <article className="achievement-modal" role="dialog" aria-modal="true" aria-labelledby="achievement-modal-title" onClick={(event) => event.stopPropagation()}>
              <div className="achievement-modal-scroll">
              <span>{selectedAchievement.value}</span>
              <h3 id="achievement-modal-title">{selectedAchievement.title}</h3>
              <div className="achievement-project-jump">
                <p className="achievement-modal-kicker">{selectedAchievement.project}</p>
                <button type="button" onClick={() => handleProjectJump(selectedAchievement.project)}>
                  바로가기 -&gt;
                </button>
              </div>

              <section className="achievement-note-block">
                <h4>{selectedAchievement.detailTitle}</h4>
                <p>{selectedAchievement.detailSummary}</p>
              </section>

              <section className="achievement-note-block">
                <h4>작업한 내용</h4>
                <ul>
                  {selectedAchievement.detailBullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </section>

              <section className="achievement-note-block achievement-result-block">
                <h4>결과</h4>
                <p>{selectedAchievement.detailResult}</p>
              </section>

              <div className="achievement-image-grid">
                {selectedAchievement.images.map((image) => (
                  <figure key={image.src}>
                    <Image src={image.src} alt={image.alt} width={920} height={540} />
                    <figcaption>{image.caption}</figcaption>
                  </figure>
                ))}
              </div>
              </div>
            </article>
          </div>
        </>,
        document.body,
      )
    : null;

  return (
    <section className="section" id="achievements">
      <SectionHeading title="Achievements" subtitle="말만 하지 않고 실제 수치로 증명합니다." />
      <div className="achievement-flow">
        {achievements.map((item) => (
          <button className="achievement-card" type="button" data-reveal={item.title === "Lighthouse avg 100" ? "right" : "left"} onClick={() => setSelectedAchievement(item)} key={item.title}>
            <strong>{item.value}</strong>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="detail-hover-cue">View Detail -&gt;</span>
            </div>
          </button>
        ))}
      </div>
      {achievementModal}
    </section>
  );
}
