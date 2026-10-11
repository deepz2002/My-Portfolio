// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Deepak A',
  handle: 'deepak.a',
  role: 'Founding AI Engineer',
  headline: 'Generative AI & Agentic Systems',
  location: 'Bengaluru, India',
  email: '25.deepakanand@gmail.com',
  github: 'https://github.com/deepz2002',
  linkedin: 'https://www.linkedin.com/in/deepak-anand25',
  intro:
    "I don't just build models — I build systems that think, reason and deliver value. From NL-to-SQL agents and Multi-Model RAG to an AI product on the Atlassian Marketplace, I take ideas from problem statement to production.",
  typed: [
    'Problem → POC → MVP → Production',
    'Agents · RAG · NL-to-SQL · LLM evals',
    'Shipped to the Atlassian Marketplace',
    'Human in the loop. Always.',
  ],
};

export const stats = [
  { value: '2+', label: 'yrs AI engineering' },
  { value: '3', label: 'client & product builds' },
  { value: '1', label: 'Marketplace app shipped' },
  { value: 'E2E', label: 'product ownership' },
];

export const philosophy = [
  { title: 'Logic First', text: 'Understand the problem before reaching for a model. Problem-solving over syntax.' },
  { title: 'Right Tools', text: 'LLMs where they add value, classic ML and plain code where they don’t.' },
  { title: 'Human in the Loop', text: 'AI accelerates the work; I validate, evaluate and own the outcome.' },
];

// The "Problem → Impact" pipeline from the concept image
export const process = [
  { key: 'problem', title: 'Problem', lines: ['Understand', 'real-world needs'], color: '#fb7a5c' },
  { key: 'ai', title: 'AI / ML', lines: ['Analyze', 'Reason', 'Generate'], color: '#38a8d8' },
  { key: 'build', title: 'Build', lines: ['Human in the loop', 'Validate', 'Iterate'], color: '#8b7cf0' },
  { key: 'deploy', title: 'Deploy', lines: ['Scale', 'Monitor', 'Optimize'], color: '#4cb87a' },
  { key: 'impact', title: 'Impact', lines: ['Better products', 'Happier users', 'Real-world value'], color: '#f0a640' },
];

// Story told in the About section, oldest → newest
export const journey = [
  {
    when: '2020 – 2024',
    title: 'B.E. in Artificial Intelligence & Machine Learning',
    place: 'B.N.M. Institute of Technology (BNMIT), Bengaluru',
    text: 'Built the foundations — ML, deep learning, data structures and systems — and discovered how much I enjoy turning models into things people use.',
  },
  {
    when: '2024',
    title: 'From curiosity to passion',
    place: 'AI / ML',
    text: 'Generative AI and agents went from coursework to obsession: I wanted to build AI that ships, not AI that stays in notebooks.',
  },
  {
    when: 'Sep 2024',
    title: 'AI Software Engineer',
    place: '4good.ai',
    text: 'Delivered AI products for clients Banavo.ai and PodHealth, then led and built 4good.ai’s own Test Automation Agents product.',
  },
  {
    when: 'Dec 2025',
    title: 'Founding AI Engineer',
    place: 'Nuearcus',
    text: 'Building NuePrism from scratch — from the first line of code to a live app on the Atlassian Marketplace.',
  },
];

export const experience = [
  {
    id: 'nuearcus',
    company: 'Nuearcus',
    role: 'Founding AI Engineer',
    period: 'Dec 2025 – Present',
    location: 'Bengaluru',
    url: 'https://www.nuearcus.com/nueprism/',
    summary:
      'Founding engineer on NuePrism — an AI execution-intelligence platform that detects delivery risk early, explains what slows teams down and recommends what to do next. Built from scratch and shipped to the Atlassian Marketplace.',
    highlights: [
      'Built the AI-driven Agile intelligence platform on Python + FastAPI with LLM orchestration to assess sprint performance, backlog quality and delivery risk.',
      'Developed the Atlassian Forge app (Jira global page + issue panel, event triggers, queues, schedulers) that brings AI insights into the team’s workspace.',
      'Engineered GitHub and Jira ingestion pipelines that clean, normalize and unify delivery activity into one schema for analytics.',
      'Implemented Multi-Model RAG combining structured metrics with unstructured notes and feedback for context-aware recommendations.',
      'Built LLM assistants for backlog refinement and retro summaries, plus anomaly-detection and prioritization models that flag high-risk work early.',
      'Designed Supabase (PostgreSQL) data models; React dashboards with real-time streaming; deployed on AWS EC2 with CI/CD and prompt/model versioning.',
    ],
    stack: ['Python', 'FastAPI', 'LLM Orchestration', 'MRAG', 'Atlassian Forge', 'GitHub API', 'React', 'Supabase', 'AWS EC2', 'CI/CD'],
  },
  {
    id: '4good',
    company: '4good.ai',
    role: 'AI Software Engineer',
    period: 'Sep 2024 – Nov 2025',
    location: 'Bengaluru',
    url: null,
    summary:
      'Started my career shipping AI for clients, then led an in-house product. Every engagement went from problem statement to production.',
    engagements: [
      {
        name: 'Banavo.ai',
        type: 'Client',
        url: 'https://banavo.ai/',
        about: 'AI-visibility platform for e-commerce brands.',
        points: [
          'Interactive multi-metric analytics dashboards (Net Sales, ROAS, AOV, funnels, anomaly detection) with Tremor + Plotly over an SSE streaming backend.',
          'NL-to-SQL agent on AWS Athena — non-technical users ask questions in plain English and get charts, tables and summaries.',
          'LLM evaluation framework using LLM-as-a-Judge to score responses pass/fail for systematic QA of AI outputs.',
          'ChatGPT-style conversational interface with editable query history and multi-turn context.',
          'Fully responsive mobile views across the dashboard and chat experience.',
        ],
        stack: ['React', 'Tremor', 'Plotly', 'FastAPI', 'SSE', 'AWS Athena', 'LLM-as-a-Judge'],
      },
      {
        name: 'PodHealth',
        type: 'Client',
        url: 'https://podhealth.ai/',
        about: 'AI platform for neurology & psychiatry clinics.',
        // TODO: add the specific features you built for PodHealth
        points: [
          'AI engineering for a clinical-care platform supporting neurology and psychiatry practices.',
          'Multi-Model RAG reasoning over text and image inputs for document intelligence.',
        ],
        stack: ['Python', 'FastAPI', 'MRAG', 'LLMs'],
      },
      {
        name: 'Test Automation Agents',
        type: '4good.ai product · Lead',
        url: null,
        about: 'In-house product I led and developed end to end.',
        points: [
          'Agentic system that reads source code and business requirements and generates unit and functional test cases.',
          'Significantly reduced manual QA effort and made test coverage repeatable.',
          'Owned architecture, agent design, evaluation and delivery.',
        ],
        stack: ['Python', 'CrewAI', 'LLM Agents', 'FastAPI'],
      },
      {
        name: 'MarketingGPT',
        type: 'ML engine',
        url: null,
        about: 'Customer segmentation & recommendations.',
        points: [
          'RFM analysis + K-Means clustering for customer segmentation.',
          'Collaborative filtering for personalized product recommendations powering targeted marketing workflows.',
        ],
        stack: ['Python', 'K-Means', 'RFM', 'Collaborative Filtering'],
      },
    ],
  },
];

export const projects = [
  {
    name: 'NuePrism',
    tag: 'AI Product · Atlassian Marketplace',
    featured: true,
    problem: 'Dashboards show what happened; teams still miss delivery risk until it’s too late.',
    solution: 'Ingests Jira + GitHub signals, detects risks and bottlenecks, diagnoses root causes and recommends prioritized actions — inside Jira.',
    impact: 'Built from scratch as founding engineer and shipped to the Atlassian Marketplace.',
    stack: ['Forge', 'FastAPI', 'MRAG', 'Supabase', 'React', 'AWS'],
    link: 'https://www.nuearcus.com/nueprism/',
  },
  {
    name: 'NL-to-SQL Agent',
    tag: 'Banavo.ai',
    problem: 'Business users couldn’t query the data warehouse.',
    solution: 'Plain-English questions → Athena SQL → charts, tables and summaries.',
    stack: ['LLMs', 'AWS Athena', 'FastAPI'],
    link: 'https://banavo.ai/',
  },
  {
    name: 'Test Automation Agents',
    tag: '4good.ai · Lead',
    problem: 'Writing unit and functional tests by hand was slow.',
    solution: 'Agents generate test cases from code + business requirements.',
    stack: ['Agents', 'CrewAI', 'Python'],
  },
  {
    name: 'LLM Evaluation Framework',
    tag: 'Banavo.ai',
    problem: 'No systematic way to trust AI answers.',
    solution: 'LLM-as-a-Judge scoring with pass/fail accuracy.',
    stack: ['LLM-as-a-Judge', 'Python'],
  },
  {
    name: 'Real-time Analytics Dashboard',
    tag: 'Banavo.ai',
    problem: 'Metrics scattered and slow to load.',
    solution: 'Streaming dashboards for sales, ROAS, AOV and funnels — desktop and mobile.',
    stack: ['React', 'Tremor', 'Plotly', 'SSE'],
  },
];

export const clients = [
  { name: 'Nuearcus', note: 'Founding AI Engineer · NuePrism', url: 'https://www.nuearcus.com/nueprism/' },
  { name: 'Atlassian Marketplace', note: 'NuePrism published', url: 'https://www.nuearcus.com/nueprism/' },
  { name: 'Banavo.ai', note: 'Dashboards · NL-to-SQL · LLM evals', url: 'https://banavo.ai/' },
  { name: 'PodHealth', note: 'Healthcare AI', url: 'https://podhealth.ai/' },
  { name: '4good.ai', note: 'Test Automation Agents · MarketingGPT', url: null },
  { name: 'BNMIT', note: 'B.E. AI & ML, 2020–2024', url: null },
];

// Core technical skills — as listed on the resume
export const stack = [
  { label: 'Generative & Agentic AI', items: ['LLM Orchestration', 'Agentic AI (CrewAI)', 'Multi-Model RAG (MRAG)', 'NL-to-SQL Agents', 'LLM Evaluation (LLM-as-a-Judge)', 'Prompt Engineering'] },
  { label: 'Machine Learning', items: ['Anomaly Detection', 'K-Means Clustering', 'RFM Analysis', 'Collaborative Filtering', 'Recommendation Systems'] },
  { label: 'Data Engineering', items: ['Data Ingestion Pipelines', 'Data Cleaning & Normalization', 'Schema Design', 'Analytics & Insight Generation'] },
  { label: 'Integrations & Platforms', items: ['Atlassian Forge Apps', 'GitHub API Integration', 'REST APIs', 'AWS Athena'] },
  { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { label: 'Backend', items: ['FastAPI', 'Node.js', 'Express.js'] },
  { label: 'Frontend', items: ['React', 'React Native', 'Tremor', 'Plotly'] },
  { label: 'Databases', items: ['PostgreSQL', 'Supabase'] },
  { label: 'Cloud & DevOps', items: ['AWS (EC2, Lambda, S3, IAM)', 'CI/CD Pipelines', 'AI Model & Prompt Versioning'] },
  { label: 'Real-time Systems', items: ['Server-Sent Events (SSE)', 'Async Processing', 'Streaming Pipelines'] },
];
