// 이메일 연락 CTA를 보여주는 Contact 섹션 컴포넌트

import type { ContactLink } from "@/types/portfolio";
import { SectionHeading } from "../SectionHeading/SectionHeading";

type ContactSectionProps = {
  links: ContactLink[];
};

export function ContactSection({ links }: ContactSectionProps) {
  const emailLink = links[0];

  return (
    <section className="section contact-section" id="contact">
      <div>
        <SectionHeading title="Contact" subtitle="좋은 인연을 만들기 위해 항상 기다리고 있습니다." />
        <address className="contact-list" data-reveal="scale" aria-label="이메일 연락처">
          {emailLink?.href ? (
            <>
              <a className="contact-email" href={emailLink.href}>
                {emailLink.label}
              </a>
              <p className="contact-note">실사용 서비스 운영 경험, 성능 최적화, 실시간 데이터 처리 경험을 바탕으로 사용자에게 바로 닿는 웹 서비스를 만들고 싶습니다.</p>
            </>
          ) : null}
        </address>
      </div>
    </section>
  );
}
