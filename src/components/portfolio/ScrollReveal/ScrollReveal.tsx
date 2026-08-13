"use client";
// 스크롤 위치에 맞춰 섹션 요소들을 자연스럽게 등장시키는 reveal 옵저버

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.16,
      },
    );

    const observeRevealItem = (item: HTMLElement) => {
      if (item.classList.contains("is-revealed")) {
        return;
      }

      revealObserver.observe(item);
    };

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(observeRevealItem);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          if (node.matches("[data-reveal]")) {
            observeRevealItem(node);
          }

          node.querySelectorAll<HTMLElement>("[data-reveal]").forEach(observeRevealItem);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
