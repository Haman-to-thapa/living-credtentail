import type { ProgressDay } from "../typers/index"


interface ProgressTimelineProps {
    progress: ProgressDay[]
}

const ProgressTimeline = ({ progress }: ProgressTimelineProps) => {
    const maxValue = Math.max(...progress.map((item) => item.value), 1)

    return (
        <div className="space-y-4">
            {progress.map((item) => {
                const width = (item.value / maxValue) * 100

                return (
                    <div key={item.day} className="grid min-w-0 grid-cols-[40px_minmax(0,1fr)_36px] items-center gap-2 sm:grid-cols-[48px_minmax(0,1fr)_40px] sm:gap-3">
                        <span className="text-sm font-medium text-slate-400">
                            {item.day}
                        </span>

                        <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                            <div
                                className="h-full rounded-full bg-white transition-all duration-500"
                                style={{ width: `${width}%` }}
                            />
                        </div>

                        <span className="text-right text-sm font-semibold text-white">
                            {item.value}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default ProgressTimeline