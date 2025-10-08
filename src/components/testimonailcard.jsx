import React from "react";

/**
 * Props:
 *  - quote: string
 *  - name: string
 *  - title: string
 *  - avatar: url
 *  - rating: 1..5
 *  - accent: hex/rgb/hsl (for the small orange dot / quote tint)
 */
export default function TestimonialCard({
    quote = `"They transformed our business. The team's strategic approach and execution resulted in 450% revenue growth. Best investment we've ever made."`,
    name = "Sarah Chen",
    title = "CEO, TechFlow",
    avatar = "https://i.pravatar.cc/160?img=47",
    rating = 5,
    accent = "#ff7a3d",
}) {
    return (
        <>
            {/* Component styles (scoped by .testimonial-card) */}
            <style>{`
        .testimonial-card {
          position: relative;
          border: none;
          border-radius: 1.25rem;           /* ~20px */
          background: radial-gradient(120% 120% at 10% 0%, #172126 0%, #0f1417 60%, #0c1013 100%);
          color: #e8eef2;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.03),
            0 12px 30px rgba(0,0,0,0.55);
        }
        .testimonial-card .quote-mark {
          position: absolute;
          right: 22px;
          top: 22px;
          font-size: 72px;
          line-height: 1;
          opacity: .16;
          color: var(--accent);
          pointer-events: none;
          font-weight: 700;
        }
        .testimonial-card .stars svg {
          width: 20px;
          height: 20px;
          margin-right: 6px;
          flex: 0 0 auto;
          fill: #ffcc33;
          filter: drop-shadow(0 1px 0 rgba(0,0,0,.25));
        }
        .testimonial-card .body {
          font-size: 1.05rem;
          color: #d7dde2;
        }
        .testimonial-card .avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255,255,255,0.08);
          box-shadow: 0 6px 14px rgba(0,0,0,.35);
        }
        .testimonial-card .name {
          font-weight: 700;
          color: #ffffff;
        }
        .testimonial-card .title {
          color: #97a6b2;
          font-size: .95rem;
        }
      `}</style>

            <div
                className="card testimonial-card p-4 p-md-5"
                style={{ "--accent": accent }}
            >
                {/* top row: stars */}
                <div className="d-flex align-items-center stars mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                            key={i}
                            viewBox="0 0 24 24"
                            style={{ opacity: i < rating ? 1 : 0.25 }}
                        >
                            <path d="M12 17.3l-6.16 3.54 1.64-6.99L2 8.92l7.12-.6L12 1.5l2.88 6.82 7.12.6-5.48 4.93 1.64 6.99z" />
                        </svg>
                    ))}
                </div>

                {/* faint big quotes on the right */}
                <div className="quote-mark">”</div>

                {/* quote body */}
                <p className="body mb-4 mb-md-5">
                    {quote}
                </p>

                {/* avatar & meta */}
                <div className="d-flex align-items-center">
                    <img className="avatar me-3" src={avatar} alt={name} />
                    <div className="d-flex flex-column">
                        <span className="name">{name}</span>
                        <span className="title">{title}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
