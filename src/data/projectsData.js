export const projectsData = [
  {
    id: 1,
    category: 'ai',
    title: "Sri Lankan Legal RAG — AI Research Assistant",
    description: "A multilingual-ready Retrieval-Augmented Generation assistant grounded in Sri Lankan legislation, featuring hybrid vector retrieval, contextual LLM citations, and AWS ECS Fargate deployment.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    tags: ["Python", "FastAPI", "React", "ChromaDB", "AWS ECS", "Docker", "RAG"],
    featured: true,
    color: "orange",
    github: "https://github.com/AnupaSupul",
    details: {
      overview: "A specialized Retrieval-Augmented Generation (RAG) platform designed to index and query Sri Lankan statutory frameworks, including the Constitution, the Inland Revenue Act, and Intellectual Property statutes. It enables legal researchers and citizens to ask complex questions and receive accurate, context-grounded answers with exact statutory references.",
      problem: "Navigating Sri Lankan legislation is manually exhausting and prone to misinterpretation. Existing search tools rely on rigid keyword matching, failing to capture semantic meaning or cross-statutory concepts, while standard LLMs suffer from severe hallucinations when answering jurisdiction-specific legal inquiries.",
      solution: "Developed an end-to-end RAG architecture combining dense semantic embeddings, hybrid vector search in ChromaDB, and keyword matching with legal-concept scoring to retrieve relevant statutes with verified citations.",
      features: [
        "Multilingual-ready statute indexing (Constitution, Tax Law, IP Law)",
        "Hybrid retrieval (dense vector embeddings + BM25 keyword matching + legal-concept scoring)",
        "OpenRouter LLM reasoning with confidence-based abstention when statutory evidence is insufficient",
        "FastAPI asynchronous REST backend with interactive React.js interface",
        "Docker & Docker Compose containerization with GitHub Actions CI/CD pipelines",
        "AWS production deployment (Amazon ECR, ECS Fargate, VPC, ALB, S3, Secrets Manager, CloudWatch)"
      ],
      techStack: {
        frontend: "React.js / Tailwind CSS",
        backend: "Python / FastAPI / Sentence Transformers / OpenRouter API",
        database: "ChromaDB (Persistent Vector Storage)",
        cloud: "AWS (ECR, ECS Fargate, VPC, ALB, S3, CloudWatch)"
      },
      role: "Architected and implemented the entire pipeline from legal document chunking and vector embedding generation to FastAPI endpoints, React interface, and AWS containerized deployment.",
      outcome: "Successfully demonstrates accurate legal provision retrieval with context-grounded citations, reducing query research time by over 80%.",
      gallery: [
        { url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop", caption: "Statute Ingestion & Legal Document Query Interface" },
        { url: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop", caption: "ChromaDB Semantic Vector Search & Hybrid Retrieval Pipeline" },
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", caption: "AWS Cloud Infrastructure on ECS Fargate & Application Load Balancer" }
      ]
    }
  },
  {
    id: 2,
    category: 'dev',
    title: "MediCare — Hospital Management System",
    description: "A microservices healthcare platform managing clinical workflows, patient appointments, and staff administration, integrated with Google Gemini AI and an automated ECG diagnostics model.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Spring Boot", "React", "MySQL", "Gemini API", "JWT Auth", "Microservices"],
    featured: true,
    color: "blue",
    github: "https://github.com/AnupaSupul",
    details: {
      overview: "Final year group project developing an enterprise hospital management system. The platform streamlines patient admissions, clinical appointments, pharmacy logs, and staff workflows with modular microservices and automated machine-learning health diagnostics.",
      problem: "Healthcare facilities suffer from fragmented paper records, uncoordinated appointment scheduling, and delayed clinical alerts, leading to administrative overhead and compromised patient response times.",
      solution: "Engineered a scalable hospital management system with Spring Boot microservices, JWT authentication, responsive React portals, a Google Gemini clinical chatbot, and an integrated ECG machine-learning analysis model.",
      features: [
        "Patient, appointment, and staff workflow management",
        "Spring Boot microservices architecture ensuring separation of concerns and high scalability",
        "Secure role-based access control (RBAC) and authentication using JWT",
        "Integrated Google Gemini API for intelligent 24/7 patient assistance and clinical triage chatbot",
        "Pre-trained ECG machine learning model integration with rule-based automated health analysis alerts",
        "Secure MySQL data management with transactional integrity and audit logging"
      ],
      techStack: {
        frontend: "React.js / Tailwind CSS",
        backend: "Java Spring Boot (Microservices) / Node.js",
        database: "MySQL",
        ai: "Google Gemini API / Pre-trained ECG Classifier"
      },
      role: "Core backend developer and systems architect. Designed the Spring Boot microservices, implemented JWT security, integrated the Google Gemini API, and collaborated closely on frontend connectivity.",
      outcome: "Delivered a production-ready hospital management platform that significantly improves patient scheduling efficiency and introduces intelligent ECG diagnostic support.",
      gallery: [
        { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop", caption: "Clinical Dashboard Overview & Patient Management" },
        { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", caption: "Spring Boot Microservices Backend Architecture" },
        { url: "https://images.unsplash.com/photo-1576091160550-217358c7e618?q=80&w=2070&auto=format&fit=crop", caption: "Automated ECG Machine Learning Analysis & Gemini Assistant" }
      ]
    }
  },
  {
    id: 3,
    category: 'ai',
    title: "AI-Powered YouTube Content Automation Workflow",
    description: "An autonomous digital publishing pipeline using n8n, Google Gemini AI, ElevenLabs, Creatomate, and the YouTube API to automate end-to-end video production and release.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2070&auto=format&fit=crop",
    tags: ["n8n", "Gemini API", "ElevenLabs", "Creatomate", "YouTube API", "Automation"],
    featured: false,
    color: "purple",
    github: "https://github.com/AnupaSupul",
    details: {
      overview: "An autonomous content generation workflow engineered in n8n. The system orchestrates multiple AI services to draft scripts, generate voiceovers, render videos from cloud templates, and publish them directly to YouTube with zero manual intervention.",
      problem: "Consistent digital content production demands dozens of hours per video across research, scriptwriting, voice recording, asset timeline assembly, rendering, and manual platform publishing.",
      solution: "Engineered an event-driven n8n workflow pipeline connecting Google Gemini for scriptwriting, ElevenLabs for voice synthesis, Creatomate for programmatic cloud video rendering, and YouTube Data API for scheduled publishing.",
      features: [
        "Autonomous topic selection and Gemini AI script generation",
        "High-fidelity AI speech synthesis with ElevenLabs",
        "Dynamic video rendering using cloud templates via Creatomate API",
        "Automated video upload, tag optimization, and publishing via YouTube Data API v3",
        "Error handling, webhooks, and retry logic in n8n"
      ],
      techStack: {
        automation: "n8n Workflow Automation",
        aiServices: "Google Gemini API / ElevenLabs Voice AI",
        videoRendering: "Creatomate REST API",
        integration: "YouTube Data API v3 / Webhooks"
      },
      role: "Architected the complete automation pipeline, authored the n8n workflows, integrated multi-service API credentials, and published the workflow documentation on GitHub.",
      outcome: "Eliminates repetitive manual editing overhead, demonstrating scalable autonomous digital media production with minimal latency.",
      gallery: [
        { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2070&auto=format&fit=crop", caption: "n8n Workflow Execution Pipeline & Webhook Triggers" },
        { url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop", caption: "ElevenLabs Voice Synthesis & Audio Generation Nodes" },
        { url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2070&auto=format&fit=crop", caption: "Creatomate Programmatic Video Rendering & YouTube API Publishing" }
      ]
    }
  },
  {
    id: 4,
    category: 'dev',
    title: "Maths Class Management System",
    description: "A centralized MERN-stack administrative platform for Combined Mathematics instructor Mr. Gayan Gammanavidana, featuring unique student QR codes for instant attendance and fee tracking.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
    tags: ["MongoDB", "Express", "React", "Node.js", "QR Code", "Full Stack"],
    featured: false,
    color: "teal",
    github: "https://github.com/AnupaSupul",
    details: {
      overview: "A custom web application built for a Combined Mathematics instructor. It replaces manual paper registers with unique student QR code generation, barcode camera scanning for attendance, and monthly tuition fee tracking.",
      problem: "Managing hundreds of students across physical classes with paper registers led to long check-in queues, registration errors, and lack of real-time payment visibility.",
      solution: "Developed a full-stack MERN application that generates unique QR passes for students, scans them instantly upon arrival, and updates a real-time administrative dashboard.",
      features: [
        "Digital student registration & unique QR pass generation",
        "Fast QR scanning module via webcam/scanner for attendance check-in",
        "Monthly fee payment tracking and payment receipt status",
        "Real-time attendance analytics and student records dashboard",
        "Fully responsive administrative workflows optimized for desktop and tablet"
      ],
      techStack: {
        frontend: "React.js / Tailwind CSS",
        backend: "Node.js / Express.js",
        database: "MongoDB"
      },
      role: "Full-stack developer working directly with the client. Gathered functional requirements, designed the MongoDB database schema, implemented QR scanning logic, and refined user flows.",
      outcome: "Successfully replaced manual attendance registers, accelerating class check-in and providing instant financial oversight.",
      gallery: [
        { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070", caption: "Student Registration & Attendance Management" },
        { url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2070", caption: "Monthly Fee Tracking & Payment Records" },
        { url: "https://images.unsplash.com/photo-1595079676339-1534801fafde?auto=format&fit=crop&q=80&w=2070", caption: "QR Code Pass Generation & Camera Scanning" }
      ]
    }
  },
  {
    id: 5,
    category: 'research',
    title: "Rice Plant Disease Detection — Web Application",
    description: "A research-based agricultural web platform connecting field leaf imagery to trained deep-learning CNN models (VGG19) and Spring Boot services for real-time disease diagnosis.",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=2072",
    tags: ["React", "Spring Boot", "MySQL", "TensorFlow", "Keras", "VGG19", "CNN"],
    featured: true,
    color: "emerald",
    github: "https://github.com/AnupaSupul",
    details: {
      overview: "A research-oriented web application built to operationalize deep-learning crop disease detection. Agricultural field workers can capture or upload photographs of rice leaves and obtain immediate diagnostic predictions from a trained VGG19 model.",
      problem: "Foliar diseases such as Brown Spot cause devastating harvest losses in Sri Lanka, where diagnostic access to agricultural pathologists is limited and manual detection is slow and subjective.",
      solution: "Engineered an end-to-end diagnostic platform connecting a responsive React frontend to Spring Boot backend services and a trained VGG19 CNN inference engine achieving over 95% validation accuracy.",
      features: [
        "Real-time camera leaf capture and image upload pipeline",
        "Deep CNN classification (VGG19) distinguishing Brown Spot vs. Healthy leaves",
        "Automated image preprocessing, resizing, and normalization",
        "Diagnostic confidence metrics and pathology advice",
        "Historical diagnosis database using MySQL for longitudinal crop tracking"
      ],
      techStack: {
        frontend: "React.js / Tailwind CSS",
        backend: "Java Spring Boot / REST APIs",
        database: "MySQL",
        ai: "Python / TensorFlow / Keras (VGG19 Architecture)"
      },
      role: "Developed the full-stack web application, built the Spring Boot REST endpoints, and integrated the trained deep-learning models for fast field inference.",
      outcome: "Bridges the gap between academic deep learning research and practical agricultural deployment, providing accessible disease identification with over 95% validation accuracy.",
      gallery: [
        { url: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=2072", caption: "Real-World Rice Leaf Field Imagery" },
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070", caption: "Model Preprocessing & Disease Prediction" },
        { url: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070", caption: "VGG19 Deep Learning Classification Pipeline" }
      ]
    }
  }
];

