
export interface ResourcesNeeded {
  time: string;
  budget: string;
  tools: string[];
  support: string;
}

export interface RealStoryExample {
  persona: string;
  challenge: string;
  action: string;
  result: string;
  skillsUsed: string[];
}

export interface Skill {
  skillName: string;
  category: string;
  marketDemand: string;
  skillType: string;
  requiredForLevel: { [level: string]: string };
  whatItLooksLike: string[];
  proofPoints: string[];
  resourcesNeeded: ResourcesNeeded;
  realStoryExample: RealStoryExample;
  commonMistakes: string[];
  interviewQuestions: string[];
}

export interface CareerLevel {
  level: number;
  title: string;
  yearsExperience: string;
  salaryRange: {
    uk: string;
    us: string;
  };
  typicalSpanOfControl: string;
  reportsTo: string;
  keyFocus: string;
  criticalCheckpoint: string;
}

export interface LevelRequirements {
    [level: string]: {
        mustHave: string[];
        niceToHave: string[];
        certifications: string[];
    };
}

export interface CareerPathway {
  name: string;
  description: string;
  keySkills: string[];
  typicalRoles: string[];
  salaryProgression: {
    uk: string;
    us: string;
  };
  timeToProgress: string;
}

export interface JobPostingExample {
  company: string;
  level: string;
  salary: string;
  requiredSkills: string[];
  niceToHave: string[];
}

export interface SkillDevelopmentTimeline {
  duration: string;
  target: string;
  focusSkills: string[];
  investmentRequired: {
    time: string;
    budget: string;
    certifications: string[];
  };
}