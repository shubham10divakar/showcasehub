// Single source of truth for all site content.
// Numbers below were read from the public profiles on 12 Nov 2026 —
// update them here and every page follows.

export const person = {
  name: 'Subham Divakar',
  location: 'Bangalore, India',
  email: 'shubham.divakar@gmail.com',
  links: {
    github: 'https://github.com/shubham10divakar',
    linkedin: 'https://www.linkedin.com/in/subham-divakar-a7420a12a/',
    scholar: 'https://scholar.google.com/citations?user=44ecZj0AAAAJ&hl=en',
    pypi: 'https://pypi.org/user/subhamdivakar10/',
    play: 'https://play.google.com/store/apps/developer?id=SubhamDivakar&hl=en_IN',
    substack: 'https://subhamdivakar.substack.com/',
    pdfdesk: 'https://pdfdesk.in/',
  },
};

export const scholar = { citations: 112, hIndex: 5, i10: 2 };

const q = (title) => `https://scholar.google.com/scholar?q=${encodeURIComponent(`"${title}"`)}`;

export const papers = [
  {
    title: 'A Robust Intrusion Detection System using Ensemble Machine Learning',
    authors: 'S Divakar, R Priyadarshini, BK Mishra',
    venue: 'IEEE Women in Engineering (WIE) Conference on Electrical and Computer Engineering',
    year: 2020, cites: 41, topic: 'Security',
  },
  {
    title: 'Smote-DL: A Deep Learning Based Plant Disease Detection Method',
    authors: 'S Divakar, A Bhattacharjee, R Priyadarshini',
    venue: '6th International Conference for Convergence in Technology (I2CT), IEEE',
    year: 2021, cites: 39, topic: 'Plant AI',
    url: 'https://ieeexplore.ieee.org/abstract/document/9417920',
  },
  {
    title: 'COLEN: An Improvised Deep Learning Model for Plant Disease Detection Using Varying Color Space',
    authors: 'S Divakar, R Priyadarshini, SK Nanda, D Muduli, R Barik',
    venue: 'International Conference on Intelligent Vision and Computing, Springer',
    year: 2022, cites: 8, topic: 'Plant AI',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-31164-2_50',
  },
  {
    title: 'An IoT-based Smart Garbage Segregation System using Deep Learning',
    authors: 'S Divakar, A Bhattacharjee, R Priyadarshini',
    venue: 'Internet of Things and Its Applications: Select Proceedings of ICIA 2020',
    year: 2022, cites: 5, topic: 'IoT',
  },
  {
    title: 'An Intelligent Intrusion Detection Scheme Powered by Boosting Algorithm',
    authors: 'S Divakar, R Priyadarshini, RK Barik, DS Roy',
    venue: '11th International Conference on Cloud Computing, Data Science & Engineering (Confluence)',
    year: 2021, cites: 5, topic: 'Security',
  },
  {
    title: 'A Multi Facet Deep Neural Network Model for Various Plant Disease Detection',
    authors: 'A Pratik, S Divakar, R Priyadarshini',
    venue: 'International Conference on Intelligent Computing and Remote Sensing',
    year: 2019, cites: 5, topic: 'Plant AI',
  },
  {
    title: 'An IoT-enabled Smart Waste Segregation System',
    authors: 'S Divakar, A Bhattacharjee, VK Soni, R Priyadarshini, RK Barik, DS Roy',
    venue: 'Machine Vision and Augmented Intelligence, Select Proceedings',
    year: 2021, cites: 4, topic: 'IoT',
  },
  {
    title: 'Recursive Additive Attention Based Convolutional Neural Network Model for Plant Disease Detection',
    authors: 'S Divakar, R Priyadarshini',
    venue: 'IEEE 21st India Council International Conference (INDICON)',
    year: 2024, cites: 2, topic: 'Plant AI',
  },
  {
    title: 'An IoT and Blockchain-based System for Acute Security Check and Analysis',
    authors: 'A Pratik, A Bhattacharjee, R Priyadarshini, S Divakar',
    venue: 'The Role of IoT and Blockchain, CRC Press',
    year: 2022, cites: 2, topic: 'Security',
  },
  {
    title: 'PlantFusion: A Novel Multimodal Dataset and Hybrid Multimodal Deep Learning Framework',
    authors: 'S Divakar, R Priyadarshini, S Behera, D Mishra, RK Barik',
    venue: 'International Conference on Artificial Intelligence and Emerging…',
    year: 2025, cites: 1, topic: 'Plant AI',
  },
  {
    title: 'Rethinking Attention: Entropy-Guided Iterative Refinement for Language Models',
    authors: 'S Divakar, R Priyadarshini',
    venue: 'Transactions on Artificial Intelligence 2(1), pp. 214–230',
    year: 2026, cites: 0, topic: 'LLMs',
  },
  {
    title: 'DROIDNET: A Hybrid Deep Learning Framework for Real-Time Android Malware Detection',
    authors: 'S Divakar, R Priyadarshini, SK Nanda, RK Barik',
    venue: 'Facta Universitatis, Series: Electronics and Energetics 39(2), pp. 333–346',
    year: 2026, cites: 0, topic: 'Security',
  },
  {
    title: 'GeoViT: A Geodesic Vision Transformer with Heterogeneous Manifold Attention for Plant Disease Classification',
    authors: 'S Divakar, R Priyadarshini',
    venue: '',
    year: 2026, cites: 0, topic: 'Plant AI',
  },
].map((p) => ({ ...p, url: p.url || q(p.title) }));

export const packages = [
  { name: 'safejev', cat: 'AI Safety', desc: 'AI security and governance toolkit with local detectors for prompt attacks and risky agent actions.', released: 'Nov 2026' },
  { name: 'pdfdesk', cat: 'Research Tools', desc: 'Local-first workspace for reading research papers: PDF reader, highlights, notes and search.', released: 'Nov 2026', internal: '/pdfdesk' },
  { name: 'slidenotes', cat: 'Research Tools', desc: 'Link PDF or PowerPoint slides to the notes that explain them.', released: 'Nov 2026' },
  { name: 'scandata', cat: 'ML Tooling', desc: 'Audit ML datasets for leakage, label issues and quality problems.', released: 'Oct 2026' },
  { name: 'cyberjev', cat: 'AI Safety', desc: 'Small calibrated decision model for web attacks, prompt injection and phishing URLs.', released: 'Sep 2026' },
  { name: 'arxivscanner', cat: 'Research Tools', desc: 'Terminal tool that shows you the new arXiv papers for your domain.', released: 'Sep 2026' },
  { name: 'nano-jev', cat: 'LLMs', desc: 'Small typed-decision model for RAG pipelines: relevance, sufficiency, groundedness.', released: 'Sep 2026' },
  { name: 'poormansrag', cat: 'LLMs', desc: 'Selective instruction routing for LLMs.', released: 'Sep 2026' },
  { name: 'runxmd', cat: 'Developer Tools', desc: 'Executable Markdown: add state and execution to .md files with a run-intent label.', released: 'Aug 2026' },
  { name: 'plantdoc-predictor', cat: 'Vision', desc: 'Predict plant diseases from leaf images with pre-trained or custom models.', released: 'Jul 2026', site: 'plandocai.in' },
  { name: 'freeaiagent', cat: 'LLMs', desc: 'Free local AI agent with an HTTP API, sessions, streaming and tool use.', released: 'Jul 2026', site: 'freeaiagent.in' },
  { name: 'xrayzoo', cat: 'Vision', desc: 'PyTorch model zoo for X-ray image classification.', released: 'Jun 2026' },
  { name: 'audiotimm', cat: 'Audio', desc: 'Model hub for audio classification, in the spirit of timm.', released: 'Jun 2026' },
  { name: 'aiaudio', cat: 'Audio', desc: 'Audio processing and audio intelligence utilities.', released: 'Jun 2026' },
  { name: 'tokenfit', cat: 'LLMs', desc: 'Select the right repo context to fit a small LLM token window.', released: 'Jun 2026' },
  { name: 'cyberscanner', cat: 'Developer Tools', desc: 'Vulnerability scanner for Python and JavaScript projects, as a CLI and a library.', released: 'May 2026' },
  { name: 'sdscmt', cat: 'Developer Tools', desc: 'Generate and manage self-signed SSL certificates and keys.', released: 'Jul 2024' },
  { name: 'sdcfc', cat: 'Developer Tools', desc: 'Convert certificate files between PEM, DER and PKCS12.', released: 'Jun 2024' },
];

export const apps = [
  {
    id: 'com.subham.harvesthome', name: 'Harvest Home', icon: 'harvesthome', kind: 'Game',
    desc: 'A cozy farming story through the seasons. Save Grandpa’s farm, bring the animals home and win the Harvest Fair.',
    page: '/harvesthome', policy: '/harvesthome/privacy', soon: true,
  },
  {
    id: 'com.plantdoc.app', name: 'PlantDoc AI', icon: 'plantdoc', kind: 'App',
    desc: 'Point your phone at a leaf and get a disease diagnosis. The research papers, turned into something a farmer can use.',
  },
  {
    id: 'com.lostbird.app', name: 'Lost Bird', icon: 'lostbird', kind: 'Game',
    desc: 'An Android arcade game with a global leaderboard. Guide the bird home.',
    policy: '/lostbirdprivacypolicy',
  },
  {
    id: 'com.freeaiagent.app', name: 'FreeAIAgent', icon: 'freeaiagent', kind: 'App',
    desc: 'A free AI agent in your pocket, the mobile companion to the freeaiagent library.',
  },
];
export const playUrl = (id) => `https://play.google.com/store/apps/details?id=${id}`;

export const pdfTools = [
  'Merge', 'Split', 'Compress', 'Images to PDF', 'PDF to images', 'PDF to Word text',
  'OCR (English + Hindi)', 'Reorder pages', 'Rotate', 'Watermark', 'Page numbers',
  'Crop', 'Add text', 'Sign', 'Lock', 'Unlock', 'Office to PDF',
];

export const experience = [
  {
    role: 'Full-Stack AI/ML Developer', company: 'Société Générale', logo: '/logos/societegenerale.svg',
    when: 'Aug 2025 — Present',
    desc: 'Building full-stack and AI/ML-driven solutions for one of Europe’s leading financial services groups, spanning data-intensive product features and intelligent automation.',
    tags: ['Full Stack', 'AI / ML', 'Python', 'React', 'Fintech'],
  },
  {
    role: 'Senior Software Engineer', company: 'Persistent Systems', logo: '/logos/persistent.svg',
    when: 'Oct 2020 — Aug 2025',
    desc: 'Full-stack developer on IaaS cloud product development: feature work, bug fixes and system design with Java 8, Vue.js, React and MySQL.',
    tags: ['Java 8', 'React', 'Vue.js', 'MySQL', 'IaaS Cloud'],
  },
];

export const education = [
  { degree: 'B.Tech, Electronics & Telecommunication', school: 'CV Raman Global University', when: '2016 – 2020', score: 'CGPA 7.8' },
  { degree: 'XII, Science', school: 'MNPS JSR', when: '2014 – 2015', score: '88%' },
];

export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'JavaScript'] },
  { group: 'AI / ML', items: ['PyTorch', 'Computer Vision', 'LLMs & RAG', 'Agents'] },
  { group: 'Frontend', items: ['React', 'Vue.js', 'HTML', 'CSS'] },
  { group: 'Backend & Data', items: ['Spring', 'MySQL', 'REST APIs'] },
  { group: 'Cloud', items: ['GCP', 'AWS', 'Azure'] },
];

// Shown on the Writing page if the live Substack fetch fails.
export const fallbackPosts = [
  {
    title: 'Jev and the rise of AI models built to make decisions, not generate text.',
    link: 'https://subhamdivakar.substack.com/p/jev-and-the-rise-of-ai-models-built',
    pubDate: '2026-09-23', description: 'Most AI models are built to generate.',
  },
  {
    title: 'My First AI Research Project which became a research article for IEEE INDICON 2024 at IIT KGP: Teaching a Model Where to Look',
    link: 'https://subhamdivakar.substack.com/p/my-first-ai-research-project-which',
    pubDate: '2026-09-23', description: '',
  },
];
