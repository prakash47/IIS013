
import AnimationWrapper from "@/components/AnimationWrapper";
import { Users, Award, Heart, Target } from "lucide-react";

export const metadata = {
    title: "Our Mission | Roshni Foundation",
    description: "Our mission, vision, and core values.",
};

export default function OurMissionPage() {
    return (
        <div className="w-full">
            {/* Hero */}
            <section className="bg-zinc-900 text-white py-32 px-6 text-center">
                <AnimationWrapper animation="fade-up">
                    <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">About Us</span>
                    <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">Our Mission</h1>
                    <p className="text-2xl font-serif italic max-w-3xl mx-auto text-zinc-400">
                        "To empower every girl with the education, resources, and confidence to write her own destiny."
                    </p>
                </AnimationWrapper>
            </section>

            {/* Vision */}
            <section className="py-24 px-6 bg-white dark:bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimationWrapper>
                        <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">Our Vision</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            We envision a world where gender is not a barrier to potential. A world where every girl has the agency to make decisions about her life, her career, and her body. We see a future where educated women lead positive change in their families, communities, and nations.
                        </p>
                    </AnimationWrapper>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950">
                <div className="max-w-5xl mx-auto">
                    <AnimationWrapper>
                        <h2 className="text-3xl font-bold mb-16 text-center text-zinc-900 dark:text-white">Core Values</h2>
                    </AnimationWrapper>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Inclusivity", icon: Users, desc: "We believe education is a right, not a privilege. We reach the most marginalized communities." },
                            { title: "Integrity", icon: Award, desc: "We are transparent, accountable, and rigorous in measuring our impact." },
                            { title: "Community", icon: Heart, desc: "We don't just work for communities; we work with them. Local partnership is key." },
                            { title: "Empowerment", icon: Target, desc: "We focus on long-term capability building, not just short-term aid." }
                        ].map((val, i) => (
                            <AnimationWrapper key={i} animation="fade-up" delay={i * 0.1}>
                                <div className="flex gap-6 p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:shadow-xl transition-shadow">
                                    <div className="shrink-0 w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600">
                                        <val.icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">{val.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400">{val.desc}</p>
                                    </div>
                                </div>
                            </AnimationWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Journey / Timeline */}
            <section className="py-24 px-6 bg-white dark:bg-black">
                <div className="max-w-4xl mx-auto">
                    <AnimationWrapper>
                        <h2 className="text-3xl font-bold mb-16 text-center text-zinc-900 dark:text-white">Our Journey</h2>
                    </AnimationWrapper>
                    <div className="space-y-12 relative before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-200 dark:before:bg-blue-900">
                        {[
                            { year: "2010", title: "Foundation Est.", desc: "Started with 50 students in one village." },
                            { year: "2014", title: "First Graduates", desc: "Our first cohort of scholarship recipients finished high school." },
                            { year: "2018", title: "Mentorship Launch", desc: "Partnered with 20 corporations to launch the mentorship program." },
                            { year: "2023", title: "5,000 Students", desc: "Reached the milestone of 5,000 girls educated across 25 communities." }
                        ].map((item, i) => (
                            <AnimationWrapper key={i} animation={i % 2 === 0 ? "slide-right" : "slide-left"} delay={i * 0.15}>
                                <div className={`relative flex flex-col md:flex-row items-start gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                                    <div className="shrink-0 w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg">
                                        {item.year}
                                    </div>
                                    <div className="flex-1 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                                        <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            </AnimationWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
