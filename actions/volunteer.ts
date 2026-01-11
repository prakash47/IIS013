"use server";

import { z } from "zod";
// import { after } from "next/server"; // Available in Next.js 15+ (experimental) or 16
// import { Resend } from "resend";

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    availability: z.string().optional(),
});

export type State = {
    success: boolean;
    message: string;
    errors?: { [key: string]: string[] };
};

export async function submitVolunteer(prevState: State | null, formData: FormData): Promise<State> {
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        availability: formData.get("availability"),
    };

    const parsed = schema.safeParse(data);

    if (!parsed.success) {
        return {
            success: false,
            message: "Validation failed",
            errors: parsed.error.flatten().fieldErrors,
        };
    }

    // Simulate non-blocking email
    // after(async () => {
    // await resend.emails.send(...)
    //   console.log("Email sent in background");
    // });

    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate latency

    return {
        success: true,
        message: "Thank you for signing up!",
    };
}
