// 부드러운 섹션 이동과 프로젝트 포커스에 사용하는 스크롤 유틸리티

type ScrollBlock = "start" | "center";

type SmoothScrollOptions = {
  block?: ScrollBlock;
  duration?: number;
};

let currentAnimationFrame: number | null = null;

function easeInOutCubic(progress: number) {
  return progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function getTargetY(target: HTMLElement, block: ScrollBlock) {
  const rect = target.getBoundingClientRect();
  const absoluteTop = rect.top + window.scrollY;

  if (block === "center") {
    return absoluteTop - (window.innerHeight - rect.height) / 2;
  }

  return absoluteTop;
}

export function smoothScrollToElement(target: HTMLElement, options: SmoothScrollOptions = {}) {
  const { block = "start", duration = 950 } = options;
  const startY = window.scrollY;
  const targetY = getTargetY(target, block);
  const distance = targetY - startY;

  if (currentAnimationFrame !== null) {
    cancelAnimationFrame(currentAnimationFrame);
    currentAnimationFrame = null;
  }

  if (Math.abs(distance) < 2) {
    window.scrollTo(0, targetY);
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, startY + distance * easeInOutCubic(progress));

      if (progress < 1) {
        currentAnimationFrame = requestAnimationFrame(animateScroll);
        return;
      }

      currentAnimationFrame = null;
      resolve();
    };

    currentAnimationFrame = requestAnimationFrame(animateScroll);
  });
}
