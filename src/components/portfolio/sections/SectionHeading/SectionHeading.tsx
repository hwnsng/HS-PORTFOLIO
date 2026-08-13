// 각 섹션의 작은 라벨과 제목을 공통 형식으로 렌더링하는 제목 컴포넌트

type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="section-head" data-reveal="soft">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
