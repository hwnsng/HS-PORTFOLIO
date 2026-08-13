"use client";
// 상단 HS 로고와 스크롤에 따라 위치가 고정되는 사이드 네비게이션 컴포넌트

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import type { NavItem } from "@/types/portfolio";
import { smoothScrollToElement } from "@/utils/smoothScroll";

type SiteHeaderProps = {
  navItems: NavItem[];
};

type ThemeMode = "dark" | "light";

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const navRef = useRef<HTMLElement>(null);
  const [navTop, setNavTop] = useState<number | null>(null);
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? "#main");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");

  const handleSectionLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector<HTMLElement>(href);

    if (!target) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", href);
    setActiveHref(href);
    setIsMenuOpen(false);
    void smoothScrollToElement(target);
  };

  useEffect(() => {
    const updateNavPosition = () => {
      const navHeight = navRef.current?.offsetHeight ?? 0;
      const initialNavTop = window.innerHeight * 0.5 - navHeight / 2;
      const fixedNavTop = window.innerWidth <= 920 ? 54 : 56;

      setNavTop(Math.max(fixedNavTop, initialNavTop - window.scrollY));
    };

    updateNavPosition();
    window.addEventListener("scroll", updateNavPosition, { passive: true });
    window.addEventListener("resize", updateNavPosition);

    return () => {
      window.removeEventListener("scroll", updateNavPosition);
      window.removeEventListener("resize", updateNavPosition);
    };
  }, []);

  useEffect(() => {
    const sectionHrefs = ["#main", ...navItems.map((item) => item.href)];
    let ticking = false;

    const updateActiveSection = () => {
      ticking = false;

      const viewportAnchor = window.scrollY + window.innerHeight * 0.42;
      const nearestSection = sectionHrefs
        .map((href) => {
          const section = document.querySelector<HTMLElement>(href);
          return section ? { href, distance: Math.abs(section.offsetTop - viewportAnchor) } : null;
        })
        .filter((section): section is { href: string; distance: number } => section !== null)
        .sort((a, b) => a.distance - b.distance)[0];

      if (nearestSection) {
        setActiveHref(nearestSection.href);
      }
    };

    const requestActiveSectionUpdate = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
    window.addEventListener("resize", requestActiveSectionUpdate);

    return () => {
      window.removeEventListener("scroll", requestActiveSectionUpdate);
      window.removeEventListener("resize", requestActiveSectionUpdate);
    };
  }, [navItems]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme") as ThemeMode | null;
    const initialTheme = savedTheme === "light" ? "light" : "dark";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      window.localStorage.setItem("portfolio-theme", nextTheme);
      return nextTheme;
    });
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className={`site-header${isMenuOpen ? " is-menu-open" : ""}`}>
      <button
        className="mobile-menu-button"
        type="button"
        aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <a className={`brand${activeHref === "#main" ? " is-active" : ""}`} href="#main" aria-label="Kim HwanSeong portfolio home" onClick={(event) => handleSectionLinkClick(event, "#main")}>
        HS
      </a>
      <nav
        ref={navRef}
        className="nav"
        style={(navTop === null ? undefined : { "--nav-top": `${navTop}px` }) as CSSProperties | undefined}
        aria-label="portfolio navigation"
      >
        {navItems.map((item) => (
          <a className={activeHref === item.href ? "is-active" : ""} href={item.href} onClick={(event) => handleSectionLinkClick(event, item.href)} key={item.href}>
            {item.label}
          </a>
        ))}
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === "dark" ? "라이트 모드로 변경" : "다크 모드로 변경"} title={theme === "dark" ? "라이트 모드" : "다크 모드"}>
          {theme === "dark" ? (
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M12 4.4a1 1 0 0 0 1-1V2a1 1 0 1 0-2 0v1.4a1 1 0 0 0 1 1Zm0 15.2a1 1 0 0 0-1 1V22a1 1 0 1 0 2 0v-1.4a1 1 0 0 0-1-1ZM4.4 12a1 1 0 0 0-1-1H2a1 1 0 1 0 0 2h1.4a1 1 0 0 0 1-1Zm17.6-1h-1.4a1 1 0 1 0 0 2H22a1 1 0 1 0 0-2ZM5.2 6.6a1 1 0 0 0 1.4-1.4l-1-1a1 1 0 1 0-1.4 1.4l1 1Zm12.2 10.8a1 1 0 0 0 0 1.4l1 1a1 1 0 0 0 1.4-1.4l-1-1a1 1 0 0 0-1.4 0Zm1.4-10.8 1-1a1 1 0 0 0-1.4-1.4l-1 1a1 1 0 1 0 1.4 1.4ZM5.2 17.4l-1 1a1 1 0 1 0 1.4 1.4l1-1a1 1 0 0 0-1.4-1.4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M20.2 15.7a8.2 8.2 0 0 1-10-10 1 1 0 0 0-1.2-1.2A9 9 0 1 0 21.4 16.9a1 1 0 0 0-1.2-1.2Z" />
            </svg>
          )}
        </button>
      </nav>
      <button className="mobile-menu-backdrop" type="button" aria-label="메뉴 닫기" onClick={() => setIsMenuOpen(false)} />
    </header>
  );
}
