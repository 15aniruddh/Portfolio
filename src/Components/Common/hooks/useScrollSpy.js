import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently occupying the viewport, so the nav
 * can mark the matching link as current.
 *
 * Picks the entry closest to the top of the viewport among those intersecting,
 * which behaves correctly when a short section and a tall one are visible at
 * the same time.
 */
export default function useScrollSpy(ids, offset = 96) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0, 0.1, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
