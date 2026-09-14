const CLAIMED_PREFIX = "living-credential:claimed:"

// PRIP001 is pre-claimed as the primary showcase candidate so public share links work everywhere (e.g. Vercel, LinkedIn, external devices).
// PRIP002 remains unclaimed so reviewers can test the complete claim & validation flow.
const DEFAULT_CLAIMED = new Set(["prip001"])

export const isCertificateClaimed = (rollNo: string): boolean => {
    const normalized = rollNo.trim().toLowerCase()
    if (localStorage.getItem(`${CLAIMED_PREFIX}${normalized}`) === "true") {
        return true
    }
    return DEFAULT_CLAIMED.has(normalized)
}

export const claimCertificate = (rollNo: string): void => {
    localStorage.setItem(`${CLAIMED_PREFIX}${rollNo.trim().toLowerCase()}`, "true")
}