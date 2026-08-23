/**
 * Icons are class names rather than JSX, so this stays a pure data module and
 * the rendering layer owns all markup.
 *
 * Two icon sources are supported:
 *   "devicon-*"  - a devicon font class
 *   "si:<key>"   - a react-icons/si component, resolved in skill-card.js
 *                  (used where devicon has no icon at all)
 *
 * Icons whose brand colour is near-black omit the `colored` class so they
 * inherit the card's light text colour instead of vanishing.
 */
export const SkillData = [
  {
    type: "Frontend",
    caption: "Interfaces that stay fast and consistent",
    list: [
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "ReactJS", icon: "devicon-react-original colored" },
      { name: "NextJS", icon: "devicon-nextjs-plain" },
    ],
  },
  {
    type: "Backend",
    caption: "APIs, services and the data behind them",
    list: [
      { name: "NodeJS", icon: "devicon-nodejs-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Django", icon: "devicon-django-plain" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "Serverless", icon: "si:serverless" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
    ],
  },
  {
    type: "DevOps",
    caption: "Shipping, scaling and observing it all",
    list: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "GitLab", icon: "devicon-gitlab-plain colored" },
      { name: "BitBucket", icon: "devicon-bitbucket-original colored" },
    ],
  },
];
