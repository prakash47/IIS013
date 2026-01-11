import Image from "next/image";
import Link from "next/link";
import { CheckCircle, BookOpen } from "lucide-react";
import AnimationWrapper from "@/components/AnimationWrapper";

export const metadata = {
    title: "Academic Scholarships | Roshni Foundation",
    description: "Providing full tuition, resources, and support for girls' education.",
};

export default function ScholarshipsPage() {
    return (
        <div className="w-full">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white bg-blue-900">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop')" }}
                />
                <div className="relative z-20 text-center px-6 max-w-4xl">
                    <AnimationWrapper animation="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-4 backdrop-blur-sm">
                            Core Program
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Academic Scholarships</h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                            Removing financial barriers so every girl can focus on what matters: Learning.
                        </p>
                    </AnimationWrapper>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-6 max-w-4xl mx-auto space-y-16">
                <AnimationWrapper delay={0.2}>
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">The Problem</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        In the rural districts we serve, secondary school tuition and associated costs (uniforms, books, transport) often amount to 40% of a family's annual income. Faced with this burden, families often prioritize sons over daughters.
                    </p>
                </AnimationWrapper>

                <AnimationWrapper delay={0.3}>
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-2xl border border-blue-100 dark:border-blue-800">
                        <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-6">What We Cover</h2>
                        <ul className="space-y-4">
                            {[
                                "Full Tuition Fees for High School",
                                "Textbooks and Stationery",
                                "Two Custom Uniform Sets",
                                "Daily Transport Allowance",
                                "Examination Fees"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300">
                                    <CheckCircle className="text-blue-500 w-6 h-6 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimationWrapper>

                <AnimationWrapper delay={0.4}>
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Our Impact</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                            <h3 className="text-4xl font-bold text-blue-600 mb-2">98%</h3>
                            <p className="text-gray-600 dark:text-gray-400">Graduation Rate</p>
                        </div>
                        <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                            <h3 className="text-4xl font-bold text-blue-600 mb-2">3,500+</h3>
                            <p className="text-gray-600 dark:text-gray-400">Scholarships Awarded</p>
                        </div>
                    </div>
                </AnimationWrapper>

                <div className="pt-10 text-center">
                    <Link href="/donate" className="inline-block rounded-full bg-blue-600 px-10 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-700 transition-all">
                        Sponsor a Student
                    </Link>
                </div>
            </section>
        </div>
    );
}
