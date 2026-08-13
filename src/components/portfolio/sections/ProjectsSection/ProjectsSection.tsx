"use client";
// 주요 프로젝트와 기타 프로젝트 목록을 보여주는 Project 섹션 컴포넌트

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { FeaturedProject, OtherProject } from "@/types/portfolio";
import { SectionHeading } from "../SectionHeading/SectionHeading";

type PortfolioProject = FeaturedProject | OtherProject;

type ProjectsSectionProps = {
  featuredProjects: FeaturedProject[];
  otherProjects: OtherProject[];
};

type ProjectImage = {
  src: string;
  caption: string;
};

type ZoomOrigin = {
  x: number;
  y: number;
};

function getProjectId(projectName: string) {
  return `project-${projectName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

function getProjectStacks(project: PortfolioProject) {
  return Array.isArray(project.stack) ? project.stack : project.stack.split(", ");
}

const projectImages = {
  "gbsw.gg": [
    { src: "/assets/project-images/gbsw-gg/gbsw-gg-03.png", caption: "로그인" },
    { src: "/assets/project-images/gbsw-gg/gbsw-gg-05.jpg", caption: "학생 탑승체크" },
    { src: "/assets/project-images/gbsw-gg/gbsw-gg-02.png", caption: "도우미 탑승체크" },
    { src: "/assets/project-images/gbsw-gg/gbsw-gg-01.png", caption: "도우미 인원체크" },
    { src: "/assets/project-images/gbsw-gg/gbsw-gg-04.png", caption: "실사용자 지표" },
  ],
  zipchak: [
    { src: "/assets/project-images/zipchak/zipchak-12.png", caption: "메인 화면" },
    { src: "/assets/project-images/zipchak/zipchak-11.png", caption: "매물 분석" },
    { src: "/assets/project-images/zipchak/zipchak-10.png", caption: "매물 분석 결과" },
    { src: "/assets/project-images/zipchak/zipchak-17.png", caption: "체크리스트" },
    { src: "/assets/project-images/zipchak/zipchak-14.png", caption: "체크리스트 매물 추가" },
    { src: "/assets/project-images/zipchak/zipchak-13.png", caption: "지도" },
    { src: "/assets/project-images/zipchak/zipchak-07.png", caption: "대출가이드 시작" },
    { src: "/assets/project-images/zipchak/zipchak-06.png", caption: "대출가이드 결과" },
  ],
  gesture: [
    { src: "/assets/project-images/gesture/gesture-03.png", caption: "메인페이지" },
    { src: "/assets/project-images/gesture/gesture-11.png", caption: "통화 페이지" },
    { src: "/assets/project-images/gesture/gesture-01.png", caption: "단체 영상통화" },
    { src: "/assets/project-images/gesture/gesture-04.png", caption: "수어 자막" },
    { src: "/assets/project-images/gesture/gesture-07.png", caption: "영상통화 가이드 시작" },
    { src: "/assets/project-images/gesture/gesture-09.png", caption: "카메라 가이드" },
    { src: "/assets/project-images/gesture/gesture-08.png", caption: "자막 가이드" },
    { src: "/assets/project-images/gesture/gesture-13.png", caption: "헤더 알림 모달" },
  ],
  Weesh: [
    { src: "/assets/project-images/weesh/weesh-03.png", caption: "어드민 메인 화면" },
    { src: "/assets/project-images/weesh/weesh-02.png", caption: "상담 신청 확인 모달" },
    { src: "/assets/project-images/weesh/weesh-01.png", caption: "상담 수락 후 재확인" },
  ],
  "의성 귀촌 포털": [
    { src: "/assets/project-images/uiseong/uiseong-03.png", caption: "메인페이지" },
    { src: "/assets/project-images/uiseong/uiseong-02.png", caption: "로그인" },
    { src: "/assets/project-images/uiseong/uiseong-08.png", caption: "회원가입" },
    { src: "/assets/project-images/uiseong/uiseong-07.png", caption: "커뮤니티" },
    { src: "/assets/project-images/uiseong/uiseong-01.png", caption: "AI 챗봇" },
    { src: "/assets/project-images/uiseong/uiseong-06.png", caption: "주거공고" },
    { src: "/assets/project-images/uiseong/uiseong-05.png", caption: "멘토" },
    { src: "/assets/project-images/uiseong/uiseong-04.png", caption: "멘토 프로필 조회" },
  ],
  DevClass: [
    { src: "/assets/project-images/devclass/devclass-10.png", caption: "메인화면" },
    { src: "/assets/project-images/devclass/devclass-09.png", caption: "로그인" },
    { src: "/assets/project-images/devclass/devclass-12.png", caption: "회원가입" },
    { src: "/assets/project-images/devclass/devclass-03.png", caption: "강의 상세 보기" },
    { src: "/assets/project-images/devclass/devclass-04.png", caption: "강의 시청 페이지" },
    { src: "/assets/project-images/devclass/devclass-11.png", caption: "장바구니" },
    { src: "/assets/project-images/devclass/devclass-02.png", caption: "강사 대시보드" },
    { src: "/assets/project-images/devclass/devclass-05.png", caption: "관리자 강의 관리" },
  ],
} satisfies Record<string, ProjectImage[]>;

function getProjectImages(projectName: string) {
  return projectImages[projectName as keyof typeof projectImages] ?? [];
}

function ProjectCard({ project, onSelect }: { project: FeaturedProject; onSelect: (project: PortfolioProject) => void }) {
  return (
    <article
      className="project-item"
      id={getProjectId(project.name)}
      role="button"
      tabIndex={0}
      data-reveal={project.name === "zipchak" ? "right" : "left"}
      onClick={() => onSelect(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(project);
        }
      }}
    >
      <div className="project-main">
        <div className="project-title-row">
          <Image src={project.logo} alt={`${project.name} logo`} width={58} height={58} sizes="58px" />
          <div>
            <span>{project.label}</span>
            <h3>{project.name}</h3>
          </div>
        </div>
        <p>{project.summary}</p>
        <div className="project-meta">
          <span>{project.period}</span>
          <span>{project.team}</span>
        </div>
        <div className="stack-list">
          {project.stack.map((stack) => (
            <span key={stack}>{stack}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
            GitHub
          </a>
          {project.website ? (
            <a href={project.website} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
              WebSite
            </a>
          ) : null}
        </div>
        <span className="detail-hover-cue">View Detail -&gt;</span>
      </div>
      <div className="project-detail">
        <ul>
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="metric-grid">
          {project.metrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function CompactProjectCard({ project, onSelect }: { project: OtherProject; onSelect: (project: PortfolioProject) => void }) {
  return (
    <article className="compact-card" role="button" tabIndex={0} data-reveal="scale" onClick={() => onSelect(project)} onKeyDown={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSelect(project);
      }
    }}>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <span>{project.stack}</span>
      <strong className="detail-hover-cue">View Detail -&gt;</strong>
    </article>
  );
}

export function ProjectsSection({ featuredProjects, otherProjects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState<ZoomOrigin>({ x: 50, y: 50 });
  const modalBackdropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      if (selectedImage) {
        closeImageViewer();
        return;
      }

      closeProjectModal();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modalBackdropRef.current?.scrollTo({ top: 0, left: 0 });
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject, selectedImage]);

  const closeProjectModal = () => {
    setSelectedImage(null);
    setIsImageZoomed(false);
    setZoomOrigin({ x: 50, y: 50 });
    setSelectedProject(null);
  };

  const openImageViewer = (image: ProjectImage) => {
    setSelectedImage(image);
    setIsImageZoomed(false);
    setZoomOrigin({ x: 50, y: 50 });
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
    setIsImageZoomed(false);
    setZoomOrigin({ x: 50, y: 50 });
  };

  const handleImageZoomClick = (event: MouseEvent<HTMLButtonElement>) => {
    const image = event.currentTarget.querySelector("img");

    if (!image) {
      return;
    }

    const rect = image.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((event.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((event.clientY - rect.top) / rect.height) * 100));

    setZoomOrigin({ x, y });
    setIsImageZoomed(true);
  };

  const imageZoomStyle = {
    "--zoom-x": `${zoomOrigin.x}%`,
    "--zoom-y": `${zoomOrigin.y}%`,
  } as CSSProperties;

  const projectModal = selectedProject
    ? createPortal(
        <>
          <button className="project-modal-back-button" type="button" onClick={closeProjectModal}>
            ← 뒤로가기
          </button>
          <div className="project-modal-backdrop" role="presentation" ref={modalBackdropRef} onClick={closeProjectModal}>
            <article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}>
              <div className="project-modal-head">
                <span>{selectedProject.period}</span>
                <h2 id="project-modal-title">{selectedProject.name}</h2>
                <p>{selectedProject.modalSubtitle}</p>
              </div>

              <div className="project-modal-overview">
                <strong>{selectedProject.team}</strong>
                <p>{selectedProject.modalOverview}</p>
              </div>

              <div className="project-modal-stack">
                {getProjectStacks(selectedProject).map((stack) => (
                  <span key={stack}>{stack}</span>
                ))}
              </div>

              <div className="project-modal-section-list">
                {selectedProject.modalSections.map((section) => (
                  <section className="project-modal-section" key={section.title}>
                    <h3>{section.title}</h3>
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <section className="project-modal-result">
                <h3>Result</h3>
                <div>
                  {selectedProject.modalResults.map((result) => (
                    <strong key={result}>{result}</strong>
                  ))}
                </div>
              </section>

              {getProjectImages(selectedProject.name).length > 0 ? (
                <section className="project-modal-gallery">
                  <h3>Project Screens</h3>
                  <div>
                    {getProjectImages(selectedProject.name).map((image) => (
                      <figure key={image.src}>
                        <button type="button" onClick={() => openImageViewer(image)} aria-label={`${image.caption} 전체화면으로 보기`}>
                          <Image src={image.src} alt={`${selectedProject.name} ${image.caption}`} width={1280} height={760} />
                        </button>
                        <figcaption>{image.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              ) : null}
            </article>
          </div>
          {selectedImage ? (
            <div className="project-image-viewer" role="dialog" aria-modal="true" aria-label={`${selectedImage.caption} 이미지 전체화면`}>
              <button className="project-image-back-button" type="button" onClick={closeImageViewer}>
                ← 뒤로가기
              </button>
              <button
                className="project-image-zoom-button"
                type="button"
                onClick={() => setIsImageZoomed((current) => !current)}
              >
                {isImageZoomed ? "원본 보기" : "돋보기"}
              </button>
              <div className={`project-image-viewer-content${isImageZoomed ? " is-zoomed" : ""}`} style={imageZoomStyle}>
                <button
                  className="project-image-zoom-target"
                  type="button"
                  onClick={handleImageZoomClick}
                  aria-label="클릭한 위치 확대하기"
                >
                  <Image src={selectedImage.src} alt={`${selectedProject.name} ${selectedImage.caption}`} width={1920} height={1080} priority />
                </button>
                <p>{selectedImage.caption}</p>
              </div>
            </div>
          ) : null}
        </>,
        document.body,
      )
    : null;

  return (
    <section className="section" id="projects">
      <SectionHeading title="Main Project" subtitle="개발이 어려워도 사용자의 입장에서 편해진다면 어떻게든 완성해냅니다." />
      <div className="project-list">
        {featuredProjects.map((project) => (
          <ProjectCard project={project} onSelect={setSelectedProject} key={project.name} />
        ))}
      </div>

      <div className="etc-project-section" data-reveal="soft">
        <h3>ETC.</h3>
        <p>메인 프로젝트 외에도 서비스 흐름을 직접 설계하고 구현한 프로젝트입니다.</p>
      </div>
      <div className="other-projects">
        {otherProjects.map((project) => (
          <CompactProjectCard project={project} onSelect={setSelectedProject} key={project.name} />
        ))}
      </div>
      {projectModal}
    </section>
  );
}
