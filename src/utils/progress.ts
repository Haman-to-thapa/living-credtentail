import type { ProgressDay } from "../typers/index"

const getRandomChange = (value: number): number => {
    const change = value * (Math.random() * 0.2 - 0.1)

    return Math.round(value + change)
}

export const generateDynamicProgress = (
    progress: ProgressDay[]
): ProgressDay[] => {
    return progress.map((item) => ({
        ...item,
        value: Math.min(100, Math.max(0, getRandomChange(item.value))),
    }))
}