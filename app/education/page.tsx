"use client";
import { GraduationCap, Calendar, Award, Star, ChevronRight, CheckCircle2, Code2, Cpu, Globe, BookOpen } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function EducationPage() {
    const education = [
        {
            level: "Bachelor's Degree",
            institution: "International University of Business Agriculture and Technology (IUBAT)",
            degree: "Computer Science and Engineering",
            period: "Jan 2022 - Apr 2026",
            grade: "CGPA: 3.9 / 4.0",
            details: [
                "Executive Member at Basis Student form of IUBAT",
                "Advance level member at IUBAT CSE competitive Programming",
                "Competitive programming mentor (level-0)",
                "Academic mentor (Eng, programming language)",
                "Former general member at DFI",
                "Former general member at IMS",
                "Arranged IQ and IT competition for fresher (was Question Setter)",
                "Arranged Drone technology seminar with Mr. Zubayer Al Billal Khan",
                "Done volunteer work as a student of cse department",
                "Joined Github bootcamp held by the CSE department",
                "Joined Canva Pro session",
                "Research: 2 publication | 5 Accepted | 9 running | working on 32 Papers"
            ],
            coursework: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "AI & ML", "Operating Systems", "Networking"],
            skills: ["Web Development", "Task Assignment", "Graphic Design Software", "Java spring", "Public speaker", "JavaScript", "Python (Programming Language)", "Skill Development", "Java", "English", "C (Programming Language)", "C++", "Graphic Design", "Competitive Programming", "Problem Solving", "Research Writing"],
            icon: <GraduationCap size={28} />,
            accent: "blue"
        },
        {
            level: "Higher Secondary Certificate (HSC)",
            institution: "Mohammadpur Govt College",
            degree: "Science",
            period: "2018 - 2021",
            grade: "GPA: 5.00 / 5.00",
            details: [
                "Focused on advanced Physical Sciences and Biological Mathematics.",
                "Elected as a Class Representative for two consecutive years.",
                "Top Tier ranking in internal evaluations and Board examinations.",
                "Active member of the College Science and Debating Society."
            ],
            coursework: ["Physics", "Chemistry", "Biology", "Higher Mathematics", "ICT", "English"],
            skills: ["Scientific Analysis", "Leadership", "Critical Thinking", "Team Management"],
            icon: <Star size={28} />,
            accent: "indigo"
        },
        {
            level: "Secondary School Certificate (SSC)",
            institution: "Kakoli High School and College",
            degree: "Science",
            period: "Jan 2016 - Feb 2018",
            grade: "GPA: 5.00 / 5.00",
            details: [
                "Broad exploration of general science, mathematics, and humanitarian subjects.",
                "Recognized for consistent academic excellence with multiple honorary awards.",
                "Led school-level teams in inter-school science competitions.",
                "Maintained 100% attendance and participation in all primary lab activities."
            ],
            coursework: ["General Science", "Higher Mathematics", "Social Science", "Language Arts", "Religiosity"],
            skills: ["Problem Solving", "Collaboration", "Basic Programming", "Analytical Skills"],
            icon: <Award size={28} />,
            accent: "cyan"
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const cardVariants: Variants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <main className="min-h-screen pt-24 pb-32 hero-gradient overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-4 mb-24"
                >
                    <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-xs font-black tracking-widest uppercase mb-4">
                        Academic Milestone
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tight">
                        Education <span className="text-zinc-400">Path</span>
                    </h1>
                </motion.div>

                {/* TIMELINE */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative space-y-16"
                >
                    {/* ENHANCED VERTICAL LINE */}
                    <div className="absolute left-0 md:left-[2.25rem] top-0 bottom-0 w-1 bg-zinc-100 rounded-full" />

                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="relative flex flex-col md:flex-row gap-12 group"
                        >
                            {/* TIMELINE ICON MARKER */}
                            <div className="relative z-10 hidden md:block">
                                <div className={`w-20 h-20 rounded-3xl bg-white shadow-2xl flex items-center justify-center text-zinc-900 border border-zinc-50 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500`}>
                                    {edu.icon}
                                </div>
                                <div className="absolute top-1/2 left-full w-12 h-0.5 bg-zinc-100 -z-10" />
                            </div>

                            {/* MAIN RECTANGULAR CARD */}
                            <div className="flex-1">
                                <div className="glass-card rounded-[3rem] p-10 md:p-14 border border-white/50 shadow-2xl hover:shadow-blue-200/40 transition-all duration-500 relative overflow-hidden bg-white/70 backdrop-blur-2xl">

                                    {/* BACKGROUND ACCENT GRADIENT */}
                                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/30 to-transparent -z-10" />

                                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">

                                        {/* CONTENT LEFT */}
                                        <div className="flex-1 space-y-8">
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-sm font-black text-blue-600 uppercase tracking-widest px-4 py-1.5 bg-blue-50 rounded-xl border border-blue-100">
                                                        {edu.level}
                                                    </span>
                                                    <div className="flex items-center text-zinc-400 text-sm font-bold">
                                                        <Calendar size={16} className="mr-2" />
                                                        {edu.period}
                                                    </div>
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-black text-zinc-900 leading-tight">
                                                    {edu.institution}
                                                </h2>
                                                <p className="text-xl font-bold text-zinc-500">
                                                    {edu.degree}
                                                </p>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="space-y-4">
                                                    <div className="flex items-center text-zinc-800 font-black uppercase text-xs tracking-[0.2em] opacity-50">
                                                        <BookOpen size={16} className="mr-3" /> Key Accomplishments
                                                    </div>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                                        {edu.details.map((detail, dIndex) => (
                                                            <li key={dIndex} className="flex items-start text-sm text-zinc-600 font-semibold leading-relaxed">
                                                                <CheckCircle2 size={18} className="mr-3 text-blue-600 mt-0.5 shrink-0" />
                                                                {detail}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {edu.coursework && (
                                                    <div className="space-y-4 pt-4 border-t border-zinc-100">
                                                        <div className="flex items-center text-zinc-800 font-black uppercase text-xs tracking-[0.2em] opacity-50">
                                                            <Globe size={16} className="mr-3" /> Core Coursework
                                                        </div>
                                                        <div className="flex flex-wrap gap-3">
                                                            {edu.coursework.map((course, cIndex) => (
                                                                <span key={cIndex} className="text-[11px] font-bold text-zinc-500 bg-zinc-50 px-3 py-1 rounded-lg border border-zinc-100">
                                                                    {course}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* CONTENT RIGHT (GRADE & SKILLS) */}
                                        <div className="lg:w-1/3 space-y-8">
                                            {/* GRADE CARD */}
                                            <div className="bg-zinc-900 rounded-[2rem] p-8 text-center shadow-xl transform group-hover:scale-105 transition-transform duration-500">
                                                <p className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Final Evaluation</p>
                                                <h3 className="text-4xl font-black text-white">{edu.grade.split(':')[1]}</h3>
                                                <p className="text-blue-400 text-sm font-bold mt-1">Academic Grade</p>
                                            </div>

                                            {/* SKILLS TAGS */}
                                            <div className="space-y-4">
                                                <div className="flex items-center text-zinc-800 font-black uppercase text-xs tracking-[0.2em] opacity-50">
                                                    <Code2 size={16} className="mr-3" /> Relevant Skills
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.skills.map((skill, sIndex) => (
                                                        <span key={sIndex} className="bg-white px-4 py-2 rounded-xl text-xs font-bold text-zinc-700 shadow-sm border border-zinc-100 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>

                {/* BOTTOM CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 text-center"
                >
                    <a
                        href="/contact"
                        className="inline-flex items-center px-10 py-5 bg-zinc-900 text-white rounded-[2rem] font-black hover:bg-blue-600 transition-all shadow-2xl hover:shadow-blue-200 group text-lg"
                    >
                        Connect for Academic Collaboration
                        <ChevronRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </a>
                </motion.div>

            </div>
        </main>
    );
}
