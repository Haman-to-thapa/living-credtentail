import { useParams } from "react-router-dom"

import { candidates } from "../data/candidates"

import SyllabusAccordion from "../components/SyllabusAccordion"

const CertificatePage = () => {
    const { rollNo } = useParams<{ rollNo: string }>()

    const candidate = candidates.find(
        (item) => item.rollNo.toLowerCase() === rollNo?.toLowerCase()
    )

    if (!candidate) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
                <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                        Living Credential
                    </p>

                    <h1 className="mt-4 text-3xl font-bold">
                        Certificate Not Found
                    </h1>

                    <p className="mt-3 text-slate-400">
                        We couldn't find a certificate for this roll number.
                    </p>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 sm:py-16">
            <section className="mx-auto max-w-5xl">
                <div className="mb-8 text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                        The Living Credential
                    </p>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Verified Learning Certificate
                    </h1>
                </div>

                <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
                    <div className="p-6 sm:p-10">
                        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Candidate
                                </p>

                                <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                                    {candidate.name}
                                </h2>

                                <p className="mt-2 text-slate-400">
                                    Roll No. {candidate.rollNo}
                                </p>
                            </div>

                            <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                                ✓ Verified
                            </div>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                                <p className="text-xs uppercase tracking-wider text-slate-500">
                                    Examination
                                </p>

                                <p className="mt-2 font-semibold">
                                    {candidate.examName}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                                <p className="text-xs uppercase tracking-wider text-slate-500">
                                    Exam Date
                                </p>

                                <p className="mt-2 font-semibold">
                                    {candidate.examDate}
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-800 p-6 text-center">
                                <p className="text-xs uppercase tracking-wider text-slate-500">
                                    Score
                                </p>

                                <p className="mt-2 text-4xl font-bold">
                                    {candidate.score}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 p-6 text-center">
                                <p className="text-xs uppercase tracking-wider text-slate-500">
                                    Percentage
                                </p>

                                <p className="mt-2 text-4xl font-bold">
                                    {candidate.percentage}%
                                </p>
                            </div>

                            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center">
                                <p className="text-xs uppercase tracking-wider text-slate-500">
                                    Result
                                </p>

                                <p className="mt-2 text-2xl font-bold text-emerald-300">
                                    {candidate.passed ? "PASSED" : "FAILED"}
                                </p>
                            </div>
                        </div>

                        <SyllabusAccordion modules={candidate.syllabus} />
                    </div>
                </article>
            </section>
        </main>
    )
}

export default CertificatePage