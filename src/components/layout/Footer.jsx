export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-ink-muted text-sm font-mono">
          <span className="text-accent">~/</span>aaditya &mdash; {year}
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/AadityaX86"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted hover:text-ink-primary text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aaditya-joshi-09a6ba355/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted hover:text-ink-primary text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:aaditya.joshi2095@gmail.com"
            className="text-ink-muted hover:text-ink-primary text-sm transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}