import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Users } from "lucide-react";
import AnimationWrapper from "@/components/AnimationWrapper";
import FaqSection from "@/components/FaqSection";

export default function Home() {
    return (
        <div className="flex flex-col items-center w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center bg-zinc-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 animate-ken-burns"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop')" }}
                />

                <div className="relative z-20 text-center px-6 max-w-5xl mx-auto space-y-8">
                    <AnimationWrapper animation="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-4 backdrop-blur-sm">
                            Empowering Since 2010
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
                            Ignite Her <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Potential
                            </span>
                        </h1>
                    </AnimationWrapper>

                    <AnimationWrapper animation="fade-up" delay={0.2}>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                            Education is the most powerful tool to change the world. We provide scholarships, mentorship, and hope to girls in underserved communities.
                        </p>
                    </AnimationWrapper>

                    <AnimationWrapper animation="fade-up" delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                            <Link href="/donate" className="group relative px-8 py-4 bg-blue-600 rounded-full font-bold text-lg overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-all">
                                <span className="relative z-10 group-hover:pr-2 transition-all">Donate Now</span>
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all z-10">
                                    <Heart size={18} className="fill-white" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <Link href="/get-involved" className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2">
                                Get Involved <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </AnimationWrapper>
                </div>
            </section>

            {/* Mission Statistics */}
            <section className="w-full py-24 px-6 bg-white dark:bg-black relative z-10 -mt-20 rounded-t-[3rem]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { number: "5,000+", label: "Girls Educated", icon: BookOpen, color: "text-blue-500" },
                            { number: "120+", label: "Schools Partnered", icon: Users, color: "text-purple-500" },
                            { number: "25", label: "Communities Served", icon: Heart, color: "text-pink-500" }
                        ].map((stat, index) => (
                            <AnimationWrapper key={index} animation="scale-up" delay={index * 0.1}>
                                <div className="p-10 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                                    <stat.icon className={`mx-auto mb-6 w-12 h-12 ${stat.color}`} />
                                    <h3 className="text-5xl font-black text-zinc-900 dark:text-white mb-2">{stat.number}</h3>
                                    <p className="text-lg font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            </AnimationWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Programs */}
            <section className="w-full py-24 px-6 bg-zinc-50 dark:bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <AnimationWrapper>
                        <div className="text-center mb-16">
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">What We Do</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-zinc-900 dark:text-white">Holistic Support Systems</h2>
                        </div>
                    </AnimationWrapper>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Academic Scholarships", desc: "Full tuition coverage, uniforms, and textbooks for girls from low-income families.", img: "photo-1456513080510-7bf3a84b82f8", link: "/programs/scholarships" },
                            { title: "Mentorship Programs", desc: "Connecting students with professional women to guide their career paths and personal growth.", img: "photo-1522202176988-66273c2fd55f", link: "/programs/mentorship" },
                            { title: "Health & Nutrition", desc: "Daily nutritious meals and regular health checkups to ensure physical well-being.", img: "photo-1498837167922-ddd27525d352", link: "/programs/health" }
                        ].map((item, i) => (
                            <AnimationWrapper key={i} animation="fade-up" delay={i * 0.2}>
                                <Link href={item.link} className="block group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('https://images.unsplash.com/${item.img}?q=80&w=800&auto=format&fit=crop')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                        <p className="text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            {item.desc}
                                        </p>
                                        <div className="mt-6 flex items-center text-blue-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                            Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </AnimationWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="w-full py-24 px-6 bg-white dark:bg-black overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <AnimationWrapper>
                        <h2 className="text-4xl font-bold text-center mb-16 text-zinc-900 dark:text-white">Voices of Change</h2>
                    </AnimationWrapper>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { quote: "I never thought I would finish school. Now I am the first in my family to go to college.", author: "Priya, Student", role: "Class of 2024" },
                            { quote: "Supporting Roshni Foundation is the best investment I have made. You can see the impact daily.", author: "Sarah Jenkins", role: "Monthly Donor" },
                            { quote: "The mentorship program gave me the confidence to dream big and aim for the stars.", author: "Ananya", role: "Aspiring Engineer" }
                        ].map((t, i) => (
                            <AnimationWrapper key={i} animation="fade-up" delay={i * 0.2}>
                                <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300">
                                    <div className="mb-6 text-blue-500">
                                        {[1, 2, 3, 4, 5].map(star => <span key={star}>★</span>)}
                                    </div>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">"{t.quote}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                                            {t.author[0]}
                                        </div>
                                        <div>
                                            <p className="font-bold text-zinc-900 dark:text-white">{t.author}</p>
                                            <p className="text-sm text-gray-500">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimationWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FaqSection />

            {/* CTA Section */}
            <section className="w-full py-32 px-6 bg-blue-600 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <AnimationWrapper animation="scale-up">
                    <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                        <h2 className="text-5xl md:text-6xl font-black">Ready to Rewrite a Future?</h2>
                        <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                            Join over 10,000 donors who are making a daily difference.
                        </p>
                        <div className="pt-8">
                            <Link href="/donate" className="inline-block rounded-full bg-white px-12 py-5 text-xl font-bold text-blue-600 shadow-2xl hover:scale-105 hover:shadow-white/20 transition-all duration-300">
                                Donate Now
                            </Link>
                        </div>
                    </div>
                </AnimationWrapper>
            </section>
        </div>
    );
}

