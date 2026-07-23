import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/98 backdrop-blur-md shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link to="/" className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-black text-sm">R</span>
                        </div>
                        <span className="text-xl font-black text-black tracking-tight">RAGLess</span>
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-1 md:flex ml-12">
                    <a href="#" className="px-4 py-2 text-xs font-semibold text-gray-700 tracking-wider uppercase hover:text-green-600 hover:bg-green-50 rounded-md transition-all duration-200">
                        PRICING
                    </a>
                    <a href="#" className="px-4 py-2 text-xs font-semibold text-gray-700 tracking-wider uppercase hover:text-green-600 hover:bg-green-50 rounded-md transition-all duration-200">
                        DOCS
                    </a>
                    <a href="#" className="px-4 py-2 text-xs font-semibold text-gray-700 tracking-wider uppercase hover:text-green-600 hover:bg-green-50 rounded-md transition-all duration-200">
                        BLOG
                    </a>
                    <a href="#" className="px-4 py-2 text-xs font-semibold text-gray-700 tracking-wider uppercase hover:text-green-600 hover:bg-green-50 rounded-md transition-all duration-200">
                        TUTORIALS
                    </a>
                    <a href="#" className="px-4 py-2 text-xs font-semibold text-gray-700 tracking-wider uppercase hover:text-green-600 hover:bg-green-50 rounded-md transition-all duration-200">
                        CHANGELOG
                    </a>
                </nav>
                
                <div className="hidden md:flex items-center gap-3 ml-auto">
                    <a href="#" className="px-4 py-2 text-xs font-semibold text-gray-700 tracking-wider uppercase hover:text-green-600 transition-colors duration-200">
                        LOGIN
                    </a>
                    <Link to="/signup" className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-green-400 to-green-600 text-white px-6 text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95">
                        SIGN UP
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button onClick={() => setMobileOpen(!mobileOpen)} className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 md:hidden hover:bg-gray-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {mobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <nav className="border-t border-gray-200 bg-white/98 px-4 py-4 md:hidden">
                    <div className="flex flex-col gap-2">
                        <a href="#" className="px-4 py-2 text-sm font-semibold text-gray-700 uppercase rounded-md hover:bg-green-50 hover:text-green-600 transition-colors">PRICING</a>
                        <a href="#" className="px-4 py-2 text-sm font-semibold text-gray-700 uppercase rounded-md hover:bg-green-50 hover:text-green-600 transition-colors">DOCS</a>
                        <a href="#" className="px-4 py-2 text-sm font-semibold text-gray-700 uppercase rounded-md hover:bg-green-50 hover:text-green-600 transition-colors">BLOG</a>
                        <a href="#" className="px-4 py-2 text-sm font-semibold text-gray-700 uppercase rounded-md hover:bg-green-50 hover:text-green-600 transition-colors">TUTORIALS</a>
                        <Link to="/login" className="px-4 py-2 text-sm font-semibold text-gray-700 uppercase rounded-md hover:bg-green-50 hover:text-green-600 transition-colors" onClick={() => setMobileOpen(false)}>LOGIN</Link>
                        <Link to="/signup" className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-lg bg-gradient-to-r from-green-400 to-green-600 text-white text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg" onClick={() => setMobileOpen(false)}>SIGN UP</Link>
                    </div>
                </nav>
            )}
        </header>
    );
}
