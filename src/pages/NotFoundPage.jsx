import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 – Not Found" />
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 gap-5">
        <p className="font-mono text-7xl font-bold text-surface-4">404</p>
        <h1 className="text-2xl font-semibold text-ink-primary">Page not found</h1>
        <p className="text-ink-secondary text-sm max-w-xs">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-2">
          Back to home
        </Link>
      </div>
    </>
  );
}