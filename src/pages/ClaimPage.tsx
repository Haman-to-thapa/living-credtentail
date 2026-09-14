import ClaimForm from "../components/ClaimForm"

const ClaimPage = () => {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <section className="mx-auto max-w-4xl px-6 py-20">
                <p className="mb-4 text-sm font-medium tracking-[0.25em] text-slate-400">
                    THE LIVING CREDENTIAL
                </p>

                <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                    Claim Your Learning Credential
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-slate-400">
                    Your exam result tells what you achieved. Your learning journey
                    tells the rest.
                </p>

                <div className="mt-10">
                    <ClaimForm />
                </div>
            </section>
        </main>
    )
}

export default ClaimPage