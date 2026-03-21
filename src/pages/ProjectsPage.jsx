import SEO from "../components/seo/SEO";
import { Section, SectionHeader, EmptyState, ErrorState, Spinner } from "../components/ui";
import ProjectCard from "../components/ui/ProjectCard";
import { useProjects } from "../hooks/useProjects";

const CATEGORIES = ["Computer Vision", "Computer Graphics", "Data & Web", "Data & Backend"];

import { useState } from "react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filters = activeCategory !== "All" ? { category: activeCategory } : {};
  const { items, loading, error, refetch } = useProjects(filters);

  return (
    <>
      <SEO
        title="Projects"
        description="Explore Aaditya Joshi's Projects"
        path="/projects"
      />

      <Section>
        {/* Header */}
        <SectionHeader
          eyebrow="Portfolio"
          title="Projects"
          description="A collection of personal, academic, and collaborative work."
        />

        {/* Category filter */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                activeCategory === cat
                  ? "bg-accent text-white"
                  : "bg-surface-2 border border-border text-ink-secondary hover:border-border-strong hover:text-ink-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Spinner className="w-7 h-7" />
          </div>
        ) : error ? (
          <ErrorState message={error} onRetry={refetch} />
        ) : items.length === 0 ? (
          <EmptyState
            title="No projects found"
            message={
              activeCategory !== "All"
                ? `No projects in the "${activeCategory}" category yet.`
                : "No projects available."
            }
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}