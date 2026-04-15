"use client";

import { useState } from "react";

const TYPE_OPTIONS = [
  { value: "bill",         label: "Bill",         icon: "💳", desc: "One-off or recurring payment" },
  { value: "subscription", label: "Subscription", icon: "🔄", desc: "Ongoing service charge"       },
  { value: "renewal",      label: "Renewal",      icon: "📅", desc: "Expiry or renewal date"       },
];

export default function AddItemPage() {
  const [name, setName] = useState("");
  const [type, setType] = useState("bill");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, type, date });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2600);
    setName(""); setDate("");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ai-root {
          min-height: 100vh;
          background-color: #080c14;
          background-image:
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(251,146,60,0.09) 0%, transparent 65%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='1' cy='1' r='0.8' fill='rgba(255,255,255,0.035)'/%3E%3C/svg%3E");
          background-size: cover, 32px 32px;
          font-family: 'DM Sans', sans-serif;
          color: #f1f0ea;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 3.5rem 1.25rem 5rem;
        }

        .ai-card {
          width: 100%;
          max-width: 500px;
          animation: fadeUp 0.55s ease both;
        }

        /* ── Back link ── */
        .ai-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78125rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #3f4459;
          font-weight: 500;
          margin-bottom: 2.25rem;
          cursor: pointer;
          transition: color 0.18s;
          text-decoration: none;
          border: none;
          background: none;
        }
        .ai-back:hover { color: #636880; }

        /* ── Header ── */
        .ai-header { margin-bottom: 2.25rem; }
        .ai-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 14px;
          border-radius: 999px;
          border: 1px solid rgba(251,146,60,0.28);
          background: rgba(251,146,60,0.06);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fb923c;
          margin-bottom: 1.1rem;
        }
        .ai-badge-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #fb923c;
          box-shadow: 0 0 5px rgba(251,146,60,0.8);
        }
        .ai-title {
          font-family: 'Sora', sans-serif;
          font-size: 1.875rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #f9f8f4;
          margin-bottom: 6px;
        }
        .ai-subtitle {
          font-size: 0.875rem;
          color: #3f4459;
          font-weight: 300;
          line-height: 1.6;
        }

        /* ── Form panel ── */
        .ai-form-panel {
          border-radius: 20px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 30px 28px 28px;
        }

        .ai-field { margin-bottom: 22px; }
        .ai-field:last-of-type { margin-bottom: 0; }

        .ai-label {
          display: block;
          font-size: 0.71875rem;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #3f4459;
          margin-bottom: 9px;
        }

        /* Text / date inputs */
        .ai-input {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.28);
          padding: 13px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9375rem;
          font-weight: 400;
          color: #dcdee6;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          -webkit-appearance: none;
          color-scheme: dark;
        }
        .ai-input::placeholder { color: #2d3145; }
        .ai-input:hover { border-color: rgba(255,255,255,0.14); }
        .ai-input:focus {
          border-color: rgba(251,146,60,0.45);
          box-shadow: 0 0 0 3px rgba(251,146,60,0.08);
          background: rgba(0,0,0,0.38);
        }

        /* Type selector — pill buttons */
        .ai-type-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 9px;
        }
        .ai-type-btn {
          border-radius: 12px;
          padding: 13px 10px 11px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(0,0,0,0.22);
          cursor: pointer;
          text-align: center;
          transition: border-color 0.18s, background 0.18s, transform 0.18s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .ai-type-btn:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.12);
        }
        .ai-type-btn.active {
          border-color: rgba(251,146,60,0.4);
          background: rgba(251,146,60,0.07);
          box-shadow: 0 0 0 1px rgba(251,146,60,0.15) inset;
        }
        .ai-type-icon {
          font-size: 19px;
          line-height: 1;
        }
        .ai-type-label {
          font-size: 0.8125rem;
          font-weight: 500;
          color: #dcdee6;
          letter-spacing: -0.01em;
        }
        .ai-type-btn.active .ai-type-label { color: #fb923c; }
        .ai-type-desc {
          font-size: 0.6875rem;
          color: #3f4459;
          font-weight: 300;
          line-height: 1.4;
        }

        /* Divider */
        .ai-divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin: 24px 0;
        }

        /* Submit button */
        .ai-submit {
          width: 100%;
          padding: 14px 24px;
          border-radius: 13px;
          background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
          border: none;
          color: #0d0d0d;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: -0.01em;
          transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s;
          position: relative;
          overflow: hidden;
        }
        .ai-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(251,146,60,0.3);
        }
        .ai-submit:active { transform: scale(0.98); }
        .ai-submit.done {
          background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
          box-shadow: 0 8px 26px rgba(74,222,128,0.22);
        }

        /* Success toast */
        .ai-toast {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 14px;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(74,222,128,0.07);
          border: 1px solid rgba(74,222,128,0.18);
          font-size: 0.84375rem;
          color: #4ade80;
          font-weight: 400;
          animation: fadeUp 0.35s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <main className="ai-root">
        <div className="ai-card">

          <button className="ai-back" onClick={() => history.back()}>
            ← Back to dashboard
          </button>

          <div className="ai-header">
            <div className="ai-badge">
              <span className="ai-badge-dot" />
              Life Admin OS
            </div>
            <h1 className="ai-title">Add New Item</h1>
            <p className="ai-subtitle">Track a bill, subscription, or renewal in seconds.</p>
          </div>

          <div className="ai-form-panel">
            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="ai-field">
                <label className="ai-label">Item Name</label>
                <input
                  className="ai-input"
                  type="text"
                  placeholder="e.g. Electricity Bill"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Type */}
              <div className="ai-field">
                <label className="ai-label">Type</label>
                <div className="ai-type-grid">
                  {TYPE_OPTIONS.map(({ value, label, icon, desc }) => (
                    <button
                      key={value}
                      type="button"
                      className={`ai-type-btn${type === value ? " active" : ""}`}
                      onClick={() => setType(value)}
                    >
                      <span className="ai-type-icon">{icon}</span>
                      <span className="ai-type-label">{label}</span>
                      <span className="ai-type-desc">{desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date */}
              <div className="ai-field">
                <label className="ai-label">Due / Renewal Date</label>
                <input
                  className="ai-input"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="ai-divider" />

              <button
                type="submit"
                className={`ai-submit${submitted ? " done" : ""}`}
              >
                {submitted ? "✓ Item Added" : "Add Item"}
              </button>

            </form>

            {submitted && (
              <div className="ai-toast">
                <span>✓</span>
                <span>Item saved — head back to your dashboard to see it.</span>
              </div>
            )}
          </div>

        </div>
      </main>
    </>
  );
}