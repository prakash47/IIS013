"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: "Our Mission", href: "/our-mission" },
        { name: "Our Impact", href: "/our-impact" },
        { name: "Get Involved", href: "/get-involved" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-black/80">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
                    ROSHNI
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 sm:flex">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="group relative text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                        >
                            {item.name}
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <div className="hidden sm:flex">
                    <Link
                        href="/donate"
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Donate Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="sm:hidden p-2 text-gray-700 dark:text-gray-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black sm:hidden">
                    <div className="flex flex-col space-y-4 px-6 py-6">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium text-gray-900 dark:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/donate"
                            className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-center text-base font-bold text-white hover:bg-blue-700"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Donate Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
