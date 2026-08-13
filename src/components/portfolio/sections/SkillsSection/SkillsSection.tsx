"use client";
// 기술 역량 카드를 보여주는 Skills 섹션 컴포넌트

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Skill } from "@/types/portfolio";
import { SectionHeading } from "../SectionHeading/SectionHeading";

type SkillsSectionProps = {
  skills: Skill[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const modalBackdropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!selectedSkill) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedSkill(null);
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
  }, [selectedSkill]);

  const skillModal = selectedSkill
    ? createPortal(
        <>
          <button className="skill-modal-back-button" type="button" onClick={() => setSelectedSkill(null)}>
            ← 뒤로가기
          </button>
          <div className="skill-modal-backdrop" role="presentation" ref={modalBackdropRef} onClick={() => setSelectedSkill(null)}>
            <article className="skill-modal" role="dialog" aria-modal="true" aria-labelledby="skill-modal-title" onClick={(event) => event.stopPropagation()}>
              <div className="skill-modal-head">
                <span>{selectedSkill.highlight}</span>
                <h2 id="skill-modal-title">{selectedSkill.title}</h2>
                <p>{selectedSkill.detailTitle}</p>
              </div>

              <p className="skill-modal-summary">{selectedSkill.detailSummary}</p>

              <div className="skill-modal-projects">
                {selectedSkill.projects.map((project) => (
                  <strong key={project}>{project}</strong>
                ))}
              </div>

              <ul className="skill-modal-list">
                {selectedSkill.detailBullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </div>
        </>,
        document.body,
      )
    : null;

  return (
    <section className="section split-section" id="skills">
      <SectionHeading title="Skills" subtitle="다양한 기술들을 사용했고 상황별 기술 선택이 가능합니다." />
      <div className="skill-orbit">
        {skills.map((skill) => (
          <button className="skill-item" type="button" data-reveal="scale" onClick={() => setSelectedSkill(skill)} key={skill.title}>
            <h3>{skill.title}</h3>
          </button>
        ))}
      </div>
      {skillModal}
    </section>
  );
}
