import { useState } from "react"
import type { SyllabusModule } from '../typers/index'

interface SyllabusAccordionProps {
    modules: SyllabusModule[]
}

const SyllabusAccordion = ({
    modules,
}: SyllabusAccordionProps) => {
    const [openModule, setOpenModule] = useState<number | null>(0)

    const toggleModule = (index: number) => {
        setOpenModule((current) =>
            current === index ? null : index
        )
    }

    return (
        <section className="mt-10">
            <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Syllabus
                </p>

                <h3 className="mt-1 text-xl font-semibold">
                    Areas covered
                </h3>
            </div>

            <div className="space-y-3">
                {modules.map((module, index) => {
                    const isOpen = openModule === index

                    return (
                        <div
                            key={module.title}
                            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50"
                        >
                            <button
                                type="button"
                                onClick={() => toggleModule(index)}
                                aria-expanded={isOpen}
                                aria-controls={`syllabus-panel-${index}`}
                                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-white/60"
                            >
                                <span className="font-medium">
                                    {module.title}
                                </span>

                                <span
                                    aria-hidden="true"
                                    className={`text-xl transition-transform duration-200 ${isOpen ? "rotate-45" : ""
                                        }`}
                                >
                                    +
                                </span>
                            </button>

                            {isOpen && (
                                <div
                                    id={`syllabus-panel-${index}`}
                                    className="border-t border-slate-800 px-5 py-4"
                                >
                                    <ul className="space-y-2">
                                        {module.topics.map((topic) => (
                                            <li
                                                key={topic}
                                                className="flex items-start gap-3 text-sm text-slate-400"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500"
                                                />

                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SyllabusAccordion