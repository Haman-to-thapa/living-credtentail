import type { Candidate } from "../typers/index"
import SyllabusAccordion from "./SyllabusAccordion"

interface CertificateFrontProps {
    candidate: Candidate
}

const CertificateFront = ({
    candidate,
}: CertificateFrontProps) => {
    return (
        <div className="p-6 sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Candidate
                    </p>

                    <h2 className="mt-2 break-words text-3xl font-bold sm:text-4xl">
                        {candidate.name}
                    </h2>

                    <p className="mt-2 text-slate-400">
                        Roll No. {candidate.rollNo}
                    </p>
                </div>

                <div className="w-fit rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
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

            <div className="mt-10 border-t border-slate-800 pt-5">
                <p className="text-xs leading-5 text-slate-500">
                    This credential reflects the candidate's verified examination result
                    and ongoing learning activity.
                </p>
            </div>
        </div>
    )
}

export default CertificateFront