import { SVGProps } from 'react';

// This file would contain SVG icons for each technology
// Here's an example for one icon:

export function ReactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
      <path d="M12 21.35a2.06 2.06 0 0 1-1-.25c-.33-.17-.67-.39-1-.64a14.88 14.88 0 0 1-1.93-1.5 14.88 14.88 0 0 1-1.93-1.5c-.33-.25-.67-.47-1-.64a2.06 2.06 0 0 1-1-.25 2.06 2.06 0 0 1-.75-.55A2.06 2.06 0 0 1 3 15a2.06 2.06 0 0 1 .25-1c.17-.33.39-.67.64-1a14.88 14.88 0 0 1 1.5-1.93 14.88 14.88 0 0 1 1.5-1.93c.25-.33.47-.67.64-1A2.06 2.06 0 0 1 8 7.5a2.06 2.06 0 0 1 .55-.75A2.06 2.06 0 0 1 10 6.25c.33.17.67.39 1 .64a14.88 14.88 0 0 1 1.93 1.5 14.88 14.88 0 0 1 1.93 1.5c.33.25.67.47 1 .64a2.06 2.06 0 0 1 1 .25 2.06 2.06 0 0 1 .75.55A2.06 2.06 0 0 1 18 13a2.06 2.06 0 0 1-.25 1c-.17.33-.39.67-.64 1a14.88 14.88 0 0 1-1.5 1.93 14.88 14.88 0 0 1-1.5 1.93c-.25.33-.47.67-.64 1a2.06 2.06 0 0 1-.25 1 2.06 2.06 0 0 1-.55.75 2.06 2.06 0 0 1-1.42.25Z" />
    </svg>
  );
}

// Add similar SVG components for other technologies...