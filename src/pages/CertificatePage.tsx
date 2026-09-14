import { useParams, Link } from "react-router-dom"

import { candidates } from "../data/candidates"
import CertificateCard from "../components/CertificateCard"
import ShareButton from "../components/ShareButton"
import { isCertificateClaimed } from "../utils/storage"

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

    const claimed = isCertificateClaimed(candidate.rollNo)

    if (!claimed) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
                <div className="max-w-md text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                        The Living Credential
                    </p>

                    <h1 className="mt-4 text-3xl font-bold">
                        Certificate Not Found
                    </h1>

                    <p className="mt-4 leading-7 text-slate-400">
                        This certificate has not been claimed yet and is not publicly
                        available.
                    </p>

                    <Link
                        to="/claim"
                        className="mt-8 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white/60"
                    >
                        Claim your credential
                    </Link>
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

                <CertificateCard candidate={candidate} />

                <div className="mt-6 flex justify-end">
                    <ShareButton rollNo={candidate.rollNo} />
                </div>
            </section>
        </main>
    )
}

export default CertificatePage