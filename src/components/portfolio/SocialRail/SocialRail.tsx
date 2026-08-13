// 오른쪽 하단에 고정되는 GitHub와 Velog 소셜 링크 레일 컴포넌트

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/hwnsng",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 1.5C6.2 1.5 1.5 6.3 1.5 12.1c0 4.6 3 8.5 7.1 9.9.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.3-.3-4.7-1.2-4.7-5.2 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 2.9 1.1.8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.1-2.4 4.9-4.7 5.2.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5 4.1-1.4 7-5.3 7-9.9C22.5 6.3 17.8 1.5 12 1.5Z" />
      </svg>
    ),
  },
  {
    label: "Velog",
    href: "https://velog.io/@hwnsng/posts",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.2 5.2c0-.7.5-1.2 1.2-1.2h2.3c.6 0 1 .3 1.2.9l3.2 9.4 3.2-9.4c.2-.6.6-.9 1.2-.9h2.1c.8 0 1.3.8 1 1.5l-5.2 13.6c-.2.6-.7.9-1.3.9h-2.2c-.6 0-1.1-.3-1.3-.9L4.3 5.6c-.1-.1-.1-.3-.1-.4Z" />
      </svg>
    ),
  },
];

export function SocialRail() {
  return (
    <nav className="social-rail" aria-label="social links">
      {socialLinks.map((link) => (
        <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label} key={link.label}>
          {link.icon}
        </a>
      ))}
      <span aria-hidden="true" />
    </nav>
  );
}
