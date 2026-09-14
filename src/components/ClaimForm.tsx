import { useState } from "react"
import type { FormEvent } from "react"
import { useNavigate } from "react-router-dom"

import { candidates } from "../data/candidates"
import {
    claimCertificate,
    isCertificateClaimed,
} from "../utils/storage"

type FormStatus = "idle" | "loading" | "error" | "success"

const ClaimForm = () => {
    const navigate = useNavigate()

    const [rollNo, setRollNo] = useState("")
    const [feedback, setFeedback] = useState("")
    const [status, setStatus] = useState<FormStatus>("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setErrorMessage("")
        setStatus("idle")

        const trimmedRollNo = rollNo.trim()
        const trimmedFeedback = feedback.trim()

        if (!trimmedRollNo) {
            setErrorMessage("Please enter your roll number.")
            setStatus("error")
            return
        }

        if (!trimmedFeedback) {
            setErrorMessage("Please enter your feedback.")
            setStatus("error")
            return
        }

        if (trimmedFeedback.length < 20) {
            setErrorMessage(
                "Your feedback must be at least 20 characters long."
            )
            setStatus("error")
            return
        }

        const candidate = candidates.find(
            (item) => item.rollNo.toLowerCase() === trimmedRollNo.toLowerCase()
        )

        if (!candidate) {
            setErrorMessage("We couldn't find a candidate with that roll number.")
            setStatus("error")
            return
        }

        if (isCertificateClaimed(candidate.rollNo)) {
            navigate(`/certificate/${candidate.rollNo}`)
            return
        }

        setStatus("loading")

        setTimeout(() => {
            claimCertificate(candidate.rollNo)
            setStatus("success")

            setTimeout(() => {
                navigate(`/certificate/${candidate.rollNo}`)
            }, 500)
        }, 700)
    }

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className="w-full max-w-xl space-y-5"
        >
            <div className="space-y-2">
                <label
                    htmlFor="rollNo"
                    className="block text-sm font-medium text-slate-200"
                >
                    Roll Number
                </label>

                <input
                    id="rollNo"
                    name="rollNo"
                    type="text"
                    value={rollNo}
                    onChange={(event) => setRollNo(event.target.value)}
                    placeholder="e.g. PRIP001"
                    disabled={status === "loading" || status === "success"}
                    aria-invalid={status === "error"}
                    aria-describedby="form-error"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white focus:ring-2 focus:ring-white/20 disabled:cursor-not-allowed disabled:opacity-60"
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                    <label
                        htmlFor="feedback"
                        className="block text-sm font-medium text-slate-200"
                    >
                        Your Feedback
                    </label>

                    <span className="text-xs text-slate-500">
                        {feedback.trim().length}/20 minimum
                    </span>
                </div>

                <textarea
                    id="feedback"
                    name="feedback"
                    value={feedback}
                    onChange={(event) => setFeedback(event.target.value)}
                    placeholder="Tell us about your learning experience..."
                    rows={6}
                    minLength={20}
                    disabled={status === "loading" || status === "success"}
                    aria-invalid={status === "error"}
                    aria-describedby="form-error"
                    className="w-full resize-y rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white focus:ring-2 focus:ring-white/20 disabled:cursor-not-allowed disabled:opacity-60"
                />
            </div>

            {status === "error" && (
                <p
                    id="form-error"
                    role="alert"
                    className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                    {errorMessage}
                </p>
            )}

            {status === "success" && (
                <div
                    role="status"
                    className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4"
                >
                    <div className="flex items-start gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                            ✓
                        </span>

                        <div>
                            <p className="font-semibold text-emerald-200">
                                Credential claimed successfully.
                            </p>

                            <p className="mt-1 text-sm text-emerald-300/70">
                                Preparing your public certificate...
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {status === "loading"
                    ? "Verifying credential..."
                    : status === "success"
                        ? "Credential Claimed"
                        : "Claim Certificate"}
            </button>
        </form>
    )
}

export default ClaimForm