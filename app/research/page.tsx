"use client";
import { useState, useMemo } from "react";
import {
  BookOpen, Search, Microscope, FlaskConical, ExternalLink,
  Award, Filter, CheckCircle2, AlertCircle, Clock,
  Construction, ChevronRight, Hash, Users, Building,
  Calendar, BadgeCheck, ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const researchData = [
  {
    id: 1,
    status: "Running",
    pid: "-",
    title: "Recent Advancements of Wired Charging System for Smart Phone: A Review",
    type: "Review",
    place: "2nd",
    authors: "Zahurul Amin, obaidul Haque, Rifat Hossain, Mst. Moushin Anjum, Tofirat Jahan Tisha",
    publisher: "-",
    year: "-",
    q: "-",
    link: ""
  },
  {
    id: 2,
    status: "Published",
    pid: "949",
    title: "A Comprehensive Approach to Fetal Health Prediction Using Machine Learning and Ensemble Models",
    type: "Conference",
    place: "3rd",
    authors: "MD Samiul Alom, ASM Shakil Ahmed, obaidul Haque",
    publisher: "ICCIT",
    year: "2024",
    q: "-",
    link: "https://ieeexplore.ieee.org/abstract/document/11022051/"
  },
  {
    id: 3,
    status: "Running",
    pid: "-",
    title: "A Hybrid Method for Detecting Student Mental Health Issues Using Deep Learning and Ensemble Models",
    type: "Journal",
    place: "2nd",
    authors: "Samiul Alom, obaidul Haque, Saikat Kumar Gain, Md. Mahbub Alom, Md. Alamin Talukder, Mehnaz Tabassum, Sajal Halder, Ranesh Naha, Abdullahi Chowdhury, Mohsin Kazi",
    publisher: "Discover Computing",
    year: "2025",
    q: "Q2",
    link: ""
  },
  {
    id: 4,
    status: "Running",
    pid: "-",
    title: "Aspect-Based Abusive Sentence Detection in Bangla Using Transformer and Hybrid Deep Neural Architectures",
    type: "Journal",
    place: "2nd",
    authors: "Samiul Alom, obaidul Haque, Snehalata Mondal, Tanjim Taharat Aurpa, Samiha Maisha Jeba",
    publisher: "SN Computer Science",
    year: "2025",
    q: "Q2",
    link: ""
  },
  {
    id: 5,
    status: "Published",
    pid: "-",
    title: "Stroke Prediction Using Ensemble Machine and Deep Learning Models",
    type: "Journal",
    place: "3rd",
    authors: "Samiul Alom, Rajib Kumar Halder, obaidul Haque, Saikat Kumar Gain, Nusrat Jahan, Md. Alamin Talukder, Rakib Hossain, Faisal Imram, Fahim Shakil Tamim, Md Ashraf Uddin, Mohsin Kazi",
    publisher: "Biomedical Materials & Devices",
    year: "2025",
    q: "Q2",
    link: "https://link.springer.com/article/10.1007/s44174-025-00523-2"
  },
  {
    id: 6,
    status: "Accepted",
    pid: "364",
    title: "Explainable Stacking Machine Learning Ensemble Model for Liver Disease Prediction",
    type: "Conference",
    place: "1st",
    authors: "obaidul Haque, Md. Samiul Alom, Ferdous Amin Jibon, Saikat Kumar Gain, Mahbub Alom",
    publisher: "ICECTE RUET",
    year: "2026",
    q: "-",
    link: ""
  },
  {
    id: 7,
    status: "Running",
    pid: "-",
    title: "XAI Meets Generative AI: A Systematic Review of Methods and Applications",
    type: "Review",
    place: "4th",
    authors: "Md. Samiul Alom, Samiha Maisha Jeba, Fatema Tuz Zohora, obaidul Haque, Samia Afrin, Md. Saiful Islam, Mahmuda Ferdousi, Tanjim Taharat Aurpa, Md Shoaib Ahmed, Sharad Hasan",
    publisher: "Heliyon",
    year: "2025",
    q: "Q1",
    link: ""
  },
  {
    id: 8,
    status: "Accepted",
    pid: "373",
    title: "A Unified Soft Voting Ensemble Model for Bangla SMS Spam Detection Using a Novel Annotated Dataset",
    type: "Conference",
    place: "3rd",
    authors: "Md. Rashidul Islam, S. M. Abu Talha Shihab, obaidul Haque, Naeem Mia",
    publisher: "ICCIT",
    year: "2025",
    q: "-",
    link: ""
  },
  {
    id: 9,
    status: "Accepted",
    pid: "1590",
    title: "BanglaBERT-BiLSTM: A Novel Hybrid Architecture for Multiclass Mental Health Classification in Bengali Social Media Text",
    type: "Conference",
    place: "1st",
    authors: "obaidul Haque, Ashraful Hussain, Mariha Tabassum, Rakib Khan, Fahim Shakil Tamim",
    publisher: "ICCIT",
    year: "2025",
    q: "-",
    link: ""
  },
  {
    id: 10,
    status: "Accepted",
    pid: "996",
    title: "Bangla Semantic Analysis Using a Transformer-Based BanglaBERT Model",
    type: "Conference",
    place: "2nd",
    authors: "Saikat Kumar Gain, obaidul Haque, Rifat Hossain, A. S. M. Shakil Ahmed",
    publisher: "ICECTE RUET",
    year: "2026",
    q: "-",
    link: ""
  },
  {
    id: 11,
    status: "Accepted",
    pid: "939",
    title: "Sentiment Analysis of YouTube Comments on the Russia-Ukraine Conflict: A Comparative Study of Machine Learning and Transformer-Based Approaches",
    type: "Conference",
    place: "3rd",
    authors: "Abu Bakar Rakib, Md Mahbub Alom, obaidul Haque, Snehalata Mondal",
    publisher: "ICECTE RUET",
    year: "2026",
    q: "-",
    link: ""
  },
  {
    id: 12,
    status: "Working",
    pid: "-",
    title: "Liver Disease ILPD (New Classification)",
    type: "Journal",
    place: "1st",
    authors: "obaidul Haque, Mariha Tabassum, Ishtiak Al Mammon, Abdul Awal",
    publisher: "-",
    year: "-",
    q: "-",
    link: ""
  },
  {
    id: 13,
    status: "Working",
    pid: "-",
    title: "Human Stress detection with Dev21",
    type: "Journal",
    place: "1st",
    authors: "obaidul Haque, Rajib Khan, Mariha Tabassum, Tanjim Taharat Aurpa",
    publisher: "-",
    year: "-",
    q: "-",
    link: ""
  },
  {
    id: 14,
    status: "Working",
    pid: "-",
    title: "Multi-Feature Fake News Dataset: Multilingual Approach",
    type: "Journal",
    place: "2nd",
    authors: "Mariha Tabassum, obaidul Haque, Hafiza Sultana Nitu, Fahim Shakil Tamim",
    publisher: "-",
    year: "-",
    q: "-",
    link: ""
  },
  {
    id: 15,
    status: "Working",
    pid: "-",
    title: "Multiclass Marine Animal Detection using YOLOv8 and Swin Transformer Classification",
    type: "Journal",
    place: "2nd",
    authors: "Mst. Moushin Anjum, Nishat Tasnim, obaidul Haque",
    publisher: "-",
    year: "-",
    q: "-",
    link: ""
  },
  {
    id: 16,
    status: "Working",
    pid: "-",
    title: "Interpretable Hybrid Deep Learning Framework for Multi-Stage Alzheimers Disease Classification from Structural MRI",
    type: "Journal",
    place: "2nd",
    authors: "Mehedi Hasan, obaidul Haque, Ferdous anam Jibon",
    publisher: "Journal of Neuroscience Methods",
    year: "-",
    q: "-",
    link: ""
  },
  {
    id: 17,
    status: "Working",
    pid: "-",
    title: "Multi-Class Lung Disease Detection from Chest X-Ray Images",
    type: "Journal",
    place: "1st",
    authors: "Mehedi Hasan, obaidul Haque, Maksuda Akter, Ishtiak Al Mammon, Abdul Awal",
    publisher: "-",
    year: "-",
    q: "T:Q1",
    link: ""
  },
  {
    id: 18,
    status: "Working",
    pid: "-",
    title: "Forecasting Yield of Types of Rice: A Deep Learning Approach",
    type: "Journal",
    place: "1st",
    authors: "obaidul Haque, Mariha Tabassum",
    publisher: "-",
    year: "-",
    q: "-",
    link: ""
  },
  {
    id: 19,
    status: "Working",
    pid: "-",
    title: "Forecasting Yield of One of Rice: Advanced Models",
    type: "Conference",
    place: "1st",
    authors: "obaidul Haque, Mariha Tabassum",
    publisher: "-",
    year: "-",
    q: "-",
    link: ""
  },
  {
    id: 20,
    status: "Working",
    pid: "-",
    title: "A Novel Dataset and Explainable AI Framework for Robust Spam Email Detection",
    type: "Conference",
    place: "2nd",
    authors: "Jubeir Hossain Dipu, obaidul Haque, Anamika Rani Nath",
    publisher: "PECCII Pabna",
    year: "2026",
    q: "-",
    link: ""
  },
  {
    id: 21,
    status: "Working",
    pid: "-",
    title: "Aspect-Based Sentimental Analysis of Bengali Social Context",
    type: "Journal",
    place: "1st",
    authors: "obaidul Haque, Zaima Sartaj Taheri, Md. Samiul Alom, Fahim Shakil Tamim, Abdul Awal, Ishtiak Al Mammon",
    publisher: "Data in Brief",
    year: "-",
    q: "Q3",
    link: ""
  },
  {
    id: 22,
    status: "Running",
    pid: "1220",
    title: "Transformer-Based Sentence Reconstruction from Jumbled Words: A Comparative Evaluation Against Sequence Models",
    type: "Conference",
    place: "2nd",
    authors: "Abu Bakar Rakib, obaidul Haque, Nazir Ahmed",
    publisher: "qpain Chittagong",
    year: "2026",
    q: "-",
    link: ""
  },
  {
    id: 23,
    status: "Running",
    pid: "4618",
    title: "A Hybrid Stacking-Based Framework for Multiclass Road Accident Severity Prediction with Interpretable SHAP Analysis",
    type: "Conference",
    place: "2nd",
    authors: "Maksuda Akter, obaidul Haque, Mariha Tabassum, Rajib Khan",
    publisher: "qpain Chittagong",
    year: "2026",
    q: "-",
    link: ""
  },
  {
    id: 24,
    status: "Running",
    pid: "4671",
    title: "Emotion-Aware Token Reweighting for Aspect-Based Emotion Detection in Bangla Text",
    type: "Conference",
    place: "1st",
    authors: "Mariha Tabassum, obaidul Haque, Rajib Khan, Md. Saidur Rahman, Maksuda Akter",
    publisher: "qpain Chittagong",
    year: "2026",
    q: "-",
    link: ""
  },
  {
    id: 25,
    status: "Running",
    pid: "4696",
    title: "Aspect-Based Sentiment Analysis of Bangladeshi IT Service Reviews Using Transformer Architectures and Post-hoc Interpretability",
    type: "Conference",
    place: "2nd",
    authors: "Rajib Khan, Abu Bakar Rakib, obaidul Haque, Mariha Tabassum, Md Saidur Rahman, Maksuda Akter",
    publisher: "qpain Chittagong",
    year: "2026",
    q: "-",
    link: ""
  },
  {
    id: 26,
    status: "Working",
    pid: "-",
    title: "Potato disease D-H classification using Ensemble Models",
    type: "Journal",
    place: "2nd",
    authors: "Samiul Alom, obaidul Haque",
    publisher: "-",
    year: "-",
    q: "W: B model + Shap + LIME + Grad + Inference +",
    link: ""
  },
  {
    id: 27,
    status: "Working",
    pid: "-",
    title: "Paddy leaf Multiclass Disease Detection",
    type: "Journal",
    place: "2nd",
    authors: "Samiul Alom, obaidul Haque",
    publisher: "-",
    year: "-",
    q: "PC",
    link: ""
  },
  {
    id: 28,
    status: "Working",
    pid: "-",
    title: "Multiclass Banana Disease Recognition Dataset & Framework",
    type: "Journal",
    place: "1st",
    authors: "obaidul Haque, Samiul Alom",
    publisher: "-",
    year: "-",
    q: "PC",
    link: ""
  }
];

const StatusBadge = ({ status }: { status: string }) => {
  const config: Record<string, { color: string; icon: any }> = {
    "Published": { color: "bg-emerald-100 text-emerald-700 border-emerald-200", icon: CheckCircle2 },
    "Accepted": { color: "bg-blue-100 text-blue-700 border-blue-200", icon: BadgeCheck },
    "Running": { color: "bg-amber-100 text-amber-700 border-amber-200", icon: Clock },
    "Working": { color: "bg-zinc-100 text-zinc-600 border-zinc-200", icon: Construction },
  };

  const s = config[status] || config["Working"];
  const Icon = s.icon;

  return (
    <span className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold border ${s.color}`}>
      <Icon size={12} />
      <span>{status.toUpperCase()}</span>
    </span>
  );
};

export default function ResearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData = useMemo(() => {
    return researchData.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.authors.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === "All" || item.status === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const stats = [
    { label: "Total Papers", value: researchData.length, icon: BookOpen, color: "text-blue-600" },
    { label: "Journals", value: researchData.filter(p => p.type === "Journal").length, icon: Microscope, color: "text-purple-600" },
    { label: "Conferences", value: researchData.filter(p => p.type === "Conference").length, icon: Users, color: "text-orange-600" },
    { label: "Published/Accepted", value: researchData.filter(p => ["Published", "Accepted"].includes(p.status)).length, icon: Award, color: "text-emerald-600" },
  ];

  const coAuthorStats = useMemo(() => {
    const counts: Record<string, number> = {};
    researchData.forEach(paper => {
      const authorsList = paper.authors.split(",");
      authorsList.forEach(author => {
        const name = author.trim();
        if (name) {
          counts[name] = (counts[name] || 0) + 1;
        }
      });
    });

    return Object.entries(counts)
      .map(([name, count]) => ({
        name,
        count,
        isMe: name.toLowerCase() === "obaidul haque"
      }))
      .sort((a, b) => b.count - a.count);
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-20 hero-gradient">
      <div className="max-w-[1600px] mx-auto px-6 space-y-12">

        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-blue-600 font-bold tracking-widest uppercase text-sm flex items-center"
            >
              <FlaskConical size={18} className="mr-2" /> Research Portfolio
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-bold text-zinc-900 leading-tight"
            >
              Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 text-lg md:text-xl leading-relaxed"
            >
              A comprehensive record of 28 research contributions across Machine Learning,
              Healthcare AI, and Natural Language Processing.
            </motion.p>
          </div>

          {/* QUICK STATS */}
          <div className="flex flex-wrap gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i }}
                className="glass-card p-6 rounded-3xl border border-zinc-100 shadow-lg flex items-center space-x-4 bg-white/50"
              >
                <div className={`p-3 rounded-2xl bg-zinc-50 ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-3xl font-black text-zinc-900">{stat.value}</div>
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-tighter">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between sticky top-24 z-40 bg-white/80 backdrop-blur-xl p-4 rounded-[2rem] border border-zinc-100 shadow-sm">
          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-600 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search papers, authors..."
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            <div className="flex items-center mr-4 text-zinc-400 font-bold text-xs uppercase tracking-widest whitespace-nowrap">
              <Filter size={14} className="mr-2" /> Filter By:
            </div>
            {["All", "Published", "Accepted", "Running", "Working"].map((filter) => {
              const count = filter === "All"
                ? researchData.length
                : researchData.filter(p => p.status === filter).length;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex items-center space-x-2 ${activeFilter === filter
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-white text-zinc-500 hover:bg-zinc-50 border border-zinc-100"
                    }`}
                >
                  <span>{filter}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeFilter === filter ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-400"
                    }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RESEARCH TABLE */}
        <div className="glass-card border border-zinc-100 rounded-[3rem] shadow-2xl overflow-hidden bg-white/40">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-950 text-white uppercase text-[10px] font-black tracking-[0.2em]">
                  <th className="px-8 py-6 text-center"><Hash size={14} className="mx-auto" /></th>
                  <th className="px-6 py-6">Status</th>
                  <th className="px-6 py-6">Identity (PID)</th>
                  <th className="px-6 py-6 min-w-[300px]">Research Title</th>
                  <th className="px-6 py-6">Focus Type</th>
                  <th className="px-6 py-6">Authors & Teammates</th>
                  <th className="px-6 py-6">Publication / Journal</th>
                  <th className="px-6 py-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <AnimatePresence mode="popLayout">
                  {filteredData.map((paper, index) => (
                    <motion.tr
                      key={paper.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group hover:bg-blue-50/30 transition-colors"
                    >
                      <td className="px-8 py-8 text-center bg-zinc-50/50">
                        <span className="text-lg font-black text-zinc-300 group-hover:text-blue-400 transition-colors">
                          {paper.id.toString().padStart(2, '0')}
                        </span>
                      </td>
                      <td className="px-6 py-8">
                        <StatusBadge status={paper.status} />
                      </td>
                      <td className="px-6 py-8 bg-zinc-50/30">
                        <div className="flex items-center space-x-2">
                          <span className={`text-xs font-mono font-bold px-2 py-1 rounded-md ${paper.pid !== '-' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' : 'text-zinc-400'}`}>
                            {paper.pid}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-8">
                        <div className="space-y-1">
                          <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-600 transition-colors leading-tight">
                            {paper.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                            {paper.year !== '-' && <span className="flex items-center text-zinc-400"><Calendar size={12} className="mr-1" /> {paper.year}</span>}
                            {paper.q !== '-' && (
                              <span className={`flex items-center px-2 py-1 rounded border shadow-sm ${paper.q.includes('Q1') ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                paper.q.includes('Q2') ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                  'bg-indigo-50 text-indigo-600 border-indigo-100'
                                } italic`}>
                                <Award size={10} className="mr-1" /> {paper.q}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-8 bg-zinc-50/30">
                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border ${paper.type === 'Journal' ? 'border-purple-200 text-purple-600 bg-purple-50' :
                          paper.type === 'Conference' ? 'border-sky-200 text-sky-600 bg-sky-50' :
                            'border-zinc-200 text-zinc-600 bg-zinc-50'
                          }`}>
                          {paper.type}
                        </span>
                      </td>
                      <td className="px-6 py-8">
                        <div className="flex flex-wrap gap-2 max-w-[400px]">
                          {paper.authors.split(',').map((author, i) => {
                            const name = author.trim();
                            const isMe = name.toLowerCase() === "obaidul haque";
                            return (
                              <span
                                key={i}
                                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all border ${isMe
                                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400 shadow-sm shadow-blue-100 ring-2 ring-blue-50"
                                  : "bg-white text-zinc-500 border-zinc-100 hover:bg-zinc-50"
                                  }`}
                              >
                                {name}
                              </span>
                            );
                          })}
                        </div>
                      </td>
                      <td className="px-6 py-8 bg-zinc-50/30">
                        <div className="flex items-center space-x-2 text-zinc-700 font-bold text-sm">
                          <Building size={16} className="text-zinc-400" />
                          <span>{paper.publisher !== '-' ? paper.publisher : 'N/A'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-8 text-center">
                        {paper.link ? (
                          <a
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 active:scale-95 group/btn"
                          >
                            <span>Online</span>
                            <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        ) : (
                          <button
                            disabled
                            className="inline-flex items-center space-x-2 px-6 py-3 bg-zinc-100 text-zinc-400 rounded-2xl text-[10px] font-black uppercase tracking-widest cursor-not-allowed border border-zinc-200"
                          >
                            Not Available
                          </button>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>

        {/* CO-AUTHORS DASHBOARD */}
        <section className="space-y-6 pt-12 border-t border-zinc-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-zinc-900 flex items-center">
                <Users className="mr-3 text-blue-600" size={28} />
                Co-Authors <span className="text-blue-600 ml-2">Presence Dashboard</span>
              </h2>
              <p className="text-zinc-500 font-medium">Statistical breakdown of academic collaborations and contributions.</p>
            </div>
          </div>

          <div className="glass-card rounded-[2.5rem] border border-zinc-100 shadow-xl overflow-hidden bg-white/40">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50/80 border-b border-zinc-100">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-zinc-400 w-24">No</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Collaborator Name</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-zinc-400 text-right">Appearances</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  {coAuthorStats.map((stat, i) => (
                    <tr key={stat.name} className="group hover:bg-blue-50/30 transition-colors">
                      <td className={`px-8 py-5 font-black text-sm ${i % 2 === 0 ? 'bg-zinc-50/50' : ''}`}>
                        <span className="text-zinc-300 group-hover:text-blue-400 transition-colors">
                          {(i + 1).toString().padStart(2, '0')}
                        </span>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${stat.isMe ? 'bg-blue-100 text-blue-600' : 'bg-zinc-100 text-zinc-500'
                            }`}>
                            {stat.name.charAt(0)}
                          </div>
                          <span className={`font-bold ${stat.isMe ? 'text-blue-600' : 'text-zinc-900'}`}>
                            {stat.name}
                          </span>
                        </div>
                      </td>
                      <td className={`px-8 py-5 text-right ${i % 2 === 0 ? 'bg-zinc-50/50' : ''}`}>
                        <div className="inline-flex items-center space-x-2">
                          <span className={`text-lg font-black ${stat.isMe ? 'text-blue-600' : 'text-zinc-900'}`}>
                            {stat.count}
                          </span>
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Papers</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FUTURE RESEARCH NOTE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="glass-card rounded-[3rem] p-12 border border-blue-100/50 shadow-2xl shadow-blue-50 relative z-10 text-center space-y-8 bg-white/60">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-100">
              <ArrowUpRight size={14} /> <span>Future Roadmap</span>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight">
                Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Horizon</span>
              </h2>
              <p className="text-xl text-zinc-600 font-medium leading-relaxed italic">
                "While the indexed records currently reflect 28 verified contributions, there are over
                <span className="text-blue-600 font-bold mx-2 italic bg-blue-50 px-2 py-1 rounded-lg">20+ innovative paper ideas</span> currently
                floating in the pipeline and early developmental stages."
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">
                <span className="flex items-center"><Microscope size={14} className="mr-2" /> Experimental Phase</span>
                <span className="mx-2">•</span>
                <span className="flex items-center"><FlaskConical size={14} className="mr-2" /> Data Collection</span>
                <span className="mx-2">•</span>
                <span className="flex items-center"><BookOpen size={14} className="mr-2" /> Conceptual Frameworks</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center items-center space-x-2 text-zinc-400 group-hover:text-blue-500 transition-colors duration-500">
              <div className="h-px w-12 bg-zinc-200 group-hover:bg-blue-200 transition-colors" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em]">Igniting Tomorrow's Intelligence</p>
              <div className="h-px w-12 bg-zinc-200 group-hover:bg-blue-200 transition-colors" />
            </div>
          </div>
        </motion.section>

        {/* FOOTER NOTE */}
        <div className="text-center text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em] py-10 opacity-30">
          Academic Research Portfolio • {new Date().getFullYear()} • Powered by Technical Excellence
        </div>
      </div>
    </main>
  );
}
