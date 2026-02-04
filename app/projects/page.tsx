"use client";
import React, { useState } from "react";
import {
    Briefcase,
    ExternalLink,
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    Layers,
    Github,
    Rocket,
    GraduationCap,
    Home,
    Map,
    Users,
    ShoppingBag,
    Coffee,
    Cpu,
    Globe,
    Settings,
    Database,
    ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "EduMaster (LMS)",
        year: "2026",
        shortDesc: "A premium AI-powered LMS built with Spring Boot 4 & React 19, featuring RAG-based career assistance and enterprise-grade security.",
        icon: GraduationCap,
        color: "from-blue-600 to-indigo-600",
        tags: ["Spring Boot 4", "React 19", "LangChain4j", "Ollama", "PostgreSQL"],
        repo: "https://github.com/obaidulsaiki/EduMaster-LearningManagementSystem",
        features: [
            "AI Career Assistant: Personalized roadmaps and CSE Job Paths for 21+ tech roles using RAG.",
            "Role-Based Dashboards: Custom environments for Students, Teachers, and Admin Audit Logs.",
            "Interactive Learning: Video player with progress tracking and time-bound automated quizzes.",
            "Secure Transactions: Integrated payment processing with PDF invoice and certificate generation.",
            "System Integrity: OTP-verified sensitive updates and JWT-based RBAC security with Ban/Suspension rules."
        ],
        functionality: [
            "Backend: High-performance Spring Boot 4 REST API with 104+ endpoints and STOMP WebSockets.",
            "Frontend: Cutting-edge React 19 SPA with Framer Motion 12 and Recharts for data visualization.",
            "AI Engine: Privacy-focused local execution via Ollama (Llama 3.1) and context-aware RAG learning.",
            "DevOps: Stateless architecture, JDBC pooling, and comprehensive Maven lifecycle management."
        ],
        roles: {
            student: ["Video Lectures", "Quiz System", "AI Career Roadmap", "Certificate PDF", "Payments & Invoices"],
            teacher: ["Course Builder", "Lecture Management", "Revenue Analytics", "Quiz Builder", "Payout Requests"],
            admin: ["Platform Analytics", "User Management (Ban/Suspend)", "Course Moderation", "Audit Logs"]
        }
    },
    {
        id: 2,
        title: "Key2Stay (To-Let)",
        year: "2025",
        shortDesc: "A comprehensive digital platform designed to streamline and modernize the rental property market in Bangladesh.",
        icon: Home,
        color: "from-purple-600 to-pink-600",
        tags: ["ASP.NET Core MVC", "EF Core", "SQL Server", "MySQL", "Azure"],
        repo: "https://github.com/obaidulsaiki/key2Stay-Tolet-Management-System",
        collaborators: ["Mariha Tabassum"],
        features: [
            "Advanced Search & Filtering: Filter by location, price range, and property type (Bachelor, Family, Hostel).",
            "Secure Booking System: Direct inquiries to property owners with real-time status tracking.",
            "Property Owner Dashboard: Effortless management of listings, accept/decline booking requests.",
            "Verification System: Landlord and property verification for increased safety and community trust.",
            "Password Reset: Secure tokenized reset links delivered via SMTP email service."
        ],
        functionality: [
            "Backend: Robust C# / ASP.NET Core MVC with Entity Framework Core for data persistence.",
            "Security: ASP.NET Identity for high-level Authentication and Role-Based Access Control (RBAC).",
            "Performance: Asynchronous request handling and optimized SQL queries using LINQ.",
            "Deployment: Scalable cloud hosting architecture implemented via Microsoft Azure."
        ],
        roles: {
            tenant: ["Advanced Search", "Detailed Property Views", "Wishlist", "Booking & Reviews"],
            owner: ["Property Dashboard", "Inquiry Management", "Earnings Overview", "Integrated Messaging"],
            admin: ["Centralized Dashboard", "User & Property Verification", "Content Moderation", "System Analytics"]
        }
    },
    {
        id: 3,
        title: "Tour Management & Gear Store",
        year: "2025",
        shortDesc: "A Software Engineer Course Project featuring a web-based platform for tour bookings and adventure gear commerce.",
        icon: Map,
        color: "from-cyan-600 to-blue-600",
        tags: ["PHP 8.x", "PostgreSQL", "JavaScript (ES6+)", "Bootstrap 5.3"],
        repo: "https://github.com/obaidulsaiki/Tour-Managment-System",
        collaborators: ["Saikat Kumar Gain", "Rifat Hossain", "Mariha Tabassum", "Moushin Anjum Jinia"],
        features: [
            "Advanced Tour Discovery: Browse and book tour packages with integrated filtering and search.",
            "Production-Grade Gear Store: Dynamic storefront featuring brand filters and responsive galleries.",
            "Inventory Management: Real-time stock and pricing control for the Gear Store via Admin Panel.",
            "Account Management: Secure authentication system with profile controls and wishlist integration.",
            "Premium UI/UX: Glassmorphism aesthetics with 1:1 mobile responsiveness and micro-animations."
        ],
        functionality: [
            "Backend: Modernized PHP 8.x using PDO and Prepared Statements for maximum security.",
            "Database: Primary PostgreSQL integration with MySQL compatibility for versatile deployment.",
            "Architecture: Modular design with dynamic path resolution for high portability.",
            "Security: Strong password hashing and protection against SQLi and session hijacking."
        ],
        roles: {
            customer: ["Tour Discovery", "Gear Store", "Account Management", "Wishlist & Bookings"],
            admin: ["Inventory Control", "Dynamic Content Control", "User Management", "Analytics Dashboard"]
        }
    },
    {
        id: 4,
        title: "Tutor Management System",
        year: "2025",
        shortDesc: "A production-ready platform developed for the ICT Division Course Completion, connecting students with specialized tutors.",
        icon: Users,
        color: "from-emerald-600 to-green-600",
        tags: ["Spring Boot 4", "React 19", "PostgreSQL", "Auth Token", "Tailwind CSS"],
        repo: "https://github.com/obaidulsaiki/tutor-management-system",
        features: [
            "Tutor Profiles: Detailed profiles with experience, hourly rates, and real-time availability.",
            "Advanced Discovery: Smart search and filtering by subject, level, price, and rating.",
            "Scheduling System: Seamless booking with integrated calendar management for sessions.",
            "Online Sessions: Built-in support for video links and virtual classroom coordination.",
            "Secure Payments: Integrated transaction history and payment processing modules."
        ],
        functionality: [
            "Backend: Enterprise-grade Spring Boot 4 REST API secured with Auth Token-based Spring Security.",
            "Frontend: Responsive React 19 application powered by Vite and styled with Tailwind CSS.",
            "Database: Robust PostgreSQL integration with Spring Data JPA for persistence.",
            "Architecture: Clean, modular architecture designed for high scalability and secure RBAC."
        ],
        roles: {
            students: ["Find Tutors", "Book Sessions", "Attend Lessons", "Review Tutors"],
            tutors: ["Manage Availability", "Accept Bookings", "Deliver Lessons", "Track Earnings"],
            admin: ["Manage Users", "Approve Tutors", "Monitor Activity", "Booking Management"]
        }
    },
    {
        id: 5,
        title: "Samaya Attire (E-commerce)",
        year: "2024",
        shortDesc: "A Java Course Project: A JavaFX-based desktop storefront demonstrating core e-commerce flows and modular architecture.",
        icon: ShoppingBag,
        color: "from-orange-600 to-red-600",
        tags: ["Java 17", "JavaFX", "FXML", "Maven", "CSS"],
        repo: "https://github.com/obaidulsaiki/project3_JavaFx01_E-commerceApplication",
        collaborators: ["Israt Sumaiya Ripty"],
        features: [
            "Product Catalog: Sophisticated list and grid views for browsing clothing and apparel.",
            "Cart Management: Full-featured shopping cart (add, update quantity, and remove items).",
            "Checkout Flow: Streamlined order summary and simulated payment confirmation system.",
            "Dynamic Filtering: Instant search and category-based filtering for a smooth user experience.",
            "Custom UI: Modern desktop aesthetics built with JavaFX FXML and custom CSS styling."
        ],
        functionality: [
            "Architecture: Clean, modular design following the Model-View-Controller (MVC) pattern.",
            "Core Logic: Implemented OOP principles (Inheritance, Polymorphism) for product and order models.",
            "Persistence: Local data storage for product catalogs and user order history.",
            "Build Tooling: Managed lifecycle and dependencies via Maven for high portability."
        ],
        roles: {
            customer: ["Product Browsing", "Cart Operations", "Checkout Process", "Search & Filters"]
        }
    },
    {
        id: 6,
        title: "Hangover Cafe",
        year: "2023",
        shortDesc: "Interactive web presence for a local cafe featuring dynamic menus and ordering.",
        icon: Coffee,
        color: "from-amber-700 to-yellow-800",
        tags: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
        repo: "https://github.com/obaidulsaiki/project02_javaScript01_hangoverCafe",
        features: [
            "Visual Menu: Categorized food items with high-quality image placeholders.",
            "Dynamic Shopping Cart: Add/Remove items with real-time price calculation.",
            "Reservation System: Simple form-based booking for tables and events.",
            "Persistent Cart: Saves customer selection even after refreshing the page.",
            "Modern UI/UX: Custom CSS animations and smooth scrolling layouts."
        ],
        functionality: [
            "Pure Vanilla JavaScript implementation for lightning-fast performance.",
            "DOM Manipulation techniques for a reactive and interactive user interface.",
            "Use of Web Storage API (localStorage) for client-side data persistence.",
            "Responsive design ensuring a perfect experience on mobile and desktop."
        ]
    },
    {
        id: 7,
        title: "Mission 2022",
        year: "2022",
        shortDesc: "My first significant web project focused on goal tracking and personal productivity.",
        icon: Rocket,
        color: "from-zinc-700 to-zinc-900",
        tags: ["HTML5", "CSS3", "Responsive", "Layouts"],
        repo: "https://github.com/obaidulsaiki/project01_Mission2022",
        features: [
            "Personalized Dashboard: Static view of yearly goals and resolutions.",
            "Fully Responsive: Adapts seamlessly to all screen sizes.",
            "Modern Typography: Clean and readable font pairings for 2022 aesthetics.",
            "Clean Code Structure: Semantic HTML5 elements for SEO and accessibility.",
            "Micro-animations: Subtle hover and entrance effects for engagement."
        ],
        functionality: [
            "Built with a mobile-first approach using CSS Media Queries.",
            "CSS Variable implementations for consistent color and spacing themes.",
            "Flexbox and CSS Grid layout techniques for complex alignment and structure.",
            "Standard coding practices for cross-browser compatibility."
        ]
    }
];

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

    return (
        <main className="min-h-screen pt-24 pb-32 hero-gradient overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 relative">

                {/* BACKGROUND DECORATION */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                    <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-40 left-1/4 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[120px] animate-pulse" />
                </div>

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-4">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping" />
                        <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px]">Development Portfolio</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black text-zinc-900 tracking-tighter leading-none">
                        Featured <span className="text-blue-600 italic">Work</span>
                    </h1>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-xl font-medium italic">
                        A showcase of my engineering journey, from early experiments to high-scale enterprise applications.
                    </p>
                </motion.div>

                {/* PROJECTS GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative glass-card rounded-[3rem] border border-zinc-100 shadow-xl overflow-hidden transition-all duration-500 bg-white/80 backdrop-blur-xl hover:shadow-2xl hover:shadow-blue-500/5"
                        >
                            <div className={`absolute top-0 right-0 w-2 h-full bg-gradient-to-b ${project.color}`} />

                            <div className="p-8 md:p-10">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    {/* ICON & MAIN INFO */}
                                    <div className="flex-1 space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                                <project.icon size={32} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <h3 className="text-3xl font-black text-zinc-900 tracking-tight">{project.title}</h3>
                                                    <span className="px-3 py-1 bg-zinc-100 rounded-full text-[10px] font-black text-zinc-400 border border-zinc-200 uppercase tracking-widest">{project.year}</span>
                                                </div>
                                                <p className="text-zinc-500 font-bold text-sm mt-1">{project.shortDesc}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="px-4 py-1.5 bg-zinc-50 text-zinc-600 border border-zinc-100 rounded-xl text-[10px] font-black uppercase tracking-wider group-hover:bg-white group-hover:border-blue-100 transition-all">
                                                    {tag}
                                                </span>
                                            ))}
                                            {(project as any).collaborators && (project as any).collaborators.map((person: string, i: number) => (
                                                <span key={i} className="px-4 py-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-xl text-[10px] font-black uppercase tracking-wider flex items-center gap-2">
                                                    <Users size={12} /> Collaboration: {person}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-4 pt-4">
                                            <a
                                                href={project.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-8 py-3.5 bg-zinc-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-lg hover:shadow-blue-200 transition-all hover:bg-blue-600 active:scale-95"
                                            >
                                                View Repository <Github size={14} />
                                            </a>
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="flex items-center gap-2 px-8 py-3.5 bg-white text-zinc-900 border border-zinc-200 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-sm hover:bg-zinc-50 transition-all active:scale-95"
                                            >
                                                Detailed Discussion <ChevronDown size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* VISUAL PREVIEW / DECORATION */}
                                    <div className="hidden md:block shrink-0 w-64 rotate-3 group-hover:rotate-0 transition-transform duration-700">
                                        <div className={`aspect-square bg-gradient-to-br ${project.color} opacity-10 rounded-[2.5rem] flex items-center justify-center border-4 border-white shadow-2xl relative overflow-hidden ring-1 ring-zinc-100`}>
                                            <project.icon size={120} className="text-zinc-900 opacity-5" />
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* MODAL SYSTEM */}
                <AnimatePresence>
                    {selectedProject && (
                        <>
                            {/* BACKDROP */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="fixed inset-0 bg-zinc-900/60 backdrop-blur-md z-[100] cursor-zoom-out"
                            />

                            {/* MODAL CONTENT */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="fixed inset-4 md:inset-6 lg:inset-x-8 lg:inset-y-6 bg-white z-[101] rounded-[3rem] shadow-2xl overflow-hidden border border-zinc-100 flex flex-col"
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${selectedProject.color}`} />

                                {/* MODAL HEADER */}
                                <div className="p-8 md:p-12 border-b border-zinc-100 flex items-center justify-between bg-white sticky top-0 z-10">
                                    <div className="flex items-center gap-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${selectedProject.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                                            <selectedProject.icon size={32} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-4xl font-black text-zinc-900 tracking-tight">{selectedProject.title}</h3>
                                                <span className="px-4 py-1.5 bg-zinc-100 rounded-full text-[11px] font-black text-zinc-400 border border-zinc-200 uppercase tracking-widest">{selectedProject.year}</span>
                                            </div>
                                            <p className="text-zinc-500 font-bold italic">{selectedProject.shortDesc}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 transition-all active:scale-95"
                                    >
                                        <ChevronDown className="rotate-180" size={24} />
                                    </button>
                                </div>

                                {/* MODAL BODY */}
                                <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-16 scrollbar-hide">
                                    {/* ROLES SECTION */}
                                    {(selectedProject as any).roles && (
                                        <div className="space-y-8">
                                            <h4 className="text-[12px] font-black text-zinc-900 uppercase tracking-[0.3em] flex items-center gap-3">
                                                <Users size={18} className="text-blue-600" /> User Roles & Experience
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                {Object.entries((selectedProject as any).roles).map(([role, features]: [string, any], i) => (
                                                    <div key={i} className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 space-y-6 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-10 h-10 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[12px] font-black text-blue-600 uppercase shadow-sm group-hover:scale-110 transition-transform">
                                                                {role[0]}
                                                            </div>
                                                            <h5 className="text-base font-black text-zinc-900 uppercase tracking-widest">{role}</h5>
                                                        </div>
                                                        <ul className="space-y-3">
                                                            {features.map((f: string, idx: number) => (
                                                                <li key={idx} className="flex items-center gap-3 text-sm text-zinc-500 font-bold">
                                                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> {f}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                        {/* FEATURES SECTION */}
                                        <div className="space-y-8">
                                            <h4 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] flex items-center gap-3">
                                                <Settings size={18} /> Premium Features & UI
                                            </h4>
                                            <div className="space-y-4">
                                                {selectedProject.features.map((feature, i) => (
                                                    <div key={i} className="flex items-start gap-5 p-6 bg-blue-50/50 rounded-3xl border border-blue-100/50 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                                                        <div className="mt-1 w-8 h-8 bg-white rounded-2xl flex items-center justify-center shadow-md border border-blue-100 group-hover:rotate-12 transition-transform">
                                                            <CheckCircle2 size={18} className="text-blue-600" />
                                                        </div>
                                                        <p className="text-zinc-600 font-bold leading-relaxed">{feature}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* FUNCTIONALITY / TECH SECTION */}
                                        <div className="space-y-8">
                                            <h4 className="text-[12px] font-black text-indigo-600 uppercase tracking-[0.3em] flex items-center gap-3">
                                                <Cpu size={18} /> Functional Excellence
                                            </h4>
                                            <div className="space-y-8">
                                                <div className="grid grid-cols-1 gap-4">
                                                    {selectedProject.functionality.map((func, i) => (
                                                        <div key={i} className="flex items-start gap-5 p-6 bg-indigo-50/50 rounded-3xl border border-indigo-100/50 hover:bg-white hover:shadow-xl transition-all duration-500 group/func">
                                                            <div className="mt-2 w-2 h-2 bg-indigo-600 rounded-full group-hover/func:scale-150 transition-transform" />
                                                            <p className="text-zinc-600 font-bold leading-relaxed italic">"{func}"</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* DEEP DIVE CALLOUT */}
                                                <div className="p-10 bg-zinc-950 rounded-[3rem] text-white space-y-6 shadow-2xl border border-white/10 relative overflow-hidden group">
                                                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                                                        <Cpu size={120} />
                                                    </div>
                                                    <h5 className="text-2xl font-black tracking-tight">Technical Deep Dive</h5>
                                                    <p className="text-zinc-400 text-base font-medium leading-relaxed max-w-lg">
                                                        The development phase for {selectedProject.title} focused on modularity, high performance, and ensuring a seamless end-to-end user experience.
                                                    </p>
                                                    <div className="flex gap-8 pt-6">
                                                        <div className="flex flex-col items-center gap-2">
                                                            <Database size={24} className="text-blue-400" />
                                                            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-500">Scale</span>
                                                        </div>
                                                        <div className="w-[1px] h-10 bg-white/10" />
                                                        <div className="flex flex-col items-center gap-2">
                                                            <ShieldCheck size={24} className="text-green-400" />
                                                            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-500">Secure</span>
                                                        </div>
                                                        <div className="w-[1px] h-10 bg-white/10" />
                                                        <div className="flex flex-col items-center gap-2">
                                                            <Globe size={24} className="text-purple-400" />
                                                            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-500">Edge</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* MODAL FOOTER */}
                                <div className="p-8 border-t border-zinc-100 bg-zinc-50/50 flex justify-center">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="px-12 py-4 bg-zinc-900 text-white rounded-2xl text-[12px] font-black uppercase tracking-[0.3em] shadow-xl hover:bg-blue-600 transition-all active:scale-95"
                                    >
                                        Close Discussion
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* FOOTER SECTION */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mt-32 space-y-8"
                >
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto opacity-20" />
                    <p className="text-zinc-400 font-black uppercase tracking-[0.4em] text-xs underline underline-offset-8 decoration-blue-600/30">End of Portfolio Volume 1.0</p>
                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/obaidulsaiki" target="_blank" className="p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                            <Github size={24} className="text-zinc-900 group-hover:text-blue-600 transition-colors" />
                        </a>
                        <a href="/contact" className="p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                            <Globe size={24} className="text-zinc-900 group-hover:text-blue-600 transition-colors" />
                        </a>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}
