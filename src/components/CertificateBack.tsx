import type { Candidate } from "../typers/index"
import ProgressTimeline from "./ProgressTimeline"
import { useMemo } from "react"
import { generateDynamicProgress } from "../utils/progress"

interface CertificateBackProps {
    candidate: Candidate
}

const CertificateBack = ({
    candidate,
}: CertificateBackProps) => {
    const dynamicProgress = useMemo(
        () => generateDynamicProgress(candidate.progress),
        [candidate.progress]
    )

    const totalProgress = dynamicProgress.reduce(
        (sum, item) => sum + item.value,
        0
    )

    const averageProgress = Math.round(
        totalProgress / dynamicProgress.length
    )

    return (
        <div className="min-h-full p-6 sm:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        The journey
                    </p>

                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                        Your Learning Journey
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                        Your credential keeps evolving as you continue learning,
                        practicing, and improving.
                    </p>
                </div>

                <div className="rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300">
                    🔥 {candidate.streak} day streak
                </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                        7-day average
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                        {averageProgress}%
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                        Learning activity
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                        Active days
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                        {candidate.progress.length}/7
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                        In the last 7 days
                    </p>
                </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-5 sm:p-6">
                <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Activity
                    </p>

                    <h3 className="mt-1 text-lg font-semibold">
                        Last 7 days
                    </h3>
                </div>

                <ProgressTimeline progress={dynamicProgress} />
            </div>

            <div className="mt-6 flex flex-col gap-2 border-t border-slate-800 pt-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <span>Continuing progress keeps this credential alive.</span>

                <span>Activity refreshed just now</span>
            </div>
        </div>
    )
}

export default CertificateBack