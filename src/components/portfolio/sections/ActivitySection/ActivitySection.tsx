"use client";
// 활동과 수상 이력을 연도별로 보여주는 Activity & Career 섹션 컴포넌트

import { useMemo, useState } from "react";
import type { Activity } from "@/types/portfolio";
import { SectionHeading } from "../SectionHeading/SectionHeading";

type ActivitySectionProps = {
  activities: Activity[];
};

const activityYears = ["2024", "2025", "2026"] as const;

function getActivityBadgeClass(highlight: string) {
  if (highlight.includes("금상") || highlight.includes("동상") || highlight.includes("최우수상")) {
    return "timeline-badge is-award";
  }

  if (highlight.includes("자격증")) {
    return "timeline-badge is-license";
  }

  return "timeline-badge";
}

export function ActivitySection({ activities }: ActivitySectionProps) {
  const [selectedYear, setSelectedYear] = useState<(typeof activityYears)[number]>("2026");
  const filteredActivities = useMemo(() => activities.filter((activity) => activity.years.includes(selectedYear)), [activities, selectedYear]);

  return (
    <section className="section" id="activity">
      <SectionHeading title="Activity & Career" subtitle="활동들을 하며 저의 부족한점을 어떻게든 찾아 극복해냅니다." />
      <div className="activity-year-tabs" data-reveal="soft" aria-label="활동 연도 선택">
        {activityYears.map((year) => (
          <button className={selectedYear === year ? "is-active" : ""} type="button" onClick={() => setSelectedYear(year)} key={year}>
            {year}
          </button>
        ))}
      </div>
      <div className="timeline">
        {filteredActivities.map((activity) => (
          <div className="timeline-row" data-reveal="left" key={`${activity.date}-${activity.title}`}>
            <time>{activity.date}</time>
            <div>
              {activity.highlight ? <span className={getActivityBadgeClass(activity.highlight)}>{activity.highlight}</span> : null}
              <p>{activity.title}</p>
              <small>{activity.description}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
