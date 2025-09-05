"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase.client";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMsg("Signed in!");
        } catch (err: any) {
            setMsg(err?.message ?? "Error");
        }
    }

    return (
        <main className="max-w-sm mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input className="border w-full p-2 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
                <input className="border w-full p-2 rounded" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                <button className="border rounded px-4 py-2" type="submit">Sign in</button>
            </form>
            {!!msg && <p className="mt-4 text-sm">{msg}</p>}
        </main>
    );
}