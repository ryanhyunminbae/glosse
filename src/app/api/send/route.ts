import { Resend } from "resend";
export async function POST() {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    const { data, error } = await resend.emails.send({
        from: "hello@yourdomain.com",
        to: "you@example.com",
        subject: "Glossé test email",
        text: "It works!",
    });
    if (error) return Response.json({ error }, { status: 500 });
    return Response.json({ data });
}