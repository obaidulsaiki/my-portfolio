export default function Footer() {
    return (
        <footer className="py-12 border-t border-zinc-100 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm text-zinc-500">
                    © {new Date().getFullYear()} Obaidul Haque. Built with Next.js & Spring Boot.
                </p>
            </div>
        </footer>
    );
}
