// All capability-deck copy lives here — edit this file to update the deck.
// Evidence is drawn from src/data.js. Items marked TODO need verifying before publishing.

export const deck = {
  title: 'From Problems to Products',
  tagline: 'Engineering solutions from ideas to impact.',
  promise: 'You bring the problem. I bring the engineering to turn it into a working product.',
  positioning: 'From Problem Statements to Production-Ready Products.',
};

// The deck headers — number, short label (nav / overview) and slide headline
export const headers = [
  { id: 'promise', label: 'The Promise', headline: 'Have a Problem? Let’s Engineer the Solution.' },
  { id: 'who', label: 'Who Am I?', headline: 'An Engineer Who Thinks Beyond Code.' },
  { id: 'solve', label: 'What Can I Solve?', headline: 'Different Problems. The Right Engineering Approach.' },
  { id: 'approach', label: 'How I Approach Problems', headline: 'Understand First. Engineer Second.' },
  { id: 'build', label: 'What Can I Build?', headline: 'From Intelligent Systems to Complete Products.' },
  { id: 'proof', label: 'Proof of Execution', headline: 'Not Just Capabilities. Products I’ve Worked On.' },
  { id: 'journey', label: 'From Idea to Production', headline: 'I Can Own the Engineering Journey.' },
  { id: 'depth', label: 'Engineering Depth', headline: 'Building Is One Thing. Building Reliably Is Another.' },
  { id: 'why', label: 'Why Work With Me?', headline: 'One Engineering Mindset. End-to-End Ownership.' },
  { id: 'next', label: 'Your Problem. Our Next Product.', headline: 'Your Next Product Starts With a Problem.' },
];

// 01
export const promiseFlow = ['Problem', 'Design', 'Proof of concept', 'Product', 'Deployment'];

// 02
export const pillars = [
  { title: 'Product thinking', text: 'Start from the business objective, not the tech stack.' },
  { title: 'Engineering execution', text: 'Design, build and integrate across AI, backend, frontend and cloud.' },
  { title: 'Production ownership', text: 'Take it past the demo — tested, deployed, monitored, improved.' },
];

// 03 — every evidence item points at real work listed in src/data.js
export const problems = [
  {
    problem: 'Repetitive manual processes',
    approach: 'Workflow automation — and AI agents where they genuinely add value.',
    capabilities: ['Agentic workflows', 'CrewAI', 'Event triggers & queues', 'Human review steps'],
    evidence: { name: 'Test Automation Agents', where: '4good.ai · Lead', text: 'Agents generate unit and functional tests from code and business requirements, cutting manual QA effort.' },
  },
  {
    problem: 'Large volumes of unstructured data',
    approach: 'Document intelligence, search, RAG and LLM applications.',
    capabilities: ['Multi-Model RAG', 'Document intelligence', 'LLM orchestration', 'Prompt engineering'],
    evidence: { name: 'PodHealth Multi-RAG', where: 'Client · 4good.ai', text: 'Multi-Model RAG that processes images, documents and handwritten notes for clinical teams.' },
  },
  {
    problem: 'An idea without a product',
    approach: 'Full-stack prototyping and MVP development.',
    capabilities: ['Rapid POCs', 'React', 'FastAPI', 'Supabase'],
    evidence: { name: 'NuePrism', where: 'Nuearcus · Founding engineer', text: 'Built from the first line of code to a live app on the Atlassian Marketplace.' },
  },
  {
    problem: 'Disconnected software systems',
    approach: 'APIs, integrations and services that make data flow.',
    capabilities: ['REST APIs', 'GitHub & Jira APIs', 'Atlassian Forge', 'Ingestion pipelines'],
    evidence: { name: 'NuePrism ingestion', where: 'Nuearcus', text: 'GitHub and Jira activity cleaned, normalized and unified into one schema for analytics.' },
  },
  {
    problem: 'Slow or unreliable applications',
    approach: 'Diagnostics, performance optimization and debugging.',
    capabilities: ['Profiling & logs', 'Query optimization', 'Streaming (SSE)', 'Responsive & PWA'],
    evidence: { name: 'Multi-source dashboards', where: 'Banavo.ai', text: 'Metrics from multiple data sources in one fast, responsive dashboard — installable as a PWA on mobile.' },
  },
  {
    problem: 'An application that needs deployment',
    approach: 'Cloud infrastructure, CI/CD and release engineering.',
    capabilities: ['AWS', 'CI/CD pipelines', 'Model versioning', 'Marketplace release'],
    evidence: { name: 'NuePrism platform', where: 'Nuearcus', text: 'Deployed on AWS EC2 with CI/CD and versioned prompts and models; released on the Atlassian Marketplace.' },
  },
  {
    problem: 'Complex AI workflows',
    approach: 'Agent orchestration, evaluation, guardrails and human review.',
    capabilities: ['Agent orchestration', 'LLM-as-a-Judge', 'Guardrails', 'Human in the loop'],
    evidence: { name: 'NL-to-SQL evaluation', where: 'Banavo.ai', text: 'LLM-as-a-Judge framework that scores the NL-to-SQL agent’s answers pass/fail for systematic QA.' },
  },
];

// 04
export const approachSteps = [
  { step: 'Discover', verb: 'Understand', text: 'Context, users, constraints' },
  { step: 'Design', verb: 'Choose', text: 'Architecture & trade-offs' },
  { step: 'Validate', verb: 'Prove', text: 'Research, prototype, POC' },
  { step: 'Build', verb: 'Implement', text: 'AI, backend, frontend' },
  { step: 'Ship', verb: 'Deploy', text: 'Tested, secure, released' },
  { step: 'Improve', verb: 'Measure', text: 'Monitor and iterate' },
];
export const approachOptions = ['Conventional software', 'Automation', 'AI', 'Hybrid'];
export const approachCriteria = ['Business goals', 'Feasibility', 'Cost', 'Security', 'Maintainability'];

// 05
export const capabilities = [
  {
    title: 'AI Engineering',
    items: ['RAG & LLM applications', 'Agentic workflows', 'Document intelligence', 'Evaluation & guardrails'],
    proof: { name: 'Multi-RAG · PodHealth', text: 'Multi-Model RAG that processes images, documents and handwritten notes.' },
  },
  {
    title: 'Product Engineering',
    items: ['Web & mobile apps', 'Backends & REST APIs', 'Dashboards & PWAs', 'Full-stack delivery'],
    proof: { name: 'PodHealth & Banavo.ai', text: 'CRUD and surveys with real-time visualization on web and mobile; multi-source PWA dashboards.' },
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'CI/CD', 'Deployments & infrastructure'],
    proof: { name: 'NuePrism · Nuearcus', text: 'Runs on AWS EC2 with CI/CD pipelines and prompt and model versioning.' },
  },
  {
    title: 'System Engineering',
    items: ['Architecture', 'Database design', 'Debugging & optimization', 'Testing & integrations'],
    proof: { name: 'NuePrism data layer', text: 'Supabase (PostgreSQL) data models fed by Jira and GitHub ingestion pipelines normalized into one schema.' },
  },
];

// 06 — stage: 'shipped' | 'client' | 'pilot' | 'development'
export const caseStudies = [
  {
    name: 'NuePrism',
    tag: 'AI execution intelligence for Jira',
    stage: 'shipped',
    problem: 'Dashboards show what happened; teams still miss delivery risk until it’s too late.',
    role: 'Founding AI Engineer — product engineering, the Jira (Forge) integration and the AI pipeline.',
    decision: 'Deliver insights inside Jira through a Forge app, instead of yet another standalone dashboard.',
    solution: 'Ingests Jira + GitHub signals, detects risks and bottlenecks, explains root causes and recommends prioritized actions.',
    outcome: 'First version released on the Atlassian Marketplace.',
    link: 'https://www.nuearcus.com/nueprism/',
  },
  {
    name: 'Banavo.ai',
    tag: 'AI visibility & analytics for e-commerce brands',
    stage: 'client',
    problem: 'Brand metrics lived in multiple data sources, and NL-to-SQL answers had no systematic quality check.',
    role: 'AI Software Engineer (4good.ai) — dashboards and NL-to-SQL evaluation.',
    decision: 'Score NL-to-SQL answers with LLM-as-a-Judge instead of trusting spot checks.',
    solution: 'Multi-source dashboards with responsive design, installable as a PWA, plus pass/fail LLM evaluation.',
    outcome: 'One analytics experience on desktop and mobile, with AI answers tested.',
    link: 'https://banavo.ai/',
  },
  {
    name: 'PodHealth',
    tag: 'AI platform for neurology & psychiatry clinics',
    stage: 'client',
    problem: 'Clinics handle records, surveys and documents — including images and handwritten notes.',
    role: 'AI Software Engineer (4good.ai) — web and mobile app features and the Multi-RAG pipeline.',
    decision: 'One Multi-RAG pipeline for images, docs and handwriting — not a tool per input type.',
    solution: 'Full CRUD and survey-taking with real-time visualization on mobile and web, plus Multi-RAG document processing.',
    outcome: 'Surveys, records and document understanding across both apps.',
    link: 'https://podhealth.ai/',
  },
];

export const stageLabels = { shipped: 'Shipped', client: 'Client project', pilot: 'Pilot', development: 'In development' };

// 07
export const lifecycle = [
  { stage: 'Requirements', text: 'Goals, users, constraints' },
  { stage: 'Architecture', text: 'Components & trade-offs' },
  { stage: 'POC', text: 'Prove the risky part' },
  { stage: 'MVP', text: 'Smallest useful product' },
  { stage: 'Testing', text: 'Unit, functional, evals' },
  { stage: 'Deployment', text: 'CI/CD, cloud, release' },
  { stage: 'Monitoring', text: 'Logs, metrics, alerts' },
  { stage: 'Iteration', text: 'Feedback into the next cycle' },
];

// 08 — TODO: confirm each story's details against what actually happened
export const depthTopics = ['Architecture', 'Scaling', 'Database performance', 'Reliability', 'Security', 'Observability', 'Cloud cost', 'Testing', 'Deployment'];
export const stories = [
  {
    title: 'Database throttling',
    steps: {
      Symptom: 'API responses slowed, then failed under load as the database began throttling.',
      Diagnosis: 'Correlated slow endpoints with query logs and plans to isolate the expensive, repeated queries.',
      Decision: 'Fix the access pattern first rather than scaling the database up to hide it.',
      Fix: 'Optimized queries, added the right indexes and removed redundant round-trips.',
      Validation: 'Query timings and logs confirmed throttling stopped under the same load.',
    },
  },
  {
    title: 'Deployment failures',
    steps: {
      Symptom: 'Releases intermittently failed or left the service unhealthy.',
      Diagnosis: 'Traced container start-up and shutdown in logs; old containers weren’t exiting cleanly.',
      Decision: 'Fix the container lifecycle instead of adding retries that mask the failure.',
      Fix: 'Health checks, graceful shutdown and clean-up of stale containers in the pipeline.',
      Validation: 'Repeated releases through CI/CD completed cleanly, verified by health checks.',
    },
  },
];

// 09
export const reasons = [
  { title: 'Product thinking', text: 'Understand business objectives before choosing technology.' },
  { title: 'Technical versatility', text: 'Work across AI, frontend, backend and infrastructure.' },
  { title: 'Engineering judgment', text: 'Choose the right tools and avoid unnecessary complexity.' },
  { title: 'Execution', text: 'Turn ideas into validated, working solutions.' },
  { title: 'Accountability', text: 'Own decisions, trade-offs, delivery and follow-through.' },
];
