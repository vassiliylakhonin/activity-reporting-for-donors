
import { Indicator, CaseStudy, PSSCase, Recommendation } from './types';

export const SUMMARY_DATA = {
  title: "EmpowerYouth Initiative (EYI)",
  organization: "Regional Youth Partners",
  agency: "International Development Agency",
  location: "Central Region Hub",
  period: "March 2024 – November 2024",
  description: "The project sought to address root causes of youth vulnerability by building resilience networks and promoting social inclusion. It effectively engaged vulnerable youth through specialized training in leadership, media literacy, psychosocial support, and employability skills.",
  keyHighlights: [
    "Reached 118 youth (target: 50)",
    "78.8% female participation",
    "481 total session attendees",
    "3 memorandums of cooperation established"
  ]
};

export const LOCATIONS = [
  "Central Hub - Main Office",
  "North District Youth Center",
  "South Community Resilience Space",
  "East Sector Vocational Lab",
  "West Regional Crisis Support Hub",
  "Satellite Campus - Community College"
];

export const MILESTONES = [
  {
    date: "March 2024",
    title: "Project Launch & Recruitment",
    description: "Established partnerships with 3 local colleges and launched social media outreach campaigns.",
    status: "completed"
  },
  {
    date: "May 2024",
    title: "Core Training Phase",
    description: "Conducted intensive workshops on Media Literacy and Critical Thinking for the first cohort.",
    status: "completed"
  },
  {
    date: "August 2024",
    title: "Psychosocial Intervention",
    description: "Peak period for individual consultations and family support sessions during summer break.",
    status: "completed"
  },
  {
    date: "October 2024",
    title: "Community Projects",
    description: "Participants led 5 independent volunteer initiatives in their local neighborhoods.",
    status: "completed"
  },
  {
    date: "November 2024",
    title: "Graduation & Impact Assessment",
    description: "Final certification ceremony and data collection for impact reporting.",
    status: "completed"
  }
];

export const INDICATORS: Indicator[] = [
  {
    id: "1.1",
    name: "Youth Engaged in Resilience Activities",
    target: 50,
    achieved: 69,
    unit: "Graduates",
    analysis: "The results suggest the potential to reach out to and engage with young people effectively. Outreach exceeded expectations with 481 total participants across various sessions."
  },
  {
    id: "2.1",
    name: "Female Participation Rate",
    target: 50,
    achieved: 78.8,
    unit: "%",
    analysis: "High female participation demonstrates an inclusive environment. Future iterations will focus on increasing male engagement for balanced representation."
  },
  {
    id: "3.2",
    name: "Stronger Support Networks",
    target: 25,
    achieved: 34,
    unit: "Youth",
    analysis: "Enhancement in support networks is crucial for personal well-being and resilience in facing life's challenges."
  },
  {
    id: "4.1",
    name: "Success Stories Documented",
    target: 1,
    achieved: 7,
    unit: "Stories",
    analysis: "Case studies provide qualitative insight into personal and social impacts."
  }
];

export const CASE_STUDIES: (CaseStudy & { tags: string[] })[] = [
  {
    id: "AS-01",
    name: "Alex",
    age: 19,
    gender: 'male',
    background: "Faced numerous life challenges including social isolation and lack of stable income. Contemplated moving abroad due to isolation and economic instability.",
    intervention: [
      "Leadership and media literacy training",
      "Regular psychologist sessions",
      "Social outings (bowling, picnics)",
      "Volunteering at a local children's foundation"
    ],
    transformation: "Initially reserved, Alex began to open up during informal discussions, demonstrating erudition and kindness.",
    achievements: [
      "Secured internship at a local Tech company",
      "Won 3rd place in a regional social video contest",
      "Praised by community leaders for educational volunteer work"
    ],
    quote: "The project helped me discover my talents and recognize the supportive communities around me.",
    tags: ["Employment", "Social", "Male"]
  },
  {
    id: "DM-02",
    name: "Dani",
    age: 19,
    gender: 'female',
    background: "Determined to expand knowledge and enhance personal development. Joined with a focus on communication and professional growth.",
    intervention: [
      "Intensive English proficiency classes",
      "Skill-building modules in conflict resolution",
      "Critical thinking workshops"
    ],
    transformation: "Stepped out of comfort zone to work confidently in groups and take on guiding roles.",
    achievements: [
      "Mastered complex communication rules",
      "Significantly expanded professional vocabulary",
      "Transitioned from quiet listener to active participant"
    ],
    quote: "I began to express my ideas with greater clarity and motivation for personal growth.",
    tags: ["Education", "Leadership", "Female"]
  }
];

export const PSS_CASES: PSSCase[] = [
  {
    id: "PSS-010",
    issue: "Trauma Recovery",
    background: "Mother of three experiencing acute stress after an accident.",
    intervention: "Trauma-focused therapy with a professional psychologist.",
    outcome: "Overcame fear, regained driving confidence, and restored family relationships.",
    quote: "I'm no longer afraid. I feel calmer and did everything I could."
  },
  {
    id: "PSS-007",
    issue: "Self-Esteem & Past Trauma",
    background: "Single mother with a history of domestic hardship.",
    intervention: "Cognitive Behavioral Therapy (CBT).",
    outcome: "Increased self-esteem, improved relationships, and emotional stability.",
    quote: "I'm grateful for what I have. I'm a free woman and working on myself."
  },
  {
    id: "PSS-005",
    issue: "Personal Boundaries",
    background: "Young woman facing self-doubt and relationship struggles.",
    intervention: "Socratic dialogue and life balance exercises.",
    outcome: "Set healthy personal boundaries and inspired future career planning.",
    quote: "I need to set my boundaries; otherwise, everyone becomes too comfortable taking advantage."
  }
];

export const LESSONS: Recommendation[] = [
  {
    category: "Operational Success",
    points: [
      "Collaborative partnerships with local crisis centers and colleges facilitate effective recruitment.",
      "Multi-language delivery (Kazakh, Russian, English) addresses the linguistic diversity of stakeholders.",
      "Flexible scheduling is necessary to avoid peak seasonal breaks and employment months."
    ]
  },
  {
    category: "Future Recommendations",
    points: [
      "Portfolio Creation: Help participants document progress with video testimonials and certifications.",
      "Peer Mentorship: Utilize alumni as mentors to inspire new cohorts.",
      "Employment Partnerships: Collaborate with local businesses for structured job placements.",
      "Gender Balance: Implement targeted outreach to increase male involvement for social cohesion."
    ]
  }
];
