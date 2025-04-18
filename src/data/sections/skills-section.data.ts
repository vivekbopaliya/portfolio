import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  aiMl,
  apolloGraphql,
  astro,
  aws,
  c,
  chakraUi,
  cypress,
  dataStructures,
  docker,
  eslint,
  expressJs,
  firebase,
  java,
  javascript,
  llmModels,
  mongoDb,
  nestJs,
  nextJs,
  nodeJs,
  pnpm,
  postgreSql,
  prettier,
  python,
  react,
  reactQuery,
  redux,
  rust,
  sass,
  seo,
  springBoot,
  sql,
  supabase,
  tailwindCss,
  testing,
  typescript,
  web3,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        c({ level: 3 }),
        java({ level: 3 }),
        python({ level: 4 }),
        javascript({ level: 4 }),
        typescript({
          level: 5,
          description:
            '9 months of proven industry experience working with TypeScript to build type-safe, maintainable applications with robust codebases.',
        }),
        react({
          level: 5,
          description:
            '9 months of proven industry experience building dynamic React webpages and leveraging best practices for scalable and performant frontends.',
        }),
        nextJs({
          level: 5,
          description:
            '9 months of proven industry experience with Next.js, creating server-side rendered with optimized performance.',
        }),
        tailwindCss({
          level: 5,
          description:
            'Converted numerous Figma designs into pixel-perfect and responsive webpages using Tailwind CSS.',
        }),
        sass({
          level: 4,
        }),
        nodeJs({
          level: 5,
        }),
        expressJs({
          level: 5,
          description:
            'Developed multiple RESTful APIs using Express.js, including contributions to open-source projects.',
        }),
        springBoot({
          level: 4,
          description:
            '9 months of proven industry experience with Spring Boot, building secure and efficient backend services.',
        }),
        redux({ level: 3 }),
        sql({ level: 5 }),
        postgreSql({ level: 4 }),
        mongoDb({ level: 4 }),
        firebase({ level: 4 }),
        supabase({ level: 4 }),
        reactQuery({ level: 5 }),
        seo({
          level: 5,
          description:
            'In my previous company, I applied advanced SEO techniques to boost website visibility and optimize content performance in industry projects.',
        }),
        rust({ level: 2 }),
        docker({ level: 4 }),
        aws({ level: 3 }),
        llmModels({ level: 4 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [testing(), dataStructures(), web3(), aiMl()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:in', name: 'Gujarati - Native' },
        { icon: 'circle-flags:in', name: 'Hindi - Fluent' },
        { icon: 'circle-flags:us', name: 'English - Conversational' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
