"use client";

import { useActionState } from "react"; // React 19 hook
import { submitVolunteer, type State } from "@/actions/volunteer";

const initialState: State = {
    success: false,
    message: "",
    errors: {},
};

export default function VolunteerForm() {
    const [state, formAction, isPending] = useActionState(submitVolunteer, initialState);

    return (
        <div className="max-w-md w-full mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border border-gray-100 dark:border-zinc-800">
            <div className="flex flex-col gap-1 mb-6">
                <p className="text-lg font-bold">Join the Movement</p>
                <p className="text-sm text-gray-500">Sign up to volunteer</p>
            </div>

            <form action={formAction} className="flex flex-col gap-4">
                <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                        className={`w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${state.errors?.name ? 'border-red-500' : 'border-gray-300 dark:border-zinc-700 bg-transparent'}`}
                    />
                    {state.errors?.name && <p className="text-xs text-red-500">{state.errors.name[0]}</p>}
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className={`w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${state.errors?.email ? 'border-red-500' : 'border-gray-300 dark:border-zinc-700 bg-transparent'}`}
                    />
                    {state.errors?.email && <p className="text-xs text-red-500">{state.errors.email[0]}</p>}
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="availability">Availability</label>
                    <textarea
                        id="availability"
                        name="availability"
                        placeholder="When can you help?"
                        rows={3}
                        className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full rounded-lg bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isPending ? "Submitting..." : "Sign Up"}
                </button>

                {state.message && (
                    <p className={`text-center text-sm mt-2 ${state.success ? 'text-green-600' : 'text-red-600'}`}>
                        {state.message}
                    </p>
                )}
            </form>
        </div>
    );
}
