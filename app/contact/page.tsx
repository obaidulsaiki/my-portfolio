"use client";
import { useState } from "react";
import { Send, User, Mail, MessageSquare, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-20 hero-gradient">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center space-y-4 mb-10 md:mb-16 px-4">
          <h2 className="text-blue-600 font-black tracking-wide uppercase text-[10px] md:text-sm">Get in touch</h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter">Let's <span className="text-blue-600 italic">Collaborate</span></h1>
          <p className="text-zinc-500 font-medium italic text-base md:text-lg max-w-xl mx-auto px-4">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities.
          </p>
        </div>

        <div className="glass-card rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 border border-zinc-100 shadow-xl bg-white/80 backdrop-blur-xl">
          {status === "success" ? (
            <div className="text-center space-y-6 py-10 animate-in zoom-in duration-500">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle size={32} className="md:w-10 md:h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-black text-zinc-900">Message Sent!</h3>
                <p className="text-zinc-500 font-bold italic text-sm md:text-base">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="text-blue-600 font-black uppercase text-xs tracking-widest hover:underline decoration-2 underline-offset-8"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-[0.3em] ml-1">Your Name</label>
                <div className="relative">
                  <User className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-zinc-50/50 border border-zinc-100 rounded-2xl py-4 pl-12 md:pl-16 pr-6 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all outline-none font-bold"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-[0.3em] ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-zinc-50/50 border border-zinc-100 rounded-2xl py-4 pl-12 md:pl-16 pr-6 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all outline-none font-bold"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-[0.3em] ml-1">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 md:left-6 top-6 text-zinc-400" size={18} />
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-zinc-50/50 border border-zinc-100 rounded-2xl py-4 pl-12 md:pl-16 pr-6 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all outline-none resize-none font-bold"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-zinc-950 text-white py-4 md:py-5 rounded-2xl md:rounded-3xl font-black uppercase tracking-[0.3em] text-[10px] md:text-xs flex items-center justify-center space-x-3 hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200 active:scale-[0.98] disabled:opacity-50"
              >
                <span>{status === "sending" ? "Sending Details..." : "Submit Inquiry"}</span>
                <Send size={16} />
              </button>

              {status === "error" && (
                <p className="text-red-500 text-xs font-bold text-center italic">Failed to send message. Please try again.</p>
              )}
            </form>
          )}
        </div>

      </div>
    </main>
  );
}
