"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Education", href: "/education" },
        { name: "Experience", href: "/experience" },
        { name: "Research", href: "/research" },
        { name: "CP", href: "/cp" },
        { name: "Projects", href: "/projects" },
        { name: "Learning", href: "/learning" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 glass-card border-b border-zinc-200">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900">
                    Obaidul<span className="text-blue-600">Haque</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex space-x-8 text-sm font-medium text-zinc-600">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-blue-600 transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden sm:inline-block bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm"
                    >
                        Hire Me
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-zinc-600 hover:text-blue-600 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-zinc-100 bg-white/90 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-zinc-600 hover:text-blue-600 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="sm:hidden w-full text-center bg-black text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-all"
                            >
                                Hire Me
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
