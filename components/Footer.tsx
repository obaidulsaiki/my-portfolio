import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 md:py-20 border-t border-zinc-100 bg-zinc-50/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-zinc-950 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:bg-blue-600 transition-colors">
                                <span className="text-xl font-black">O</span>
                            </div>
                            <span className="text-lg md:text-xl font-black tracking-tighter text-zinc-900 group-hover:text-blue-600 transition-colors">Obaidul <span className="text-blue-600 italic group-hover:text-zinc-900 transition-colors">Haque</span></span>
                        </div>
                        <p className="text-zinc-500 font-bold text-xs md:text-sm tracking-wide text-center md:text-left max-w-sm uppercase">
                            Building scalable backend systems & solving complex algorithms.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {[
                            { icon: Github, href: "https://github.com/obaidulsaiki" },
                            { icon: Linkedin, href: "https://linkedin.com/in/obaidul-haque-saiki" },
                            { icon: Mail, href: "mailto:obaidulhaquesaiki@gmail.com" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-blue-600 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all active:scale-95"
                            >
                                <social.icon size={20} className="md:w-6 md:h-6" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-12 md:mt-20 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-[0.3em]">
                        © {new Date().getFullYear()} All Rights Reserved.
                    </p>
                    <p className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-[0.3em] flex items-center gap-2">
                        Built with <span className="text-blue-600">Next.js</span> & <span className="text-indigo-600">Spring Boot</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
