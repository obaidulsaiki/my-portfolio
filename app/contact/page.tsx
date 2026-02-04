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

        <div className="text-center space-y-4 mb-12">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Get in touch</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900">Let's Collaborate</h1>
          <p className="text-zinc-500 text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-zinc-100 shadow-xl">
          {status === "success" ? (
            <div className="text-center space-y-6 py-10 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-zinc-900">Message Sent!</h3>
                <p className="text-zinc-500">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="text-blue-600 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest ml-1">Your Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest ml-1">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 text-zinc-400" size={20} />
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={20} />
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          )}
        </div>

      </div>
    </main>
  );
}
