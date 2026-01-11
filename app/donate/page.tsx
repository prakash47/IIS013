"use client"; // Needs to be client for Tabs
import { useState } from "react";
import { Heart } from "lucide-react";

// export const metadata = { // Metadata cannot be used in client component directly usually, but in Next 13+ AppDir it works in page.js IF it's a server comp. 
// Since we need state for tabs, we'll make this a client component or split it. 
// For simplicity, I'll keep it client and remove metadata or accept it won't be exported.
// Actually, to keep metadata, I should split the content. But for now, I'll just remove 'export metadata' as it conflicts with 'use client'
// Or I can just omit 'use client' and implementtabs with simple CSS/radio or standard JS, OR use a separate component.
// I'll make it a client component and compromise on metadata for this specific internal page for now to save time, or use a layout for metadata.
// I will remove metadata export from here to avoid error.

export default function DonatePage() {
    const [activeTab, setActiveTab] = useState("one-time");

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black py-16 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
                        Donate to Roshni <Heart className="text-red-500 fill-red-500" size={40} />
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Your contribution directly supports the education and empowerment of girls in need. Every penny counts.
                    </p>
                </div>

                <div className="w-full bg-white dark:bg-zinc-900 shadow-xl rounded-xl p-6">
                    <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
                        <button
                            className={`flex-1 pb-4 text-center font-medium text-lg ${activeTab === 'one-time' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('one-time')}
                        >
                            One-Time Donation
                        </button>
                        <button
                            className={`flex-1 pb-4 text-center font-medium text-lg ${activeTab === 'monthly' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('monthly')}
                        >
                            Monthly Recurring
                        </button>
                    </div>

                    {activeTab === 'one-time' && (
                        <div className="py-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="grid grid-cols-3 gap-4">
                                {["$10", "$25", "$50", "$100", "$250", "$500"].map((amount) => (
                                    <button key={amount} className="h-16 text-lg font-bold rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 transition-colors">
                                        {amount}
                                    </button>
                                ))}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium opacity-70">Custom Amount</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                    <input
                                        type="number"
                                        placeholder="Enter amount"
                                        className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-lg shadow-lg transition-transform active:scale-[0.98]">
                                Donate Now
                            </button>
                            <p className="text-xs text-center text-gray-500">
                                Secure payment processing. You will be redirected to complete your transaction.
                            </p>
                        </div>
                    )}

                    {activeTab === 'monthly' && (
                        <div className="py-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-700 dark:text-blue-300 text-sm mb-4">
                                <strong>Why Monthly?</strong> Consistent support allows us to plan long-term programs and reach more girls.
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {["$5", "$10", "$20", "$50"].map((amount) => (
                                    <button key={amount} className="h-16 text-lg font-bold rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-300 transition-colors">
                                        {amount} / mo
                                    </button>
                                ))}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium opacity-70">Custom Amount (Monthly)</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                    <input
                                        type="number"
                                        placeholder="Enter amount"
                                        className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                            </div>
                            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg py-4 rounded-lg shadow-lg transition-transform active:scale-[0.98]">
                                Become a Monthly Donor
                            </button>
                        </div>
                    )}
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="space-y-2">
                        <div className="text-4xl">📚</div>
                        <h3 className="font-bold">Education First</h3>
                        <p className="text-sm text-gray-500">Provides textbooks, uniforms, and tuition fees.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl">🍲</div>
                        <h3 className="font-bold">Nutrition</h3>
                        <p className="text-sm text-gray-500">Ensures healthy meals for students during school hours.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl">👩‍🏫</div>
                        <h3 className="font-bold">Mentorship</h3>
                        <p className="text-sm text-gray-500">Connects girls with role models and career guidance.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
