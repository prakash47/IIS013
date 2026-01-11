import VolunteerForm from "@/components/VolunteerForm";
import { HandHeart, Users, GraduationCap, Heart } from "lucide-react";

export const metadata = {
    title: "Get Involved | Roshni Foundation",
    description: "Join us as a volunteer and make a difference.",
};

export default function GetInvolvedPage() {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Side: Information & Ways to Help */}
            <div className="relative h-full w-full bg-zinc-900 text-white p-12 lg:p-24 flex flex-col justify-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="relative z-10 space-y-12">
                    <div>
                        <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">Join the Movement</span>
                        <h1 className="text-5xl font-bold mt-2 mb-6 leading-tight">Be the Change <br /> You Wish to See.</h1>
                        <p className="text-xl text-zinc-400 max-w-md">
                            Your time and skills can transform lives. Here are a few ways you can make an immediate impact:
                        </p>
                    </div>

                    <div className="grid gap-8">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="p-3 bg-blue-600/20 text-blue-400 rounded-lg">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Teach & Mentor</h3>
                                <p className="text-sm text-zinc-400">Tutor students in math, science, or english on weekends.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="p-3 bg-purple-600/20 text-purple-400 rounded-lg">
                                <HandHeart size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Fundraising</h3>
                                <p className="text-sm text-zinc-400">Organize local events to raise awareness and funds.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="p-3 bg-pink-600/20 text-pink-400 rounded-lg">
                                <Heart size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Medical Camps</h3>
                                <p className="text-sm text-zinc-400">Doctors and nurses needed for monthly health checkups.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex flex-col items-center justify-center p-8 lg:p-12 bg-white dark:bg-black">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-white">Volunteer Sign Up</h2>
                        <p className="text-gray-500">Fill out the form below to get started.</p>
                    </div>

                    <VolunteerForm />
                </div>
            </div>
        </div>
    );
}
