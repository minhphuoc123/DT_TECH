"use client";

import { useMemo, useState } from "react";
import type { ContactField, ContactPageData } from "@/types/contact";

type Props = { data: ContactPageData["form"] };

type FormState = Record<string, string>;

function initState(fields: ContactField[]): FormState {
    return fields.reduce<FormState>((acc, f) => {
        acc[f.name] = "";
        return acc;
    }, {});
}

export default function ContactFormCard({ data }: Props) {
    const [values, setValues] = useState<FormState>(() => initState(data.fields));
    const [submitted, setSubmitted] = useState(false);

    const requiredNames = useMemo(
        () => new Set(data.fields.filter((f) => f.required).map((f) => f.name)),
        [data.fields]
    );

    const isValid = useMemo(() => {
        for (const name of requiredNames) {
            if (!values[name] || values[name].trim().length === 0) return false;
        }
        return true;
    }, [values, requiredNames]);

    function onChange(name: string, v: string) {
        setValues((prev) => ({ ...prev, [name]: v }));
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!isValid) return;
        
        setSubmitted(true);
        setValues(initState(data.fields));
    }

    return (
        <div
            className="rounded-2xl border bg-white p-6 shadow-sm"
            style={{ borderColor: "rgba(25,36,52,0.12)" }}
        >
            <div className="text-lg font-extrabold" style={{ color: "var(--dt-navy)" }}>
                {data.title}
            </div>
            {data.description && (
                <div className="mt-1 text-sm opacity-80" style={{ color: "var(--dt-navy)" }}>
                    {data.description}
                </div>
            )}

            {submitted && (
                <div
                    className="mt-4 rounded-xl border px-4 py-3 text-sm"
                    style={{ borderColor: "rgba(253,202,2,0.35)", background: "rgba(253,202,2,0.18)", color: "var(--dt-navy)" }}
                >
                    {data.successMessage}
                </div>
            )}

            <form className="mt-5 space-y-4" onSubmit={onSubmit}>
                {data.fields.map((f) => (
                    <div key={f.name}>
                        <label className="block text-sm font-semibold" style={{ color: "var(--dt-navy)" }}>
                            {f.label} {f.required ? <span className="opacity-60">*</span> : null}
                        </label>

                        {f.type === "textarea" ? (
                            <textarea
                                value={values[f.name] ?? ""}
                                onChange={(e) => onChange(f.name, e.target.value)}
                                placeholder={f.placeholder}
                                rows={6}
                                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
                                style={{
                                    borderColor: "rgba(25,36,52,0.18)",
                                    color: "var(--dt-navy)",
                                    background: "white",
                                }}
                            />
                        ) : (
                            <input
                                value={values[f.name] ?? ""}
                                onChange={(e) => onChange(f.name, e.target.value)}
                                placeholder={f.placeholder}
                                type={f.type}
                                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
                                style={{
                                    borderColor: "rgba(25,36,52,0.18)",
                                    color: "var(--dt-navy)",
                                    background: "white",
                                }}
                            />
                        )}
                    </div>
                ))}

                <button
                    type="submit"
                    disabled={!isValid}
                    className="mt-2 w-full rounded-xl px-5 py-3 text-sm font-extrabold transition disabled:cursor-not-allowed disabled:opacity-60"
                    style={{ background: "var(--dt-navy)", color: "var(--dt-yellow)" }}
                >
                    {data.submitLabel}
                </button>

                {data.note && (
                    <p className="text-xs opacity-70" style={{ color: "var(--dt-navy)" }}>
                        {data.note}
                    </p>
                )}
            </form>
        </div>
    );
}
