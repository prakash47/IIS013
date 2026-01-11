import Image from "next/image";
import Link from "next/link";
import { HeartPulse, Utensils, Activity } from "lucide-react";
import AnimationWrapper from "@/components/AnimationWrapper";

export const metadata = {
    title: "Health & Nutrition | Roshni Foundation",
    description: "Ensuring physical well-being through nutritious meals and healthcare.",
};

export default function HealthPage() {
    return (
        <div className="w-full">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white bg-pink-900">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop')" }}
                />
                <div className="relative z-20 text-center px-6 max-w-4xl">
                    <AnimationWrapper animation="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-300 text-sm font-medium mb-4 backdrop-blur-sm">
                            Wellness First
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Health & Nutrition</h1>
                        <p className="text-xl md:text-2xl text-pink-100 max-w-2xl mx-auto">
                            Healthy bodies fuel healthy minds.
                        </p>
                    </AnimationWrapper>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-6 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Daily Meals", icon: Utensils, desc: "A hot, nutritious lunch for every student, every day. For many, this is their only complete meal." },
                        { title: "Checkups", icon: Activity, desc: "Quarterly health camps providing dental, vision, and general health screenings." },
                        { title: "Hygiene", icon: HeartPulse, desc: "Distribution of sanitary products and workshops on menstrual health management." }
                    ].map((item, i) => (
                        <AnimationWrapper key={i} animation="fade-up" delay={i * 0.2}>
                            <div className="h-full p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow">
                                <item.icon className="w-12 h-12 text-pink-500 mb-6" />
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </AnimationWrapper>
                    ))}
                </div>

                <AnimationWrapper delay={0.6} className="mt-20 text-center">
                    <div className="bg-pink-50 dark:bg-pink-900/10 p-12 rounded-3xl">
                        <h2 className="text-4xl font-bold text-pink-900 dark:text-pink-300 mb-6">A Meal Costs Only $0.50</h2>
                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            Your small contribution can ensure a child doesn't attend class on an empty stomach.
                        </p>
                        <Link href="/donate" className="inline-block rounded-full bg-pink-600 px-10 py-4 text-lg font-bold text-white shadow-lg hover:bg-pink-700 transition-all">
                            Donate Meals
                        </Link>
                    </div>
                </AnimationWrapper>
            </section>
        </div>
    );
}
