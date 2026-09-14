import ClaimForm from "../components/ClaimForm"

const ClaimPage = () => {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <section className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-5 py-12 sm:px-8 lg:px-10">
                <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

                    <div>
                        <div className="mb-6 inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                            The Living Credential
                        </div>

                        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Your achievement is only part of the story.
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                            Claim your learning credential and share not only what you
                            achieved, but how you continue to grow.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                                <p className="text-2xl">🏆</p>
                                <p className="mt-3 text-sm font-semibold">
                                    Achievement
                                </p>
                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Your verified exam result.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                                <p className="text-2xl">↗</p>
                                <p className="mt-3 text-sm font-semibold">
                                    Progress
                                </p>
                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Your continuing learning journey.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                                <p className="text-2xl">✓</p>
                                <p className="mt-3 text-sm font-semibold">
                                    Shareable
                                </p>
                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    A public credential you can share.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">
                        <div className="mb-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                Claim credential
                            </p>

                            <h2 className="mt-2 text-2xl font-bold">
                                Verify your achievement
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                Enter your roll number and tell us about your learning
                                experience.
                            </p>
                        </div>

                        <ClaimForm />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ClaimPage