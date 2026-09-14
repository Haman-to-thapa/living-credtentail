export interface SyllabusModule {
    title: string
    topics: string[]
}

export interface ProgressDay {
    day: string
    value: number
}

export interface Candidate {
    rollNo: string
    name: string
    examName: string
    examDate: string
    score: number
    percentage: number
    passed: boolean
    syllabus: SyllabusModule[]
    progress: ProgressDay[]
}