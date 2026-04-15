export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .lao-root {
          min-height: 100vh;
          background-color: #080c14;
          background-image:
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(251, 146, 60, 0.12) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 80% 60%, rgba(251, 146, 60, 0.05) 0%, transparent 60%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='1' cy='1' r='0.8' fill='rgba(255,255,255,0.04)'/%3E%3C/svg%3E");
          background-size: cover, cover, 32px 32px;
          font-family: 'DM Sans', sans-serif;
          color: #f1f0ea;
          overflow-x: hidden;
        }

        .lao-hero {
          max-width: 1100px;
          margin: 0 auto;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 5rem 2rem 4rem;
          text-align: center;
          gap: 0;
        }

        /* Badge */
        .lao-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 999px;
          border: 1px solid rgba(251, 146, 60, 0.3);
          background: rgba(251, 146, 60, 0.06);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fb923c;
          margin-bottom: 2.5rem;
          animation: fadeUp 0.6s ease both;
        }
        .lao-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fb923c;
          box-shadow: 0 0 6px rgba(251, 146, 60, 0.8);
          animation: pulse 2s ease infinite;
        }

        /* Headline */
        .lao-headline {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
          max-width: 820px;
          color: #f9f8f4;
          margin-bottom: 1.75rem;
          animation: fadeUp 0.6s 0.1s ease both;
        }
        .lao-headline-accent {
          background: linear-gradient(95deg, #fb923c 0%, #fcd34d 60%, #fb923c 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        /* Subtext */
        .lao-subtext {
          max-width: 560px;
          font-size: 1.0625rem;
          line-height: 1.75;
          color: #8a8f9e;
          font-weight: 300;
          margin-bottom: 2.75rem;
          animation: fadeUp 0.6s 0.2s ease both;
        }

        /* CTA buttons */
        .lao-cta-group {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 5rem;
          animation: fadeUp 0.6s 0.3s ease both;
        }
        .lao-btn-primary {
          padding: 13px 28px;
          border-radius: 12px;
          background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
          border: none;
          color: #0d0d0d;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          box-shadow: 0 0 0 0 rgba(251, 146, 60, 0);
          letter-spacing: -0.01em;
        }
        .lao-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(251, 146, 60, 0.35);
        }
        .lao-btn-secondary {
          padding: 13px 28px;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: #c4c7d0;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9375rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
          letter-spacing: -0.01em;
        }
        .lao-btn-secondary:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.18);
          transform: translateY(-1px);
        }

        /* Feature cards grid */
        .lao-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 1060px;
          animation: fadeUp 0.6s 0.45s ease both;
        }
        @media (max-width: 900px) {
          .lao-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .lao-grid { grid-template-columns: 1fr; }
        }

        .lao-card {
          position: relative;
          border-radius: 18px;
          padding: 26px 22px;
          text-align: left;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease;
          overflow: hidden;
          cursor: default;
        }
        .lao-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(251,146,60,0), rgba(251,146,60,0));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          transition: background 0.3s ease;
          pointer-events: none;
        }
        .lao-card:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.045);
          border-color: rgba(251, 146, 60, 0.25);
        }
        .lao-card:hover::before {
          background: linear-gradient(135deg, rgba(251,146,60,0.5), rgba(253,211,77,0.2));
        }

        .lao-card-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(251, 146, 60, 0.1);
          border: 1px solid rgba(251, 146, 60, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          font-size: 16px;
        }

        .lao-card-title {
          font-family: 'Sora', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #f1f0ea;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }
        .lao-card-desc {
          font-size: 0.84375rem;
          color: #636880;
          line-height: 1.65;
          font-weight: 300;
        }

        /* Divider line above cards */
        .lao-divider {
          width: 100%;
          max-width: 1060px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent);
          margin-bottom: 3.5rem;
          animation: fadeUp 0.6s 0.4s ease both;
        }

        /* Section label above grid */
        .lao-section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #3f4459;
          margin-bottom: 1.5rem;
          animation: fadeUp 0.6s 0.4s ease both;
        }

        /* Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>

      <main className="lao-root">
        <section className="lao-hero">

          <div className="lao-badge">
            <span className="lao-badge-dot" />
            Life Admin OS &nbsp;
          </div>

          <h1 className="lao-headline">
            Stay ahead of bills,{" "}
            <span className="lao-headline-accent">subscriptions,</span>
            <br />
            renewals &amp; deadlines.
          </h1>

          <p className="lao-subtext">
            Life Admin OS brings the important admin side of life into one
            clean dashboard — so nothing slips through the cracks before it
            becomes stressful.
          </p>

          <div className="lao-cta-group">
            <button className="lao-btn-primary">Get Started</button>
            <button className="lao-btn-secondary">View Demo →</button>
          </div>

          <div className="lao-divider" />

          <p className="lao-section-label">Everything in one place</p>

          <div className="lao-grid">
            {[
              {
                icon: "💳",
                title: "Bills",
                desc: "Track upcoming payments and never miss a due date again.",
              },
              {
                icon: "🔄",
                title: "Subscriptions",
                desc: "See every recurring cost clearly and plug those money leaks.",
              },
              {
                icon: "📅",
                title: "Renewals",
                desc: "Get ahead of expiry and renewal dates before they creep up.",
              },
              {
                icon: "⏱",
                title: "Deadlines",
                desc: "A simple urgency-first view keeps you permanently in control.",
              },
            ].map(({ icon, title, desc }) => (
              <div className="lao-card" key={title}>
                <div className="lao-card-icon">{icon}</div>
                <h2 className="lao-card-title">{title}</h2>
                <p className="lao-card-desc">{desc}</p>
              </div>
            ))}
          </div>

        </section>
      </main>
    </>
  );
}