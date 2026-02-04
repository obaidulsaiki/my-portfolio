"use client";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Software Engineering Intern",
      location: "Dhaka, Bangladesh",
      startDate: "June 2023",
      endDate: "August 2023",
      description: [
        "Assisted in developing REST APIs using Spring Boot and PostgreSQL.",
        "Optimized database queries, reducing response time by 15%.",
        "Collaborated with the frontend team to integrate Auth0 authentication."
      ],
      technologies: ["Spring Boot", "PostgreSQL", "React", "Docker"]
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 hero-gradient">
      <div className="max-w-5xl mx-auto px-6 space-y-16">

        {/* HEADER */}
        <div className="space-y-4 text-center">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Professional Path</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900">Work Experience</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            A chronicle of my professional growth, technical contributions, and the problems I've solved.
          </p>
        </div>

        {/* EXPERIENCE LIST */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-zinc-100 shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-zinc-100 pb-8">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                      <Briefcase size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-zinc-900">{exp.role}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-zinc-500 font-medium ml-1">
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">@</span>
                      <span className="text-zinc-800 font-bold">{exp.company}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1 text-zinc-400" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 text-blue-700 px-6 py-2.5 rounded-full text-sm font-bold border border-blue-100 flex items-center shadow-sm">
                  <Calendar size={16} className="mr-2" />
                  {exp.startDate} — {exp.endDate}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                {/* DESCRIPTION */}
                <div className="md:col-span-8 space-y-4">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Impact & Responsibilities</h4>
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-zinc-600 text-lg leading-relaxed">
                        <CheckCircle2 size={20} className="mr-4 text-blue-600 shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TECHNOLOGIES */}
                <div className="md:col-span-4 space-y-4">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Stack Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white text-zinc-700 px-4 py-2 rounded-xl text-sm font-bold border border-zinc-100 shadow-sm hover:border-blue-200 hover:text-blue-600 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
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
