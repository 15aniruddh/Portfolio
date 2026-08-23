import React from "react";
import { SiServerless } from "react-icons/si";

/**
 * Renders a technology icon from either supported source:
 *   "devicon-*"  - a devicon font class
 *   "si:<key>"   - a react-icons/si component, for tech devicon does not ship
 *
 * `color` carries the brand colour for component icons, which render as SVG
 * rather than as a font glyph that devicon's `colored` class would tint.
 */
const COMPONENT_ICONS = {
  serverless: { Icon: SiServerless, color: "#fd5750" },
};

function TechIcon({ icon }) {
  const key = icon.startsWith("si:") ? icon.slice(3) : null;
  const entry = key ? COMPONENT_ICONS[key] : null;

  if (entry) {
    return <entry.Icon style={{ color: entry.color }} />;
  }

  return <i className={icon} />;
}

export default TechIcon;
