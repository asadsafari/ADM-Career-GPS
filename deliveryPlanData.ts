import { DeliveryPlanData } from './types';

export const deliveryPlanData: DeliveryPlanData = {
  title: "Mobile Banking: Launch International Payments MVP",
  description: "This plan outlines the key phases, milestones, and dependencies for launching the new International Payments feature. It involves two squads, external service dependencies, and critical governance approvals, showcasing a typical Agile delivery flow in a regulated environment.",
  items: [
    // --- Discovery & Design Phase ---
    {
      id: 'discovery_epic',
      swimlane: 'Squad A: Accounts & Payments',
      name: 'Discovery & Solutioning',
      startSprint: 1,
      sprints: 2,
      type: 'Epic',
      dependencies: [],
      description: 'Collaborative workshops with Product, UX, and Solution Architecture to define requirements, user flows, and technical approach.',
      progress: 100,
    },
    {
      id: 'user_research',
      swimlane: 'UX & Design',
      name: 'User Research & Journey Mapping',
      startSprint: 1,
      sprints: 1,
      type: 'Task',
      dependencies: [],
      description: 'Conduct user interviews and map out the end-to-end customer journey for international payments.',
      progress: 100,
    },
    {
      id: 'wireframes',
      swimlane: 'UX & Design',
      name: 'Wireframing & Prototyping',
      startSprint: 2,
      sprints: 1,
      type: 'Task',
      dependencies: ['user_research'],
      description: 'Create low-fidelity wireframes and an interactive prototype for user testing and stakeholder alignment.',
      progress: 100,
    },
    {
      id: 'sa_review',
      swimlane: 'Governance & Approvals',
      name: 'Architecture Review & Approval',
      startSprint: 3,
      sprints: 1,
      type: 'Milestone',
      dependencies: ['discovery_epic'],
      description: 'Formal review of the solution design with the Solution Architecture board to ensure it meets enterprise standards.',
      progress: 100,
    },
    // --- Core Dependencies ---
    {
      id: 'core_api_contract',
      swimlane: 'Dependencies',
      name: 'Core Banking: Finalize API Contract',
      startSprint: 2,
      sprints: 1,
      type: 'Task',
      dependencies: [],
      description: 'Finalize and agree on the OpenAPI contract for the new FX & Compliance endpoints with the Core Banking team.',
      progress: 100,
    },
     {
      id: 'core_api_dev',
      swimlane: 'Dependencies',
      name: 'Core Banking: FX & Compliance API Dev',
      startSprint: 3,
      sprints: 3,
      type: 'Task',
      dependencies: ['core_api_contract'],
      description: 'The Core Banking services team must deliver a new API endpoint for foreign exchange rates and compliance checks.',
      progress: 100,
    },
    // --- Development Phase ---
    {
      id: 'backend_epic',
      swimlane: 'Squad A: Accounts & Payments',
      name: 'Backend: Payment Orchestration Service',
      startSprint: 4,
      sprints: 3,
      type: 'Epic',
      dependencies: ['sa_review', 'core_api_dev'],
      description: 'Build the new microservice that orchestrates the international payment process, integrating with the new Core Banking API.',
      progress: 100,
    },
    {
      id: 'ui_design_system',
      swimlane: 'UX & Design',
      name: 'Final UI & Design System Components',
      startSprint: 4,
      sprints: 1,
      type: 'Task',
      dependencies: ['wireframes'],
      description: 'Develop high-fidelity UI mockups and create reusable components for the mobile design system.',
      progress: 100,
    },
    {
      id: 'mobile_ui_epic',
      swimlane: 'Squad B: Onboarding & Profile',
      name: 'Mobile UI/UX: Payment Flow',
      startSprint: 5,
      sprints: 4,
      type: 'Epic',
      dependencies: ['ui_design_system'],
      description: 'Develop the end-to-end user interface for both iOS and Android platforms, from entering recipient details to confirming the payment.',
      progress: 80,
    },
     {
      id: 'backend_integration',
      swimlane: 'Squad A: Accounts & Payments',
      name: 'Integration with Mobile App',
      startSprint: 7,
      sprints: 2,
      type: 'Task',
      dependencies: ['backend_epic', 'mobile_ui_epic'],
      description: 'Work with Squad B to integrate the backend orchestration service with the new mobile UI components.',
      progress: 70,
    },
     {
      id: 'card_services_update',
      swimlane: 'Dependencies',
      name: 'Card Services: Fee Adjustment',
      startSprint: 6,
      sprints: 2,
      type: 'Task',
      dependencies: [],
      description: 'Update to the Card Services system to handle new international transaction fee structures.',
      progress: 100,
    },
    // --- Testing & Release Phase ---
    {
      id: 'sit',
      swimlane: 'Squad A: Accounts & Payments',
      name: 'System Integration Testing (SIT)',
      startSprint: 8,
      sprints: 1,
      type: 'Task',
      dependencies: ['backend_integration', 'card_services_update'],
      description: 'End-to-end testing of the full technology stack, including all downstream dependencies.',
      progress: 10,
    },
    {
      id: 'uat',
      swimlane: 'Governance & Approvals',
      name: 'User Acceptance Testing (UAT)',
      startSprint: 9,
      sprints: 2,
      type: 'Task',
      dependencies: ['sit'],
      description: 'Business stakeholders conduct end-to-end testing in a pre-production environment to validate the feature meets business requirements.',
      progress: 0,
    },
    {
      id: 'perf_testing',
      swimlane: 'Dependencies',
      name: 'Performance Testing Sign-off',
      startSprint: 10,
      sprints: 1,
      type: 'Milestone',
      dependencies: ['uat'],
      description: 'Dedicated performance testing cycle to ensure the new feature does not degrade overall app performance.',
      progress: 0,
    },
    {
      id: 'cab_submission',
      swimlane: 'Governance & Approvals',
      name: 'CAB Submission & Approval',
      startSprint: 11,
      sprints: 1,
      type: 'Milestone',
      dependencies: ['uat', 'perf_testing'],
      description: 'Submit change request to the Change Advisory Board with all testing evidence and rollback plans for final go-live approval.',
      progress: 0,
    },
    {
      id: 'release',
      swimlane: 'Governance & Approvals',
      name: 'Go-Live (Phased Rollout)',
      startSprint: 12,
      sprints: 1,
      type: 'Milestone',
      dependencies: ['cab_submission'],
      description: 'Deploy the feature to production, starting with a 10% user rollout and monitoring closely before full release.',
      progress: 0,
    }
  ],
  raidLog: [
    // --- Risks ---
    {
      id: 'risk1',
      type: 'Risk',
      description: "Dependency on Core Banking API is delayed, impacting the entire timeline.",
      impact: 'High',
      action: "Establish a firm API contract in Sprint 1. Hold twice-weekly syncs with the Core Banking team to track progress and unblock issues immediately.",
      owner: "Jane Doe (Lead ADM)",
      status: 'Mitigated',
    },
    {
      id: 'risk2',
      type: 'Risk',
      description: "CAB approval process requires unforeseen documentation, delaying the release.",
      impact: 'Medium',
      action: "Engage the CAB secretary in Sprint 8 for a pre-submission review. Create a documentation checklist based on previous successful submissions.",
      owner: "John Smith (Release Mgr)",
      status: 'Active',
    },
    {
      id: 'risk3',
      type: 'Risk',
      description: "Performance on older mobile devices is poor during UAT, requiring significant rework.",
      impact: 'Medium',
      action: "Include performance testing on a range of devices as part of the Definition of Done for all mobile UI stories. Begin performance-specific testing early.",
      owner: "Sam Lee (QA Lead)",
      status: 'Active',
    },
    // --- Assumptions ---
    {
      id: 'ass1',
      type: 'Assumption',
      description: "The new UI components will not negatively impact overall application performance on older, supported devices.",
      impact: 'High',
      action: "Validate with performance testing on a range of low-spec devices during Sprint 7. Create a performance baseline before integration.",
      owner: "Sam Lee (QA Lead)",
      status: 'Active',
    },
    {
      id: 'ass2',
      type: 'Assumption',
      description: "The third-party FX provider's API has a 99.9% uptime and meets our latency requirements under peak load.",
      impact: 'Medium',
      action: "Request uptime and performance SLA documentation from the provider. Conduct load testing against their sandbox environment in Sprint 6.",
      owner: "Mike Brown (Dev Lead)",
      status: 'Validated',
    },
    // --- Issues ---
    {
      id: 'iss1',
      type: 'Issue',
      description: "The UAT environment was unstable and experiencing daily outages, blocking testers for 4-6 hours per day.",
      impact: 'High',
      action: "Daily triage meeting with the Infrastructure team to identify root cause. Escalated to Head of Engineering and resolved within 48 hours.",
      owner: "Jane Doe (Lead ADM)",
      status: 'Closed',
    },
    {
      id: 'iss2',
      type: 'Issue',
      description: " ambiguity in the API contract for error handling has led to rework in both Squad A and the Core Banking team.",
      impact: 'Medium',
      action: "Facilitate an emergency workshop with both teams to agree on a consistent error handling approach. Document and re-publish the contract.",
      owner: "Mike Brown (Dev Lead)",
      status: 'Closed',
    },
    // --- Dependencies ---
    {
      id: 'dep1',
      type: 'Dependency',
      description: "Finalized legal and compliance copy for all user-facing text is required from the Legal team.",
      impact: 'Medium',
      action: "Provide Legal with wireframes and copy requirements by Sprint 5. Schedule a formal review session in Sprint 7. Track progress in weekly stakeholder sync.",
      owner: "Emily White (Product Owner)",
      status: 'In Progress',
    },
    {
      id: 'dep2',
      type: 'Dependency',
      description: "The Core Banking team must deploy their new FX & Compliance API to the SIT environment by the start of Sprint 8.",
      impact: 'High',
      action: "Confirm deployment schedule with the Core Banking ADM. Align on a joint testing plan and ensure their deployment is a key milestone in our shared plan.",
      owner: "Jane Doe (Lead ADM)",
      status: 'Done',
    },
  ],
  steerCoUpdates: [
    {
      date: 'Week ending: July 12, 2024 (Sprint 5)',
      ragStatus: 'Green',
      highlights: [
          'Discovery & Architecture review (ID: sa_review) completed ahead of schedule.',
          'Squad B has started UI development (ID: mobile_ui_epic) with excellent initial velocity.',
      ],
      lowlights: [
          'Minor delays in finalizing API contract with Core Banking (ID: core_api_contract), but this is now resolved.',
      ],
      newRisks: [
          'Identified a medium risk (ID: risk3) around performance on older devices; mitigation planning is underway.',
      ],
      asks: []
    },
    {
      date: 'Week ending: July 19, 2024 (Sprint 6)',
      ragStatus: 'Green',
      highlights: [
          'Backend development for orchestration service (ID: backend_epic) is 30% complete and on track.',
          'Core Banking API development (ID: core_api_dev) is complete and deployed to the DEV environment.',
          'Card services update (ID: card_services_update) has commenced and is progressing as planned.',
      ],
      lowlights: [
          'Some ambiguity was discovered in the API contract for error handling (ID: iss2), which required a workshop to resolve. This is now closed.',
      ],
      newRisks: [
          'Risk regarding Core Banking API delay (ID: risk1) has now been fully mitigated.',
      ],
      asks: [
          'Continued support from Core Banking team for integration questions as we move into the next phase.',
      ]
    },
    {
      date: 'Week ending: July 26, 2024 (Sprint 7)',
      ragStatus: 'Amber',
      highlights: [
          'Squad A has started backend integration (ID: backend_integration) 1 sprint ahead of schedule.',
          'Dependency on Core Banking API deployment (ID: dep2) successfully delivered and closed.',
          'Assumption regarding third-party FX provider (ID: ass2) has been validated and confirmed.',
      ],
      lowlights: [
          'UAT environment instability (ID: iss1) is causing significant delays for testers, blocking progress on critical path items. Status has been changed to Amber due to this.',
          'Mobile UI development (ID: mobile_ui_epic) is tracking at 60% complete, slightly behind schedule.',
      ],
      newRisks: [
          'A new high-impact issue has been raised for UAT environment instability (ID: iss1).',
      ],
      asks: [
          'Escalation support from the Head of Engineering is required to prioritize and resolve the UAT environment instability with the Infrastructure team.',
          'Confirmation from Squad B lead on the recovery plan for the Mobile UI epic.'
      ]
    },
    {
      date: 'Week ending: August 2, 2024 (Sprint 8)',
      ragStatus: 'Amber',
      highlights: [
        'UAT environment instability (ID: iss1) has been resolved thanks to escalation. The issue is now closed.',
        'Backend integration (ID: backend_integration) is now 70% complete.',
        'System Integration Testing (ID: sit) has officially begun.'
      ],
      lowlights: [
        'Mobile UI development (ID: mobile_ui_epic) remains behind schedule, now at 80% complete. This is the primary driver for the Amber status as it puts UAT at risk.',
        'Dependency on legal copy (ID: dep1) is becoming critical; a delay here will impact UAT entry.'
      ],
      newRisks: [
        'New risk identified: UAT may be delayed due to the combined impact of late mobile UI delivery and pending legal copy.'
      ],
      asks: [
        'Urgent review and sign-off required from Legal on all user-facing copy by end of next sprint.',
        'Product Owner to work with Squad B to identify potential scope reductions if needed to accelerate UI completion.'
      ]
    }
  ]
};