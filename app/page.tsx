"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const profile = {
    name: "Obaidul Haque",
    title: "Java Backend Developer & Researcher",
    bio: "I specialize in building robust, scalable server-side applications with Spring Boot while pursuing research to bridge the gap between academic innovation and industry-scale implementation.",
    imageUrl: "/images/profile.jpeg",
  };

  return (
    <main className="min-h-screen pt-16 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="space-y-4">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Available for new opportunities
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 leading-tight">
              I'm <span className="text-zinc-800">{profile.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 font-medium">
              {profile.title}
            </p>
            <p className="text-lg text-zinc-500 max-w-lg leading-relaxed">
              {profile.bio}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-1 inline-block"
            >
              Contact Me for Collaboration
            </a>
            <a
              href="/projects"
              className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-bold hover:bg-zinc-50 transition-all shadow-sm inline-block"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: PROFILE IMAGE */}
        <div className="relative group animate-in fade-in slide-in-from-right-8 duration-1000">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-transparent rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border-8 border-white shadow-2xl glass-card">
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
    </main>
  );
}
