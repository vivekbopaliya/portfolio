import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  expressJs,
  firebase,
  javascript,
  nextJs,
  nodeJs,
  nx,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
  java,
  springBoot,
  redux,
  seo,
  postgreSql,
  docker,
  scss,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Full Stack Software Developer',
      company: 'Clienter.ai',
      image: import('@/assets/logos/clienter-logo.jpg'),
      dates: [new Date('2024-06'), new Date('2025-03')],
      description: `
        - Developed numerous full-stack features from the ground up using Next.js, TypeScript, and Spring Boot Java.
        - Integrated mulitple third-party financial APIs, including QuickBooks and Xero, to streamline accounting, invoicing, emailing and expense tracking workflows.
        - Translated many figma designs into pixel-perfect web pages, with focus on debugging and resolving UI inconsistencies.
        - Built a responsive and interactive landing page from scratch, including complex animations.
        - Implemented comprehensive SEO optimization strategies from scratch, significantly improving site visibility.
        - Crafted and optimized complex SQL queries in PostgreSQL for efficient data retrieval.
        - Designed and implemented multi-threaded batch processing in Spring Boot, optimizing high-volume backend data ingestion and reconciliation tasks.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), typescript(), java(), springBoot(), reactQuery(), docker(), pnpm(), postgreSql(), seo()],
      },
      links: [website({ url: 'https://clienter.ai' })],
    },
    {
      role: 'Open Source Contributor',
      company: 'Processing Foundation',
      image: import('@/assets/logos/processing-foundation-logo.png'),
      dates: [new Date('2023-12'), new Date('2024-03')],
      description: `
        - Created and submitted over 10 pull requests to the <a target="_blank"  href="https://github.com/processing/p5.js-web-editor"><u>p5.js web editor</u></a> repository, with 4 successfully merged into production.
        - Developed a complete robust feature from scratch about making the sketch private ensuring the pixel-perfect design and functionality. Check it out <a target="_blank"  href="https://github.com/processing/p5.js-web-editor/pull/3034"><u>here</u></a>.

        `,
      tagsList: {
        title: 'Technologies',
        tags: [javascript(), react(), redux(), nodeJs(), expressJs(), scss()],
      },
      links: [github({ url: 'https://github.com/processing/p5.js-web-editor/pull/3034' })],
    },
    {
      role: 'WebDev Lead',
      company: 'Google Developers Student Club',
      image: import('@/assets/logos/gdsc-logo.jpg'),
      dates: [new Date('2023-08'), new Date('2024-03')],
      description: `
        - Organized and conducted multiple technical workshops on web development.
        - Mentored and guided junior members in web development, fostering a collaborative learning environment.
        - Led the planning and execution of an inter-college hackathon with 200+ participants and an open city level hackathon attracting more than 400 participants.
        - Managed event logistics, including timelines, budgets, and sponsor communications, ensuring successful execution of all club initiatives.
        `,
      tagsList: {
        title: '',
        tags: [],
      },
      links: [website({ url: 'https://gdsc-atmiyauniversity.vercel.app' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
