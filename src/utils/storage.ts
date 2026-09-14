const CLAIMED_PREFIX = "living-credential:claimed:"

export const isCertificateClaimed = (rollNo: string): boolean => {
    return localStorage.getItem(`${CLAIMED_PREFIX}${rollNo}`) === "true"
}

export const claimCertificate = (rollNo: string): void => {
    localStorage.setItem(`${CLAIMED_PREFIX}${rollNo}`, "true")
}