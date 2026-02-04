"use client";
import { BookOpen, Search, Microscope, FlaskConical, ExternalLink, Award } from "lucide-react";

export default function ResearchPage() {
  const researchInterests = [
    "Distributed Systems",
    "Scalable Backend Architectures",
    "Database Optimization",
    "Applied Machine Learning in Backend Systems"
  ];

  const publications = [
    {
      title: "Optimizing High-Throughput Request Handling in Spring Boot Microservices",
      role: "Lead Researcher",
      description: "Investigation into low-latency techniques for enterprise-scale Java applications using asynchronous processing and reactive streams.",
      tags: ["Distributed Systems", "Java", "Performance"],
      link: "#"
    },
    {
      title: "Bridging the Gap: Academic Innovation to Industry Implementation",
      role: "Primary Author",
      description: "A comprehensive study on the challenges of adopting cutting-edge academic research in large-scale industrial environments.",
      tags: ["Research Methodology", "Scale", "Innovation"],
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 hero-gradient">
      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm flex items-center justify-center">
            <Microscope size={18} className="mr-2" /> Academic Pursuits
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 leading-tight">
            Research <span className="text-zinc-800">&</span> Innovation
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Exploring the intersection of advanced computer science theory and robust back-end engineering to build the next generation of scalable systems.
          </p>
        </div>

        {/* INTERESTS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-zinc-900 flex items-center">
              <Search className="mr-3 text-blue-600" size={24} /> Core Interests
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {researchInterests.map((interest, i) => (
                <div key={i} className="glass-card p-5 rounded-2xl border border-zinc-100 flex items-center space-x-3 shadow-sm hover:translate-x-1 transition-transform">
                  <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                  <span className="font-semibold text-zinc-700">{interest}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
            <FlaskConical size={180} className="absolute -bottom-10 -right-10 opacity-10 rotate-12" />
            <Award size={48} className="mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">Research Philosophy</h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              "My research focuses on practical innovation—solving real-world scalability problems by applying rigorous academic methodologies to backend system design."
            </p>
          </div>
        </div>

        {/* PUBLICATIONS / PROJECTS */}
        <div className="space-y-10">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <h3 className="text-2xl font-bold text-zinc-900 flex items-center">
              <BookOpen className="mr-3 text-blue-600" size={24} /> Selected Publications
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <div key={index} className="glass-card p-8 rounded-[2.5rem] border border-zinc-100 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="text-blue-600" size={24} />
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {pub.title}
                  </h4>
                  <p className="text-zinc-500 font-medium italic mb-2">{pub.role}</p>
                  <p className="text-zinc-600 leading-relaxed text-lg">
                    {pub.description}
                  </p>
                  <div className="pt-4">
                    <a href={pub.link} className="text-blue-600 font-bold flex items-center hover:underline">
                      Read Full Paper <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
