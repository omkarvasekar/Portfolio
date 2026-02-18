// =============================================
// OMKAR VASEKAR PORTFOLIO — DATA LAYER
// All content sourced from Projects.json + DDD
// =============================================

export const personalInfo = {
  name: 'Omkar Bandopant Vasekar',
  shortName: 'Omkar',
  currentRole: 'RPA Developer',
  targetRole: 'ML / AI Engineer',
  institution: 'Dr. D. Y. Patil Institute of Technology, Pimpri (SPPU)',
  cgpa: '9.55',
  rank: '2',
  location: 'Pune, Maharashtra, India',
  email: 'vasekaromkar@gmail.com', // Update with real email
  github: 'https://github.com/omkarvasekar',
  linkedin: 'https://www.linkedin.com/in/omkar-vasekar-1a6130229/', // Update with real URL
  resumeUrl: '/Resume/Europass CV Omkar Bandopant Vasekar Updated.pdf',
  philosophy:
    'I started with RPA — automating the repetitive. Now I\'m building toward ML and AI — automating the complex, the intelligent, the impactful. Healthcare, agriculture, education: that\'s where I want to apply it.',
  heroHeadline: 'I automate the present.',
  heroSubHeadline: "I'm building for the intelligent future.",
  heroSub: 'RPA Developer · ML Engineer in Progress · Builder of Intelligent Systems',
};

// ---- Projects (from Projects.json) ----
export interface Project {
  title: string;
  date: string;
  teamSize: number;
  objective: string;
  summary: string;
  role: string;
  technologies: string[];
  gitLink?: string;
  demoLink?: string;
  featured?: boolean;
  category: 'ML/AI' | 'Full-Stack' | 'NLP' | 'Fitness';
  problem: string;
  approach: string;
  emoji: string;
}

export const projects: Project[] = [
  {
    title: 'Farmify',
    date: 'Feb 2024',
    teamSize: 4,
    objective: 'Developed a Smart AI-based solution for farmers to predict plant leaf diseases using deep learning and large language models.',
    summary:
      'Leveraged image processing techniques to analyze leaf images and detect diseases with high accuracy. Integrated a large language model to provide farmers with actionable insights and detailed disease descriptions in a user-friendly manner. This solution empowers farmers to take timely preventive measures, improving crop health and yield.',
    role: 'Responsible for training the model and conducted rigorous model evaluation and validation, ensuring the model met target performance metrics.',
    technologies: ['Deep Learning', 'Image Processing', 'LLMs', 'Python'],
    gitLink: 'https://github.com/omkarvasekar/Devcraft_Devclash_hackthon',
    demoLink: 'https://devcraftdevclashhackthon-2nxhbluraswhegoaw47x2x.streamlit.app/',
    featured: true,
    category: 'ML/AI',
    problem: 'Farmers lack accessible tools to diagnose plant diseases early, leading to crop loss and economic hardship.',
    approach: 'Deep learning model trained on leaf images + LLM integration for actionable, plain-language disease insights.',
    emoji: '🌿',
  },
  {
    title: 'Pigeon Chat',
    date: 'May 2024',
    teamSize: 1,
    objective: 'This project was developed for a method of chatting among two individuals.',
    summary: 'The website is built using Reactjs for frontend, NodeJs, ExpressJs as Backend and MongoDB for database.',
    role: 'Responsible for the entire project.',
    technologies: ['ReactJs', 'NodeJS', 'ExpressJS', 'MongoDB'],
    gitLink: 'https://github.com/omkarvasekar/Pigeon-Chat',
    demoLink: 'https://pigeon-chat-n64l.onrender.com',
    category: 'Full-Stack',
    problem: 'Need for a clean, minimal real-time chat application with a solid full-stack architecture.',
    approach: 'React frontend with Node.js/Express backend, MongoDB for persistence, and WebSocket for real-time messaging.',
    emoji: '🐦',
  },
  {
    title: 'FitFreak',
    date: 'April 2024',
    teamSize: 1,
    objective: 'A fitness-focused web application for creating and following workout routines.',
    summary:
      'The website is built using Vite and React for the frontend. It includes features for users to log in, sign up, and manage workout plans. The UI is clean and user-friendly, focused on user engagement with fitness goals.',
    role: 'Sole developer responsible for the design and implementation.',
    technologies: ['Vite', 'React'],
    gitLink: 'https://github.com/omkarvasekar/the-fit-freak',
    demoLink: 'https://omkarvasekar.github.io/the-fit-freak',
    category: 'Fitness',
    problem: 'Users need a simple, engaging way to create and track personalized workout routines.',
    approach: 'Vite + React SPA with auth, workout plan management, and a clean, motivating UI.',
    emoji: '💪',
  },
  {
    title: 'Fake News Detector',
    date: 'Oct 2023',
    teamSize: 1,
    objective:
      'Developed a robust Fake News Detection system using Logistic Regression to classify news articles as real or fake based on linguistic features and content patterns.',
    summary:
      'Applied data preprocessing techniques like tokenization and vectorization to prepare the dataset for accurate classification. Optimized the model to achieve high precision and recall.',
    role: 'Solely responsible for the end-to-end ML model, including data collection, preprocessing, model selection, training and evaluation.',
    technologies: ['Logistic Regression', 'NLP', 'Python', 'Data Processing'],
    gitLink: 'https://github.com/omkarvasekar/ML_Projects',
    category: 'NLP',
    problem: 'Misinformation spreads rapidly online — automated detection is critical for media integrity.',
    approach: 'NLP pipeline with tokenization + TF-IDF vectorization feeding a Logistic Regression classifier.',
    emoji: '📰',
  },
  {
    title: 'Diabetes Predictor',
    date: 'Jul – Aug 2023',
    teamSize: 1,
    objective:
      'Developed a comprehensive Diabetes Predictor for women using Support Vector Machine (SVM) to classify and predict the likelihood of diabetes based on key health metrics such as glucose levels, BMI, and age.',
    summary:
      'The model was fine-tuned to achieve high accuracy, enhancing early detection and intervention for better health outcomes. Integrated effective data preprocessing techniques to ensure reliable predictions and improve the overall model performance.',
    role: 'Solely responsible for the end-to-end ML model, including data collection, preprocessing, model selection, training and evaluation.',
    technologies: ['SVM', 'Machine Learning', 'Python', 'Data Analysis'],
    gitLink: 'https://github.com/omkarvasekar/ML_Projects',
    category: 'ML/AI',
    problem: 'Early diabetes detection in women is critical — manual screening is slow and inaccessible.',
    approach: 'SVM classifier trained on the Pima Indians Diabetes Dataset with feature engineering and cross-validation.',
    emoji: '🏥',
  },
  {
    title: 'Students Complaint System',
    date: 'Feb – May 2023',
    teamSize: 4,
    objective: 'This project was developed to speed up the process of complaint resolution in an online mode.',
    summary:
      'The website is built using HTML, CSS and EJS for frontend, NodeJs, ExpressJs as Backend and MongoDB for database. It has 2 user roles as Student and Admin, where the student can register the complaint and admin can resolve it.',
    role: 'Responsible for the development of Backend server and integration of database with the server.',
    technologies: ['HTML', 'CSS', 'EJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
    gitLink: 'https://github.com/omkarvasekar/PBL',
    category: 'Full-Stack',
    problem: 'Manual complaint resolution in institutions is slow, opaque, and hard to track.',
    approach: 'Role-based web portal (Student/Admin) with Node.js backend, Express routing, and MongoDB persistence.',
    emoji: '📋',
  },
];

// ---- Skills ----
export const skills = {
  Languages: ['Python', 'JavaScript', 'C', 'C++', 'Java'],
  'Web / Backend': ['React', 'Node.js', 'Express', 'HTML5', 'CSS3', 'Bootstrap', 'PHP', 'Tailwind'],
  'ML Libraries': ['TensorFlow', 'Scikit-learn', 'Pandas', 'Matplotlib', 'NLTK'],
  'Databases & OS': ['MongoDB', 'MySQL', 'Windows', 'Linux', 'macOS'],
};

// ---- Experience ----
export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  location: string;
  type: 'work' | 'internship' | 'education';
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'RPA Developer',
    org: 'Xalta Technologies',
    period: 'Present',
    location: 'Pune, India',
    type: 'work',
    bullets: [
      'Building and deploying automation bots for business process workflows',
      'Bridging engineering foundation with intelligent systems — RPA is automation; ML/AI is the next layer',
      'Designing scalable process automation solutions for enterprise workflows',
    ],
    tags: ['RPA', 'Automation', 'Process Engineering', 'Business Workflows'],
  },
  {
    role: 'ML Intern',
    org: 'Suvidha Foundation',
    period: 'Aug 2023 – Sep 2023',
    location: 'Pune, India',
    type: 'internship',
    bullets: [
      'Built text summarizer using NLTK + NLP techniques',
      'Applied data cleaning and feature engineering on real-world datasets',
      'Worked with Scikit-learn, Matplotlib, and Pandas for model development',
    ],
    tags: ['Python', 'ML', 'NLP', 'Data Analysis'],
  },
  {
    role: 'B.E. Computer Engineering',
    org: 'Dr. D. Y. Patil Institute of Technology, SPPU',
    period: 'Nov 2021 – Present',
    location: 'Pimpri, Pune',
    type: 'education',
    bullets: [
      'CGPA: 9.55/10 — consistent academic excellence across all semesters',
      'Department Rank 2 (2nd Year) · Department Rank 3 (3rd Year)',
      'Academic Excellence Award 2023 — top performer in Computer Engineering',
    ],
    tags: ['CGPA 9.55', 'Rank 2', 'Award 2023'],
  },
];

// ---- Achievements ----
export interface Achievement {
  type: 'Academic' | 'Technical' | 'Research' | 'Open Source' | 'Leadership' | 'Community';
  title: string;
  detail: string;
  icon: string;
}

export const achievements: Achievement[] = [
  { type: 'Academic', title: 'Academic Excellence Award 2023', detail: 'Department Rank 2, 2nd Year, Computer Engineering', icon: '🏆' },
  { type: 'Academic', title: 'Department Rank 3 — Third Year', detail: 'Consistent top performer across all years', icon: '🎓' },
  { type: 'Technical', title: 'Smart India Hackathon Qualifier', detail: 'College-level qualifier, November 2023', icon: '⚡' },
  { type: 'Technical', title: 'CodeCraft Runner-Up', detail: 'Runner-up among 100 students in coding competition', icon: '💻' },
  { type: 'Research', title: 'Quantum Computing Seminar', detail: 'Presented intro to Quantum Computing, Dec 2023', icon: '⚛️' },
  { type: 'Research', title: 'Solaris Research Poster', detail: 'Avirbhav 2024 — Deep learning solar power prediction', icon: '☀️' },
  { type: 'Open Source', title: 'ACES Snippets Contributor', detail: 'Contributed to open-source education tooling, Oct–Nov 2023', icon: '🔓' },
  { type: 'Leadership', title: 'Senior Event Manager, ACES', detail: 'Organized Hacktoberfest, orientation, farewell 2023–24', icon: '🎯' },
  { type: 'Leadership', title: 'Event Head — Acunetix 2024', detail: 'Largest technical fest — scheduling, delegation, crowd control', icon: '🚀' },
  { type: 'Leadership', title: 'Led Hacktoberfest', detail: 'Fostered 40+ open-source contributors in the department', icon: '🌐' },
  { type: 'Community', title: 'Volunteer, Yuva Maharashtra', detail: 'Cleanliness drives, food donation camps, cultural events', icon: '🤝' },
];

// ---- Achievement category colors ----
export const achievementColors: Record<Achievement['type'], string> = {
  Academic: '#5B5FFF',
  Technical: '#A78BFA',
  Research: '#34D399',
  'Open Source': '#F59E0B',
  Leadership: '#EC4899',
  Community: '#06B6D4',
};
