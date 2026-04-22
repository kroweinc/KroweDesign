export function MarketSizeChart({
  tam,
  sam,
  som,
}: {
  tam: string;
  sam: string;
  som: string;
}) {
  return (
    <div style={{ textAlign: 'center' }}>
      <svg
        width="280"
        height="280"
        viewBox="0 0 280 280"
        style={{ margin: '0 auto', display: 'block' }}
      >
        {/* TAM - outer ring */}
        <circle
          cx="140"
          cy="140"
          r="120"
          fill="none"
          stroke="color-mix(in oklch, var(--primary) 20%, transparent)"
          strokeWidth="30"
        />
        {/* SAM - middle ring */}
        <circle
          cx="140"
          cy="140"
          r="85"
          fill="none"
          stroke="color-mix(in oklch, var(--primary) 40%, transparent)"
          strokeWidth="30"
        />
        {/* SOM - inner circle */}
        <circle cx="140" cy="140" r="50" fill="var(--primary)" opacity="0.6" />

        {/* Labels */}
        <text
          x="140"
          y="30"
          textAnchor="middle"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            fontWeight: 600,
            fill: 'var(--foreground)',
          }}
        >
          TAM {tam}
        </text>
        <text
          x="140"
          y="85"
          textAnchor="middle"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            fontWeight: 600,
            fill: 'var(--foreground)',
          }}
        >
          SAM {sam}
        </text>
        <text
          x="140"
          y="145"
          textAnchor="middle"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            fontWeight: 600,
            fill: 'white',
          }}
        >
          SOM
        </text>
        <text
          x="140"
          y="160"
          textAnchor="middle"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            fontWeight: 600,
            fill: 'white',
          }}
        >
          {som}
        </text>
      </svg>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-s-size)',
          color: 'var(--muted-foreground)',
          marginTop: '1rem',
          maxWidth: '40ch',
          margin: '1rem auto 0',
        }}
      >
        Your serviceable obtainable market is {som} - a focused slice of the {tam}{' '}
        total market.
      </p>
    </div>
  );
}

export function CompetitorScatter({
  competitors,
  yourIdea,
}: {
  competitors: Array<{ name: string; x: number; y: number }>;
  yourIdea: { x: number; y: number };
}) {
  const width = 400;
  const height = 300;
  const padding = 40;

  return (
    <div>
      <svg width={width} height={height} style={{ overflow: 'visible' }}>
        {/* Axes */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="var(--border)"
          strokeWidth="2"
        />
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="var(--border)"
          strokeWidth="2"
        />

        {/* Axis labels */}
        <text
          x={width / 2}
          y={height - 10}
          textAnchor="middle"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fill: 'var(--muted-foreground)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Feature richness →
        </text>
        <text
          x={20}
          y={height / 2}
          textAnchor="middle"
          transform={`rotate(-90, 20, ${height / 2})`}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fill: 'var(--muted-foreground)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          ← Price
        </text>

        {/* Competitor dots */}
        {competitors.map((comp, i) => {
          const cx = padding + (comp.x / 100) * (width - 2 * padding);
          const cy = height - padding - (comp.y / 100) * (height - 2 * padding);

          return (
            <g key={i}>
              <circle
                cx={cx}
                cy={cy}
                r="6"
                fill="color-mix(in oklch, var(--primary) 30%, transparent)"
                stroke="var(--primary)"
                strokeWidth="1.5"
              />
              <text
                x={cx}
                y={cy - 12}
                textAnchor="middle"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  fill: 'var(--foreground)',
                }}
              >
                {comp.name}
              </text>
            </g>
          );
        })}

        {/* Your idea - larger orange dot */}
        {(() => {
          const cx = padding + (yourIdea.x / 100) * (width - 2 * padding);
          const cy = height - padding - (yourIdea.y / 100) * (height - 2 * padding);

          return (
            <g>
              <circle
                cx={cx}
                cy={cy}
                r="10"
                fill="var(--primary)"
                stroke="var(--primary-accent)"
                strokeWidth="2"
              />
              <text
                x={cx}
                y={cy - 18}
                textAnchor="middle"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 600,
                  fill: 'var(--primary)',
                }}
              >
                Your idea
              </text>
            </g>
          );
        })()}
      </svg>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-s-size)',
          color: 'var(--muted-foreground)',
          marginTop: '1rem',
        }}
      >
        You're positioned in a gap between feature-rich and affordable - a
        promising spot if customers value simplicity.
      </p>
    </div>
  );
}

export function MVPCostBar({
  breakdown,
  total,
}: {
  breakdown: Array<{ label: string; amount: number; color: string }>;
  total: number;
}) {
  const maxWidth = 500;

  return (
    <div>
      {/* Stacked bar */}
      <div
        style={{
          display: 'flex',
          height: '48px',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          marginBottom: '1rem',
        }}
      >
        {breakdown.map((item, i) => {
          const percentage = (item.amount / total) * 100;
          return (
            <div
              key={i}
              style={{
                width: `${percentage}%`,
                background: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                transition: 'all var(--duration-normal) var(--ease-out-smooth)',
              }}
              title={`${item.label}: $${item.amount.toLocaleString()}`}
            />
          );
        })}
      </div>

      {/* Legend */}
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          marginBottom: '1rem',
        }}
      >
        {breakdown.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '2px',
                background: item.color,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-body-s-size)',
                color: 'var(--foreground)',
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-body-s-size)',
                color: 'var(--muted-foreground)',
              }}
            >
              ${item.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-size)',
            fontWeight: 600,
            color: 'var(--foreground)',
          }}
        >
          Total MVP cost
        </span>
        <span
          style={{
            fontFamily: 'var(--type-display-m-family)',
            fontSize: 'var(--type-h2-size)',
            fontWeight: 400,
            color: 'var(--foreground)',
          }}
        >
          ${total.toLocaleString()}
        </span>
      </div>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body-s-size)',
          color: 'var(--muted-foreground)',
          marginTop: '1rem',
        }}
      >
        Engineering is the biggest cost, but you can trim it by starting with fewer
        features or using no-code tools.
      </p>
    </div>
  );
}
