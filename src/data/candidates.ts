import type { Candidate } from "../typers/index"

export const candidates: Candidate[] = [
    {
        rollNo: "PRIP001",
        name: "Heman Thapa",
        examName: "Frontend Development Assessment",
        examDate: "2026-09-14",
        score: 92,
        percentage: 92,
        passed: true,

        syllabus: [
            {
                title: "Module 1: Foundations",
                topics: [
                    "HTML & Semantic Structure",
                    "CSS Fundamentals",
                    "Responsive Design",
                ],
            },
            {
                title: "Module 2: JavaScript",
                topics: [
                    "ES6+ Features",
                    "Array Methods",
                    "Asynchronous JavaScript",
                ],
            },
            {
                title: "Module 3: React",
                topics: [
                    "Components & Props",
                    "State & Hooks",
                    "API Integration",
                ],
            },
        ],

        progress: [
            { day: "Mon", value: 72 },
            { day: "Tue", value: 81 },
            { day: "Wed", value: 65 },
            { day: "Thu", value: 74 },
            { day: "Fri", value: 52 },
            { day: "Sat", value: 88 },
            { day: "Sun", value: 91 },
        ],
    },
    {
        rollNo: "PRIP002",
        name: "Ayesha Khan",
        examName: "Frontend Development Assessment",
        examDate: "2026-09-14",
        score: 87,
        percentage: 87,
        passed: true,

        syllabus: [
            {
                title: "Module 1: Foundations",
                topics: [
                    "HTML & Semantic Structure",
                    "CSS Fundamentals",
                    "Responsive Design",
                ],
            },
            {
                title: "Module 2: JavaScript",
                topics: [
                    "ES6+ Features",
                    "Array Methods",
                    "Asynchronous JavaScript",
                ],
            },
            {
                title: "Module 3: React",
                topics: [
                    "Components & Props",
                    "State & Hooks",
                    "API Integration",
                ],
            },
        ],

        progress: [
            { day: "Mon", value: 60 },
            { day: "Tue", value: 75 },
            { day: "Wed", value: 70 },
            { day: "Thu", value: 80 },
            { day: "Fri", value: 65 },
            { day: "Sat", value: 78 },
            { day: "Sun", value: 85 },
        ],
    },
]