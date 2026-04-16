"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
    const [items, setItems] = useState<any[]>([]);

useEffect(() => {
  const storedItems = JSON.parse(localStorage.getItem("items") || "[]");
  setItems(storedItems);
}, []);
const handleDelete = (id: number) => {
  const updatedItems = items.filter((item) => item.id !== id);
  setItems(updatedItems);
  localStorage.setItem("items", JSON.stringify(updatedItems));
};
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .db-root {
          min-height: 100vh;
          background-color: #080c14;
          background-image:
            radial-gradient(ellipse 70% 40% at 60% 0%, rgba(251, 146, 60, 0.08) 0%, transparent 65%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='1' cy='1' r='0.8' fill='rgba(255,255,255,0.035)'/%3E%3C/svg%3E");
          background-size: cover, 32px 32px;
          font-family: 'DM Sans', sans-serif;
          color: #f1f0ea;
        }

        .db-wrap {
          max-width: 1160px;
          margin: 0 auto;
          padding: 2.75rem 2rem 4rem;
        }

        /* ── Top bar ── */
        .db-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2.75rem;
          animation: fadeUp 0.5s ease both;
        }
        .db-greeting {
          font-size: 0.8125rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #3f4459;
          font-weight: 500;
          margin-bottom: 6px;
        }
        .db-page-title {
          font-family: 'Sora', sans-serif;
          font-size: 1.875rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #f9f8f4;
        }
        .db-add-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 11px 22px;
          border-radius: 11px;
          background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
          border: none;
          color: #0d0d0d;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          letter-spacing: -0.01em;
        }
        .db-add-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(251, 146, 60, 0.32);
        }
        .db-add-btn-icon {
          font-size: 17px;
          line-height: 1;
          font-weight: 400;
        }

        /* ── Stat cards ── */
        .db-stat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 2rem;
          animation: fadeUp 0.5s 0.1s ease both;
        }
        @media (max-width: 900px) { .db-stat-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) { .db-stat-grid { grid-template-columns: 1fr; } }

        .db-stat {
          border-radius: 16px;
          padding: 20px 22px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.22s ease, background 0.22s ease, transform 0.22s ease;
          position: relative;
          overflow: hidden;
        }
        .db-stat:hover {
          transform: translateY(-3px);
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.1);
        }
        .db-stat-label {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #3f4459;
          margin-bottom: 14px;
        }
        .db-stat-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }
        .db-stat-number {
          font-family: 'Sora', sans-serif;
          font-size: 2.25rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #f9f8f4;
        }
        .db-stat-number.urgent { color: #fb7c5a; }
        .db-stat-icon {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: rgba(251, 146, 60, 0.08);
          border: 1px solid rgba(251, 146, 60, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
        }
        .db-stat-icon.red {
          background: rgba(251, 100, 80, 0.1);
          border-color: rgba(251, 100, 80, 0.2);
        }
        .db-stat-trend {
          font-size: 0.6875rem;
          color: #3f4459;
          margin-top: 10px;
        }
        .db-stat-trend.warn { color: #fb7c5a; }

        /* ── Main + sidebar ── */
        .db-body {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 16px;
          animation: fadeUp 0.5s 0.2s ease both;
        }
        @media (max-width: 960px) { .db-body { grid-template-columns: 1fr; } }

        .db-panel {
          border-radius: 18px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 26px 24px;
        }
        .db-panel-title {
          font-family: 'Sora', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #f1f0ea;
          margin-bottom: 20px;
        }

        /* ── Item rows ── */
        .db-item-list { display: flex; flex-direction: column; gap: 10px; }

        .db-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border-radius: 13px;
          padding: 14px 16px;
          background: rgba(0,0,0,0.22);
          border: 1px solid rgba(255,255,255,0.05);
          transition: border-color 0.2s ease, background 0.2s ease;
          cursor: default;
        }
        .db-item:hover {
          background: rgba(255,255,255,0.03);
          border-color: rgba(255,255,255,0.1);
        }
        .db-item-left { display: flex; align-items: center; gap: 13px; }
        .db-item-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .db-item-dot.red    { background: #fb7c5a; box-shadow: 0 0 7px rgba(251,124,90,0.7); }
        .db-item-dot.yellow { background: #fbbf24; box-shadow: 0 0 7px rgba(251,191,36,0.6); }
        .db-item-dot.blue   { background: #60a5fa; box-shadow: 0 0 7px rgba(96,165,250,0.5); }

        .db-item-name {
          font-size: 0.9rem;
          font-weight: 500;
          color: #dcdee6;
          letter-spacing: -0.01em;
        }
        .db-item-sub {
          font-size: 0.78125rem;
          color: #3f4459;
          margin-top: 2px;
          font-weight: 300;
        }

        .db-badge {
          flex-shrink: 0;
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 5px 11px;
          border-radius: 999px;
          white-space: nowrap;
        }
        .db-badge.urgent   { background: rgba(251,124,90,0.12); color: #fb7c5a; border: 1px solid rgba(251,124,90,0.2); }
        .db-badge.soon     { background: rgba(251,191,36,0.1);  color: #fbbf24; border: 1px solid rgba(251,191,36,0.2); }
        .db-badge.upcoming { background: rgba(96,165,250,0.1);  color: #60a5fa; border: 1px solid rgba(96,165,250,0.2); }

        /* ── Sidebar summary ── */
        .db-summary-list { display: flex; flex-direction: column; gap: 0; }

        .db-summary-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .db-summary-item:last-child { border-bottom: none; padding-bottom: 0; }
        .db-summary-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          margin-top: 1px;
        }
        .db-summary-text {
          font-size: 0.84375rem;
          color: #636880;
          line-height: 1.55;
          font-weight: 300;
        }
        .db-summary-text strong {
          color: #a8acbb;
          font-weight: 500;
        }

        /* ── Divider in topbar ── */
        .db-topbar-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .db-date-chip {
          font-size: 0.75rem;
          color: #3f4459;
          font-weight: 400;
          letter-spacing: 0.04em;
          padding: 7px 13px;
          border-radius: 8px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <main className="db-root">
        <div className="db-wrap">

          {/* ── Top bar ── */}
          <div className="db-topbar">
            <div>
              <p className="db-greeting">Welcome back</p>
              <h1 className="db-page-title">Dashboard</h1>
            </div>
            <div className="db-topbar-right">
              <span className="db-date-chip">April 2025</span>
              <Link href="/add-item" className="db-add-btn">
                <span className="db-add-btn-icon">+</span> Add Item
              </Link>
            </div>
          </div>

          {/* ── Stat cards ── */}
          <div className="db-stat-grid">
            {[
              { label: "Upcoming Bills",     value: 3,  icon: "💳", trend: "Next due in 2 days",           trendClass: "warn", iconClass: "" },
              { label: "Subscriptions",      value: 5,  icon: "🔄", trend: "1 price change this month",    trendClass: "",     iconClass: "" },
              { label: "Renewals",           value: 2,  icon: "📅", trend: "Earliest in 12 days",          trendClass: "",     iconClass: "" },
              { label: "Urgent This Week",   value: 4,  icon: "⏱", trend: "Needs immediate attention",    trendClass: "warn", iconClass: "red", numClass: "urgent" },
            ].map(({ label, value, icon, trend, trendClass, iconClass, numClass }) => (
              <div className="db-stat" key={label}>
                <p className="db-stat-label">{label}</p>
                <div className="db-stat-row">
                  <span className={`db-stat-number${numClass ? ` ${numClass}` : ""}`}>{value}</span>
                  <div className={`db-stat-icon${iconClass ? ` ${iconClass}` : ""}`}>{icon}</div>
                </div>
                <p className={`db-stat-trend${trendClass ? ` ${trendClass}` : ""}`}>{trend}</p>
              </div>
            ))}
          </div>

          {/* ── Body ── */}
          <div className="db-body">

            {/* Upcoming Items */}
            <div className="db-panel">
              <h3 className="db-panel-title">Upcoming Items</h3>
              <div className="db-item-list">
                {items.length === 0 ? (
  <p className="db-item-sub">No items yet. Add your first item.</p>
) : (
  items.map((item) => (
    <div className="db-item" key={item.id}>
      <div className="db-item-left">
        <span className={`db-item-dot ${
          item.type === "bill"
            ? "red"
            : item.type === "subscription"
            ? "yellow"
            : "blue"
        }`} />
        <div>
          <p className="db-item-name">{item.name}</p>
          <p className="db-item-sub">{item.date}</p>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  <span className={`db-badge ${
    item.type === "bill"
      ? "urgent"
      : item.type === "subscription"
      ? "soon"
      : "upcoming"
  }`}>
    {item.type}
  </span>

  <button
    onClick={() => handleDelete(item.id)}
    style={{
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.08)",
      color: "#f87171",
      borderRadius: "10px",
      padding: "6px 10px",
      fontSize: "12px",
      cursor: "pointer",
    }}
  >
    Delete
  </button>
</div>
    </div>
  ))
)}
              </div>
            </div>

            {/* Quick Summary */}
            <div className="db-panel">
              <h3 className="db-panel-title">Quick Summary</h3>
              <div className="db-summary-list">
                {[
                  { icon: "💳", bg: "rgba(251,124,90,0.1)",  border: "rgba(251,124,90,0.18)",  text: <><strong>3 payments</strong> due soon</> },
                  { icon: "📈", bg: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.16)",  text: <><strong>1 subscription</strong> increased this month</> },
                  { icon: "📅", bg: "rgba(96,165,250,0.08)", border: "rgba(96,165,250,0.15)",  text: <><strong>2 renewals</strong> need attention</> },
                  { icon: "✅", bg: "rgba(74,222,128,0.08)", border: "rgba(74,222,128,0.15)",  text: <>Stay ahead before things get stressful</> },
                ].map(({ icon, bg, border, text }, i) => (
                  <div className="db-summary-item" key={i}>
                    <div className="db-summary-icon" style={{ background: bg, border: `1px solid ${border}` }}>{icon}</div>
                    <p className="db-summary-text">{text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}