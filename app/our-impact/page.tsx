import ImpactCounter from "@/components/ImpactCounter";
import AnimationWrapper from "@/components/AnimationWrapper";
import Link from "next/link";
import { MapPin, Download, TrendingUp } from "lucide-react";

export const metadata = {
    title: "Our Impact | Roshni Foundation",
    description: "See the tangible difference we make in girls' lives.",
};

export default function OurImpactPage() {
    return (
        <div className="w-full">
            {/* Header */}
            <section className="bg-zinc-900 text-white py-32 text-center px-6">
                <AnimationWrapper animation="fade-up">
                    <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">Transparency</span>
                    <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">Measuring Change</h1>
                    <p className="text-xl max-w-2xl mx-auto text-zinc-400">
                        We believe in transparency and results. Here is how your support translates into real-world impact.
                    </p>
                </AnimationWrapper>
            </section>

            {/* Counters Section */}
            <section className="py-24 px-6 bg-gray-50 dark:bg-black">
                <ImpactCounter />
            </section>

            {/* Stories Section */}
            <section className="py-24 px-6 bg-white dark:bg-zinc-950">
                <div className="max-w-7xl mx-auto space-y-24">
                    <AnimationWrapper>
                        <h2 className="text-3xl font-bold text-center mb-16 text-zinc-900 dark:text-white">Stories of Transformation</h2>
                    </AnimationWrapper>

                    {/* Story 1 */}
                    <AnimationWrapper animation="fade-up">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1600&auto=format&fit=crop')" }}
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">Aisha's Journey</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                                    Aisha was on the verge of dropping out to support her family. With a Roshni scholarship, she not only finished high school but is now pursuing a degree in nursing.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-400 italic border-l-4 border-blue-500 pl-4">
                                    "Roshni Foundation didn't just give me books; they gave me a future I never thought possible."
                                </p>
                            </div>
                        </div>
                    </AnimationWrapper>

                    {/* Story 2 */}
                    <AnimationWrapper animation="fade-up" delay={0.2}>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-last md:order-first">
                                <h3 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">Community Transformation</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                                    When girls are educated, entire communities rise. Our partner village has seen a 40% drop in child marriage rates since our program began.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-400">
                                    We work closely with local leaders to create an environment where education is valued and championed.
                                </p>
                            </div>
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop')" }}
                                />
                            </div>
                        </div>
                    </AnimationWrapper>
                </div>
            </section>

            {/* Where We Work */}
            <section className="py-24 px-6 bg-zinc-50 dark:bg-black">
                <div className="max-w-5xl mx-auto">
                    <AnimationWrapper>
                        <h2 className="text-3xl font-bold text-center mb-16 text-zinc-900 dark:text-white">Where We Work</h2>
                    </AnimationWrapper>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { region: "Rajasthan", villages: 12, students: 1800 },
                            { region: "Bihar", villages: 8, students: 1500 },
                            { region: "Uttar Pradesh", villages: 5, students: 1700 }
                        ].map((loc, i) => (
                            <AnimationWrapper key={i} animation="scale-up" delay={i * 0.15}>
                                <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center hover:shadow-xl transition-shadow">
                                    <MapPin className="mx-auto mb-4 text-blue-500 w-10 h-10" />
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{loc.region}</h3>
                                    <p className="text-gray-500 mt-2">{loc.villages} Villages | {loc.students.toLocaleString()} Students</p>
                                </div>
                            </AnimationWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-blue-600 text-white text-center">
                <AnimationWrapper animation="scale-up">
                    <h2 className="text-4xl font-bold mb-6">Join Our Growing Impact</h2>
                    <p className="text-xl opacity-90 max-w-xl mx-auto mb-8">
                        Your contribution today helps us reach the next 5,000 girls.
                    </p>
                    <Link href="/donate" className="inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-blue-600 shadow-lg hover:scale-105 transition-transform">
                        Donate Now
                    </Link>
                </AnimationWrapper>
            </section>
        </div>
    );
}
