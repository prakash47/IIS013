"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AnimationWrapper from "@/components/AnimationWrapper";

const faqData = [
    { q: "How much of my donation goes to the cause?", a: "100% of public donations go directly to funding our programs. Operational costs are covered by private donors and grants." },
    { q: "Can I sponsor a specific student?", a: "Yes! Our 'Sponsor a Dream' program allows you to connect directly with a student and support her entire educational journey. You'll receive updates and letters from your sponsored student." },
    { q: "Are donations tax-deductible?", a: "Absolutely. We are a registered 501(c)(3) non-profit organization. You will receive a tax receipt for every donation." },
    { q: "How do you select the students who receive scholarships?", a: "We work with local schools and community leaders to identify girls from the most marginalized families who show academic promise and a strong desire to learn." },
    { q: "Can I volunteer remotely?", a: "Yes! We have remote opportunities including online tutoring, mentorship via video calls, content creation, and fundraising support." },
    { q: "How can I see the impact of my donation?", a: "We publish annual impact reports with detailed financials and success stories. Sponsors also receive personalized updates about their sponsored students." },
];

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AnimationWrapper animation="fade-up" delay={index * 0.1}>
            <div
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden transition-all hover:border-blue-500/50"
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full p-6 flex justify-between items-center text-left cursor-pointer"
                >
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white pr-4">{question}</h3>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-blue-600 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'}`}>
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                </button>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <p className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {answer}
                    </p>
                </div>
            </div>
        </AnimationWrapper>
    );
}

export default function FaqSection() {
    return (
        <section className="w-full py-24 px-6 bg-zinc-50 dark:bg-zinc-950">
            <div className="max-w-4xl mx-auto">
                <AnimationWrapper>
                    <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-white">Common Questions</h2>
                </AnimationWrapper>
                <div className="space-y-4">
                    {faqData.map((faq, i) => (
                        <FaqItem key={i} question={faq.q} answer={faq.a} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
