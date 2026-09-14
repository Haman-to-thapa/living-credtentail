import { useState } from "react"
import type { Candidate } from "../typers/index"

import CertificateBack from "./CertificateBack"
import CertificateFront from './CertificateFront'

interface CertificateCardProps {
    candidate: Candidate
}

const CertificateCard = ({
    candidate,
}: CertificateCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const toggleFlip = () => {
        setIsFlipped((current) => !current)
    }

    return (
        <div className="w-full">
            <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-sm text-slate-400">
                    {isFlipped
                        ? "Viewing your learning journey"
                        : "Viewing your achievement"}
                </p>

                <button
                    type="button"
                    onClick={toggleFlip}
                    className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-white/60"
                    aria-label={
                        isFlipped
                            ? "Show certificate achievement"
                            : "Show learning journey"
                    }
                >
                    {isFlipped ? "Show Front" : "Show Journey"}
                </button>
            </div>

            <div className="relative [perspective:1600px]">
                <div
                    className={`
            relative grid w-full
            transition-transform duration-700
            [transform-style:preserve-3d]
            motion-reduce:transition-none
            ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
          `}
                >
                    <div
                        aria-hidden={isFlipped}
                        className={`
              col-start-1 row-start-1 w-full overflow-hidden rounded-3xl
              border border-slate-800 bg-slate-900 shadow-2xl
              [backface-visibility:hidden]
              ${isFlipped ? "pointer-events-none" : ""}
            `}
                    >
                        <CertificateFront candidate={candidate} />
                    </div>

                    <div
                        aria-hidden={!isFlipped}
                        className={`
              col-start-1 row-start-1 w-full overflow-hidden rounded-3xl
              border border-slate-800 bg-slate-900 shadow-2xl
              [backface-visibility:hidden]
              [transform:rotateY(180deg)]
              ${!isFlipped ? "pointer-events-none" : ""}
            `}
                    >
                        <CertificateBack candidate={candidate} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificateCard