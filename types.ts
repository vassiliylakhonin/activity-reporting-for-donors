
export interface Indicator {
  id: string;
  name: string;
  target: number | string;
  achieved: number;
  unit: string;
  analysis: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  background: string;
  intervention: string[];
  transformation: string;
  achievements: string[];
  quote: string;
}

export interface PSSCase {
  id: string;
  issue: string;
  background: string;
  intervention: string;
  outcome: string;
  quote: string;
}

export interface Recommendation {
  category: string;
  points: string[];
}
