import { useState } from "react"

interface ShareButtonProps {
    rollNo: string
}

const ShareButton = ({ rollNo }: ShareButtonProps) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        const url = `${window.location.origin}/certificate/${rollNo}`

        try {
            await navigator.clipboard.writeText(url)

            setCopied(true)

            setTimeout(() => {
                setCopied(false)
            }, 2000)
        } catch {
            setCopied(false)
        }
    }

    return (
        <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-live="polite"
        >
            {copied ? "✓ Link Copied" : "Copy Certificate Link"}
        </button>
    )
}

export default ShareButton