import "@testing-library/jest-dom";

/**
 * jsdom implements neither of these, and the layout hooks rely on both.
 * Stubbing them here keeps every test file from having to repeat the setup.
 */
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

if (typeof window.IntersectionObserver === "undefined") {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}
