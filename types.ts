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
  commonMistakes: { mistake: string; explanation: string }[];
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

// Updated types for the Delivery Plan feature for more realism
export type Swimlane = 'Governance & Approvals' | 'UX & Design' | 'Dependencies' | 'Squad A: Accounts & Payments' | 'Squad B: Onboarding & Profile';

export interface PlanItem {
  id: string;
  swimlane: Swimlane;
  name: string;
  startSprint: number;
  sprints: number;
  type: 'Epic' | 'Milestone' | 'Task';
  dependencies: string[];
  description: string;
  progress: number;
}

export type RaidType = 'Risk' | 'Assumption' | 'Issue' | 'Dependency';

export interface RaidItem {
  id: string;
  type: RaidType;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  action: string;
  owner: string;
  status: 'Active' | 'Mitigated' | 'Closed' | 'Validated' | 'Invalidated' | 'In Progress' | 'Done';
}

export type RagStatus = 'Green' | 'Amber' | 'Red';

export interface SteerCoUpdate {
  date: string;
  ragStatus: RagStatus;
  highlights: string[];
  lowlights: string[];
  newRisks: string[];
  asks: string[];
}

export interface DeliveryPlanData {
  title: string;
  description: string;
  items: PlanItem[];
  raidLog: RaidItem[];
  steerCoUpdates: SteerCoUpdate[];
}