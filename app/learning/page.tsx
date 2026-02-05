"use client";
import { useState } from "react";
import {
    Book, Code, Trophy, Star, Lightbulb, CheckCircle2,
    ExternalLink, Library, GraduationCap, FileText,
    Download, Layers, Award, ChevronDown, ChevronUp,
    Youtube, Calendar, Briefcase, Users, Layout, Cpu
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function LearningPage() {
    const [activeTab, setActiveTab] = useState<"skills" | "academic">("skills");
    const [expandedSkill, setExpandedSkill] = useState<number | null>(null);

    const skillsData = [
        {
            id: 0,
            status: 0,
            name: "Docker",
            source: "Youtube",
            start: "Feb-26",
            end: "Feb-26",
            cert: "NOT YET",
            progress: 20,
            topics: [
                "Introduction to Containers (VM vs Containers)", "Docker Architecture (Client, Daemon, Registry)", "Installing Docker",
                "Basic Docker Commands (run, ps, images)", "Docker Images & Layering", "Docker Containers Lifecycle",
                "Port Mapping (Exposing Services)", "Volumes & Data Persistence", "Bind Mounts vs Volumes",
                "Dockerfile Basics (FROM, RUN, COPY, CMD)", "Writing Dockerfiles", "Building Custom Images",
                "Image Optimization (Multi-stage Builds)", "Environment Variables", ".dockerignore",
                "Docker Networking (Bridge, Host, None)", "Container Communication", "Custom Networks",
                "Introduction to Docker Compose", "docker-compose.yml Basics", "Multi-Container Applications",
                "Environment Variables in Compose", "Volumes in Compose", "Docker for Local Development",
                "Hot Reloading in Containers", "Debugging Containers", "Docker Registries (Hub, Private)",
                "Pushing & Pulling Images", "CI/CD with Docker", "Docker Security Basics",
                "Resource Limits (CPU/Memory)", "Health Checks", "Multi-Stage Builds (Advanced)",
                "Docker Logging Drivers", "Docker Secrets & Configs", "Docker Swarm (Intro)", "Kubernetes vs Docker"
            ],
            projects: ["Containerizing Full-Stack Applications", "Microservices Deployment"],
            tools: ["Docker CLI", "Docker Desktop", "Docker Compose", "Docker Hub", "DOCKER_BUILDKIT"]
        },
        {
            id: 1,
            status: 0,
            name: "System Design",
            source: "Youtube",
            start: "Feb-26",
            end: "Present",
            cert: "NOT YET",
            progress: 10,
            topics: [
                "What is System Design (HLD vs LLD)", "Client–Server Architecture", "Networking Basics (HTTP, TCP/IP, DNS)", "Latency vs Throughput",
                "Vertical vs Horizontal Scaling", "Load Balancing", "Caching Fundamentals", "Database Basics (SQL vs NoSQL)",
                "DB Scaling (Replication, Sharding)", "CAP Theorem", "Consistency Models", "Data Partitioning",
                "Indexing Concepts", "CDN (Content Delivery Network)", "Rate Limiting", "Fault Tolerance",
                "High Availability", "Redundancy", "Graceful Degradation", "Monolith vs Microservices",
                "API Gateway", "Service Discovery", "Message Queues", "Event-Driven Architecture",
                "Distributed Transactions (Conceptual)", "Authentication vs Authorization", "Encryption Basics (TLS, HTTPS)", "Logging",
                "Monitoring & Metrics", "Alerting", "Containers (Docker Concept)", "Orchestration (Kubernetes Basics)",
                "CI/CD Concepts", "Rolling vs Blue-Green Deployments", "Caching Strategies (Write-through, Write-back)", "Database Indexing Strategies",
                "Pub-Sub Pattern", "CQRS Pattern", "Circuit Breaker Pattern", "Design a URL Shortener",
                "Design a Chat System", "Design a Video Streaming Service", "Design a Ride Sharing System", "Design a News Feed"
            ],
            projects: ["Designing Scalable Architectures for Portfolio Projects"],
            tools: ["Nginx", "Redis", "Kafka", "Docker", "AWS/Azure Concepts"]
        },
        {
            id: 2,
            status: 0,
            name: "Kubernetes",
            source: "Youtube",
            start: "Feb-26",
            end: "Present",
            cert: "NOT YET",
            progress: 0,
            topics: [
                "Introduction to Kubernetes (Scaling Containers)", "Kubernetes Architecture (Control Plane, Nodes)", "Setting Up a Cluster (Minikube, kind)",
                "kubectl Basics (apply, get, describe)", "Pods Lifecycle & Multi-container Pods", "ReplicaSets (Scaling Pods)",
                "Deployments (Rolling Updates, Rollbacks)", "Namespaces (Resource Isolation)", "K8s Services (ClusterIP, NodePort)",
                "DNS in Kubernetes", "Ingress Controllers", "Pod-to-Pod Communication",
                "Volumes (EmptyDir, HostPath)", "Persistent Volumes & PVC", "ConfigMaps", "Secrets",
                "Horizontal Pod Autoscaler", "Jobs & CronJobs", "StatefulSets", "DaemonSets",
                "RBAC (Role-Based Access Control)", "Service Accounts", "Network Policies", "Pod Security Concepts",
                "Rolling Updates & Rollbacks (Advanced)", "Resource Requests & Limits", "Helm (Package Manager)",
                "Monitoring (Prometheus, Grafana)", "Logging (EFK Stack Concept)", "CI/CD with Kubernetes",
                "Cluster Autoscaling", "Service Mesh (Istio/Linkerd Concept)", "Operators Pattern",
                "Cloud Kubernetes (EKS, GKE, AKS)", "Best Practices for K8s Production"
            ],
            projects: ["Cluster Architecture Analysis", "Orchestrating Scalable Microservices"],
            tools: ["kubectl", "Minikube", "Helm", "K9s", "Prometheus", "Lens"]
        },
        {
            id: 3,
            status: 0,
            name: "Advance Machine Learning",
            source: "Youtube",
            start: "Feb-26",
            end: "Present",
            cert: "NOT YET",
            progress: 0,
            topics: [
                "Bias–Variance Tradeoff", "Advanced Model Evaluation", "Cross-Validation Strategies", "Hyperparameter Optimization",
                "Feature Importance Techniques", "Model Interpretability (SHAP, LIME)", "Bagging Methods", "Random Forests",
                "Boosting Methods", "Gradient Boosting (GBM)", "XGBoost / LightGBM / CatBoost", "Stacking & Blending",
                "Regularization (L1, L2, ElasticNet)", "Advanced Loss Functions", "Gradient-Based Optimization", "Learning Rate Scheduling",
                "Bayesian Learning", "Gaussian Mixture Models (GMM)", "Hidden Markov Models (HMM)", "Expectation–Maximization (EM)",
                "Advanced Clustering (DBSCAN, Spectral)", "Dimensionality Reduction (t-SNE, UMAP)", "Anomaly Detection Techniques",
                "Time Series Decomposition", "ARIMA & SARIMA Models", "Feature Engineering for Time Series", "Forecast Evaluation Metrics",
                "Semi-Supervised Learning", "Self-Training Methods", "Active Learning", "ML Pipelines",
                "Model Deployment Concepts", "Model Monitoring", "Concept Drift Handling", "Feature Stores",
                "Meta-Learning", "AutoML", "Federated Learning", "Reinforcement Learning (Intro)", "ML Fairness & Ethics"
            ],
            projects: ["Research Paper Implementations", "Financial Forecasting Models"],
            tools: ["XGBoost", "LightGBM", "SHAP", "Optuna", "MLflow"]
        },
        {
            id: 5,
            status: 1,
            name: "Next.js",
            source: "Youtube",
            start: "Jan-26",
            end: "Present",
            cert: "NOT YET",
            progress: 25,
            topics: [
                "Introduction to Next.js", "Project Setup & Structure", "App Router", "File-Based Routing",
                "Layouts & Templates", "Navigation in Next.js", "Loading & Error UI", "Rendering Strategies (SSR, SSG, CSR, ISR)",
                "Server Components vs Client Components", "Data Fetching in Next.js", "Caching & Revalidation", "Server Actions",
                "Route Handlers (API Routes)", "Middleware", "Authentication Concepts in Next.js", "Styling Methods in Next.js",
                "Image & Font Optimization", "Metadata & SEO", "Static Assets Handling", "Performance Optimization",
                "Environment Variables", "Runtimes (Node vs Edge)", "Testing Next.js Apps", "Build & Production Process", "Deployment Strategies"
            ],
            projects: ["Personal Portfolio Website (current)"],
            tools: ["Tailwind CSS", "Lucide React", "Framer Motion", "Next Auth", "Prisma", "PostgreSQL"]
        },
        {
            id: 6,
            status: 2,
            name: "Angular",
            source: "Youtube",
            start: "Nov-25",
            end: "Present",
            cert: "NOT YET",
            progress: 12,
            topics: [
                "Introduction to Angular", "TypeScript for Angular", "Angular Project Setup & CLI", "Angular Architecture Overview",
                "Components", "Templates & Data Binding", "Directives", "Pipes", "Dependency Injection",
                "Services & HTTP Client", "Routing in Angular", "Forms in Angular", "RxJS & Observables",
                "State Management", "Signals (Modern Angular Reactivity)", "Change Detection", "Modules & Lazy Loading",
                "Security in Angular", "Performance Optimization", "Testing Angular Applications", "Angular DevTools & Developer Experience",
                "Internationalization (i18n)", "Animations in Angular", "SSR & SSG with Angular", "Building & Deployment"
            ],
            projects: ["Currently no project used this skill except this portfolio"],
            tools: ["Angular CLI", "RxJS", "TypeScript", "SCSS"]
        },
        {
            id: 7,
            status: 3,
            name: "React JS",
            source: "Internship",
            start: "Oct-25",
            end: "Jan-26",
            cert: "https://drive.google.com/...",
            progress: 100,
            topics: [
                "Modern JavaScript for React", "React Setup & Tooling", "JSX", "Functional Components",
                "Props & State", "Component Rendering & Lifecycle", "Events in React", "Lists & Keys",
                "Conditional Rendering", "Composition & Reusability", "Refs", "Hooks (Core Concept)",
                "Basic Hooks (useState, useEffect)", "Common Hooks (useRef, useMemo, useCallback, useReducer, useContext)",
                "Custom Hooks", "Hooks Best Practices", "Routing in React", "State Management",
                "Styling in React", "Component Libraries", "API Calls & Data Fetching", "Forms in React",
                "TypeScript with React", "Testing React Apps", "React Frameworks (Next.js, etc.)",
                "Advanced React Patterns", "Performance Optimization", "Animations in React",
                "Error Boundaries", "Portals", "Suspense", "Server APIs / Server Components (Concept)", "React Native"
            ],
            projects: ["EduMaster - Learning management system with AI helper (Frontend Only) (https://github.com/obaidulsaiki/EduMaster-LearningManagementSystem)"],
            tools: ["Vite", "React Router", "Redux Toolkit", "Axios", "Shadcn UI", "Tailwind CSS"],
        },
        {
            id: 8,
            status: 4,
            name: "Spring Boot",
            source: "ICT Division",
            start: "Oct-24",
            end: "Jul-26",
            cert: "https://drive.google.com/...",
            progress: 100,
            topics: [
                "Java Basics & Foundations", "OOP (Inheritance, Polymorphism, Abstraction)", "Exception Handling & Generics",
                "Java Collections Framework", "JDBC & Web App Basics", "Servlets, JSP & JSTL", "Apache Tomcat",
                "Spring Framework Architecture & IoC", "Dependency Injection & Bean Scopes", "Spring Configuration (XML & Annotation)",
                "Spring MVC & Maven Basics", "Spring Boot Auto Configuration", "RESTful APIs with Spring Boot",
                "SQL Basics & JPA/Hibernate ORM", "Spring Data JPA & CRUD Operations", "Spring Security (Auth & Authz)",
                "Session Management & API Security", "Building Full Stack Spring Boot Projects", "File/Image Upload Handling",
                "Entity Relationships (One-to-Many, etc.)", "Design Patterns (Factory, Builder, DI)", "Logging & Monitoring",
                "Packaging & Production Deployment"
            ],
            projects: [
                "EduMaster - Learning Management System with AI helper Backend (https://github.com/obaidulsaiki/EduMaster-LearningManagementSystem)",
                "Tutor Management System only backend (https://github.com/obaidulsaiki/tutor-management-system)"
            ],
            tools: ["IntelliJ IDEA", "Maven", "PostgreSQL", "Spring Initializr", "Postman"]
        },
        {
            id: 9,
            status: 5,
            name: "Postman",
            source: "Session",
            start: "Oct-24",
            end: "Jul-26",
            cert: "No Certificate",
            progress: 100,
            topics: [
                "What is Postman & Why It’s Used", "Installing & Setting Up Postman", "Understanding HTTP Basics (GET, POST, PUT, DELETE)",
                "Creating Your First API Request", "Request Methods", "URL, Params & Query Strings", "Headers in Requests",
                "Request Body (JSON, Form Data, x-www-form-urlencoded)", "Sending Data to APIs", "Understanding API Responses (Status Codes, Body, Headers)",
                "Saving Requests", "Collections", "Environment Variables", "Global vs Environment Variables",
                "Using Variables in Requests", "Authorization (Bearer Token, Basic Auth, API Keys)", "Working with JWT Tokens",
                "Pre-request Scripts", "Tests (Writing Test Scripts)", "Automating API Tests", "Collection Runner",
                "Importing & Exporting Collections", "Mock Servers", "Monitoring APIs", "Generating API Documentation",
                "Using Postman with Teams", "Newman (Run Postman from CLI)"
            ],
            projects: [
                "EduMaster Backend (https://github.com/obaidulsaiki/EduMaster-LearningManagementSystem)",
                "Tutor Management System Backend (https://github.com/obaidulsaiki/tutor-management-system)",
                "Personal Portfolio Backend"
            ],
            tools: ["Postman Desktop", "Newman", "Postman Interceptor"]
        },
        {
            id: 10,
            status: 6,
            name: "Dotnet",
            source: "Uni Course",
            start: "Semester 10",
            end: "-",
            cert: "No Certificate",
            progress: 69,
            topics: [
                "Introduction to C#", "Data Types & Variables", "Operators & Control Flow", "Methods",
                "OOP (Encapsulation, Inheritance, Polymorphism, Abstraction)", "Exception Handling",
                "Collections & Generics", "LINQ Basics", "What is .NET & .NET Core", "CLR & .NET Architecture",
                "Project Structure in .NET", "NuGet Package Manager", "Dependency Injection in .NET",
                "Introduction to ASP.NET Core", "Middleware", "Routing", "Controllers & Actions",
                "Model Binding", "Validation", "RESTful API Concepts", "Creating Web APIs",
                "HTTP Methods in ASP.NET", "Working with JSON", "Status Codes & Error Handling",
                "Swagger / OpenAPI", "SQL Basics", "Entity Framework Core", "Code First Approach",
                "Migrations", "CRUD Operations", "LINQ with Database", "Identity in ASP.NET Core",
                "Authentication vs Authorization", "JWT Authentication", "Role-Based Authorization", "Securing APIs",
                "Configuration & Environment Variables", "Logging", "Exception Handling Middleware", "Caching",
                "Background Services", "Unit Testing in .NET", "Integration Testing", "Mocking",
                "Publishing .NET Apps", "Hosting on IIS / Kestrel", "Dockerizing .NET Apps", "CI/CD Basics",
                "Razor Pages / MVC Views", "Blazor", "gRPC", "Microservices with .NET"
            ],
            projects: ["Tour Management System (https://github.com/obaidulsaiki/Tour-Managment-System)"],
            tools: ["Visual Studio", "C#", ".NET Core / 5 / 6+", "Entity Framework", "SQL Server"]
        },
        {
            id: 11,
            status: 7,
            name: "Machine Learning",
            source: "Youtube & Research",
            start: "Mar-25",
            end: "Sep-26",
            cert: "No Certificate",
            progress: 100,
            topics: [
                "Python for Machine Learning", "Mathematics for ML", "Data Preprocessing", "Exploratory Data Analysis",
                "Supervised Learning", "Regression Algorithms", "Classification Algorithms", "Model Evaluation Techniques",
                "Overfitting & Underfitting", "Regularization", "Unsupervised Learning", "Clustering",
                "Dimensionality Reduction", "Feature Engineering", "Feature Selection", "Pipelines & Workflow",
                "Ensemble Learning", "Model Tuning & Hyperparameters", "Cross Validation", "Intro to ML Deployment"
            ],
            projects: ["Trained models across 40+ Research Papers", "Predictive Analytics Systems"],
            tools: ["Scikit-Learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"]
        },
        {
            id: 24,
            status: 20,
            name: "Deep Learning",
            source: "Youtube & Research",
            start: "Mar-25",
            end: "Sep-26",
            cert: "No Certificate",
            progress: 100,
            topics: [
                "Neural Network Fundamentals", "Perceptron & Activation Functions", "Loss Functions", "Backpropagation",
                "Gradient Descent Variants", "Building Neural Networks with Frameworks", "Tensors & Computational Graphs",
                "Training Deep Neural Networks", "Optimization Techniques", "Regularization in DL",
                "Convolutional Neural Networks (CNNs)", "Image Processing with DL", "Recurrent Neural Networks (RNNs)",
                "LSTM & GRU", "Sequence Models", "Attention Mechanism", "Transformers", "Transfer Learning",
                "Fine-Tuning Pretrained Models", "Model Deployment for DL"
            ],
            projects: ["Implemented architectures in 40+ Research Papers", "Computer Vision & NLP Tasks"],
            tools: ["TensorFlow", "PyTorch", "Keras", "CUDA", "OpenCV"]
        },
        {
            id: 25,
            status: 1,
            name: "LLM",
            source: "Youtube & Research",
            start: "Mar-25",
            end: "Present",
            cert: "No Certificate",
            progress: 0,
            topics: [
                "Foundations of NLP (Text Processing, Tokens)", "Neural Network Basics (Embeddings, Loss)", "Sequence Models (RNN, LSTM, GRU)",
                "Attention Mechanism", "Transformers (Encoder, Decoder, Self-Attention)", "Tokenization Techniques (BPE, WordPiece)",
                "Pretraining Objectives (Language Modeling)", "Popular LLM Architectures (GPT, BERT)", "Fine-Tuning Methods (Full, LoRA, PEFT)",
                "Prompt Engineering (Zero-shot, Few-shot, CoT)", "Instruction Tuning", "RLHF (Conceptual)",
                "Model Evaluation (Perplexity, BLEU, ROUGE)", "Inference Optimization (Quantization)", "LLM Deployment Basics"
            ],
            projects: ["Trained and Finetuned LLMs in 40+ Research Papers"],
            tools: ["Hugging Face", "PyTorch", "Transformers", "LoRA", "PEFT"]
        },
        {
            id: 26,
            status: 1,
            name: "RAG",
            source: "Youtube & Research",
            start: "Mar-25",
            end: "Present",
            cert: "No Certificate",
            progress: 0,
            topics: [
                "What is RAG (Why LLMs Need Retrieval)", "Embeddings (Sentence Embeddings)", "Vector Databases (Similarity Search)",
                "Document Chunking Strategies", "Indexing Pipelines", "Similarity Search Techniques (Cosine, ANN)",
                "Retrieval Strategies (Top-K, Re-ranking)", "Prompt Construction with Context", "RAG Pipeline Architecture",
                "Evaluation of RAG Systems", "Handling Hallucinations", "Hybrid Search (Keyword + Vector)",
                "Metadata Filtering", "Streaming Responses", "Scaling RAG Systems"
            ],
            projects: ["Implemented RAG systems in 40+ Research Papers"],
            tools: ["LangChain", "Pinecone", "ChromaDB", "FAISS", "LlamaIndex"]
        },
        {
            id: 12,
            status: 8,
            name: "Data Preprocessing",
            source: "Session & Research",
            start: "Nov-25",
            end: "Nov-25",
            cert: "https://drive.google.com/...",
            progress: 100,
            topics: [
                "Understanding the Dataset", "Data Collection & Integration", "Data Cleaning", "Handling Missing Values",
                "Handling Duplicate Data", "Handling Incorrect or Inconsistent Data", "Outlier Detection & Treatment",
                "Data Type Conversion", "Feature Selection", "Feature Engineering", "Encoding Categorical Variables",
                "Feature Scaling", "Handling Imbalanced Data", "Text Preprocessing (for NLP)",
                "Image Preprocessing (for Computer Vision)", "Time Series Preprocessing", "Data Augmentation",
                "Splitting Dataset (Train/Validation/Test)", "Cross-Validation Preparation", "Building Preprocessing Pipelines",
                "Preventing Data Leakage", "Saving & Reusing Preprocessing Steps"
            ],
            projects: ["Data cleaning for 40+ Research Papers", "Pipeline Automation for ML Workflows"],
            tools: ["Pandas", "NumPy", "Scikit-Learn", "OpenCV", "NLTK", "Imbalanced-learn"]
        },
        {
            id: 13,
            status: 9,
            name: "Python",
            source: "Youtube",
            start: "Jun-23",
            end: "Jun-23",
            cert: "No Certificate",
            progress: 100,
            topics: [
                "Python Introduction", "Python Setup & Environment", "Variables & Data Types", "Input & Output",
                "Conditional Statements", "Loops", "Functions", "Scope & Lifetime of Variables",
                "Core Data Structures", "Strings & Text Processing", "File Handling", "Modules & Packages",
                "Exception Handling", "Object-Oriented Programming", "Working with Libraries",
                "Virtual Environments & Package Management", "Working with JSON & APIs", "Command Line Programs",
                "Testing Basics", "Debugging Techniques", "Regular Expressions", "Iterators & Generators",
                "Decorators", "Basic Data Processing", "Project Building with Python"
            ],
            projects: [
                "Dengue Awareness Disease - Visual Storyteller",
                "Password Manager (GUI/CLI)",
                "Choose Your Adventure Game",
                "Number Guessing System",
                "Rock Paper Scissors Game",
                "Interactive Quiz Application",
                "6+ Small Python Utilities"
            ],
            tools: ["PyCharm", "VS Code", "Python 3.x", "Tkinter", "Pandas", "Matplotlib"],
            note: "https://github.com/obaidulsaiki/PythonLearning/tree/main/Learning%20Grace%20of%20Python%20from%20David%20j.Malan"
        },
        {
            id: 14,
            status: 10,
            name: "Figma",
            source: "Youtube",
            start: "Feb-25",
            end: "Apr-25",
            cert: "No Certificate",
            progress: 72,
            topics: [
                "Introduction to Figma", "Figma Interface & Tools", "Frames & Artboards", "Shapes & Vector Tools",
                "Text & Typography", "Colors & Styles", "Layout & Alignment", "Grids & Constraints",
                "Components", "Variants & Component Properties", "Auto Layout", "Design Systems Basics",
                "Icons & Assets Management", "Images & Illustrations", "Responsive Design in Figma",
                "Prototyping Basics", "Interactive Components", "Smart Animate", "Micro-interactions",
                "Sharing & Collaboration", "Developer Handoff (Inspect Panel)", "Version History",
                "Plugins & Extensions", "Design Tokens", "Exporting Assets"
            ],
            projects: ["UI/UX of Tour Management System"],
            tools: ["Auto Layout", "Components", "Variants", "Prototyping"]
        },
        {
            id: 15,
            status: 11,
            name: "DSA",
            source: "Uni Course",
            start: "Semester 5",
            end: "-",
            cert: "No Certificate",
            progress: 100,
            topics: [
                "Foundations of DSA (Terminology, Data Organization, Operations)",
                "Algorithm Analysis (Time–Space Tradeoff, Growth of Functions, Asymptotic Notation)",
                "Arrays (Memory Representation, Traversal, Insertion, Deletion)",
                "Linked Lists (Singly, Doubly, Circular, Basic Operations)",
                "Stacks (Operations, Applications, Expression Evaluation)",
                "Queues (Linear Queue, Circular Queue, Priority Queue, Deque)",
                "Expression Handling (Infix, Prefix, Postfix, Stack Applications)",
                "Recursion (Concept, Recursive Algorithms, Tower of Hanoi)",
                "Trees (Terminology, Traversal, Insert/Delete)",
                "Binary Search Trees (Search, Insert, Delete)",
                "Balanced Trees (AVL Trees)",
                "Graphs (Terminology, Adjacency Matrix, Adjacency List)",
                "Graph Traversal (BFS, DFS)",
                "Graph Algorithms (Shortest Path, Greedy Methods, Flow Algorithms)",
                "Hashing (Hash Tables, Collision Handling)",
                "Greedy Algorithms (Huffman Coding)",
                "String Processing (String Operations, Pattern Matching)",
                "Sorting Algorithms (Bubble, Selection, Insertion, Radix, Quick, Merge, Heap)",
                "Searching Algorithms (Linear Search, Binary Search)",
                "Dynamic Programming (DP Approach, Applications)",
                "Computational Complexity (NP-Completeness)"
            ],
            projects: ["Air and Cargo System Interface (C++ Implementation of DSA)"],
            tools: ["C++", "STL", "VS Code", "Data Structures", "Recursion", "Complexity Analysis"]
        },
        {
            id: 16,
            status: 12,
            name: "Database",
            source: "Uni Course",
            start: "Semester 7",
            end: "-",
            cert: "No Certificate",
            progress: 100,
            topics: [
                "Introduction to Databases", "Database System Architecture", "Database Languages & Interfaces",
                "Entity–Relationship Model", "ER Relationships", "ER Diagram Design",
                "Relational Data Model", "Relational Schema Design", "Relational Algebra", "Relational Calculus",
                "Basic SQL (DDL, DML, Constraints)", "SQL Queries (SELECT, JOIN, WHERE)", "Advanced SQL (Views, Set Operations)",
                "SQL Programming (Embedded, Dynamic SQL)", "Database Connectivity (JDBC)", "Stored Procedures & Functions",
                "Functional Dependencies", "Normalization (1NF, 2NF, 3NF)", "Schema Refinement",
                "Disk Storage & File Structures", "Indexing Basics", "Tree-Based Indexing (B+ Trees)",
                "Transaction Concepts (ACID)", "Concurrency Control (2PL)", "Recoverability & Schedules",
                "Query Processing", "Query Optimization", "Distributed Databases",
                "Big Data Technologies (Hadoop)", "Data Mining Concepts", "Database Ethics & Legal Issues"
            ],
            projects: ["AnimeHobbyList - Anime Tracking Database System"],
            tools: ["SQL", "PostgreSQL", "MySQL", "ER Diagramming", "Relational Algebra"]
        },
        {
            id: 17,
            status: 13,
            name: "Java",
            source: "Uni Course",
            start: "Semester 6",
            end: "-",
            cert: "No Certificate",
            progress: 100,
            topics: [
                "Java Basics", "Data Types & Variables", "Operators & Control Flow", "Arrays & Collections",
                "Methods & Encapsulation", "OOP Principles", "Exception Handling", "Generics",
                "Java Collections Framework", "String Handling & Regex", "JDBC Basics"
            ],
            projects: [
                "Samaya Attire JavaFx (https://github.com/obaidulsaiki/project3_JavaFx01_E-commerceApplication)",
                "Academic OOP Projects",
                "Library Management System"
            ],
            tools: ["Eclipse", "NetBeans", "JDK 8/11/17"]
        },
        {
            id: 18,
            status: 14,
            name: "C++",
            source: "Uni Course",
            start: "Semester 3",
            end: "-",
            cert: "No Certificate",
            progress: 100,
            topics: [
                "Introduction to C++ (C vs C++)", "C++ Setup & Compilation", "Basic Program Structure", "Variables & Data Types (auto, bool)",
                "Input & Output (cin, cout)", "Operators (Logical, Bitwise)", "Control Flow (if, switch)", "Loops (range-based for)",
                "Functions & Overloading", "Scope & Storage Classes", "Arrays (1D, 2D)", "Strings (std::string)",
                "Pointers & References", "Dynamic Memory (new, delete)", "Classes & Objects", "Constructors & Destructors",
                "Encapsulation & Abstraction", "Inheritance & Polymorphism", "Virtual Functions & Overriding", "Operator Overloading",
                "Templates (Function & Class)", "Exception Handling (try/catch)", "Namespaces", "File Handling",
                "Preprocessor Directives", "STL Overview", "STL Containers (vector, map, set)", "Iterators",
                "STL Algorithms (sort, binary_search)", "Functors & Lambda Expressions", "Stack vs Heap",
                "Smart Pointers (unique, shared)", "Move Semantics", "Rule of Three/Five", "Multithreading Basics",
                "Concurrency Concepts", "Modern C++ (C++11/14/17/20)", "Build Systems (CMake)", "Debugging (gdb, valgrind)",
                "Modular Code & Best Practices"
            ],
            projects: ["Air and Cargo System Interface (C++ Implementation of DSA)"],
            tools: ["g++", "CMake", "GDB", "Valgrind", "VS Code", "STL"]
        },
        {
            id: 19,
            status: 15,
            name: "C",
            source: "Uni Course",
            start: "Semester 2",
            end: "-",
            cert: "No Certificate",
            progress: 100,
            topics: [
                "Introduction to C (History, Use Cases)", "C Setup & Compilation", "Basic Program Structure", "Variables & Data Types",
                "Input & Output (printf, scanf)", "Operators (Arithmetic, Bitwise)", "Control Statements", "Loops (for, while, do-while)",
                "Functions (Arguments, Return)", "Scope & Storage Classes", "Arrays (1D, 2D)", "Strings & String Functions",
                "Pointers Basics", "Pointers & Arrays", "Pointers & Functions", "Dynamic Memory Allocation",
                "Structures (struct, nested)", "Unions & Enums", "File Handling (fopen, fread)", "Preprocessor Directives",
                "Command Line Arguments", "Recursion", "Linked Lists (Implementation)", "Stacks & Queues in C",
                "Trees (Basic Implementation)", "Memory Management (Stack vs Heap)", "Debugging Techniques (gdb)", "Modular Code & Best Practices"
            ],
            projects: ["Academic Programming Labs", "Data Structure Implementations in C"],
            tools: ["GCC", "GDB", "VS Code", "Code::Blocks", "Makefiles"]
        },
        {
            id: 20,
            status: 16,
            name: "JavaScript",
            source: "Session",
            start: "Jan-23",
            end: "Apr-23",
            cert: "https://drive.google.com/...",
            progress: 100,
            topics: [
                "Introduction to JavaScript", "JS Setup & Environment", "Variables & Data Types", "Operators",
                "Control Flow (if/else, switch)", "Loops (for, while, for…of)", "Functions (Arrow, Declarations)",
                "Scope & Closures", "Arrays & Methods", "Objects & 'this' keyword", "Strings & Template Literals",
                "Error Handling (try/catch)", "DOM Manipulation", "Events & Listeners", "Forms & User Input",
                "ES6+ Features (Destructuring, Spread)", "Asynchronous JS (Callbacks)", "Promises", "Async/Await",
                "Fetch API & HTTP Requests", "JSON Handling", "Timers (setTimeout, setInterval)",
                "Event Loop (Conceptual)", "Local & Session Storage", "Modules & Code Organization",
                "Object-Oriented JS (Prototypes, Classes)", "Functional Programming (map, filter, reduce)",
                "JS in Browser vs Node.js", "NPM & Package Management", "Tooling (Bundlers, Linters)"
            ],
            projects: ["Hangover Cafe (https://github.com/obaidulsaiki/project02_javaScript01_hangoverCafe)"],
            tools: ["Browser DevTools", "Node.js", "NPM", "ESLint", "Prettier"]
        },
        {
            id: 21,
            status: 17,
            name: "Git",
            source: "Session",
            start: "Jan-23",
            end: "Jan-23",
            cert: "No Certificate",
            progress: 100,
            topics: [
                "Introduction to Git & Version Control", "Git Installation & Setup", "Repository Basics (init, clone)",
                "Tracking Files (Staging, Repo)", "Basic Commands (add, commit, status, log)", "Viewing Changes (diff, show)",
                "Undoing Changes (reset, revert)", "Branching Basics (create, switch)", "Merging (fast-forward, conflicts)",
                "Remote Repositories (push, pull, fetch)", "GitHub/GitLab Workflows", "Resolving Merge Conflicts",
                "Branching Strategies (Git Flow)", "Stashing Changes", "Rebasing vs Merging", "Cherry-picking Commits",
                "Tags & Versioning", "Submodules & External Repos", "Git Hooks Automation",
                "Interactive Rebase & History", "Git Internals (Blobs, Trees)", "Best Practices (Atomic Commits)",
                "Collaboration & PR Workflow"
            ],
            projects: ["Utilized in all Portfolio & University Projects", "Open Source Contributions"],
            tools: ["Git CLI", "GitHub Desktop", "GitLab", "Sourcetree", "VS Code Git Integration"]
        },
        {
            id: 22,
            status: 18,
            name: "Canva",
            source: "Session",
            start: "Jan-23",
            end: "Jan-23",
            cert: "No Certificate",
            progress: 100,
            topics: [
                "Introduction to Canva", "Canva Interface (Layout, Toolbar)", "Templates Customization", "Elements & Graphics",
                "Text & Typography", "Colors & Backgrounds", "Images (Uploading, Filters, Frames)", "Layout & Positioning (Layers, Grouping)",
                "Brand Kit Integration", "Design Styles & Visual Hierarchy", "Presentations & Transitions", "Social Media Designs",
                "Print Designs (Flyers, Business Cards)", "Video Editing & Transitions", "Animations (Element & Page)",
                "Sharing & Collaboration", "Magic Tools (AI Features)", "Exporting (PNG, PDF, MP4)",
                "Design for Different Platforms", "Design Best Practices"
            ],
            projects: ["Social Media Graphics", "Presentation Slides", "Marketing Materials"],
            tools: ["Magic Resize", "Background Remover", "Brand Kit", "Canva Pro Features"]
        },
        {
            id: 23,
            status: 19,
            name: "Web (HTML CSS)",
            source: "Session",
            start: "Sep-22",
            end: "Dec-22",
            cert: "Yes, Certificate Available",
            progress: 100,
            topics: [
                "How the Web Works (Browser, Server, HTTP)", "Basic HTML Document Structure", "HTML Tags & Elements", "Text Formatting Elements",
                "Links & Navigation", "Images & Media", "Lists (Ordered, Unordered, Description)", "Tables", "Forms",
                "Input Types & Form Validation", "Semantic HTML5 Tags", "Block vs Inline Elements", "Iframes & Embedding Content",
                "Accessibility Basics (ARIA, alt, labels)", "SEO Fundamentals with HTML", "HTML Best Practices",
                "CSS Syntax & Selectors", "Ways to Add CSS (Inline, Internal, External)", "Colors, Units & Fonts", "The CSS Box Model",
                "Margin, Padding, Border", "Display Property", "Positioning (static, relative, absolute, fixed, sticky)", "Flexbox",
                "CSS Grid", "Responsive Design & Media Queries", "Pseudo-classes & Pseudo-elements", "Transitions",
                "Animations", "Transformations", "CSS Variables", "Writing Clean & Maintainable CSS",
                "CSS Methodologies (BEM, etc.)", "Sass / SCSS (Preprocessors)", "Utility-First CSS (Tailwind concept)", "Browser Compatibility & Vendor Prefixes"
            ],
            projects: ["Mission 2022 - Personal Development Tracking"],
            tools: ["VS Code", "Chrome DevTools", "Emmet", "Normalize.css"],
            github: "https://github.com/obaidulsaiki/project01_Mission2022"
        },
    ];

    const toggleSkill = (id: number) => {
        setExpandedSkill(expandedSkill === id ? null : id);
    };

    const SkillCard = ({ skill }: { skill: any }) => (
        <motion.div
            layout
            className={`w-full glass-card rounded-[2rem] md:rounded-[2.5rem] border shadow-lg transition-all duration-300 backdrop-blur-xl overflow-hidden ${skill.name === "Next.js"
                ? "border-blue-200 shadow-blue-100/50 bg-gradient-to-br from-white/90 to-blue-50/40"
                : "border-zinc-100 shadow-lg bg-white/70"
                }`}
        >
            <div className="p-5 sm:p-6 md:p-8">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
                    {/* LEFT: INFO */}
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-4">
                            <div className={`shrink-0 p-3 rounded-xl ${skill.name === "Next.js" ? "bg-blue-600 text-white" : "bg-zinc-900 text-white"}`}>
                                {skill.name === "Next.js" ? <Layout size={20} /> : <Code size={20} />}
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-lg md:text-xl font-black text-zinc-900 tracking-tight flex items-center gap-2">
                                    <span className="truncate">{skill.name}</span>
                                    {skill.name === "Next.js" && <span className="shrink-0 text-[8px] md:text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-md font-black uppercase">Core</span>}
                                </h3>
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
                                    <span className="flex items-center gap-1"><Library size={12} className="text-blue-500" /> {skill.source}</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span className="flex items-center gap-1"><Calendar size={12} className="text-blue-500" /> {skill.start} - {skill.end}</span>
                                </div>
                            </div>
                        </div>

                        {/* PROGRESS BAR */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-[9px] md:text-[10px] font-black uppercase tracking-tighter text-zinc-500">
                                <span>Curriculum Progress</span>
                                <span className="text-blue-600 font-black">{skill.progress}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.progress}%` }}
                                    className={`h-full ${skill.progress === 100 ? 'bg-green-500' : 'bg-blue-600'}`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: ACTIONS */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <button
                            disabled={skill.cert === "NOT YET" || skill.cert === "No Certificate"}
                            className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-zinc-900 text-white rounded-xl text-[10px] md:text-[11px] font-black hover:bg-blue-600 transition-all shadow-md disabled:opacity-30 disabled:hover:bg-zinc-900 whitespace-nowrap"
                        >
                            <Award size={14} /> <span className="hidden sm:inline">Certificate</span><span className="sm:hidden">Cert</span>
                        </button>
                        {skill.note ? (
                            <a
                                href={skill.note}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-white text-zinc-900 border border-zinc-200 rounded-xl text-[10px] md:text-[11px] font-black hover:bg-zinc-50 transition-all whitespace-nowrap"
                            >
                                <FileText size={14} className="text-blue-600" /> Note
                            </a>
                        ) : (
                            <button className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-white text-zinc-900 border border-zinc-200 rounded-xl text-[10px] md:text-[11px] font-black hover:bg-zinc-50 transition-all whitespace-nowrap opacity-30 cursor-not-allowed">
                                <FileText size={14} className="text-blue-600" /> Note
                            </button>
                        )}
                        <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-900 border border-zinc-200 rounded-xl text-[11px] font-black hover:bg-zinc-50 transition-all whitespace-nowrap">
                            <Layers size={14} className="text-indigo-600" /> Materials
                        </button>
                        <button
                            onClick={() => toggleSkill(skill.id)}
                            className={`p-2.5 rounded-xl transition-colors ${expandedSkill === skill.id ? "bg-blue-600 text-white" : "bg-zinc-50 hover:bg-zinc-100"}`}
                        >
                            {expandedSkill === skill.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                    </div>
                </div>

                {/* DROPDOWN TOPICS */}
                <AnimatePresence>
                    {expandedSkill === skill.id && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-zinc-100"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
                                {/* TOPICS COLUMN */}
                                <div className="space-y-5 lg:col-span-8">
                                    <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2 mb-4">
                                        <CheckCircle2 size={16} className="text-blue-500" /> Mastering Curriculum
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-3">
                                        {(skill.topics || [
                                            "Advanced Architecture Patterns", "Performance Optimization", "Security Implementations"
                                        ]).map((topic: string, i: number) => (
                                            <div key={i} className="flex items-start gap-4 text-xs md:text-sm font-bold text-zinc-600 group/topic max-w-full">
                                                <div className="shrink-0 w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[10px] font-black text-zinc-400 group-hover/topic:bg-blue-600 group-hover/topic:text-white transition-all">
                                                    {(i + 1).toString().padStart(2, '0')}
                                                </div>
                                                <div className="flex-1 min-w-0 py-1 px-2 rounded-lg group-hover/topic:bg-blue-50/50 transition-all flex items-center justify-between gap-2 overflow-hidden">
                                                    <span className="leading-relaxed truncate sm:overflow-visible sm:whitespace-normal">{topic}</span>
                                                    {((skill.name === "Next.js" && i < 5) ||
                                                        (skill.name === "Angular" && i < 3) ||
                                                        (skill.name === "React JS" && i < 33) ||
                                                        (skill.name === "Web (HTML CSS)" && i < 36) ||
                                                        (skill.name === "Spring Boot" && i < 47) ||
                                                        (skill.name === "Java" && i < 17) ||
                                                        (skill.name === "Postman" && i < 27) ||
                                                        (skill.name === "Dotnet" && i < 36) ||
                                                        (skill.name === "Python" && i < 25) ||
                                                        (skill.name === "Machine Learning" && i < 20) ||
                                                        (skill.name === "Deep Learning" && i < 20) ||
                                                        (skill.name === "Data Preprocessing" && i < 22) ||
                                                        (skill.name === "Figma" && i < 18) ||
                                                        (skill.name === "DSA" && i < 21) ||
                                                        (skill.name === "Database" && i < 32) ||
                                                        (skill.name === "Canva" && i < 20) ||
                                                        (skill.name === "Git" && i < 23) ||
                                                        (skill.name === "JavaScript" && i < 30) ||
                                                        (skill.name === "C" && i < 28) ||
                                                        (skill.name === "C++" && i < 45) ||
                                                        (skill.name === "Docker" && i < 7)) && (
                                                            <div className="shrink-0 flex items-center gap-1.5 px-2 py-1 bg-green-50 rounded-md border border-green-100">
                                                                <CheckCircle2 size={12} className="text-green-600" />
                                                                <span className="hidden sm:inline text-[9px] font-black text-green-700 uppercase">Mastered</span>
                                                            </div>
                                                        )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* PROJECTS & TOOLS COLUMN */}
                                <div className="space-y-10 lg:col-span-4">
                                    <div className="space-y-5">
                                        <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                                            <Briefcase size={16} className="text-indigo-500" /> Projects Portfolio
                                        </h4>
                                        <div className="space-y-3">
                                            {(skill.projects || ["Currently no project utilized for this skill"]).map((project: string, i: number) => {
                                                const hasLink = project.includes("https://github.com");
                                                const [name, linkPart] = hasLink ? project.split(" (") : [project, null];
                                                const cleanLink = linkPart ? linkPart.replace(")", "") : null;

                                                return (
                                                    <div key={i} className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 text-[11px] md:text-xs font-bold text-zinc-700 group/proj hover:bg-white hover:shadow-sm transition-all overflow-hidden">
                                                        <div className="flex items-start justify-between gap-3">
                                                            <span className="leading-relaxed break-words">{name}</span>
                                                            {cleanLink && (
                                                                <a
                                                                    href={cleanLink}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="shrink-0 p-1.5 bg-white rounded-lg border border-zinc-200 text-zinc-400 hover:text-blue-600 hover:border-blue-200 transition-all opacity-0 group-hover/proj:opacity-100"
                                                                >
                                                                    <ExternalLink size={12} />
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="space-y-5">
                                        <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                                            <Cpu size={16} className="text-cyan-500" /> Stack & Ecosystem
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {(skill.tools || ["Standard Ecosystem"]).map((tool: string, i: number) => (
                                                <span key={i} className="px-3 py-1.5 bg-white rounded-lg border border-zinc-100 text-[9px] md:text-[10px] font-black text-zinc-600 shadow-sm">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );

    return (
        <main className="min-h-screen pt-24 pb-32 hero-gradient overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-6">

                {/* HEADER */}
                <div className="text-center space-y-6 mb-12 md:mb-16 px-2">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-zinc-900 tracking-tighter leading-none">
                        Continuous <span className="text-blue-600 italic">Learning</span>
                    </h1>

                    {/* CUSTOM TABS */}
                    <div className="flex items-center justify-center p-1.5 bg-zinc-100/50 rounded-[2rem] sm:rounded-[2.5rem] w-full max-w-md mx-auto border border-zinc-200 backdrop-blur-sm">
                        <button
                            onClick={() => setActiveTab("skills")}
                            className={`flex-1 px-4 sm:px-10 py-3 sm:py-4 rounded-[1.5rem] sm:rounded-[2rem] text-[10px] sm:text-xs font-black transition-all duration-300 ${activeTab === 'skills' ? 'bg-zinc-900 text-white shadow-xl scale-[1.02] sm:scale-105' : 'text-zinc-500 hover:text-zinc-800'
                                }`}
                        >
                            Skill Roadmap
                        </button>
                        <button
                            onClick={() => setActiveTab("academic")}
                            className={`flex-1 px-4 sm:px-10 py-3 sm:py-4 rounded-[1.5rem] sm:rounded-[2rem] text-[10px] sm:text-xs font-black transition-all duration-300 ${activeTab === 'academic' ? 'bg-zinc-900 text-white shadow-xl scale-[1.02] sm:scale-105' : 'text-zinc-500 hover:text-zinc-800'
                                }`}
                        >
                            Uni Notebook
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === 'skills' ? (
                        <motion.div
                            key="skills"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-12 md:space-y-20"
                        >
                            {/* CURRENTLY LEARNING SECTION */}
                            <section className="space-y-6 md:space-y-8">
                                <div className="flex items-center gap-4 px-2">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                                        <Lightbulb className="text-white" size={20} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight italic">Currently Learning</h2>
                                </div>
                                <div className="space-y-4">
                                    {skillsData.filter(s => s.status === 0 || s.end === "Present").map(skill => (
                                        <SkillCard key={skill.id} skill={skill} />
                                    ))}
                                </div>
                            </section>

                            {/* LEARNT SECTION */}
                            <section className="space-y-6 md:space-y-8">
                                <div className="flex items-center gap-4 px-2">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-zinc-200">
                                        <Trophy className="text-white" size={20} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight italic">Learnt</h2>
                                </div>
                                <div className="space-y-4">
                                    {skillsData.filter(s => s.status !== 0 && s.end !== "Present").map(skill => (
                                        <SkillCard key={skill.id} skill={skill} />
                                    ))}
                                </div>
                            </section>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="academic"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-10 px-2"
                        >
                            <div className="text-center p-10 md:p-20 glass-card rounded-[2.5rem] md:rounded-[3rem] border border-blue-100 bg-white/80">
                                <GraduationCap size={40} className="md:size-12 mx-auto text-blue-600 mb-6" />
                                <h3 className="text-xl md:text-2xl font-black text-zinc-900">Academic Repository</h3>
                                <p className="text-zinc-500 max-w-sm mx-auto mt-4 text-sm md:text-base font-bold italic">Detailed IUBAT course notes, books, and outlines. This section is being synced with your university portal.</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
