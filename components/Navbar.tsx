"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-card border-b border-zinc-200">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900">
                    Obaidul<span className="text-blue-600">Haque</span>
                </Link>
                <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-600">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <Link href="/education" className="hover:text-blue-600 transition-colors">Education</Link>
                    <Link href="/experience" className="hover:text-blue-600 transition-colors">Experience</Link>
                    <Link href="/research" className="hover:text-blue-600 transition-colors">Research</Link>
                    <Link href="/cp" className="hover:text-blue-600 transition-colors">CP</Link>
                    <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
                    <Link href="/learning" className="hover:text-blue-600 transition-colors">Learning</Link>
                    <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
                </div>
                <Link
                    href="/contact"
                    className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm"
                >
                    Hire Me
                </Link>
            </div>
        </nav>
    );
}
