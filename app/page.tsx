"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Instagram, Facebook, GraduationCap, Phone, Send } from "lucide-react";

export default function Home() {
  const profile = {
    name: "Obaidul Haque",
    title: "Java Backend Developer & Researcher",
    bio: "I specialize in building robust, scalable server-side applications with Spring Boot while pursuing research to bridge the gap between academic innovation and industry-scale implementation.",
    imageUrl: "/images/profile.jpeg",
  };

  return (
    <main className="min-h-screen pt-16 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="space-y-4">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-xs md:text-sm">
              Available for new opportunities
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-zinc-900 leading-tight">
              I'm <span className="text-zinc-800">{profile.name}</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-600 font-medium leading-relaxed">
              {profile.title}
            </p>
            <p className="text-base md:text-lg text-zinc-500 max-w-lg leading-relaxed">
              {profile.bio}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-1 inline-block text-center text-sm md:text-base"
            >
              Contact Me
            </a>
            <a
              href="/projects"
              className="bg-white text-zinc-900 border border-zinc-200 px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold hover:bg-zinc-50 transition-all shadow-sm inline-block text-center text-sm md:text-base"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: PROFILE IMAGE */}
        <div className="relative group animate-in fade-in slide-in-from-right-8 duration-1000">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-transparent rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[3rem] border-4 md:border-8 border-white shadow-2xl glass-card">
            <img
              src={profile.imageUrl}
              alt={profile.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
              }}
            />
          </div>
        </div>
      </div>

      {/* COLLABORATION & HELP SECTION */}
      <section className="relative py-16 md:py-32 overflow-hidden bg-zinc-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="glass-card rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 border border-white shadow-2xl bg-white/70 backdrop-blur-3xl space-y-12 md:space-y-16">
            <div className="text-center space-y-4 md:space-y-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-100"
              >
                <MessageCircle size={14} /> <span>Open for Dialogue</span>
              </motion.div>

              <h2 className="text-3xl md:text-6xl font-black text-zinc-900 leading-tight">
                Need Help? Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Collaborate.</span>
              </h2>

              <p className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed">
                Whether it's a deep-dive research project, a technical hurdle, or just a shared interest in innovation—reach out on any platform below.
              </p>
            </div>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-6">
              {[
                { name: "LinkedIn", href: "https://www.linkedin.com/in/obaidul-haque47", color: "from-blue-600 to-blue-700", icon: Linkedin },
                {
                  name: "X",
                  href: "https://x.com/obaidulsaiki",
                  color: "from-zinc-900 to-black",
                  customIcon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-current">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )
                },
                { name: "Facebook", href: "https://www.facebook.com/obidul.saki/", color: "from-blue-500 to-blue-600", icon: Facebook },
                { name: "WhatsApp", href: "https://wa.me/8801883440377", color: "from-emerald-500 to-emerald-600", icon: Phone },
                { name: "Instagram", href: "https://www.instagram.com/obaidulsaiki", color: "from-pink-500 via-red-500 to-orange-500", icon: Instagram },
                { name: "Gmail", href: "mailto:saki.obidul@gmail.com", color: "from-red-500 to-red-600", icon: Mail },
                { name: "Scholar", href: "https://scholar.google.com/citations?user=6Lv0Xn4AAAAJ", color: "from-blue-400 to-blue-500", icon: GraduationCap },
              ].map((platform, i) => (
                <motion.a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center space-y-3 group"
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] md:rounded-[1.5rem] bg-gradient-to-br ${platform.color} flex items-center justify-center text-white shadow-lg shadow-zinc-200 group-hover:shadow-2xl group-hover:shadow-current/20 transition-all duration-300 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    {platform.icon ? <platform.icon size={24} className="md:w-7 md:h-7" strokeWidth={2.5} /> : platform.customIcon}
                  </div>
                  <div className="text-center">
                    <span className="text-[9px] md:text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] group-hover:text-zinc-900 transition-colors">
                      {platform.name}
                    </span>
                    <div className="h-0.5 w-0 bg-zinc-900 mx-auto mt-1 group-hover:w-full transition-all duration-300" />
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-10 flex flex-col md:flex-row items-center justify-between border-t border-zinc-100 gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-black">OH</div>
                <div className="text-left">
                  <p className="text-xs font-black text-zinc-900 uppercase tracking-wider">Obaidul Haque</p>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Active Researcher • Dev</p>
                </div>
              </div>
              <p className="text-zinc-300 text-[9px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-center">
                Bridging Minds • Creating Future
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
