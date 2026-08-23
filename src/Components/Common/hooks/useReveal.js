import { useEffect } from "react";

/**
 * Reveals any `.reveal` element once it scrolls into view.
 *
 * Runs a single observer for the whole page rather than one per component, and
 * unobserves each element after it fires so nothing re-animates on scroll-up.
 * Falls back to showing everything when IntersectionObserver is unavailable.
 */
export default function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}
