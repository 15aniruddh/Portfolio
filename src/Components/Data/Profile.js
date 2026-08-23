/**
 * Single source of truth for identity, navigation and headline metrics.
 * Keeping this in the data layer means the visual layer never hard-codes copy.
 */

export const Profile = {
  name: "Aniruddh Patil",
  firstName: "Aniruddh",
  role: "Backend & DevOps Engineer",
  available: true,
  availableLabel: "Open to new opportunities",
  greeting: "Hello there",
  /* Cycled by the hero type-rotator */
  roles: [
    "Backend Engineer",
    "DevOps Enthusiast",
    "Serverless Architect",
    "Cloud-Native Developer",
  ],
  summary:
    "I build scalable serverless APIs, microservices and cloud-native applications on AWS — with a focus on latency, security and keeping operational overhead low.",
};

export const NavLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const Stats = [
  { value: "3+", label: "Years building for production" },
  { value: "10×", label: "API latency improvement shipped" },
  { value: "~150ms", label: "Response time after Redis caching" },
  { value: "20+", label: "AWS services worked across" },
];

export const AboutHighlights = [
  {
    title: "Serverless APIs",
    body: "Production Node.js services on AWS Lambda and API Gateway, built for high availability with minimal operational overhead.",
    icon: "devicon-amazonwebservices-plain-wordmark",
  },
  {
    title: "Performance",
    body: "Redis caching layers, image optimization pipelines and query tuning that turn seconds of latency into milliseconds.",
    icon: "devicon-redis-plain colored",
  },
  {
    title: "Secure by default",
    body: "JWT authentication and role-based access control giving fine-grained, auditable permissions across every user role.",
    icon: "devicon-nodejs-plain colored",
  },
];
