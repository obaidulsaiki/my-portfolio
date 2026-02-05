"use client";
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink, Laptop, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const experiences = [
    {
      company: "AKS Global IT Services",
      role: "Frontend Developer",
      type: "Internship",
      location: "Uttara, Dhaka, Bangladesh (Hybrid)",
      startDate: "Oct 2025",
      endDate: "Jan 2026",
      duration: "4 mos",
      description: [
        "Production side implementation using React.js",
        "Collaborated on front-end development and software construction tasks."
      ],
      technologies: ["React.js", "Front-End Development", "Software Construction"],
      certificate: "https://drive.google.com/..." // Placeholder for certificate link
    },
    {
      company: "BASIS Student's Forum",
      role: "Executive Committee Member",
      type: "Seasonal",
      location: "Uttara, Dhaka, Bangladesh (On-site)",
      startDate: "Sep 2024",
      endDate: "Dec 2025",
      duration: "1 yr 4 mos",
      description: [
        "Question setter for IQ and IT tests during 2024 Spring fresher orientation.",
        "Organized a Drone technology seminar with Mr. Zubayer Al Billal Khan.",
        "Organized a beginner-level python workshop."
      ],
      technologies: ["Event Planning", "Python Workshop", "Program Creation", "Organizer"]
    },
    {
      company: "IUBAT IT Society",
      role: "Student representative 221",
      type: "Seasonal",
      location: "Uttara, Dhaka, Bangladesh (On-site)",
      startDate: "Feb 2025",
      endDate: "Jun 2025",
      duration: "5 mos",
      description: [
        "Representative from the department of CSE for student management and event planning."
      ],
      technologies: ["Management", "Event Management"]
    },
    {
      company: "Biswiz solution",
      role: "Telemarketing Specialist",
      type: "Full-time",
      location: "Remote",
      startDate: "Jan 2024",
      endDate: "Feb 2024",
      duration: "2 mos",
      description: [
        "Main work focused on Lead Generation.",
        "Maintained documentation and contributed to customer relationship management."
      ],
      technologies: ["Lead Generation", "CRM", "Customer Service", "Documentation"]
    },
    {
      company: "OK Dynamic it",
      role: "Customer relationship manager",
      type: "Part-time",
      location: "Dhaka, Bangladesh (Remote)",
      startDate: "Dec 2023",
      endDate: "Jan 2024",
      duration: "2 mos",
      description: [
        "Started as a Virtual Assistant, later transitioned into the Customer Relationship Manager role."
      ],
      technologies: ["Marketing", "Communication", "Online Lead Generation"]
    },
    {
      company: "SIMAN electro product limited",
      role: "Assistant Account Officer",
      type: "Part-time",
      location: "Dhaka, Bangladesh (On-site)",
      startDate: "Mar 2021",
      endDate: "Dec 2021",
      duration: "10 mos",
      description: [
        "Reviewed invoice payment applications and managed data entry in Excel.",
        "Created and maintained precise journal entries.",
        "Managed daily cash functions, payroll transactions, and expense reconciliations.",
        "Coordinated with internal and external auditors for compliance reviews.",
        "Calculated, prepared, and filed payroll taxes for clients.",
        "Generated comprehensive financial statements (revenue, expenses, liabilities).",
        "Handled company illustrations and typed documents."
      ],
      technologies: ["Accounting", "Invoicing", "Microsoft Applications", "Financial Statements", "Audit Coordination"]
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-32 hero-gradient overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* BACKGROUND DECORATION */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-40 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-center mb-12 md:mb-24 px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping" />
            <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px]">Professional Path</span>
          </div>
          <h1 className="text-4xl sm:text-7xl md:text-9xl font-black text-zinc-900 tracking-tighter leading-none">
            Work <span className="text-blue-600 italic">Experience</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-base md:text-xl font-medium italic">
            A chronicle of my professional growth, technical contributions, and the problems I've solved.
          </p>
        </motion.div>

        {/* EXPERIENCE LIST WITH TIMELINE */}
        <div className="relative">
          {/* VERTICAL TIMELINE LINE */}
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-blue-600/50 via-zinc-200 to-zinc-200/0" />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "circOut" }}
                className={`relative flex items-center justify-between gap-12 group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* TIMELINE NODE */}
                <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:scale-150 group-hover:bg-blue-600 transition-all duration-500 z-10" />

                {/* DATE BADGE (VISIBLE ON MOBILE AS WELL) */}
                <div className={`hidden md:block w-1/2 text-zinc-400 font-black text-sm uppercase tracking-widest ${index % 2 === 0 ? 'text-right pr-20' : 'text-left pl-20'
                  }`}>
                  <div className="inline-flex items-center gap-3 py-2 px-6 bg-white rounded-full border border-zinc-100 shadow-sm group-hover:text-blue-600 group-hover:border-blue-200 transition-all">
                    <Calendar size={14} />
                    {exp.startDate} — {exp.endDate}
                  </div>
                </div>

                {/* CONTENT CARD */}
                <div className="w-full md:w-1/2 pl-10 md:pl-0">
                  <div className="glass-card rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 border border-zinc-100 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/5 group-hover:-translate-y-2 transition-all duration-500 relative bg-white/80 backdrop-blur-xl">

                    {/* CARD HEADER */}
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-8 border-b border-zinc-100 pb-8 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-950 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:bg-blue-600 transition-colors duration-500 shrink-0">
                            <Briefcase size={20} className="md:w-6 md:h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-3xl font-black text-zinc-900 leading-tight tracking-tight">{exp.role}</h3>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="text-blue-600 font-black text-sm italic">@{exp.company}</span>
                              <span className="hidden sm:block w-1.5 h-1.5 bg-zinc-200 rounded-full" />
                              <span className="text-zinc-400 font-bold text-[10px] uppercase tracking-wider">{exp.type}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-zinc-500 font-bold text-xs ml-1">
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-blue-500" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 shrink-0 w-full sm:w-auto">
                        <div className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black border border-blue-100 flex items-center shadow-sm">
                          {exp.duration}
                        </div>

                        {exp.certificate && (
                          <a
                            href={exp.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-white bg-blue-600 hover:bg-zinc-900 transition-all px-5 py-2 rounded-xl shadow-lg shadow-blue-200 active:scale-95"
                          >
                            Certificate <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="space-y-6">
                      <div className="space-y-4">
                        {exp.description.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium text-zinc-600">
                            <div className="mt-2 w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0 group-hover:scale-150 transition-transform" />
                            {item}
                          </div>
                        ))}
                      </div>

                      {/* TECHNOLOGIES */}
                      <div className="pt-6 border-t border-zinc-100">
                        <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-green-500" /> Stack & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-zinc-50 text-zinc-700 px-3 py-1.5 rounded-xl text-[9px] sm:text-[10px] font-black border border-zinc-100 group-hover:border-blue-100 group-hover:bg-white hover:text-blue-600 hover:scale-105 transition-all cursor-default uppercase tracking-wider"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
