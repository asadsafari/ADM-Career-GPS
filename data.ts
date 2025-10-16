
import { Skill, CareerLevel, LevelRequirements, CareerPathway, JobPostingExample, SkillDevelopmentTimeline } from './types';

export const allSkills: Skill[] = [
  {
    "skillName": "Scrum Framework Mastery",
    "category": "Agile Frameworks & Methodologies",
    "marketDemand": "80-85%",
    "skillType": "Must-Have",
    "requiredForLevel": {
      "entry": "4/5",
      "mid": "5/5",
      "senior": "5/5"
    },
    "whatItLooksLike": [
      "Facilitates Daily Standup in under 15 minutes with 100% team participation and clear action items",
      "Sprint Planning produces a sprint backlog that the team commits to with 90%+ completion rate",
      "Retrospectives generate 3-5 actionable improvements per sprint with 80%+ follow-through",
      "Adapts ceremony formats based on team maturity (e.g., uses silent writing for introverted teams)",
      "Coaches Product Owner on effective backlog refinement resulting in 2 sprints of ready stories"
    ],
    "proofPoints": [
      "Team velocity stabilizes within ±15% over 6 sprints",
      "Sprint goal achievement rate reaches 85%+",
      "Team satisfaction score for ceremonies is 8/10 or higher",
      "Zero retrospective action items are carried over incomplete for 3+ sprints",
      "Product Owner rates refinement effectiveness as 9/10 or higher",
      "Can articulate when to break Scrum rules and why (shows mastery beyond rote application)"
    ],
    "resourcesNeeded": { "time": "100-150 hours over 6 months", "budget": "£1,000-2,000 / $1,200-2,500", "tools": ["Jira or similar", "Miro/Mural for virtual facilitation"], "support": "Access to experienced Scrum Master for mentorship" },
    "realStoryExample": { "persona": "Sarah, Junior ADM at Financial Services Company", "challenge": "Team consistently missing sprint commitments (60% completion rate)", "action": "Redesigned sprint planning to include capacity calculation, risk assessment, and team-led commitment instead of PO-driven push", "result": "Completion rate improved to 92% over 4 sprints, team morale increased, PO trust rebuilt", "skillsUsed": ["Scrum Mastery", "Facilitation", "Servant Leadership"] },
    "commonMistakes": [
      "Running ceremonies by the book without adapting to team context",
      "Allowing Daily Standup to become status report to manager",
      "Skipping retrospectives when team is 'too busy'",
      "Not ensuring Definition of Done is actually followed",
      "Treating Scrum Master as administrative role instead of leadership"
    ],
    "interviewQuestions": [
      "How do you handle a team that consistently misses sprint commitments?",
      "Describe a time when you had to adapt a Scrum ceremony. What did you change and why?",
      "How do you ensure retrospectives lead to actual improvements?",
      "What would you do if your Product Owner wants to add stories mid-sprint?"
    ]
  },
  {
    "skillName": "Kanban & Flow-Based Delivery",
    "category": "Agile Frameworks & Methodologies",
    "marketDemand": "60-70%",
    "skillType": "Must-Have",
    "requiredForLevel": { "entry": "2/5", "mid": "4/5", "senior": "4/5" },
    "whatItLooksLike": [
      "Designs Kanban board with optimal WIP limits that reduce cycle time by 30%+",
      "Uses cumulative flow diagrams to identify bottlenecks before they become critical blockers",
      "Implements classes of service (expedite, fixed date, standard, intangible) with clear policies",
      "Measures and improves Flow Efficiency from 15% to 40%+ over 6 months",
      "Transitions team from Scrum to Kanban when continuous flow is more appropriate than sprints"
    ],
    "proofPoints": [
      "Average cycle time reduced by 25%+ over 3 months",
      "Flow efficiency improved from <20% to >35%",
      "Predictability achieved: 85% of items complete within forecasted timeframe",
      "Team can articulate why WIP limits are at specific levels",
      "Blockers identified and resolved 50% faster through flow metrics visibility"
    ],
    "resourcesNeeded": { "time": "80-100 hours over 4 months", "budget": "£1,000-1,800 / $1,200-2,200", "tools": ["Jira with advanced roadmaps", "ActionableAgile Analytics"], "support": "Kanban coach or experienced practitioner for guidance" },
    "realStoryExample": { "persona": "Marcus, Mid-Level ADM at SaaS Company", "challenge": "Support team drowning in tickets, unpredictable delivery, constant context switching", "action": "Implemented Kanban with WIP limits (3 per person), expedite lane for critical bugs, and daily flow metrics review", "result": "Average resolution time dropped from 12 days to 5 days, team stress decreased, customer satisfaction up 35%", "skillsUsed": ["Kanban", "Flow Metrics", "Process Optimization"] },
    "commonMistakes": [
      "Setting WIP limits too high (no real constraint effect)",
      "Not having explicit policies for each column",
      "Treating Kanban as 'Scrum without sprints' instead of true flow system",
      "Ignoring flow metrics and just using board as visual task list",
      "Not addressing upstream issues that cause uneven work arrival"
    ],
    "interviewQuestions": [
      "Explain the difference between Scrum and Kanban. When would you use each?",
      "How do you determine appropriate WIP limits for a team?",
      "What is flow efficiency and why does it matter?",
      "Walk me through how you'd transition a team from Scrum to Kanban."
    ]
  },
  {
    "skillName": "SAFe (Scaled Agile Framework)",
    "category": "Agile Frameworks & Methodologies",
    "marketDemand": "40-50% (GROWING)",
    "skillType": "Essential for Enterprise",
    "requiredForLevel": { "entry": "2/5", "mid": "3/5", "senior": "4/5" },
    "whatItLooksLike": [
      "Facilitates PI Planning event for 50-125 people resulting in aligned, committed objectives",
      "Manages Program Board with 100+ dependencies across 8 teams, resolving conflicts in real-time",
      "Coordinates Scrum of Scrums meetings that identify and remove cross-team blockers within 48 hours",
      "Tracks program-level metrics (Features delivered, Program Predictability, Team Predictability)",
      "Serves as Release Train Engineer managing entire Agile Release Train delivery cadence"
    ],
    "proofPoints": [
      "Successfully facilitated 2+ PI Planning events with 80%+ objective achievement",
      "Program predictability measure reaches 80% or higher",
      "Reduced inter-team dependencies by 25% through architectural improvements",
      "ART velocity stabilizes within ±20% over 3 PIs",
      "Can explain SAFe practices to executives and gain buy-in for transformation"
    ],
    "resourcesNeeded": { "time": "150-200 hours over 12 months", "budget": "£2,500-4,000 / $3,000-5,000", "tools": ["Jira Align or similar SAFe tool", "Miro for virtual PI Planning"], "support": "SAFe Program Consultant (SPC) for mentorship" },
    "realStoryExample": { "persona": "Jennifer, Senior ADM at Enterprise Financial Institution", "challenge": "250-person technology division struggling with alignment, competing priorities, delivery delays", "action": "Led SAFe transformation: established 2 ARTs, facilitated first PI Planning, implemented Inspect & Adapt workshops", "result": "Time-to-market reduced 40%, predictability improved from 45% to 82%, employee engagement increased 28%", "skillsUsed": ["SAFe", "Change Management", "Strategic Alignment", "Facilitation"] },
    "commonMistakes": [
      "Treating SAFe as heavyweight process instead of principles-based framework",
      "Skipping Inspect & Adapt workshops due to 'lack of time'",
      "Not involving architects and product management in PI Planning",
      "Focusing on ceremonies without addressing organizational impediments",
      "Implementing Full SAFe when Essential SAFe would suffice"
    ],
    "interviewQuestions": [
      "What is a Program Increment and why does SAFe use this cadence?",
      "How do you handle dependencies that emerge mid-PI?",
      "Explain the difference between Essential SAFe and Full SAFe.",
      "How would you measure the success of a PI Planning event?"
    ]
  },
  {
    "skillName": "Hybrid & Adaptive Approaches",
    "category": "Agile Frameworks & Methodologies",
    "marketDemand": "50-60%",
    "skillType": "Highly Valuable",
    "requiredForLevel": { "entry": "2/5", "mid": "3/5", "senior": "4/5" },
    "whatItLooksLike": [
      "Successfully runs 'Scrumban' approach: Scrum for development, Kanban for operations on same team",
      "Adapts framework based on context: uses Waterfall for compliance phase, Agile for development",
      "Designs custom delivery approach for hardware-software integration team",
      "Explains framework choices to leadership with data-driven rationale",
      "Helps organization transition from Waterfall to Agile using phased hybrid approach"
    ],
    "proofPoints": [
      "Successfully adapted delivery approach for 3+ different team contexts",
      "Reduced transition friction by 40% using hybrid approach vs. big-bang change",
      "Can articulate framework trade-offs to stakeholders (e.g., 'Scrum gives predictability, Kanban gives flow')",
      "Team satisfaction with chosen approach is 8/10 or higher",
      "Delivery metrics improve by 20%+ after framework adaptation"
    ],
    "resourcesNeeded": { "time": "100-120 hours over 9 months", "budget": "£1,500-2,200 / $1,800-2,600", "tools": ["Framework comparison matrix templates", "Change management toolkit"], "support": "Agile coach experienced in multiple frameworks" },
    "realStoryExample": { "persona": "Raj, Mid-Level ADM at Manufacturing Company", "challenge": "Hardware team using Waterfall, software team using Scrum—constant friction at integration points", "action": "Designed hybrid approach: hardware uses stage-gate with Agile checkpoints, software uses Scrum with synchronized demo cadence", "result": "Integration defects decreased 60%, time-to-market improved 25%, cross-functional collaboration improved dramatically", "skillsUsed": ["Hybrid Approaches", "Cross-Functional Collaboration", "Process Design"] },
    "commonMistakes": [
      "Creating 'Wagile' (worst of both Waterfall and Agile)",
      "Changing approaches too frequently without measuring impact",
      "Not documenting why specific approach was chosen",
      "Assuming one framework fits all team types",
      "Failing to get team buy-in on approach selection"
    ],
    "interviewQuestions": [
      "When would you choose Kanban over Scrum?",
      "How do you handle a situation where one team wants Scrum and another wants Kanban?",
      "Describe a time you adapted an Agile framework. What was the outcome?",
      "How would you transition a team from Waterfall to Agile?"
    ]
  },
  {
    "skillName": "Lean & Value Stream Thinking",
    "category": "Agile Frameworks & Methodologies",
    "marketDemand": "40-50%",
    "skillType": "Differentiator",
    "requiredForLevel": { "entry": "1/5", "mid": "3/5", "senior": "4/5" },
    "whatItLooksLike": [
      "Maps current-state value stream showing 45 steps from idea to production, 30% value-added time",
      "Identifies and eliminates 7 types of waste, reducing lead time by 40%",
      "Designs future-state value stream with 25 steps and 60% value-added time",
      "Facilitates value stream improvement workshops with cross-functional stakeholders",
      "Uses value stream metrics to drive executive decisions on process improvements"
    ],
    "proofPoints": [
      "Lead time reduced by 35%+ through waste elimination",
      "Value stream efficiency improved from <20% to >40%",
      "Documented value stream maps for 2+ end-to-end processes",
      "Executive presentation showing $500K+ annual savings from value stream optimization",
      "Cross-functional teams can articulate value stream and their role in it"
    ],
    "resourcesNeeded": { "time": "80-120 hours over 6 months", "budget": "£800-2,000 / $1,000-2,500", "tools": ["Value stream mapping software or physical materials", "Lean metrics dashboard"], "support": "Lean coach or Six Sigma Black Belt for mentorship" },
    "realStoryExample": { "persona": "Linda, Senior ADM at Healthcare Technology Company", "challenge": "Feature delivery taking 180 days on average from idea to production, unclear bottlenecks", "action": "Facilitated 2-day value stream mapping workshop, identified 12 handoffs and 67% wait time, redesigned process", "result": "Lead time reduced to 75 days (58% improvement), rework reduced 45%, customer satisfaction increased 32%", "skillsUsed": ["Value Stream Mapping", "Lean Thinking", "Process Optimization", "Cross-Functional Collaboration"] },
    "commonMistakes": [
      "Mapping current state without committing to future state improvements",
      "Only mapping the happy path, ignoring exceptions and rework",
      "Not involving all stakeholders in value stream workshops",
      "Focusing only on team-level optimization without seeing end-to-end flow",
      "Creating beautiful maps that sit on shelf without driving action"
    ],
    "interviewQuestions": [
      "What are the 7 wastes of Lean? Give examples from software delivery.",
      "How do you identify bottlenecks in a delivery process?",
      "Walk me through how you'd conduct a value stream mapping workshop.",
      "What's the difference between cycle time and lead time?"
    ]
  },
  {
    "skillName": "Agile Project Management Tools (Jira/Azure DevOps)",
    "category": "Technical & Tools Proficiency",
    "marketDemand": "75-85%",
    "skillType": "Must-Have",
    "requiredForLevel": { "entry": "4/5", "mid": "4/5", "senior": "4/5" },
    "whatItLooksLike": [
      "Configures Jira board with custom workflows, fields, and automation rules saving 10+ hours/week",
      "Creates executive dashboard pulling real-time data from Jira showing delivery health at-a-glance",
      "Designs automated notifications that alert team to blockers within 1 hour of status change",
      "Integrates Jira with Confluence, Slack, and GitHub for seamless workflow",
      "Trains 20+ team members on effective tool usage reducing support tickets by 60%"
    ],
    "proofPoints": [
      "Team spends <5% of time on tool administration (vs. 15-20% typical)",
      "Real-time dashboards used daily by leadership for decision-making",
      "100% team adoption with <10% manual workarounds",
      "Automated 15+ repetitive tasks saving 40+ hours per month",
      "Can set up new team board fully configured in under 2 hours"
    ],
    "resourcesNeeded": { "time": "60-80 hours over 3 months", "budget": "£200-500 / $250-600", "tools": ["Jira Premium or Azure DevOps", "Confluence", "Integration tools"], "support": "Jira admin or DevOps engineer for advanced topics" },
    "realStoryExample": { "persona": "Tom, Entry-Level ADM at E-commerce Company", "challenge": "Team spending 2 hours per week manually updating statuses, inconsistent data, difficult reporting", "action": "Built automation rules for status transitions, created standardized workflows, developed real-time dashboards", "result": "Manual work reduced to 15 min/week, reporting accuracy 98%, leadership confidence in data increased, promoted to mid-level", "skillsUsed": ["Jira Administration", "Process Automation", "Data Visualization"] },
    "commonMistakes": [
      "Over-complicating workflows with too many statuses",
      "Not training team on tool capabilities",
      "Using custom fields for everything instead of standard fields",
      "Failing to integrate with other tools (Confluence, Slack)",
      "Not leveraging automation for repetitive tasks"
    ],
    "interviewQuestions": [
      "How would you design a Jira board for a team doing both development and support?",
      "Explain a time you used automation to improve team efficiency.",
      "What's the difference between a Scrum board and a Kanban board in Jira?",
      "How do you ensure data quality in your project management tool?"
    ]
  },
  {
    "skillName": "Software Development Lifecycle (SDLC) Knowledge",
    "category": "Technical & Tools Proficiency",
    "marketDemand": "70%",
    "skillType": "Must-Have",
    "requiredForLevel": { "entry": "3/5", "mid": "4/5", "senior": "4/5" },
    "whatItLooksLike": [
      "Can discuss technical architecture decisions with developers and ask clarifying questions",
      "Understands why frontend work depends on backend API completion and plans accordingly",
      "Identifies when technical debt is slowing velocity and facilitates conversation with product",
      "Recognizes when Definition of Done lacks critical steps (e.g., security review, performance testing)",
      "Coordinates releases across multiple environments (dev, staging, production) with deployment dependencies"
    ],
    "proofPoints": [
      "Can explain team's tech stack to non-technical stakeholders",
      "Accurately estimates impact of technical work on delivery timelines",
      "Developers rate your technical credibility as 8/10 or higher",
      "Reduced deployment failures by 40% through improved quality gates",
      "Successfully facilitated 3-amigos sessions with meaningful technical input"
    ],
    "resourcesNeeded": { "time": "80-100 hours over 4 months", "budget": "£50-200 / $60-250", "tools": ["Access to team's technical documentation", "Sandbox environment for exploration"], "support": "Technical lead or senior developer as mentor" },
    "realStoryExample": { "persona": "Priya, Mid-Level ADM at SaaS Startup", "challenge": "Couldn't understand why 'simple' features took 2 weeks—losing credibility with product and leadership", "action": "Spent 2 weeks pairing with developers, learned basics of team's tech stack, created SDLC documentation", "result": "Can now accurately estimate technical complexity, facilitates better planning conversations, regained team trust", "skillsUsed": ["SDLC Knowledge", "Technical Curiosity", "Relationship Building"] },
    "commonMistakes": [
      "Pretending to understand technical concepts when you don't",
      "Not investing time to learn basics of team's technology",
      "Dismissing technical concerns as 'just development problems'",
      "Ignoring non-functional requirements (performance, security, scalability)",
      "Not understanding impact of technical debt on velocity"
    ],
    "interviewQuestions": [
      "Explain the software development lifecycle from your perspective as an ADM.",
      "How do you handle situations where you don't understand the technical details?",
      "What quality gates do you implement in your team's SDLC?",
      "How do you balance feature development with technical debt?"
    ]
  },
  {
    "skillName": "Backlog Management & Prioritization",
    "category": "Delivery Management & Execution",
    "marketDemand": "85-90%",
    "skillType": "Core Competency",
    "requiredForLevel": { "entry": "4/5", "mid": "4/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Maintains backlog with 2 sprints of 'ready' stories meeting Definition of Ready",
      "Facilitates refinement sessions where team asks 90% of questions (not ADM-driven)",
      "Uses WSJF (Weighted Shortest Job First) to prioritize features by business value and urgency",
      "Reduces unplanned work from 40% to 10% through better backlog hygiene",
      "Creates user story maps that help Product Owner visualize release scope"
    ],
    "proofPoints": [
      "90%+ of stories meet Definition of Ready before sprint planning",
      "Unplanned work reduced to <15% of sprint capacity",
      "Team estimation accuracy within ±20% over 5 sprints",
      "Product Owner satisfaction score 9/10 for refinement effectiveness",
      "Zero stories carried incomplete due to unclear requirements for 3+ sprints"
    ],
    "resourcesNeeded": { "time": "60-80 hours over 4 months", "budget": "£1,200-1,800 / $1,400-2,100", "tools": ["Jira or similar for backlog management", "Miro for user story mapping"], "support": "Product Owner partnership and team collaboration" },
    "realStoryExample": { "persona": "Alex, Entry-Level ADM at Mobile Gaming Company", "challenge": "Backlog of 300+ unrefined stories, team pulling work randomly, constant scope clarification mid-sprint", "action": "Established refinement cadence, created Definition of Ready, implemented 'ready' vs. 'backlog' swim lanes, groomed top 40 stories", "result": "Sprint predictability increased from 55% to 88%, team stress decreased, Product Owner confidence improved", "skillsUsed": ["Backlog Management", "Facilitation", "Process Definition"] },
    "commonMistakes": [
      "Letting backlog grow to 500+ items with no grooming",
      "ADM refining stories alone instead of facilitating team refinement",
      "Not enforcing Definition of Ready",
      "Allowing vague stories into sprint",
      "Not breaking down large stories into smaller, valuable increments"
    ],
    "interviewQuestions": [
      "How do you ensure a backlog is healthy and ready for planning?",
      "Explain different prioritization techniques and when to use each.",
      "How do you handle a Product Owner who wants to skip refinement?",
      "What's your Definition of Ready and how do you enforce it?"
    ]
  },
  {
    "skillName": "Impediment & Blocker Removal",
    "category": "Delivery Management & Execution",
    "marketDemand": "100%",
    "skillType": "Core Competency",
    "requiredForLevel": { "entry": "4/5", "mid": "5/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Maintains impediment log with owner, impact, action, and resolution target for each blocker",
      "Resolves 80%+ of team-level impediments within 48 hours",
      "Escalates organizational blockers to appropriate level with clear business impact statement",
      "Proactively identifies potential blockers in sprint planning and mitigates before they materialize",
      "Creates metrics showing average blocker resolution time trending downward over 6 months"
    ],
    "proofPoints": [
      "Average blocker resolution time <3 days for 80% of impediments",
      "Team reports <10% of time blocked (down from 30%+)",
      "Zero critical blockers unresolved for more than 1 week",
      "Documented resolution of 50+ impediments over 6 months",
      "Reduced recurring blockers by 60% through systemic fixes"
    ],
    "resourcesNeeded": { "time": "5-10 hours per week ongoing", "budget": "Minimal ($0-500 / £0-400 for tools)", "tools": ["Impediment tracking system", "Communication tools (Slack, email)"], "support": "Management support for escalations and organizational blockers" },
    "realStoryExample": { "persona": "David, Mid-Level ADM at Insurance Company", "challenge": "Team blocked 40% of time waiting for InfoSec approvals, taking 2-3 weeks per review", "action": "Built relationship with InfoSec lead, created pre-review checklist, established weekly triage meeting", "result": "Approval time reduced to 3-5 days, team blocked time dropped to 8%, delivery velocity increased 35%", "skillsUsed": ["Impediment Removal", "Stakeholder Management", "Process Optimization"] },
    "commonMistakes": [
      "Not tracking impediments systematically",
      "Waiting for team to escalate instead of proactively asking",
      "Taking on blockers you should delegate to team",
      "Not following up on escalated impediments",
      "Treating symptoms instead of fixing root causes"
    ],
    "interviewQuestions": [
      "How do you prioritize which impediments to tackle first?",
      "Describe a time you escalated a blocker. What was the outcome?",
      "How do you distinguish between impediments the team should solve vs. ones requiring your intervention?",
      "What's your approach to recurring impediments?"
    ]
  },
  {
    "skillName": "Risk, Issue & Dependency Management (RAID)",
    "category": "Delivery Management & Execution",
    "marketDemand": "60-80%",
    "skillType": "Essential Skill",
    "requiredForLevel": { "entry": "3/5", "mid": "4/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Maintains comprehensive RAID log with risk probability/impact matrix and mitigation strategies",
      "Identifies potential risks 2-3 sprints ahead and implements preventive actions",
      "Manages dependencies across 5+ teams using visual dependency board updated daily",
      "Reduces critical risks from 15 to 3 over a quarter through proactive management",
      "Presents risk status to steering committee with clear trend analysis and recommended actions"
    ],
    "proofPoints": [
      "95% of risks have documented mitigation plans",
      "Zero 'surprise' issues that could have been predicted",
      "Critical dependencies reduced by 30% through architectural improvements",
      "Risk materialization rate <20% due to effective mitigation",
      "Steering committee rates risk reporting as 'excellent' (9/10+)"
    ],
    "resourcesNeeded": { "time": "3-5 hours per week for active management", "budget": "£500-1,000 / $600-1,200", "tools": ["RAID log tool (Jira, Excel, specialized software)", "Dependency mapping tool"], "support": "Risk management expert or PMO for guidance" },
    "realStoryExample": { "persona": "Michelle, Senior ADM at Telecommunications Company", "challenge": "Major product launch at risk due to 12 critical dependencies across 6 teams, no clear tracking", "action": "Created visual dependency board, daily standup across teams, weekly risk review with mitigation actions", "result": "Launch delivered on time with zero critical issues, dependencies resolved 2 weeks early, CEO commendation", "skillsUsed": ["RAID Management", "Cross-Team Coordination", "Strategic Planning"] },
    "commonMistakes": [
      "Creating RAID log then never updating it",
      "Not assigning clear owners to each risk/issue",
      "Treating all risks equally instead of prioritizing by impact",
      "Managing dependencies informally without documentation",
      "Not escalating high-impact risks to appropriate stakeholders"
    ],
    "interviewQuestions": [
      "How do you identify and assess risks on your projects?",
      "Walk me through your approach to managing dependencies across multiple teams.",
      "Describe a time when a risk materialized despite your planning. What did you learn?",
      "How do you decide which risks to escalate vs. manage at team level?"
    ]
  },
  {
    "skillName": "Release Planning & Coordination",
    "category": "Delivery Management & Execution",
    "marketDemand": "70-80%",
    "skillType": "Core Competency",
    "requiredForLevel": { "entry": "3/5", "mid": "4/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Creates release plans showing feature roadmap for next 3-6 months with dependencies",
      "Coordinates releases across 4 teams with zero deployment conflicts",
      "Achieves 95%+ on-time release delivery with committed scope",
      "Facilitates release readiness reviews with cross-functional stakeholders (QA, InfoSec, Ops)",
      "Implements release automation reducing deployment time from 4 hours to 30 minutes"
    ],
    "proofPoints": [
      "Last 10 releases delivered within ±2 days of target date",
      "Release defect rate <5 critical bugs per release",
      "Post-release incidents reduced by 60% through better coordination",
      "Stakeholder satisfaction with release process 8.5/10+",
      "Release cycle time reduced by 40% over 6 months"
    ],
    "resourcesNeeded": { "time": "8-12 hours per release cycle", "budget": "£200-800 / $250-1,000 (tools and training)", "tools": ["Release management software", "Deployment automation tools", "Communication platforms"], "support": "DevOps team, Infrastructure team, QA team collaboration" },
    "realStoryExample": { "persona": "Carlos, Mid-Level ADM at E-commerce Platform", "challenge": "Holiday season release with 6 critical features across 4 teams, high risk if anything fails", "action": "Created detailed release plan, daily sync meetings 2 weeks before launch, staged rollout with monitoring", "result": "Flawless release during peak shopping season, zero downtime, all features live, $2M additional revenue captured", "skillsUsed": ["Release Planning", "Risk Management", "Cross-Team Coordination", "Stakeholder Management"] },
    "commonMistakes": [
      "Not having rollback plan documented and tested",
      "Surprising stakeholders with last-minute release delays",
      "Inadequate testing before production deployment",
      "Not coordinating with dependent teams",
      "Releasing everything at once instead of staged approach"
    ],
    "interviewQuestions": [
      "How do you plan and coordinate releases across multiple teams?",
      "What's in your release readiness checklist?",
      "Describe a release that went wrong. What did you learn?",
      "How do you balance the desire for continuous deployment with the need for stability?"
    ]
  },
  {
    "skillName": "Quality Assurance Integration",
    "category": "Delivery Management & Execution",
    "marketDemand": "65-75%",
    "skillType": "Essential Skill",
    "requiredForLevel": { "entry": "3/5", "mid": "4/5", "senior": "4/5" },
    "whatItLooksLike": [
      "Facilitates 'Three Amigos' sessions (Dev, QA, BA) resulting in clear acceptance criteria before coding starts",
      "Implements shift-left testing strategy increasing automated test coverage from 30% to 75%",
      "Reduces production defects by 50% through improved Definition of Done including quality gates",
      "Creates quality metrics dashboard showing test coverage, defect density, escaped defects",
      "Embeds QA throughout delivery lifecycle, not just at end (testing in parallel with development)"
    ],
    "proofPoints": [
      "Defect escape rate to production reduced by 40%+",
      "Test automation coverage increased from <30% to 70%+",
      "Testing time reduced by 30% through automation and parallel testing",
      "Zero releases with critical bugs in last 6 months",
      "QA satisfaction with collaboration process 9/10+"
    ],
    "resourcesNeeded": { "time": "4-6 hours per week for quality initiatives", "budget": "£500-2,000 / $600-2,500 (tools and training)", "tools": ["Test automation tools", "Quality metrics dashboards", "Bug tracking systems"], "support": "QA lead, test automation engineers, development team buy-in" },
    "realStoryExample": { "persona": "Nina, Entry-Level ADM at Financial Services", "challenge": "QA bottleneck at end of sprint causing 30% of stories to carry over, production bugs increasing", "action": "Introduced Three Amigos, moved QA involvement to refinement, prioritized test automation, updated DoD", "result": "Carry-over reduced to 8%, production bugs down 55%, sprint predictability improved from 68% to 91%", "skillsUsed": ["QA Integration", "Process Optimization", "Cross-Functional Collaboration"] },
    "commonMistakes": [
      "Treating QA as final gate instead of integrated throughout",
      "Not involving QA in refinement and planning",
      "Ignoring test automation investment",
      "Accepting 'works on my machine' without proper testing",
      "Not measuring quality metrics systematically"
    ],
    "interviewQuestions": [
      "How do you integrate quality assurance throughout the delivery lifecycle?",
      "What's your approach to test automation?",
      "How do you handle pressure to skip testing to meet deadlines?",
      "Explain the 'shift-left' testing concept and its benefits."
    ]
  },
  {
    "skillName": "Servant Leadership",
    "category": "Leadership & People Skills",
    "marketDemand": "90-95%",
    "skillType": "Core Philosophy",
    "requiredForLevel": { "entry": "3/5", "mid": "4/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Consistently asks 'How can I help?' instead of directing team's work",
      "Credits team publicly for successes, takes responsibility personally for failures",
      "Makes decisions that benefit team even when personally inconvenient (e.g., taking late meetings for distributed teams)",
      "Removes obstacles preventing team success rather than managing task completion",
      "Develops team members' skills and careers actively, celebrates when they're promoted away"
    ],
    "proofPoints": [
      "360 feedback shows team perceives you as supportive leader (8.5/10+)",
      "Team members seek your guidance voluntarily, not just when required",
      "Team autonomy increases: they solve 70%+ of problems without your involvement",
      "Zero turnover on team over 18 months (vs. org average 15-20%)",
      "Team members actively recommend working with you to others"
    ],
    "resourcesNeeded": { "time": "Ongoing mindset and behavioral change", "budget": "£1,200-2,000 / $1,400-2,400", "tools": ["360 feedback platform", "Coaching resources"], "support": "Executive coach or mentor for accountability" },
    "realStoryExample": { "persona": "James, Mid-Level ADM at Software Company", "challenge": "Promoted from developer, struggled with 'command and control' tendencies, team disengaged", "action": "Worked with coach on servant leadership, started asking instead of telling, removed ego from decisions", "result": "Team engagement scores increased 40%, innovation ideas from team tripled, retention improved to 95%", "skillsUsed": ["Servant Leadership", "Self-Awareness", "Team Empowerment"] },
    "commonMistakes": [
      "Saying 'servant leadership' but still micromanaging",
      "Solving all team problems instead of coaching them to solve",
      "Taking credit for team's work",
      "Making unilateral decisions without team input",
      "Focusing on your career advancement over team development"
    ],
    "interviewQuestions": [
      "What does servant leadership mean to you? Give a concrete example.",
      "Describe a time you made a decision that benefited the team but was personally inconvenient.",
      "How do you balance serving the team with holding them accountable?",
      "Tell me about a team member you developed who went on to greater success."
    ]
  },
  {
    "skillName": "Team Building & Psychological Safety",
    "category": "Leadership & People Skills",
    "marketDemand": "75-80%",
    "skillType": "High-Impact Skill",
    "requiredForLevel": { "entry": "3/5", "mid": "4/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Team members openly admit mistakes in retrospectives without fear of blame",
      "Junior developers ask 'basic' questions in meetings without hesitation",
      "Team challenges decisions respectfully, including yours, leading to better outcomes",
      "Psychological safety survey scores improve from 6/10 to 9/10 over 6 months",
      "Team self-organizes effectively with minimal ADM intervention"
    ],
    "proofPoints": [
      "Team psychological safety scores 8.5/10+ (measured via survey)",
      "Zero team conflicts escalated to HR in 12 months",
      "Innovation suggestions from team increase 300%",
      "Team members actively participate in decisions (80%+ speak up)",
      "New team members feel safe to contribute within 2 weeks (vs. 6-8 weeks typical)"
    ],
    "resourcesNeeded": { "time": "3-5 hours per week for team culture work", "budget": "£300-1,000 / $350-1,200 annually", "tools": ["Survey tools (Google Forms, Officevibe)", "Team building materials"], "support": "HR support for serious conflicts, organizational culture alignment" },
    "realStoryExample": { "persona": "Yuki, Senior ADM at Tech Startup", "challenge": "High-performing but toxic team culture, 3 people quit in 6 months citing 'fear culture'", "action": "Addressed toxic behaviors directly, established psychological safety norms, modeled vulnerability, recognized good behaviors", "result": "Culture transformed in 9 months, zero attrition, productivity increased 25%, team nominated for company culture award", "skillsUsed": ["Psychological Safety", "Conflict Resolution", "Team Building", "Courageous Leadership"] },
    "commonMistakes": [
      "Punishing failure or mistakes",
      "Allowing 'brilliant jerks' to harm team culture",
      "Not addressing toxic behaviors quickly",
      "Creating superficial team building without addressing real issues",
      "Talking about psychological safety without modeling it"
    ],
    "interviewQuestions": [
      "What is psychological safety and why does it matter?",
      "How do you handle a team member who dominates discussions?",
      "Describe a time you built trust in a struggling team.",
      "How do you balance accountability with psychological safety?"
    ]
  },
  {
    "skillName": "Coaching & Mentoring",
    "category": "Leadership & People Skills",
    "marketDemand": "75-85%",
    "skillType": "Core Competency",
    "requiredForLevel": { "entry": "2/5", "mid": "4/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Uses powerful questions ('What have you tried?' 'What else?') instead of providing answers",
      "Team members solve 80% of problems independently after 6 months of coaching",
      "Successfully mentors 2-3 junior ADMs who progress to mid-level roles",
      "Team agile maturity improves from 'Forming' to 'Performing' stage over 9 months",
      "Recognized internally as 'go-to' person for developing delivery capability"
    ],
    "proofPoints": [
      "3+ team members report significant career progression due to your coaching",
      "Team problem-solving speed improves 40% (they figure things out faster)",
      "Mentees achieve certification or promotion within 12 months",
      "Coaching feedback score 9/10+ from coachees",
      "Team demonstrates continuous learning mindset (reads books, shares learnings)"
    ],
    "resourcesNeeded": { "time": "3-5 hours per week for coaching activities", "budget": "£1,500-2,500 / $1,800-3,000", "tools": ["Development planning templates", "Coaching frameworks"], "support": "Professional coach for your own development, peer coaching community" },
    "realStoryExample": { "persona": "Patricia, Senior ADM at Healthcare Company", "challenge": "Junior ADM struggling with stakeholder management, considering leaving role", "action": "6-month structured mentoring: shadowing, feedback sessions, gradual responsibility increase, celebration of wins", "result": "Junior ADM became confident stakeholder manager, received 'Rising Star' award, now mentors others", "skillsUsed": ["Coaching", "Mentoring", "Patience", "Development Planning"] },
    "commonMistakes": [
      "Telling instead of asking (advice-giving instead of coaching)",
      "Not giving people space to struggle and learn",
      "Coaching everyone the same way without adapting",
      "Only coaching when problems arise instead of proactively",
      "Not establishing clear coaching agreements and goals"
    ],
    "interviewQuestions": [
      "What's the difference between coaching and mentoring?",
      "Describe your approach to developing someone who's struggling.",
      "Tell me about someone you coached who went on to success.",
      "How do you know when to coach vs. when to direct?"
    ]
  },
  {
    "skillName": "Conflict Resolution & Facilitation",
    "category": "Leadership & People Skills",
    "marketDemand": "70-80%",
    "skillType": "Essential Skill",
    "requiredForLevel": { "entry": "3/5", "mid": "4/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Addresses team conflicts within 24 hours before they escalate",
      "Facilitates difficult Product-Engineering priority conversations resulting in win-win outcomes",
      "Uses active listening to understand root cause of conflicts beyond surface symptoms",
      "Reduces team conflict escalations to HR by 80% through early intervention",
      "Creates space for disagreement while maintaining respect and team cohesion"
    ],
    "proofPoints": [
      "Resolved 15+ significant team conflicts over 12 months with lasting resolution",
      "Zero conflicts escalated to HR that you managed directly",
      "Team members come to you proactively for conflict mediation",
      "Post-conflict team effectiveness ratings remain high (8/10+)",
      "Facilitation feedback consistently rates 9/10+ for managing difficult conversations"
    ],
    "resourcesNeeded": { "time": "2-4 hours per week for conflict situations", "budget": "£400-1,500 / $500-1,800", "tools": ["Private meeting space", "Conflict resolution frameworks"], "support": "HR partnership for severe conflicts, coaching for your development" },
    "realStoryExample": { "persona": "Omar, Mid-Level ADM at Media Company", "challenge": "Two senior developers in ongoing feud affecting whole team, standups becoming tense, productivity down 20%", "action": "1-on-1 conversations with each to understand root cause, facilitated joint conversation, created working agreements, followed up weekly", "result": "Conflict resolved, underlying issue (unclear architecture ownership) addressed, team productivity recovered and exceeded baseline", "skillsUsed": ["Conflict Resolution", "Active Listening", "Facilitation", "Follow-through"] },
    "commonMistakes": [
      "Avoiding conflict hoping it will resolve itself",
      "Taking sides in team disputes",
      "Addressing conflict publicly instead of privately first",
      "Focusing on positions instead of underlying interests",
      "Not following up after initial conflict resolution"
    ],
    "interviewQuestions": [
      "How do you handle conflict between team members?",
      "Describe a time you mediated a difficult situation. What was your approach?",
      "What's your conflict resolution style?",
      "How do you facilitate disagreement while maintaining team cohesion?"
    ]
  },
  {
    "skillName": "Change Management & Transformation Leadership",
    "category": "Leadership & People Skills",
    "marketDemand": "50-55% (GROWING)",
    "skillType": "Senior-Level Skill",
    "requiredForLevel": { "entry": "1/5", "mid": "3/5", "senior": "4/5" },
    "whatItLooksLike": [
      "Leads agile transformation for 100+ person organization with 75% adoption success rate",
      "Creates change roadmap with stakeholder analysis, communication plan, and success metrics",
      "Reduces resistance to change from 60% to 20% through effective engagement strategies",
      "Measures transformation impact: 40% faster delivery, 30% higher employee engagement",
      "Coaches executives on leading through organizational change"
    ],
    "proofPoints": [
      "Successfully led 2+ organizational transformations with measurable outcomes",
      "Change adoption rate >70% within 6 months",
      "Employee engagement scores improve during transformation (unusual achievement)",
      "Executive sponsor satisfaction 9/10+ with transformation leadership",
      "Published case study or presented at conference on transformation success"
    ],
    "resourcesNeeded": { "time": "15-25 hours per week during active transformation", "budget": "£2,000-5,000 / $2,500-6,000", "tools": ["Change management software", "Communication platforms", "Survey tools"], "support": "Executive sponsorship, change management consultant, transformation team" },
    "realStoryExample": { "persona": "Samantha, Lead ADM at Retail Corporation", "challenge": "5,000-person organization attempting SAFe transformation, previous attempt failed, skepticism high", "action": "Built coalition of early adopters, created visible quick wins, addressed resistance with empathy, measured and communicated progress", "result": "18-month transformation: 85% SAFe adoption, delivery speed increased 45%, employee satisfaction up 22%, became VP of Transformation", "skillsUsed": ["Change Management", "Strategic Leadership", "Stakeholder Engagement", "Resilience"] },
    "commonMistakes": [
      "Underestimating resistance to change",
      "Not creating sense of urgency",
      "Declaring victory too early",
      "Focusing on process changes without culture change",
      "Insufficient communication throughout transformation"
    ],
    "interviewQuestions": [
      "How do you lead an organization through significant change?",
      "Describe a transformation you led. What were the biggest challenges?",
      "How do you handle resistance to change?",
      "What change management frameworks or models do you use?"
    ]
  },
  {
    "skillName": "Communication Excellence (Verbal & Written)",
    "category": "Communication & Stakeholder Management",
    "marketDemand": "98-100%",
    "skillType": "#1 Most Critical Skill",
    "requiredForLevel": { "entry": "3/5", "mid": "4/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Presents quarterly delivery updates to C-suite in 10 minutes with clear, compelling story",
      "Translates complex technical concepts for business stakeholders without losing accuracy",
      "Writes concise status updates that executives actually read (no follow-up questions needed)",
      "Adapts communication style seamlessly: technical with engineers, strategic with executives, tactical with peers",
      "Facilitates workshops with 30+ people from diverse backgrounds maintaining engagement and clarity"
    ],
    "proofPoints": [
      "Presentation feedback consistently 9/10+ from diverse audiences",
      "Executive stakeholders request you specifically for updates",
      "Zero 'clarification needed' follow-ups on written communications for 3 months",
      "Successfully influenced major decision through compelling presentation",
      "Team and stakeholders rate communication as top strength in 360 feedback"
    ],
    "resourcesNeeded": { "time": "5-7 hours per week for improvement activities", "budget": "£1,000-2,500 / $1,200-3,000", "tools": ["Presentation software", "Recording device", "Communication frameworks"], "support": "Speaking coach or mentor for feedback" },
    "realStoryExample": { "persona": "Aisha, Mid-Level ADM at Consulting Firm", "challenge": "Brilliant at delivery but presentations rambled, executives confused, missed promotion twice due to 'communication gaps'", "action": "Hired presentation coach, joined Toastmasters, practiced Pyramid Principle, recorded all presentations for self-review", "result": "Presentation skills transformed, invited to present at client board meetings, promoted to Senior within 12 months", "skillsUsed": ["Communication Excellence", "Self-Development", "Executive Presence"] },
    "commonMistakes": [
      "Using jargon with non-technical audiences",
      "Providing too much detail instead of executive summary first",
      "Reading slides instead of engaging audience",
      "Not adapting communication style to audience",
      "Burying the lead—not stating conclusion upfront"
    ],
    "interviewQuestions": [
      "How do you communicate technical issues to non-technical stakeholders?",
      "Describe a time you had to influence without authority through communication.",
      "Give me an elevator pitch on the value of Agile delivery management.",
      "How do you tailor your communication to different audiences?"
    ]
  },
  {
    "skillName": "Stakeholder Management & Engagement",
    "category": "Communication & Stakeholder Management",
    "marketDemand": "85-90%",
    "skillType": "Critical Success Factor",
    "requiredForLevel": { "entry": "3/5", "mid": "4/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Creates stakeholder map with power/interest matrix and tailored engagement strategies",
      "Achieves 95% stakeholder satisfaction rating in surveys",
      "Builds executive sponsors who actively advocate for your initiatives",
      "Successfully negotiates for team resources and budget through compelling stakeholder engagement",
      "Proactively manages expectations preventing 90% of potential conflicts"
    ],
    "proofPoints": [
      "Stakeholder satisfaction scores 8.5/10+ consistently",
      "Secured 3+ additional resources through stakeholder advocacy",
      "Executive sponsors actively defend your team's priorities",
      "Zero stakeholder escalations in last 6 months",
      "Successfully navigated political landscape to deliver controversial project"
    ],
    "resourcesNeeded": { "time": "6-10 hours per week for stakeholder activities", "budget": "£1,600-2,800 / $1,900-3,300", "tools": ["Stakeholder mapping tools", "CRM or tracking system"], "support": "Mentor experienced in organizational politics" },
    "realStoryExample": { "persona": "Kevin, Senior ADM at Government Agency", "challenge": "Critical modernization project blocked by competing priorities from 8 different departments", "action": "Mapped all stakeholders, identified win-win outcomes for each, built coalition, secured executive champion", "result": "Project greenlit with full funding, all departments aligned, delivered 20% under budget earning commendation", "skillsUsed": ["Stakeholder Management", "Negotiation", "Strategic Thinking", "Coalition Building"] },
    "commonMistakes": [
      "Not identifying all stakeholders (especially indirect ones)",
      "Treating all stakeholders the same",
      "Only engaging when you need something",
      "Under-communicating or over-communicating",
      "Not understanding stakeholders' motivations and concerns"
    ],
    "interviewQuestions": [
      "How do you identify and prioritize stakeholders?",
      "Describe a time you managed conflicting stakeholder expectations.",
      "How do you build relationships with difficult stakeholders?",
      "Walk me through your stakeholder engagement strategy."
    ]
  },
  {
    "skillName": "Transparency & Visibility Creation",
    "category": "Communication & Stakeholder Management",
    "marketDemand": "80-85%",
    "skillType": "Core Responsibility",
    "requiredForLevel": { "entry": "4/5", "mid": "4/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Creates 'war room' with big visible charts showing real-time delivery status, risks, blockers",
      "Designs executive dashboard with RAG status that requires zero explanation",
      "Reduces ad-hoc status request emails by 70% through proactive visibility",
      "Implements information radiators that stakeholders check daily without prompting",
      "Builds automated reports pulling from Jira eliminating manual status compilation"
    ],
    "proofPoints": [
      "Status requests reduced by 60%+ through proactive visibility",
      "Stakeholders can answer their own questions 80% of time from dashboards",
      "Real-time information always available (not outdated)",
      "Leadership rates transparency as 9/10+ in effectiveness",
      "Zero 'surprise' issues discovered late due to poor visibility"
    ],
    "resourcesNeeded": { "time": "3-5 hours per week maintaining visibility systems", "budget": "£300-1,500 / $350-1,800", "tools": ["Dashboard software", "Automation tools", "Visual management materials"], "support": "Data analyst or BI team for complex dashboards" },
    "realStoryExample": { "persona": "Lisa, Entry-Level ADM at Manufacturing Company", "challenge": "Senior leadership constantly asking for status updates, team interrupted 10+ times per week", "action": "Built automated dashboard with daily updates, implemented visual boards, created weekly digest email", "result": "Interruptions reduced 85%, leadership satisfaction improved, team productivity increased 15%", "skillsUsed": ["Transparency", "Data Visualization", "Automation", "Stakeholder Management"] },
    "commonMistakes": [
      "Creating dashboards that nobody looks at",
      "Too much information causing confusion",
      "Not updating information regularly (stale data)",
      "Using jargon or metrics stakeholders don't understand",
      "Building transparency tools without asking stakeholders what they need"
    ],
    "interviewQuestions": [
      "How do you create visibility into team delivery status?",
      "What metrics do you make visible and why?",
      "Describe a time you improved transparency. What was the impact?",
      "How do you balance transparency with information overload?"
    ]
  },
  {
    "skillName": "Cross-Functional Collaboration",
    "category": "Communication & Stakeholder Management",
    "marketDemand": "85-90%",
    "skillType": "Essential Capability",
    "requiredForLevel": { "entry": "3/5", "mid": "4/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Orchestrates delivery across Engineering, Product, QA, InfoSec, Legal, and Operations seamlessly",
      "Reduces cross-functional handoff delays by 50% through improved coordination",
      "Facilitates regular cross-functional planning sessions with 95% attendance",
      "Builds 'one team' culture across functions that traditionally operate in silos",
      "Successfully delivers complex initiatives requiring 6+ functional areas without friction"
    ],
    "proofPoints": [
      "Cross-functional handoff time reduced by 40%+",
      "All functions rate collaboration quality 8/10+",
      "Zero last-minute blockers from functions 'not being informed'",
      "Successfully delivered 3+ complex projects requiring extensive cross-functional coordination",
      "Other teams request your facilitation for cross-functional initiatives"
    ],
    "resourcesNeeded": { "time": "8-12 hours per week for cross-functional coordination", "budget": "£500-1,500 / $600-1,800", "tools": ["Collaboration platforms", "Dependency tracking tools"], "support": "Executive backing for cross-functional authority" },
    "realStoryExample": { "persona": "Raj, Mid-Level ADM at Financial Services", "challenge": "Mobile app release delayed 6 weeks because InfoSec review 'not scheduled', Legal approval 'not requested'", "action": "Created cross-functional delivery checklist, established InfoSec/Legal review SLAs, implemented early engagement process", "result": "Next release delivered on time, cross-functional delays reduced from 6 weeks to 3 days, model adopted company-wide", "skillsUsed": ["Cross-Functional Collaboration", "Process Design", "Relationship Building"] },
    "commonMistakes": [
      "Engaging functions too late in the process",
      "Not understanding each function's constraints and priorities",
      "Treating other functions as 'service providers' instead of partners",
      "Not building relationships before you need them",
      "Assuming everyone understands technical/agile concepts"
    ],
    "interviewQuestions": [
      "How do you coordinate delivery across multiple functions?",
      "Describe a time you broke down silos between teams.",
      "How do you handle competing priorities across functions?",
      "What's your approach to engaging InfoSec/Legal/Compliance in delivery?"
    ]
  },
  {
    "skillName": "Negotiation & Influencing Without Authority",
    "category": "Communication & Stakeholder Management",
    "marketDemand": "65-70%",
    "skillType": "Power Skill",
    "requiredForLevel": { "entry": "2/5", "mid": "3/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Secures additional headcount for team through compelling business case without formal authority",
      "Influences Product to prioritize technical debt reduction achieving 60/40 feature/debt split",
      "Navigates organizational politics to gain support for controversial process change",
      "Negotiates win-win outcomes in resource conflicts between competing teams",
      "Drives organizational change through coalition building rather than mandate"
    ],
    "proofPoints": [
      "Successfully negotiated for resources 5+ times resulting in team capability improvements",
      "Influenced major organizational decision without formal authority",
      "Win-win negotiation outcomes in 85%+ of situations",
      "Stakeholders actively seek your involvement in contentious negotiations",
      "Built coalition of 15+ people supporting significant change initiative"
    ],
    "resourcesNeeded": { "time": "Variable based on negotiations, 5-10 hours per week", "budget": "£2,200-4,000 / $2,600-4,800", "tools": ["Negotiation frameworks", "Influence models"], "support": "Mentor skilled in organizational influence" },
    "realStoryExample": { "persona": "Maria, Senior ADM at Tech Company", "challenge": "Engineering team needed 2 additional developers but hiring freeze in place, formal requests denied", "action": "Built business case showing $500K revenue impact, secured Product sponsorship, presented at leadership meeting, offered budget trade-offs", "result": "Approved for 2 contractors within budget, later converted to permanent hires, team delivered 40% more value", "skillsUsed": ["Negotiation", "Influence", "Business Case Development", "Coalition Building"] },
    "commonMistakes": [
      "Using positional power instead of influence when you have it",
      "Not understanding the other party's interests and constraints",
      "Negotiating zero-sum instead of seeking win-win",
      "Not building relationships before needing to influence",
      "Giving up too easily when first attempt fails"
    ],
    "interviewQuestions": [
      "Describe a time you influenced a decision without formal authority.",
      "How do you negotiate when you don't have leverage?",
      "Tell me about a failed negotiation and what you learned.",
      "What influence strategies do you find most effective?"
    ]
  },
  {
    "skillName": "Flow Metrics & Value Stream Analytics",
    "category": "Metrics, Analytics & Data-Driven Decision Making",
    "marketDemand": "40-50% (EMERGING STANDARD)",
    "skillType": "Differentiator",
    "requiredForLevel": { "entry": "2/5", "mid": "3/5", "senior": "4/5" },
    "whatItLooksLike": [
      "Replaces velocity tracking with Flow Time, Flow Load, Flow Velocity, Flow Efficiency",
      "Reduces average cycle time by 35% through bottleneck identification and elimination",
      "Uses cumulative flow diagrams to predict delivery dates with 90% accuracy",
      "Presents flow efficiency analysis to leadership showing 20% value-added vs. 80% wait time",
      "Implements flow-based delivery approach resulting in 2x throughput improvement"
    ],
    "proofPoints": [
      "Average cycle time reduced by 30%+ over 6 months",
      "Flow efficiency improved from <20% to >35%",
      "Delivery forecasts within ±10% accuracy",
      "Identified and eliminated 3+ major bottlenecks using flow data",
      "Leadership uses flow metrics to make strategic decisions"
    ],
    "resourcesNeeded": { "time": "4-6 hours per week for metrics analysis", "budget": "£1,700-2,500 / $2,000-3,000", "tools": ["ActionableAgile Analytics", "Jira with advanced reporting", "Flow metrics dashboard"], "support": "Flow metrics expert or Kanban coach" },
    "realStoryExample": { "persona": "Derek, Mid-Level ADM at SaaS Company", "challenge": "Team claiming to be 'fast' but features taking 45 days average from start to done, unclear why", "action": "Implemented flow metrics tracking, discovered 70% wait time in code review and testing, addressed bottlenecks", "result": "Cycle time reduced to 18 days (60% improvement), throughput doubled, flow efficiency increased to 45%", "skillsUsed": ["Flow Metrics", "Data Analysis", "Bottleneck Identification", "Process Optimization"] },
    "commonMistakes": [
      "Continuing to use velocity when flow metrics are more appropriate",
      "Not distinguishing between cycle time and lead time",
      "Ignoring flow efficiency (% value-added time)",
      "Using flow metrics to judge individuals instead of improving system",
      "Not acting on insights from flow data"
    ],
    "interviewQuestions": [
      "Explain the difference between velocity and flow metrics.",
      "What is flow efficiency and why does it matter?",
      "How do you use flow metrics to improve delivery?",
      "Walk me through how you'd calculate cycle time for your team."
    ]
  },
  {
    "skillName": "Traditional Agile Metrics (Velocity, Burn-down)",
    "category": "Metrics, Analytics & Data-Driven Decision Making",
    "marketDemand": "80-85%",
    "skillType": "Baseline Competency",
    "requiredForLevel": { "entry": "4/5", "mid": "4/5", "senior": "4/5" },
    "whatItLooksLike": [
      "Achieves stable, predictable velocity within ±15% over 6+ sprints",
      "Uses historical velocity to forecast release dates with 90% accuracy",
      "Creates burn-down charts that drive daily team conversations about progress",
      "Educates stakeholders on appropriate velocity interpretation (not a productivity measure)",
      "Identifies team health issues early through velocity trends and patterns"
    ],
    "proofPoints": [
      "Team velocity stable within ±15% for 6+ sprints",
      "Velocity-based forecasts accurate within ±10%",
      "Stakeholders understand velocity is team-specific, not comparable across teams",
      "Zero gaming of velocity metrics (honest estimation maintained)",
      "Can explain velocity trends and what they indicate about team health"
    ],
    "resourcesNeeded": { "time": "2-3 hours per week for metrics tracking and analysis", "budget": "Minimal (£0-200 / $0-250 for tools)", "tools": ["Jira or similar with velocity tracking", "Reporting dashboards"], "support": "Team collaboration for honest estimation" },
    "realStoryExample": { "persona": "Hannah, Entry-Level ADM at Healthcare Tech", "challenge": "Stakeholders demanding team 'increase velocity' by 50%, not understanding metrics properly", "action": "Educated stakeholders on velocity purpose, showed stable velocity = healthy team, used forecasting to set realistic expectations", "result": "Pressure removed, team morale improved, focus shifted to value delivery vs. velocity gaming", "skillsUsed": ["Metrics Understanding", "Stakeholder Education", "Team Advocacy"] },
    "commonMistakes": [
      "Comparing velocity across different teams",
      "Using velocity as productivity measure for individuals",
      "Pressuring team to 'increase velocity' causing gaming",
      "Not addressing causes of velocity instability",
      "Forecasting with insufficient historical data (<3 sprints)"
    ],
    "interviewQuestions": [
      "How do you calculate and use velocity?",
      "What causes velocity to fluctuate and how do you address it?",
      "How do you prevent velocity gaming?",
      "Explain how you'd forecast a release date using velocity."
    ]
  },
  {
    "skillName": "Team Health & Happiness Metrics",
    "category": "Metrics, Analytics & Data-Driven Decision Making",
    "marketDemand": "65-75%",
    "skillType": "Essential for Retention",
    "requiredForLevel": { "entry": "3/5", "mid": "4/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Conducts monthly Spotify Squad Health Check with team achieving 8/10+ average scores",
      "Improves team happiness scores by 30% over 6 months through targeted interventions",
      "Reduces team turnover from 20% to <8% through proactive health monitoring",
      "Correlates team health with delivery performance showing strong relationship",
      "Creates early warning system for burnout and attrition risk"
    ],
    "proofPoints": [
      "Team health scores 8+/10 consistently",
      "Team retention rate >92% (vs. org average 80-85%)",
      "Proactively addressed 5+ team health issues before becoming critical",
      "Demonstrated correlation between team health and delivery performance",
      "Zero unexpected team departures in 18 months"
    ],
    "resourcesNeeded": { "time": "2-3 hours per week for health monitoring and interventions", "budget": "£50-500 / $60-600 annually", "tools": ["Survey tools", "Health check frameworks", "Analytics dashboard"], "support": "HR partnership, organizational support for addressing systemic issues" },
    "realStoryExample": { "persona": "Sophie, Mid-Level ADM at Gaming Company", "challenge": "Lost 4 team members in 3 months, remaining team demoralized, 'death march' atmosphere", "action": "Implemented health checks, identified burnout from unrealistic deadlines, renegotiated scope, added resources", "result": "Team health scores improved from 4/10 to 8.5/10 over 6 months, zero additional attrition, became 'best team to work on'", "skillsUsed": ["Team Health Monitoring", "Burnout Prevention", "Advocacy", "Change Management"] },
    "commonMistakes": [
      "Only measuring team health when problems are obvious",
      "Not taking action on health metric insights",
      "Making health checks feel like surveillance instead of support",
      "Ignoring early warning signs of team issues",
      "Not addressing systemic organizational issues affecting team health"
    ],
    "interviewQuestions": [
      "How do you measure and monitor team health?",
      "Describe a time you identified and addressed team burnout.",
      "What early warning signs do you look for regarding team issues?",
      "How do you balance delivery pressure with team wellbeing?"
    ]
  },
  {
    "skillName": "Business Outcome Metrics (ROI, Value Delivery)",
    "category": "Metrics, Analytics & Data-Driven Decision Making",
    "marketDemand": "55-65% (INCREASING)",
    "skillType": "Strategic Differentiator",
    "requiredForLevel": { "entry": "2/5", "mid": "3/5", "senior": "5/5" },
    "whatItLooksLike": [
      "Creates quarterly business value reports showing $2M revenue impact, 30% cost reduction, or 50K new users",
      "Implements OKRs (Objectives and Key Results) cascading from company to team level",
      "Demonstrates 5:1 or better ROI on delivery investments through data",
      "Partners with Product to measure feature success through A/B testing and analytics",
      "Shifts team mindset from output focus (features delivered) to outcome focus (business value created)"
    ],
    "proofPoints": [
      "Documented $1M+ business value delivery with clear attribution",
      "Team OKRs aligned to company objectives achieving 70%+ of key results",
      "Executive presentation showing 5:1 ROI on team investments",
      "Feature success rate improved 40% through outcome-focused delivery",
      "Recognized by leadership for business value contribution, not just delivery"
    ],
    "resourcesNeeded": { "time": "4-6 hours per week for value measurement and reporting", "budget": "£500-2,000 / $600-2,400", "tools": ["Analytics platforms", "OKR software", "Business intelligence tools"], "support": "Product team, Analytics team, Finance for ROI validation" },
    "realStoryExample": { "persona": "Jonathan, Senior ADM at E-commerce Platform", "challenge": "Delivered 50 features in a year but no one could articulate business impact, questioned value of team", "action": "Implemented outcome-focused approach, measured business impact of each feature, created quarterly value reports", "result": "Demonstrated $3.2M revenue impact, team budget increased 40%, invited to strategic planning sessions", "skillsUsed": ["Business Outcome Metrics", "Value Measurement", "Strategic Communication", "Product Thinking"] },
    "commonMistakes": [
      "Measuring outputs (features shipped) instead of outcomes (business value)",
      "Not partnering with Product/Analytics for measurement",
      "Using vanity metrics that don't tie to business results",
      "Claiming credit for business results not directly attributable to team work",
      "Not establishing baseline metrics before initiatives"
    ],
    "interviewQuestions": [
      "How do you measure the business value of your team's work?",
      "Describe a time you demonstrated ROI on a delivery initiative.",
      "How do you shift a team from output focus to outcome focus?",
      "Walk me through how you'd create a business case for additional resources."
    ]
  },
  {
    "skillName": "Predictive Analytics & Forecasting",
    "category": "Metrics, Analytics & Data-Driven Decision Making",
    "marketDemand": "30-40% (EMERGING)",
    "skillType": "Advanced Capability",
    "requiredForLevel": { "entry": "1/5", "mid": "2/5", "senior": "4/5" },
    "whatItLooksLike": [
      "Uses Monte Carlo simulations to forecast completion dates with 85/95 percentile confidence intervals",
      "Applies probabilistic forecasting achieving accuracy within ±12% of actual",
      "Identifies delivery trends 2-3 sprints ahead enabling proactive intervention",
      "Uses advanced analytics tools (ActionableAgile, Jira Align) for predictive insights",
      "Presents risk-adjusted forecasts to leadership showing probability ranges, not single dates"
    ],
    "proofPoints": [
      "Forecasting accuracy within ±15% of actual delivery for 80% of initiatives",
      "Leadership makes go/no-go decisions based on probabilistic forecasts",
      "Predicted delivery risk 2 months in advance allowing mitigation",
      "Monte Carlo simulations become standard practice for planning",
      "Recognized as analytical expert within organization"
    ],
    "resourcesNeeded": { "time": "3-5 hours per week for analytics and forecasting", "budget": "£800-2,000 / $1,000-2,400", "tools": ["ActionableAgile Analytics", "Power BI or Tableau", "Advanced Excel"], "support": "Data analyst or BI specialist for complex analyses" },
    "realStoryExample": { "persona": "Emily, Lead ADM at Enterprise Software Company", "challenge": "Leadership demanding delivery date commitments, team velocity unstable, pressure to over-commit", "action": "Implemented probabilistic forecasting with confidence intervals, educated leadership on probabilistic thinking", "result": "Forecasts accurate within 10%, no missed commitments in 18 months, became trusted advisor to C-suite", "skillsUsed": ["Predictive Analytics", "Monte Carlo Simulation", "Statistical Thinking", "Executive Education"] },
    "commonMistakes": [
      "Presenting single-date forecasts without confidence intervals",
      "Using insufficient historical data for predictions",
      "Not updating forecasts as new data becomes available",
      "Making forecasts too complex for stakeholders to understand",
      "Using predictive analytics to punish teams instead of improve planning"
    ],
    "interviewQuestions": [
      "How do you forecast delivery dates with uncertain scope?",
      "Explain Monte Carlo simulation and when you'd use it.",
      "How do you communicate probabilistic forecasts to executives?",
      "What data do you need for accurate delivery forecasting?"
    ]
  },
  {
    "skillName": "Business & Financial Literacy",
    "category": "Strategic & Business Acumen",
    "marketDemand": "50-60% (HIGHER FOR SENIOR ROLES)",
    "skillType": "Career Accelerator",
    "requiredForLevel": { "entry": "2/5", "mid": "3/5", "senior": "4/5" },
    "whatItLooksLike": [
      "Creates business cases showing 3-year TCO and ROI with NPV calculations",
      "Discusses delivery work in terms of revenue impact, cost reduction, and profit contribution",
      "Manages delivery budget of $2M+ with variance <5%",
      "Presents to board using financial terminology and business rationale",
      "Understands how company makes money and how delivery contributes to business model"
    ],
    "proofPoints": [
      "Managed annual budget of $1M+ with <5% variance",
      "Created business case that secured $500K funding",
      "Present using business terminology fluently",
      "Finance team rates your budget management as excellent",
      "Can explain company business model and how delivery contributes"
    ],
    "resourcesNeeded": { "time": "3-4 hours per week for business learning", "budget": "£400-1,500 / $500-1,800", "tools": ["Financial modeling templates", "Business case frameworks"], "support": "Finance mentor, CFO office access for learning" },
    "realStoryExample": { "persona": "Andre, Senior ADM at Retail Company", "challenge": "Proposed platform modernization rejected twice due to 'unclear business value'", "action": "Partnered with Finance, built comprehensive business case showing $2.3M savings over 3 years, presented with ROI/payback", "result": "Project approved with $3M budget, delivered 18% under budget, became VP of Engineering", "skillsUsed": ["Financial Literacy", "Business Case Development", "Executive Communication", "Strategic Thinking"] },
    "commonMistakes": [
      "Avoiding financial discussions because 'not comfortable with numbers'",
      "Not understanding cost implications of delivery decisions",
      "Focusing only on technical excellence without business context",
      "Not speaking language of finance when presenting to executives",
      "Making commitments without understanding budget constraints"
    ],
    "interviewQuestions": [
      "How do you create a business case for a technical initiative?",
      "Explain ROI and how you'd calculate it for a delivery program.",
      "How does your work contribute to the company's financial performance?",
      "Describe a time you managed a significant budget."
    ]
  },
  {
    "skillName": "Strategic Alignment & Planning",
    "category": "Strategic & Business Acumen",
    "marketDemand": "50-60% of senior postings",
    "skillType": "Leadership Competency",
    "requiredForLevel": { "entry": "1/5", "mid": "2/5", "senior": "4/5" },
    "whatItLooksLike": [
      "Translates company strategy into quarterly team roadmaps showing clear alignment to OKRs",
      "Creates strategic delivery plans presented to executive leadership",
      "Participates in annual strategic planning influencing organizational direction",
      "Ensures 90%+ of team work directly supports company strategic objectives",
      "Identifies strategic opportunities where delivery capabilities enable business growth"
    ],
    "proofPoints": [
      "Team roadmap explicitly tied to company OKRs with clear rationale",
      "Invited to participate in strategic planning sessions",
      "Leadership references your strategic insights in decision-making",
      "Zero team work that doesn't connect to strategic objectives",
      "Successfully influenced strategic direction based on delivery insights"
    ],
    "resourcesNeeded": { "time": "4-6 hours per week for strategic work", "budget": "£700-2,000 / $800-2,400", "tools": ["OKR software", "Strategy mapping tools", "Portfolio planning tools"], "support": "Executive sponsor, Strategy team access" },
    "realStoryExample": { "persona": "Michael, Lead ADM at Financial Technology", "challenge": "Team working on projects not aligned to company direction, risk of funding cuts", "action": "Realigned team backlog to company strategy, eliminated 30% non-strategic work, created strategy dashboard", "result": "Team became strategic priority, budget increased 50%, Michael promoted to Director role", "skillsUsed": ["Strategic Alignment", "Portfolio Management", "Stakeholder Management", "Communication"] },
    "commonMistakes": [
      "Not understanding company strategy and direction",
      "Working on 'interesting' projects not aligned to business goals",
      "Not communicating how delivery work supports strategy",
      "Waiting to be told what's strategic instead of seeking alignment",
      "Not questioning work that doesn't connect to strategy"
    ],
    "interviewQuestions": [
      "How do you ensure your team's work aligns with company strategy?",
      "Describe a time you influenced strategic direction.",
      "How do you translate business strategy into delivery plans?",
      "What frameworks do you use for strategic planning?"
    ]
  },
   {
    "skillName": "Product Thinking & Customer Centricity",
    "category": "Strategic & Business Acumen",
    "marketDemand": "45-55% (INCREASING)",
    "skillType": "Critical Differentiator",
    "requiredForLevel": {
      "entry": "2/5",
      "mid": "3/5",
      "senior": "4/5"
    },
    "whatItLooksLike": [
      "Partners with Product to maximize customer value delivery, not just task completion",
      "Attends customer research sessions to understand user needs firsthand",
      "Implements customer satisfaction metrics for delivered features (NPS, CSAT, adoption)",
      "Leads discovery workshops focused on customer problems rather than solutions",
      "Shifts team mindset from 'build what's asked' to 'solve customer problems'"
    ],
    "proofPoints": [
      "Team measures customer impact for 100% of delivered features",
      "Participated in 20+ customer research sessions with actionable insights",
      "Feature adoption rates increased 40% through better problem understanding",
      "Product team actively seeks your partnership in discovery work",
      "Can articulate customer value proposition for all team work"
    ],
    "resourcesNeeded": { "time": "4-6 hours per week for product activities", "budget": "£1,200-2,000 / $1,400-2,400", "tools": ["User research tools", "Analytics platforms", "Product discovery frameworks"], "support": "Product team partnership, UX research team access" },
    "realStoryExample": { "persona": "Zara, Mid-Level ADM at B2B SaaS", "challenge": "Team building features customers didn't use, 65% feature adoption rate, frustration growing", "action": "Started attending customer calls, facilitated discovery workshops, implemented feature success tracking, challenged requirements", "result": "Feature adoption increased to 92%, customer satisfaction up 28%, team morale improved significantly", "skillsUsed": ["Product Thinking", "Customer Research", "Discovery Facilitation", "Outcome Focus"] },
    "commonMistakes": [
      "Focusing purely on delivery execution without understanding customer value",
      "Not engaging with customers or user research",
      "Treating Product as 'the customer' instead of understanding end users",
      "Measuring outputs (features) instead of outcomes (customer value)",
      "Not challenging requirements that don't solve customer problems"
    ],
    "interviewQuestions": [
      "How do you ensure your team focuses on customer value?",
      "Describe your experience with product discovery work.",
      "How do you measure whether delivered features actually help customers?",
      "Tell me about a time you challenged a requirement based on customer insight."
    ]
  },
  {
    "skillName": "Portfolio & Program Management",
    "category": "Strategic & Business Acumen",
    "marketDemand": "45-55% of senior postings",
    "skillType": "Scale-Up Skill",
    "requiredForLevel": {
      "entry": "1/5",
      "mid": "2/5",
      "senior": "4/5"
    },
    "whatItLooksLike": [
      "Manages program-level delivery coordinating 5-8 teams with 50-80 people",
      "Leads program-level PI Planning events in SAFe environments",
      "Creates portfolio dashboards showing health across 10+ initiatives",
      "Optimizes portfolio for strategic value and resource allocation",
      "Manages program budget of $5M+ with cross-team resource coordination"
    ],
    "proofPoints": [
      "Successfully managed program with 50+ people and $5M+ budget",
      "Program predictability measure >75% for 3+ PIs",
      "Portfolio health dashboard used by leadership for decision-making",
      "Coordinated dependencies across 8+ teams with 90% on-time delivery",
      "Optimized portfolio resource allocation showing 25% efficiency gain"
    ],
    "resourcesNeeded": { "time": "15-25 hours per week for program management", "budget": "£2,000-4,000 / $2,400-4,800", "tools": ["Portfolio management software", "Program dashboards", "Resource planning tools"], "support": "PMO support, Executive sponsorship, Finance partnership" },
    "realStoryExample": { "persona": "Rachel, Lead ADM at Insurance Company", "challenge": "Digital transformation initiative with 8 teams, unclear priorities, resource conflicts, 6-month delay", "action": "Established program governance, implemented PI Planning, created portfolio prioritization framework, weekly sync across teams", "result": "Program delivered 3 months early, saved $1.2M, became model for other programs, promoted to Director", "skillsUsed": ["Program Management", "Portfolio Optimization", "SAFe RTE", "Stakeholder Alignment"] },
    "commonMistakes": [
      "Managing program like large project instead of coordinated initiatives",
      "Not establishing clear governance and decision-making frameworks",
      "Optimizing individual team productivity instead of program outcomes",
      "Insufficient dependency management across teams",
      "Not balancing short-term delivery with long-term portfolio health"
    ],
    "interviewQuestions": [
      "How do you coordinate delivery across multiple teams?",
      "Describe your approach to portfolio prioritization.",
      "How do you manage dependencies at program level?",
      "What's your experience with SAFe program management (if applicable)?"
    ]
  },
  {
    "skillName": "Organizational Design & Capability Building",
    "category": "Strategic & Business Acumen",
    "marketDemand": "30-40% of lead postings",
    "skillType": "Transformational Leadership",
    "requiredForLevel": {
      "entry": "0/5",
      "mid": "1/5",
      "senior": "3/5"
    },
    "whatItLooksLike": [
      "Designs organizational delivery operating model reducing handoffs by 40%",
      "Builds ADM capability by hiring, training, and developing 5+ delivery managers",
      "Creates organizational agile maturity assessments with improvement roadmaps",
      "Leads organizational restructuring from project-based to product-based teams",
      "Presents organizational design recommendations to C-suite with implementation plan"
    ],
    "proofPoints": [
      "Led organizational restructuring affecting 100+ people with measurable improvement",
      "Built delivery capability from 2 to 8 ADMs with 90%+ retention",
      "Organizational agile maturity improved from Level 2 to Level 4 over 18 months",
      "Reduced cross-team dependencies by 50% through organizational design",
      "Published organizational design case study or presented at conference"
    ],
    "resourcesNeeded": { "time": "20-30 hours per week during active transformation", "budget": "£3,000-6,000 personal development / $3,600-7,200, plus organizational investment", "tools": ["Organizational design frameworks", "Maturity assessment tools"], "support": "Executive sponsorship, Organizational development consultant, HR partnership" },
    "realStoryExample": { "persona": "David, Head of Delivery at Tech Company", "challenge": "250-person engineering org structured as projects with 15 project managers, high turnover, slow delivery", "action": "Redesigned to product-based teams using Team Topologies, built ADM capability, eliminated PM role, 12-month transformation", "result": "Delivery speed increased 60%, turnover reduced from 25% to 12%, became VP of Engineering", "skillsUsed": ["Organizational Design", "Capability Building", "Change Management", "Strategic Leadership"] },
    "commonMistakes": [
      "Copying organizational structures without understanding context",
      "Not considering Conway's Law when designing teams",
      "Reorganizing without clear problem definition and success criteria",
      "Moving too fast without building capability first",
      "Not measuring organizational design effectiveness"
    ],
    "interviewQuestions": [
      "How would you design an organizational structure for optimal delivery?",
      "Describe your experience building delivery capability.",
      "How do you assess organizational agile maturity?",
      "What principles guide your organizational design decisions?"
    ]
  },
  {
    "skillName": "Retrospective Facilitation & Action",
    "category": "Continuous Improvement & Innovation",
    "marketDemand": "75-85%",
    "skillType": "Core Agile Practice",
    "requiredForLevel": {
      "entry": "4/5",
      "mid": "5/5",
      "senior": "5/5"
    },
    "whatItLooksLike": [
      "Facilitates retrospectives using 20+ different formats based on team needs and context",
      "Achieves 90%+ action item completion rate from retrospectives",
      "Demonstrates 30% improvement in team-selected metrics over 6 months from retro actions",
      "Facilitates scaled retrospectives (PI System Demo, Inspect & Adapt) for 50+ people",
      "Creates retrospective libraries and trains other facilitators on effective techniques"
    ],
    "proofPoints": [
      "90%+ of retrospective action items completed before next retro",
      "Team rates retrospective effectiveness 9/10+",
      "Documented improvements: cycle time down 25%, defects down 40%, team happiness up 30%",
      "Facilitated 50+ retrospectives using diverse formats",
      "Other teams request your facilitation for important retrospectives"
    ],
    "resourcesNeeded": { "time": "2-3 hours per retrospective (prep + facilitation + follow-up)", "budget": "£200-600 / $250-750", "tools": ["Miro/Mural for virtual retrospectives", "Action tracking system", "Facilitation materials"], "support": "Team commitment to retrospective process" },
    "realStoryExample": { "persona": "Maya, Mid-Level ADM at Digital Agency", "challenge": "Retrospectives became complaint sessions with no action, team cynical about 'waste of time'", "action": "Redesigned retrospective: focus on data not opinions, 3 max action items, public tracking, celebration of wins", "result": "Action completion rate increased from 30% to 95%, team engagement improved, measurable performance gains", "skillsUsed": ["Retrospective Facilitation", "Action Management", "Team Engagement", "Data-Driven Improvement"] },
    "commonMistakes": [
      "Using same retrospective format every time (team disengagement)",
      "Not tracking or following up on action items",
      "Allowing retrospectives to become blame sessions",
      "Too many action items (3 max is optimal)",
      "Not celebrating improvements and wins"
    ],
    "interviewQuestions": [
      "How do you ensure retrospectives lead to actual improvements?",
      "What do you do when retrospectives become repetitive or stale?",
      "Describe your most effective retrospective. What made it work?",
      "How do you handle blame or negativity in retrospectives?"
    ]
  },
  {
    "skillName": "Process Optimization & Efficiency",
    "category": "Continuous Improvement & Innovation",
    "marketDemand": "60-75%",
    "skillType": "Value Creation Engine",
    "requiredForLevel": {
      "entry": "3/5",
      "mid": "4/5",
      "senior": "5/5"
    },
    "whatItLooksLike": [
      "Reduces delivery cycle time by 40% through systematic process optimization",
      "Eliminates 30% of non-value-added activities through Lean analysis",
      "Implements automation reducing manual work from 20 hours to 2 hours per week",
      "Documents process improvements with before/after metrics and ROI calculation",
      "Redesigns end-to-end delivery process improving efficiency by 50%+"
    ],
    "proofPoints": [
      "Cycle time reduced by 35%+ through process optimization",
      "Eliminated $50K+ annual waste through efficiency improvements",
      "Documented 5+ process improvements with measurable business impact",
      "Process efficiency scores improved from 20% to 45%",
      "Recognition for operational excellence (award, commendation, bonus)"
    ],
    "resourcesNeeded": { "time": "6-10 hours per week for improvement initiatives", "budget": "£1,500-4,000 / $1,800-4,800", "tools": ["Process mapping software", "Lean Six Sigma tools", "Automation platforms"], "support": "Management support for process changes, cross-functional collaboration" },
    "realStoryExample": { "persona": "Chen, Senior ADM at Manufacturing Tech", "challenge": "Release process taking 12 hours with 15 manual steps, releases only monthly due to complexity", "action": "Mapped current process, identified automation opportunities, eliminated 10 manual steps, implemented CI/CD pipeline", "result": "Release time reduced to 45 minutes, frequency increased to weekly, deployment errors down 80%, $200K annual savings", "skillsUsed": ["Process Optimization", "Lean Thinking", "Automation", "DevOps Practices"] },
    "commonMistakes": [
      "Optimizing locally instead of end-to-end system",
      "Not measuring baseline before optimization",
      "Implementing solutions without understanding root cause",
      "Optimizing processes without involving people who do the work",
      "Not sustaining improvements (process degradation over time)"
    ],
    "interviewQuestions": [
      "Describe a process you optimized. What was your approach?",
      "How do you identify waste in delivery processes?",
      "What Lean or Six Sigma tools do you use?",
      "How do you ensure process improvements are sustained?"
    ]
  },
  {
    "skillName": "Innovation & Experimentation",
    "category": "Continuous Improvement & Innovation",
    "marketDemand": "50-60%",
    "skillType": "Cultural Driver",
    "requiredForLevel": {
      "entry": "2/5",
      "mid": "3/5",
      "senior": "4/5"
    },
    "whatItLooksLike": [
      "Implements '20% time' or innovation sprints for teams resulting in 3+ adopted innovations",
      "Conducts 'spike' stories to evaluate new technologies before commitment",
      "Creates blameless post-mortem culture where failures become learning opportunities",
      "Tracks innovation metrics: experiments run (15+/year), success rate (30-40%), learnings captured",
      "Builds experimentation culture where team proactively suggests and tests new approaches"
    ],
    "proofPoints": [
      "15+ experiments conducted annually with documented learnings",
      "3+ innovations adopted from experimentation providing measurable value",
      "Team proactively proposes 80% of experiment ideas (not ADM-driven)",
      "Zero fear of failure - team openly discusses failed experiments",
      "Innovation metrics tracked and improving over time"
    ],
    "resourcesNeeded": { "time": "20% team capacity for innovation time, plus 2-3 hours ADM facilitation weekly", "budget": "£1,000-3,000 annually / $1,200-3,600", "tools": ["Experimentation tracking system", "Showcase/demo platforms"], "support": "Leadership support for experimentation time and budget" },
    "realStoryExample": { "persona": "Liam, Mid-Level ADM at FinTech Startup", "challenge": "Team stuck in 'safe' delivery mode, no innovation, falling behind competitors", "action": "Introduced innovation Fridays (20% time), created experiment canvas, celebrated 'good failures', showcased learnings", "result": "12 experiments in 6 months, 4 adopted innovations, 1 became major product feature generating $500K revenue", "skillsUsed": ["Innovation Leadership", "Experimentation", "Cultural Change", "Risk Management"] },
    "commonMistakes": [
      "Not providing dedicated time for innovation (always de-prioritized)",
      "Punishing failed experiments",
      "Not documenting learnings from experiments",
      "Allowing innovation time without structure or accountability",
      "Not connecting experiments to business goals"
    ],
    "interviewQuestions": [
      "How do you foster innovation within your teams?",
      "Describe an experiment your team ran. What did you learn?",
      "How do you balance innovation with delivery commitments?",
      "How do you create psychological safety for experimentation?"
    ]
  },
  {
    "skillName": "Knowledge Management & Documentation",
    "category": "Continuous Improvement & Innovation",
    "marketDemand": "55-65%",
    "skillType": "Organizational Capability",
    "requiredForLevel": {
      "entry": "3/5",
      "mid": "4/5",
      "senior": "4/5"
    },
    "whatItLooksLike": [
      "Builds comprehensive team documentation in Confluence reducing onboarding time by 40%",
      "Creates decision logs (ADRs - Architectural Decision Records) for all major decisions",
      "Implements 'documentation as code' practices for delivery processes",
      "Facilitates lunch-and-learn sessions and knowledge sharing forums monthly",
      "Reduces repeated questions by 70% through searchable knowledge base"
    ],
    "proofPoints": [
      "Onboarding time reduced from 6 weeks to 3.5 weeks through documentation",
      "80%+ of common questions answered by searchable documentation",
      "100+ documented decision records available for reference",
      "Knowledge sharing sessions held monthly with 85%+ attendance",
      "Team documentation rated 9/10+ for usefulness and accessibility"
    ],
    "resourcesNeeded": { "time": "3-5 hours per week for knowledge management activities", "budget": "£500-1,500 / $600-1,800", "tools": ["Confluence or similar wiki", "Documentation tools", "Search functionality"], "support": "Team participation in documentation efforts" },
    "realStoryExample": { "persona": "Olivia, Mid-Level ADM at Consulting Firm", "challenge": "High turnover meant constant re-learning, tribal knowledge lost, new people taking 3 months to be productive", "action": "Built comprehensive knowledge base, implemented ADRs, established 'doc or it didn't happen' culture, created templates", "result": "Onboarding time reduced 55%, knowledge retention through turnover, became model for other teams", "skillsUsed": ["Knowledge Management", "Documentation", "Process Standardization", "Cultural Change"] },
    "commonMistakes": [
      "Documentation becomes outdated and unreliable",
      "Too much documentation (information overload)",
      "Not making documentation searchable and accessible",
      "ADM does all documentation instead of team ownership",
      "Not integrating documentation into workflow (separate activity)"
    ],
    "interviewQuestions": [
      "How do you ensure knowledge is captured and accessible?",
      "What's your approach to team documentation?",
      "How do you handle knowledge transfer when people leave?",
      "Describe your experience with communities of practice or knowledge sharing."
    ]
  },
  {
    "skillName": "Emerging Technology Adoption (AI/ML)",
    "category": "Continuous Improvement & Innovation",
    "marketDemand": "35-45% (RAPIDLY GROWING)",
    "skillType": "Future-Proofing",
    "requiredForLevel": {
      "entry": "1/5",
      "mid": "2/5",
      "senior": "3/5"
    },
    "whatItLooksLike": [
      "Implements GitHub Copilot or AI coding assistants for team with measured productivity gains",
      "Uses ChatGPT/Claude for documentation, retrospective summaries, meeting notes with 30% time savings",
      "Leads pilot projects measuring AI productivity improvements (20-30% code generation speedup)",
      "Evaluates and adopts platform engineering tools and practices",
      "Presents technology trend analysis to leadership with adoption recommendations"
    ],
    "proofPoints": [
      "Successfully piloted 3+ AI tools with measured business impact",
      "Team productivity improved 25%+ through AI tool adoption",
      "Published internal guidelines for responsible AI use in delivery",
      "Presented AI adoption recommendations to leadership resulting in investment",
      "Recognized as AI early adopter and internal expert"
    ],
    "resourcesNeeded": { "time": "3-5 hours per week for learning and experimentation", "budget": "£1,000-3,000 / $1,200-3,600 annually", "tools": ["AI tool subscriptions", "Pilot program budget"], "support": "IT approval for tool adoption, budget for pilots" },
    "realStoryExample": { "persona": "Kai, Senior ADM at Cloud Services Company", "challenge": "Documentation taking 5 hours per week, retrospective summaries 2 hours, competitive pressure to adopt AI", "action": "Piloted AI tools: GitHub Copilot for developers, ChatGPT for documentation, measured impact rigorously", "result": "Coding productivity up 28%, documentation time reduced 60%, team morale improved, expanded to 50 teams", "skillsUsed": ["AI Adoption", "Change Management", "Measurement", "Technology Evaluation"] },
    "commonMistakes": [
      "Adopting AI without understanding use cases or measuring impact",
      "Not addressing team concerns about AI (job security fears)",
      "Ignoring AI ethics and responsible use considerations",
      "Using AI as replacement for human judgment in critical decisions",
      "Not staying current with rapidly evolving AI landscape"
    ],
    "interviewQuestions": [
      "How are you using or planning to use AI in delivery management?",
      "What AI tools have you experimented with? What did you learn?",
      "How do you evaluate whether to adopt emerging technologies?",
      "What concerns do you have about AI in delivery, and how would you address them?"
    ]
  }
];

export const careerLevels: CareerLevel[] = [
  { "level": 1, "title": "Entry-Level ADM", "yearsExperience": "0-2 years", "salaryRange": { "uk": "£42,000-£55,000", "us": "$90,000-$120,000" }, "typicalSpanOfControl": "1 team (5-9 people)", "reportsTo": "Senior ADM / Head of Delivery / Product Director", "keyFocus": "Hands-on facilitation, learning frameworks, building credibility", "criticalCheckpoint": "Can independently run all Scrum ceremonies for 6+ months" },
  { "level": 2, "title": "Mid-Level ADM", "yearsExperience": "2-5 years", "salaryRange": { "uk": "£55,000-£70,000", "us": "$120,000-$160,000" }, "typicalSpanOfControl": "2-3 teams (15-25 people)", "reportsTo": "Head of Delivery / Director of Engineering", "keyFocus": "Multi-team coordination, dependency management, coaching others", "criticalCheckpoint": "Can manage cross-team dependencies and coach junior ADMs" },
  { "level": 3, "title": "Senior ADM", "yearsExperience": "5-8 years", "salaryRange": { "uk": "£70,000-£90,000", "us": "$160,000-$200,000" }, "typicalSpanOfControl": "3-6 teams or 2-3 ADMs (25-50 people)", "reportsTo": "Head of Delivery / VP Engineering / CTO", "keyFocus": "Strategic delivery, program management, capability building", "criticalCheckpoint": "Can lead program-level delivery and develop organizational capability" },
  { "level": 4, "title": "Lead ADM / Principal ADM", "yearsExperience": "8-12 years", "salaryRange": { "uk": "£85,000-£110,000", "us": "$200,000-$250,000" }, "typicalSpanOfControl": "Portfolio of 6-10 teams or 4-6 ADMs (50-100 people)", "reportsTo": "VP Engineering / CTO / Chief Product Officer", "keyFocus": "Portfolio optimization, organizational transformation, executive partnership", "criticalCheckpoint": "Can architect organizational delivery systems and lead transformation" },
  { "level": 5, "title": "Head of Delivery / Director of Agile", "yearsExperience": "12+ years", "salaryRange": { "uk": "£100,000-£150,000", "us": "$220,000-$350,000" }, "typicalSpanOfControl": "Entire delivery organization (100+ people)", "reportsTo": "CTO / CPO / COO", "keyFocus": "Enterprise strategy, P&L ownership, executive leadership", "criticalCheckpoint": "Can set organizational direction and demonstrate business impact at board level" }
];

export const careerPathways: { [key: string]: CareerPathway } = {
    "technicalTrack": {
      "name": "Technical Delivery Specialist",
      "description": "Deep technical expertise in DevOps, cloud, and engineering practices",
      "keySkills": [
        "CI/CD & DevOps Practices (5/5)",
        "Cloud Platforms (4/5)",
        "SDLC Knowledge (5/5)",
        "Technical Tools Mastery (5/5)",
        "AI/ML Integration (4/5)"
      ],
      "typicalRoles": [
        "Technical Delivery Manager",
        "DevOps Delivery Lead",
        "Platform Delivery Manager",
        "Engineering Manager"
      ],
      "salaryProgression": {
        "uk": "£70,000 → £95,000 → £120,000",
        "us": "$160,000 → $200,000 → $250,000"
      },
      "timeToProgress": "5-7 years entry to senior"
    },
    "leadershipTrack": {
      "name": "People & Team Leadership",
      "description": "Focus on coaching, culture, and team development",
      "keySkills": [
        "Servant Leadership (5/5)",
        "Coaching & Mentoring (5/5)",
        "Team Building & Psychological Safety (5/5)",
        "Change Management (5/5)",
        "Organizational Design (4/5)"
      ],
      "typicalRoles": [
        "Agile Coach",
        "Head of Delivery",
        "Director of Agile Transformation",
        "VP of Engineering"
      ],
      "salaryProgression": {
        "uk": "£75,000 → £110,000 → £150,000+",
        "us": "$170,000 → $230,000 → $350,000+"
      },
      "timeToProgress": "6-8 years entry to senior"
    },
    "strategicTrack": {
      "name": "Strategic Business Partner",
      "description": "Business acumen, strategic alignment, and executive partnership",
      "keySkills": [
        "Business & Financial Literacy (5/5)",
        "Strategic Alignment & Planning (5/5)",
        "Product Thinking (5/5)",
        "Portfolio Management (5/5)",
        "Executive Communication (5/5)"
      ],
      "typicalRoles": [
        "Program Manager",
        "Portfolio Manager",
        "Director of Program Management",
        "Chief Delivery Officer"
      ],
      "salaryProgression": {
        "uk": "£80,000 → £120,000 → £180,000+",
        "us": "$180,000 → $250,000 → $400,000+"
      },
      "timeToProgress": "7-10 years entry to senior"
    }
};

export const jobPostingExamples: JobPostingExample[] = [
    {
      "company": "DWP Digital (UK Government)",
      "level": "Entry-Level ADM",
      "salary": "£42,614 + 29% pension",
      "requiredSkills": [
        "Scrum Framework Mastery (4/5)",
        "Agile Ceremony Facilitation (4/5)",
        "Impediment Removal (4/5)",
        "Servant Leadership (3/5)",
        "GDS Standards Knowledge (3/5)"
      ],
      "niceToHave": [
        "CSM certification",
        "Government Digital Service experience",
        "Multiple team experience"
      ]
    },
    {
      "company": "Capital One (US Financial Services)",
      "level": "Senior ADM / Program Lead",
      "salary": "$170,800-$194,900",
      "requiredSkills": [
        "SAFe Framework (4/5)",
        "Program Management (5/5)",
        "Risk Management (5/5)",
        "Stakeholder Management (5/5)",
        "Business Communication (5/5)"
      ],
      "niceToHave": [
        "PMP certification",
        "SAFe RTE",
        "Financial services experience",
        "Budget management ($5M+)"
      ]
    },
    {
      "company": "Salesforce (US Tech)",
      "level": "Director-Level",
      "salary": "$200,000-$280,000",
      "requiredSkills": [
        "AI/ML Integration (4/5)",
        "Strategic Alignment (5/5)",
        "DevOps Practices (4/5)",
        "Organizational Design (4/5)",
        "Executive Communication (5/5)"
      ],
      "niceToHave": [
        "10+ years experience",
        "AI/ML platform knowledge",
        "MLOps experience",
        "Transformation leadership"
      ]
    }
];

export const skillDevelopmentTimelines: { [key: string]: SkillDevelopmentTimeline } = {
    "fastTrack": {
      "duration": "6 months intensive",
      "target": "Entry to Mid-Level",
      "focusSkills": [
        "Scrum Mastery → 4/5",
        "Communication → 4/5",
        "Jira Proficiency → 4/5",
        "Backlog Management → 4/5",
        "Impediment Removal → 4/5"
      ],
      "investmentRequired": {
        "time": "15-20 hours/week",
        "budget": "£2,500-4,000 / $3,000-4,800",
        "certifications": ["CSM", "SAFe SSM if enterprise"]
      }
    },
    "standardTrack": {
      "duration": "18 months",
      "target": "Entry to Mid-Level",
      "focusSkills": [
        "All Entry skills → 4-5/5",
        "Kanban & Flow → 4/5",
        "Coaching → 3/5",
        "Stakeholder Management → 4/5",
        "Risk Management → 4/5"
      ],
      "investmentRequired": {
        "time": "8-12 hours/week",
        "budget": "£4,000-6,000 / $4,800-7,200",
        "certifications": ["CSM", "A-CSM", "SAFe SSM"]
      }
    },
    "seniorTrack": {
      "duration": "2-3 years",
      "target": "Mid to Senior/Lead",
      "focusSkills": [
        "Strategic Alignment → 4/5",
        "Business Literacy → 4/5",
        "Change Management → 4/5",
        "Portfolio Management → 4/5",
        "Executive Communication → 5/5"
      ],
      "investmentRequired": {
        "time": "10-15 hours/week",
        "budget": "£8,000-15,000 / $10,000-18,000",
        "certifications": ["PMP", "SAFe RTE", "ICAgile ICP-DAS", "MBA modules"]
      }
    }
};