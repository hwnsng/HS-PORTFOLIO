import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/base.css";
import "../components/portfolio/IntroStars/styles.css";
import "../components/portfolio/SiteHeader/styles.css";
import "../components/portfolio/SocialRail/styles.css";
import "../components/portfolio/sections/SectionHeading/styles.css";
import "../components/portfolio/sections/HeroSection/styles.css";
import "../components/portfolio/sections/AchievementsSection/styles.css";
import "../components/portfolio/sections/ProjectsSection/styles.css";
import "../components/portfolio/sections/SkillsSection/styles.css";
import "../components/portfolio/sections/ActivitySection/styles.css";
import "../components/portfolio/sections/ContactSection/styles.css";
import "../styles/reveal.css";
import "../styles/responsive.css";
import "../styles/theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeScript = `
(() => {
  try {
    const theme = window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export const metadata: Metadata = {
  title: "프론트엔드 개발자 김환성 포트폴리오",
  description: "실사용 서비스 운영, 성능 최적화, 실시간 기능 구현 경험을 담은 프론트엔드 개발자 김환성의 포트폴리오입니다.",
  openGraph: {
    title: "프론트엔드 개발자 김환성 포트폴리오",
    description: "실사용 서비스 운영, 성능 최적화, 실시간 기능 구현 경험을 담은 프론트엔드 개발자 김환성의 포트폴리오입니다.",
    locale: "ko_KR",
    siteName: "Kim HwanSeong Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "프론트엔드 개발자 김환성 포트폴리오",
    description: "실사용 서비스 운영, 성능 최적화, 실시간 기능 구현 경험을 담은 프론트엔드 개발자 김환성의 포트폴리오입니다.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
