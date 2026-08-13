import {
  achievements,
  activities,
  contactLinks,
  featuredProjects,
  navItems,
  otherProjects,
  skills,
} from "@/data/portfolio";
import { AchievementsSection } from "@/components/portfolio/sections/AchievementsSection/AchievementsSection";
import { ActivitySection } from "@/components/portfolio/sections/ActivitySection/ActivitySection";
import { ContactSection } from "@/components/portfolio/sections/ContactSection/ContactSection";
import { HeroSection } from "@/components/portfolio/sections/HeroSection/HeroSection";
import { IntroStars } from "@/components/portfolio/IntroStars/IntroStars";
import { ProjectsSection } from "@/components/portfolio/sections/ProjectsSection/ProjectsSection";
import { ScrollReveal } from "@/components/portfolio/ScrollReveal/ScrollReveal";
import { SiteHeader } from "@/components/portfolio/SiteHeader/SiteHeader";
import { SocialRail } from "@/components/portfolio/SocialRail/SocialRail";
import { SkillsSection } from "@/components/portfolio/sections/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <>
      {/* 사이트 진입 시 보여주는 별 회전 인트로 애니메이션 */}
      <IntroStars />

      <div className="portfolio-shell">
        {/* 스크롤 위치에 맞춰 각 섹션 콘텐츠를 등장시키는 애니메이션 옵저버 */}
        <ScrollReveal />

        {/* 왼쪽 로고와 사이드 네비게이션 */}
        <SiteHeader navItems={navItems} />

        {/* 오른쪽 하단 GitHub, Velog 고정 링크 */}
        <SocialRail />

        <main>
          {/* 첫 화면 메인 타이틀 섹션 */}
          <HeroSection />

          {/* 측정 가능한 성과 요약 섹션 */}
          <AchievementsSection achievements={achievements} />

          {/* 주요 프로젝트와 기타 프로젝트 섹션 */}
          <ProjectsSection featuredProjects={featuredProjects} otherProjects={otherProjects} />

          {/* 기술 역량 섹션 */}
          <SkillsSection skills={skills} />

          {/* 활동 및 수상 이력 섹션 */}
          <ActivitySection activities={activities} />

          {/* 연락처 섹션 */}
          <ContactSection links={contactLinks} />
        </main>
      </div>
    </>
  );
}
