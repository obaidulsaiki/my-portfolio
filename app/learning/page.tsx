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
        { id: 0, status: 0, name: "Docker", source: "Youtube", start: "Feb-26", end: "Feb-26", cert: "NOT YET", progress: 20 },
        { id: 1, status: 0, name: "System Design", source: "Youtube", start: "TBD", end: "TBD", cert: "NOT YET", progress: 10 },
        { id: 2, status: 0, name: "Kubernetes", source: "Youtube", start: "TBD", end: "TBD", cert: "NOT YET", progress: 5 },
        { id: 3, status: 0, name: "Advance Machine Learning", source: "Youtube", start: "TBD", end: "TBD", cert: "NOT YET", progress: 15 },
        { id: 4, status: 0, name: "LLMs and RAGs", source: "Youtube", start: "TBD", end: "TBD", cert: "NOT YET", progress: 30 },
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
        { id: 7, status: 3, name: "React JS", source: "Internship", start: "Oct-25", end: "Jan-26", cert: "https://drive.google.com/...", progress: 100 },
        { id: 8, status: 4, name: "Spring Boot", source: "ICT Division", start: "Oct-24", end: "Jul-26", cert: "https://drive.google.com/...", progress: 100 },
        { id: 9, status: 5, name: "Postman", source: "Session", start: "Oct-24", end: "Jul-26", cert: "No Certificate", progress: 100 },
        { id: 10, status: 6, name: "Dotnet", source: "Uni Course", start: "Semester 10", end: "-", cert: "No Certificate", progress: 100 },
        { id: 11, status: 7, name: "ML & DL", source: "Youtube", start: "Mar-25", end: "Sep-26", cert: "No Certificate", progress: 100 },
        { id: 12, status: 8, name: "Data Preprocessing", source: "Session", start: "Nov-25", end: "Nov-25", cert: "https://drive.google.com/...", progress: 100 },
        { id: 13, status: 9, name: "Python", source: "Youtube", start: "Jun-23", end: "Jun-23", cert: "No Certificate", progress: 100 },
        { id: 14, status: 10, name: "Figma", source: "Youtube", start: "Feb-25", end: "Apr-25", cert: "No Certificate", progress: 100 },
        { id: 15, status: 11, name: "DSA", source: "Uni Course", start: "Semester 5", end: "-", cert: "No Certificate", progress: 100 },
        { id: 16, status: 12, name: "Database", source: "Uni Course", start: "Semester 7", end: "-", cert: "No Certificate", progress: 100 },
        { id: 17, status: 13, name: "Java", source: "Uni Course", start: "Semester 6", end: "-", cert: "No Certificate", progress: 100 },
        { id: 18, status: 14, name: "C++", source: "Uni Course", start: "Semester 3", end: "-", cert: "No Certificate", progress: 100 },
        { id: 19, status: 15, name: "C", source: "Uni Course", start: "Semester 2", end: "-", cert: "No Certificate", progress: 100 },
        { id: 20, status: 16, name: "JavaScript", source: "Session", start: "Jan-23", end: "Apr-23", cert: "https://drive.google.com/...", progress: 100 },
        { id: 21, status: 17, name: "Git", source: "Session", start: "Jan-23", end: "Jan-23", cert: "No Certificate", progress: 100 },
        { id: 22, status: 18, name: "Canva", source: "Session", start: "Jan-23", end: "Jan-23", cert: "No Certificate", progress: 100 },
        { id: 23, status: 19, name: "Web (HTML CSS)", source: "Session", start: "Sep-22", end: "Dec-22", cert: "https://drive.google.com/...", progress: 100 },
    ];

    const toggleSkill = (id: number) => {
        setExpandedSkill(expandedSkill === id ? null : id);
    };

    const SkillCard = ({ skill }: { skill: any }) => (
        <motion.div
            layout
            className={`w-full glass-card rounded-[2rem] border shadow-lg transition-all duration-300 backdrop-blur-xl overflow-hidden ${skill.name === "Next.js"
                ? "border-blue-200 shadow-blue-100/50 bg-gradient-to-br from-white/90 to-blue-50/40"
                : "border-white/50 shadow-lg bg-white/70"
                }`}
        >
            <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* LEFT: INFO */}
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${skill.name === "Next.js" ? "bg-blue-600 text-white" : "bg-zinc-900 text-white"}`}>
                                {skill.name === "Next.js" ? <Layout size={20} /> : <Code size={20} />}
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-zinc-900 tracking-tight flex items-center gap-2">
                                    {skill.name}
                                    {skill.name === "Next.js" && <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-md font-black uppercase">Core Skill</span>}
                                </h3>
                                <div className="flex items-center gap-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
                                    <span className="flex items-center gap-1"><Library size={12} className="text-blue-500" /> {skill.source}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1"><Calendar size={12} className="text-blue-500" /> {skill.start} - {skill.end}</span>
                                </div>
                            </div>
                        </div>

                        {/* PROGRESS BAR */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter text-zinc-500">
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
                    <div className="flex flex-wrap items-center gap-3">
                        <button
                            disabled={skill.cert === "NOT YET" || skill.cert === "No Certificate"}
                            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white rounded-xl text-[11px] font-black hover:bg-blue-600 transition-all shadow-md disabled:opacity-30 disabled:hover:bg-zinc-900 whitespace-nowrap"
                        >
                            <Award size={14} /> Certificate
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-900 border border-zinc-200 rounded-xl text-[11px] font-black hover:bg-zinc-50 transition-all whitespace-nowrap">
                            <FileText size={14} className="text-blue-600" /> Note
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-900 border border-zinc-200 rounded-xl text-[11px] font-black hover:bg-zinc-50 transition-all whitespace-nowrap">
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
                            className="mt-8 pt-8 border-t border-zinc-100"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {/* TOPICS COLUMN */}
                                <div className="space-y-5 lg:col-span-2">
                                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2 mb-4">
                                        <CheckCircle2 size={16} className="text-blue-500" /> Mastering Curriculum
                                    </h4>
                                    <div className="grid grid-cols-1 gap-y-3">
                                        {(skill.topics || [
                                            "Advanced Architecture Patterns", "Performance Optimization", "Security Implementations"
                                        ]).map((topic: string, i: number) => (
                                            <div key={i} className="flex items-start gap-4 text-sm font-bold text-zinc-600 group/topic">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[10px] font-black text-zinc-400 group-hover/topic:bg-blue-600 group-hover/topic:text-white transition-all">
                                                    {(i + 1).toString().padStart(2, '0')}
                                                </div>
                                                <div className="flex-1 py-1 px-2 rounded-lg group-hover/topic:bg-blue-50/50 transition-all flex items-center justify-between">
                                                    <span className="leading-relaxed">{topic}</span>
                                                    {((skill.name === "Next.js" && i < 5) || (skill.name === "Angular" && i < 3)) && (
                                                        <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 rounded-md border border-green-100">
                                                            <CheckCircle2 size={12} className="text-green-600" />
                                                            <span className="text-[9px] font-black text-green-700 uppercase">Mastered</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* PROJECTS & TOOLS COLUMN */}
                                <div className="space-y-10">
                                    <div className="space-y-5">
                                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                                            <Briefcase size={16} className="text-indigo-500" /> Projects Portfolio
                                        </h4>
                                        <div className="space-y-3">
                                            {(skill.projects || ["Currently no project utilized for this skill"]).map((project: string, i: number) => (
                                                <div key={i} className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 text-xs font-bold text-zinc-700">
                                                    {project}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-5">
                                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                                            <Cpu size={16} className="text-cyan-500" /> Stack & Ecosystem
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {(skill.tools || ["Standard Ecosystem"]).map((tool: string, i: number) => (
                                                <span key={i} className="px-3 py-1.5 bg-white rounded-lg border border-zinc-100 text-[10px] font-black text-zinc-600 shadow-sm">
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
            <div className="max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center space-y-6 mb-16">
                    <h1 className="text-5xl md:text-8xl font-black text-zinc-900 tracking-tighter leading-none">
                        Continuous <span className="text-blue-600 italic">Evolution</span>
                    </h1>

                    {/* CUSTOM TABS */}
                    <div className="flex items-center justify-center p-1.5 bg-zinc-100/50 rounded-[2.5rem] w-fit mx-auto border border-zinc-200 backdrop-blur-sm">
                        <button
                            onClick={() => setActiveTab("skills")}
                            className={`px-10 py-4 rounded-[2rem] text-xs font-black transition-all duration-300 ${activeTab === 'skills' ? 'bg-zinc-900 text-white shadow-xl scale-105' : 'text-zinc-500 hover:text-zinc-800'
                                }`}
                        >
                            Skill Roadmap
                        </button>
                        <button
                            onClick={() => setActiveTab("academic")}
                            className={`px-10 py-4 rounded-[2rem] text-xs font-black transition-all duration-300 ${activeTab === 'academic' ? 'bg-zinc-900 text-white shadow-xl scale-105' : 'text-zinc-500 hover:text-zinc-800'
                                }`}
                        >
                            Uni Notebook (IUBAT)
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
                            className="space-y-20"
                        >
                            {/* CURRENTLY LEARNING SECTION */}
                            <section className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                                        <Lightbulb className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-black text-zinc-900 tracking-tight italic">Currently Learning</h2>
                                </div>
                                <div className="space-y-4">
                                    {skillsData.filter(s => s.status === 0 || s.end === "Present").map(skill => (
                                        <SkillCard key={skill.id} skill={skill} />
                                    ))}
                                </div>
                            </section>

                            {/* LEARNT SECTION */}
                            <section className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center shadow-lg shadow-zinc-200">
                                        <Trophy className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-black text-zinc-900 tracking-tight italic">Learnt</h2>
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
                            className="space-y-10"
                        >
                            {/* Academic Note Content remains consistent but with same premium wide styling */}
                            <div className="text-center p-20 glass-card rounded-[3rem] border border-blue-100">
                                <GraduationCap size={48} className="mx-auto text-blue-600 mb-6" />
                                <h3 className="text-2xl font-black text-zinc-900">Academic Repository</h3>
                                <p className="text-zinc-500 max-w-sm mx-auto mt-4 font-medium italic">Detailed IUBAT course notes, books, and outlines. This section is being synced with your university portal.</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </main>
    );
}
