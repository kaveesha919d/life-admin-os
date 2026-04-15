export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
          Life Admin OS • Phase 1
        </div>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Stay ahead of bills, subscriptions, renewals, and deadlines.
        </h1>

        <p className="mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
          Life Admin OS helps you manage the important admin side of life in one clean dashboard,
          before things become stressful.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:scale-105">
            Get Started
          </button>
          <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
            View Demo
          </button>
        </div>

        <div className="mt-14 grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left">
            <h2 className="text-lg font-semibold">Bills</h2>
            <p className="mt-2 text-sm text-slate-400">
              Track upcoming payments and never miss due dates.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left">
            <h2 className="text-lg font-semibold">Subscriptions</h2>
            <p className="mt-2 text-sm text-slate-400">
              See recurring costs clearly and stop money leaks.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left">
            <h2 className="text-lg font-semibold">Renewals</h2>
            <p className="mt-2 text-sm text-slate-400">
              Keep track of important expiry and renewal dates.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left">
            <h2 className="text-lg font-semibold">Deadlines</h2>
            <p className="mt-2 text-sm text-slate-400">
              Stay in control with a simple urgency-first view.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}