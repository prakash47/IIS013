import Image from "next/image";
import Link from "next/link";
import { Users, Star, Target } from "lucide-react";
import AnimationWrapper from "@/components/AnimationWrapper";

export const metadata = {
    title: "Mentorship Programs | Roshni Foundation",
    description: "Connecting students with role models and career guidance.",
};

export default function MentorshipPage() {
    return (
        <div className="w-full">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white bg-purple-900">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop')" }}
                />
                <div className="relative z-20 text-center px-6 max-w-4xl">
                    <AnimationWrapper animation="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium mb-4 backdrop-blur-sm">
                            Leadership & Growth
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Mentorship Programs</h1>
                        <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto">
                            Guidance today for the leaders of tomorrow.
                        </p>
                    </AnimationWrapper>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-6 max-w-4xl mx-auto space-y-16">
                <AnimationWrapper delay={0.2}>
                    <p className="text-2xl font-serif italic text-center text-gray-700 dark:text-gray-300">
                        "You can't be what you can't see."
                    </p>
                </AnimationWrapper>

                <div className="grid md:grid-cols-2 gap-12">
                    <AnimationWrapper delay={0.3}>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600">
                                <Users size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">1-on-1 Coaching</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Every high school senior is paired with a female professional who provides personalized guidance on college applications and career choices.
                            </p>
                        </div>
                    </AnimationWrapper>

                    <AnimationWrapper delay={0.4}>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600">
                                <Target size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Skill Workshops</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Weekly sessions on public speaking, financial literacy, coding, and resume writing.
                            </p>
                        </div>
                    </AnimationWrapper>
                </div>

                <AnimationWrapper delay={0.5}>
                    <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
                        <h3 className="text-2xl font-bold mb-4">Become a Mentor</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                            Do you have 2 hours a month to spare? Share your journey and inspire the next generation.
                        </p>
                        <Link href="/get-involved" className="inline-block rounded-lg bg-purple-600 px-8 py-3 font-bold text-white hover:bg-purple-700 transition-all">
                            Apply to Mentor
                        </Link>
                    </div>
                </AnimationWrapper>
            </section>
        </div>
    );
}
