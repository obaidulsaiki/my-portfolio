"use client";
import { useEffect, useState } from "react";
import { GraduationCap, Calendar, Award, Users, ExternalLink } from "lucide-react";

interface Education {
    institution: string;
    degree: string;
    subject: string;
    startDate: string;
    endDate: string;
    activities: string[];
    clubs: string[];
    certificateUrl: string;
}

export default function EducationPage() {
    const [education, setEducation] = useState<Education[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/education")
            .then((res) => res.json())
            .then((data) => setEducation(data))
            .catch((err) => {
                console.error("Error fetching education:", err);
                // Fallback dummy data
                setEducation([
                    {
                        institution: "Dhaka University of Engineering & Technology",
                        degree: "Bachelor of Science",
                        subject: "Computer Science & Engineering",
                        startDate: "Jan 2021",
                        endDate: "Present",
                        activities: [
                            "Specialized in Backend Systems and AI Research",
                            "Maintained a strong CGPA while participating in national level hackathons",
                            "Developed a student management system as part of a course project"
                        ],
                        clubs: ["Computer Society", "Robotics Club", "Programming Club"],
                        certificateUrl: "https://drive.google.com/your-link"
                    }
                ]);
            });
    }, []);

    return (
        <main className="min-h-screen pt-24 pb-20 hero-gradient">
            <div className="max-w-5xl mx-auto px-6 space-y-16">

                {/* HEADER */}
                <div className="space-y-4 text-center">
                    <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Learning Journey</h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-zinc-900">Education Background</h1>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
                        My academic foundation and the core of my technical expertise.
                    </p>
                </div>

                {/* EDUCATION TIMELINE / CARDS */}
                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-[2rem] p-8 md:p-12 border border-zinc-100 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* ACCENT DECORATION */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[10rem] -z-10 group-hover:scale-110 transition-transform"></div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                                {/* DATE & ICON */}
                                <div className="md:col-span-3 space-y-4">
                                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                        <GraduationCap size={32} />
                                    </div>
                                    <div className="flex items-center text-zinc-500 font-medium">
                                        <Calendar size={18} className="mr-2 text-blue-600" />
                                        {edu.startDate} — {edu.endDate}
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="md:col-span-9 space-y-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-zinc-900 mb-1">{edu.institution}</h3>
                                        <p className="text-xl text-blue-600 font-semibold">{edu.degree} in {edu.subject}</p>
                                    </div>

                                    {/* ACTIVITIES */}
                                    <div className="space-y-3">
                                        <div className="flex items-center text-zinc-800 font-bold uppercase text-xs tracking-widest">
                                            <Award size={16} className="mr-2 text-blue-600" /> Key Activities
                                        </div>
                                        <ul className="space-y-2">
                                            {edu.activities.map((act, i) => (
                                                <li key={i} className="flex items-start text-zinc-600">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2.5 mr-3 shrink-0"></span>
                                                    {act}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CLUBS */}
                                    <div className="space-y-3">
                                        <div className="flex items-center text-zinc-800 font-bold uppercase text-xs tracking-widest">
                                            <Users size={16} className="mr-2 text-blue-600" /> Clubs & Societies
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.clubs.map((club, i) => (
                                                <span key={i} className="bg-zinc-100 text-zinc-700 px-4 py-1.5 rounded-full text-sm font-medium border border-zinc-200">
                                                    {club}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CERTIFICATE BUTTON */}
                                    <div className="pt-4">
                                        <a
                                            href={edu.certificateUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center bg-zinc-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition-all group/btn"
                                        >
                                            View Certificate
                                            <ExternalLink size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
