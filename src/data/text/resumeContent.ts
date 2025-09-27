import type { Theme } from '../../types/theme';

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface ResumeContent {
  education: EducationItem[];
  experience: ExperienceItem[];
}

export const getResumeContent = (_theme: Theme, _useThemedContent = true): ResumeContent => {
  const startDate = new Date(2025, 8, 22); // September 22, 2025 (month is 0-indexed)
  const now = new Date();
  const monthsSince = Math.max(
    0,
    (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth())
  );
  const monthsLabel = monthsSince === 1 ? '1 month' : `${monthsSince} months`;

  const baseContent: ResumeContent = {
    education: [
      {
        institution: "University of Washington Tacoma",
        degree: "Bachelor of Science in Computer Science and Systems",
        period: "September 2023 — June 2025",
      },
      {
        institution: "South Seattle Community College",
        degree: "Associate of Science",
        period: "September 2021 — June 2023",
      }
    ],
    experience: [
      {
        title: "Software Developer",
        company: "maxRTE",
        period: `September 2025 — present • ${monthsLabel}`,
        location: "Remote",
        achievements: [
          "Working on it :)"
        ]
      },
      {
        title: "SET Student Mentor",
        company: "University of Washington Tacoma",
        period: "September 2024 — June 2025 • 9 months",
        location: "Tacoma, Washington",
        achievements: [
          "Assisted students with core courses or programming problems, fostering critical thinking and problem-solving skills.",
          "Managed multiple students simultaneously, provided one-on-one sessions, ensuring each received the support they needed."
        ]
      },
      {
        title: "Teaching Assistant",
        company: "University of Washington Tacoma",
        period: "September 2024 — December 2024 • 3 months",
        location: "Tacoma, Washington",
        achievements: [
          "Monitored student progress during lab activities, addressing questions and resolving challenges in real-time.",
          "Coordinated with the instructor and student feedback to improve the overall lab experience for students."
        ]
      },
      {
        title: " Regionals WA Division 2 Bronze Medalist - Team Cache Money",
        company: " ICPC International Collegiate Programming Competition",
        period: "November 2024 • 8 hours",
        location: "Tacoma, Washington",
        achievements: [
          "Collaborated on algorithmic challenges involving **greedy algorithms**, **dynamic programming**, and logic problems as part of a three-member team. Utilized Python, communication, and strategy to solve problems under time constraints.",
        ]
      }
    ]
  };

  // Theme-specific overrides could be added here if needed
  // useThemedContent parameter included for consistency with other content functions
  return baseContent;
};
