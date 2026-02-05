"use client";
import { Trophy, Code2, Target, Zap, LayoutGrid, Terminal, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function CPPage() {
  const platforms = [
    {
      name: "Codeforces",
      handle: "Obaidulsaiki",
      rating: "968",
      rank: "Newbie",
      solved: "267",
      attempted: "283",
      details: "Top Tags: Implementation (79), Greedy (43), Math (41), Strings (27)",
      color: "from-red-600 to-red-700",
      link: "https://codeforces.com/profile/Obaidulsaiki"
    },
    {
      name: "LeetCode",
      handle: "obaidulsaiki",
      solved: "22",
      attempted: "148",
      rank: "3.6M+ Rank",
      details: "Stats: 17 Easy, 5 Med • Skills: Array (10), Math (5), DP (4)",
      color: "from-orange-400 to-orange-500",
      link: "https://leetcode.com/u/obaidulsaiki/"
    },
    {
      name: "HackerRank",
      handle: "Obaidulsaiki",
      solved: "79",
      attempted: "ND",
      rank: "PS 1★ / C 2★",
      details: "Badges: Problem Solving, C Language • CSS Verified",
      color: "from-green-500 to-green-600",
      link: "https://www.hackerrank.com/profile/Obaidulsaiki"
    },
    {
      name: "CodeChef",
      handle: "obaidul_saiki",
      solved: "100",
      attempted: "ND",
      rating: "771",
      rank: "1 Star (Div 4)",
      details: "Highest Rating: 771 • Active in Division 4 contests",
      color: "from-amber-700 to-amber-800",
      link: "https://www.codechef.com/users/obaidul_saiki"
    },
    {
      name: "Toph",
      handle: "obaidulsaiki",
      solved: "11",
      attempted: "72",
      rank: "Rank: 9053",
      details: "Top categories: Ad-hoc (7), Implementation (6), Brute Force (2)",
      color: "from-blue-600 to-blue-700",
      link: "https://toph.co/u/obaidulsaiki"
    },
    {
      name: "Beecrowd",
      handle: "Obaidulsaiki",
      solved: "21",
      attempted: "21",
      rank: "Top 31%",
      details: "Hardest Solved: 1000 • Submissions: 52 • Points: 60.42",
      color: "from-yellow-500 to-yellow-600",
      link: "https://www.beecrowd.com.br/judge/en/profile/obaidulsaiki"
    },
    {
      name: "VJudge",
      handle: "obaidulsaiki",
      solved: "56",
      attempted: "67",
      rank: "Rank: 106,852",
      details: "Attempted: 66 • Extensive solve history across multiple virtual judges",
      color: "from-zinc-600 to-zinc-700",
      link: "https://vjudge.net/user/obaidulsaiki"
    }
  ];

  const highlights = [
    "Solved 556+ algorithmic problems across 7+ major platforms.",
    "Fluent in C++ STL and problem solving with clean, efficient code.",
    "Strong focus on Implementation, Greedy, and Mathematical thinking.",
    "Active participant in LeetCode weekly and Codeforces rounds."
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 hero-gradient">
      <div className="max-w-[1400px] mx-auto px-6 space-y-20">

        {/* HEADER */}
        <div className="text-center space-y-4 px-4">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-[10px] md:text-sm flex items-center justify-center">
            <Trophy size={16} className="mr-2" /> Competitive Excellence
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-zinc-900 leading-tight tracking-tighter">
            Competitive <span className="text-blue-600">Programming</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-base md:text-lg font-medium italic leading-relaxed px-4">
            Sharpening my problem-solving skills and algorithmic thinking through high-pressure contests and complex data structures.
          </p>
        </div>

        {/* STATS OVERVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {platforms.map((p, i) => (
            <div
              key={i}
              className="group glass-card p-6 sm:p-8 rounded-[2.5rem] md:rounded-[3rem] border border-zinc-100 shadow-xl hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 relative overflow-hidden bg-white/80 backdrop-blur-xl"
            >
              <div className={`absolute top-0 right-0 w-2 h-full bg-gradient-to-b ${p.color}`}></div>
              <div className="flex flex-col h-full space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-950 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:bg-blue-600 transition-colors duration-500">
                    <Code2 size={20} className="md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-zinc-900 tracking-tight">{p.name}</h3>
                </div>

                <div className="space-y-1">
                  <p className="text-[9px] md:text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Handle / Nickname</p>
                  <p className="text-base md:text-lg font-bold text-zinc-800 tracking-tight">{p.handle}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zinc-50 px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl border border-zinc-100">
                    <p className="text-[9px] md:text-[10px] font-black text-zinc-400 uppercase tracking-tighter">Solved</p>
                    <p className="text-blue-600 font-black text-lg md:text-xl leading-none mt-1">{p.solved}</p>
                  </div>
                  <div className="bg-zinc-50 px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl border border-zinc-100">
                    <p className="text-[9px] md:text-[10px] font-black text-zinc-400 uppercase tracking-tighter">Attempted</p>
                    <p className="text-zinc-900 font-black text-lg md:text-xl leading-none mt-1">{(p as any).attempted || "ND"}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <p className="text-[9px] md:text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Rating / Standing</p>
                  <p className="text-xs md:text-sm font-bold text-zinc-800 truncate">{p.rating || p.rank}</p>
                </div>

                {p.details && (
                  <div className="flex flex-wrap gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-wider text-zinc-500 bg-zinc-50/50 p-2.5 rounded-xl border border-dashed border-zinc-200">
                    {p.details}
                  </div>
                )}

                <div className="pt-4 mt-auto">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-zinc-950 text-white rounded-xl md:rounded-[1.5rem] text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-zinc-200 hover:bg-blue-600 hover:shadow-blue-200 transition-all active:scale-95 group-hover:rounded-xl"
                  >
                    View Full Profile <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HIGHLIGHTS & SKILLS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">

          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-black text-zinc-900 flex items-center px-2">
              <Zap className="mr-3 text-blue-600" size={24} /> Key Highlights
            </h3>
            <div className="space-y-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-4 bg-white p-5 md:p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-600 shrink-0">
                    <Target size={18} />
                  </div>
                  <p className="text-zinc-700 text-base md:text-lg font-bold leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-black text-zinc-900 flex items-center px-2">
              <Terminal className="mr-3 text-blue-600" size={24} /> Algorithm Toolkit
            </h3>
            <div className="glass-card p-6 md:p-8 rounded-[2rem] border border-zinc-100 space-y-6 shadow-lg">
              <div className="flex flex-wrap gap-2">
                {["Implementation", "Greedy", "Math", "Strings", "Brute Force", "Number Theory", "Binary Search", "Two Pointers", "Hashing", "Sorting"].map((tag, i) => (
                  <span key={i} className="bg-zinc-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-black uppercase tracking-widest shadow-md hover:bg-blue-600 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-center text-zinc-500 font-black text-[10px] uppercase tracking-widest">
                  <LayoutGrid size={16} className="mr-2" /> Categories
                </div>
                <span className="text-zinc-800 font-black text-xs md:text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100">15+ Advanced Topics</span>
              </div>
            </div>
          </div>

        </div>

        {/* CONTEST STANDINGS */}
        <section className="space-y-8 md:space-y-12">
          <div className="text-center space-y-4 px-4">
            <h3 className="text-2xl md:text-3xl font-black text-zinc-900 flex items-center justify-center tracking-tighter">
              <Trophy className="mr-3 text-amber-500" size={28} />
              Major Contest <span className="text-blue-600 ml-2">Standings</span>
            </h3>
            <p className="text-zinc-500 font-bold italic text-sm md:text-base">Verified rankings from national and institutional competitive programming tournaments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { rank: "13th", contest: "IUBAT Intra Collaborative Contest", year: "2024", color: "bg-blue-50 text-blue-600 border-blue-100" },
              { rank: "418th", contest: "ICPC Preliminaries", year: "2023", color: "bg-zinc-50 text-zinc-600 border-zinc-100" },
              { rank: "1st", contest: "Monthly Contest", year: "April 2023", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
              { rank: "2nd", contest: "Monthly Contest", year: "January 2023", color: "bg-amber-50 text-amber-600 border-amber-100" },
              { rank: "726th", contest: "ICPC Preliminaries", year: "April 2022", color: "bg-zinc-100 text-zinc-500 border-zinc-200" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-zinc-100 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden bg-white/60"
              >
                <div className="flex flex-col space-y-4">
                  <div className={`w-fit px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-black uppercase tracking-widest border ${item.color}`}>
                    {item.rank} Place
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg md:text-xl font-black text-zinc-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {item.contest}
                    </h4>
                    <p className="text-zinc-400 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] flex items-center">
                      <Calendar size={12} className="mr-1.5" /> {item.year}
                    </p>
                  </div>
                </div>
                {/* DECORATIVE RANK WATERMARK */}
                <div className="absolute -bottom-4 -right-4 text-5xl md:text-6xl font-black text-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none italic">
                  #{item.rank.replace(/\D/g, '')}
                </div>
              </motion.div>
            ))}

            {/* FUTURE ACHIEVEMENT PLACEHOLDER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-dashed border-zinc-200 flex flex-col items-center justify-center text-center space-y-3 opacity-60"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400">
                <Zap size={20} className="md:w-6 md:h-6" />
              </div>
              <p className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest">Next Achievement</p>
              <p className="text-[9px] md:text-[10px] font-bold text-zinc-300">Pushing limits in upcoming rounds</p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-6 md:pt-10 px-4">
          <p className="text-zinc-500 mb-6 font-bold italic text-sm md:text-base leading-relaxed max-w-lg mx-auto">"Algorithm is the soul of backend engineering."</p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 text-blue-600 font-black text-base md:text-lg hover:underline underline-offset-8 decoration-2 transition-all active:scale-95"
          >
            <span>Interested in algorithmic collaboration?</span>
            <ExternalLink size={20} />
          </a>
        </div>

      </div>
    </main>
  );
}
