// ── Tag / Badge ───────────────────────────────────────────────────────────────
export function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

// ── Loading Spinner ───────────────────────────────────────────────────────────
export function Spinner({ className = "" }) {
  return (
    <svg
      className={`animate-spin text-accent ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>
  );
}

// ── Empty state ───────────────────────────────────────────────────────────────
export function EmptyState({ title = "Nothing here yet", message, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-surface-3 flex items-center justify-center text-2xl">
        📭
      </div>
      <h3 className="text-ink-secondary font-medium">{title}</h3>
      {message && <p className="text-ink-muted text-sm max-w-xs">{message}</p>}
      {action}
    </div>
  );
}

// ── Error state ───────────────────────────────────────────────────────────────
export function ErrorState({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-surface-3 flex items-center justify-center text-2xl">
        ⚠️
      </div>
      <h3 className="text-ink-secondary font-medium">Something went wrong</h3>
      {message && <p className="text-ink-muted text-sm max-w-xs">{message}</p>}
      {onRetry && (
        <button onClick={onRetry} className="btn-ghost mt-2">
          Try again
        </button>
      )}
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────
export function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`max-w-5xl mx-auto px-6 py-16 ${className}`}>
      {children}
    </section>
  );
}

// ── Section header ────────────────────────────────────────────────────────────
export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="text-xs font-mono font-medium text-accent uppercase tracking-widest mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="section-heading">{title}</h2>
      {description && (
        <p className="section-subheading max-w-2xl">{description}</p>
      )}
    </div>
  );
}