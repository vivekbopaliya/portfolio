import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

// Intermediate proficiency skills

export const java = createSkillFactory({
  name: 'Java',
  icon: 'simple-icons:java',
  iconColor: '#007396',
  url: 'https://www.java.com/',
});

export const javascript = createSkillFactory({
  name: 'JavaScript',
  icon: 'simple-icons:javascript',
  iconColor: '#F7DF1E',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
});

export const nodeJs = createSkillFactory({
  name: 'Node.js',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#339933',
  url: 'https://nodejs.org/',
});

export const expressJs = createSkillFactory({
  name: 'Express.js',
  icon: 'simple-icons:express',
  iconColor: '#000000',
  url: 'https://expressjs.com/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const sql = createSkillFactory({
  name: 'SQL',
  icon: 'simple-icons:microsoftsqlserver',
  iconColor: '#CC2927',
  url: 'https://www.w3schools.com/sql/',
});

export const testing = createSkillFactory({
  name: 'Testing',
  icon: 'simple-icons:testinglibrary',
  iconColor: '#E33332',
  url: 'https://testing-library.com/',
});

// Beginner proficiency skills

export const c = createSkillFactory({
  name: 'C',
  icon: 'simple-icons:c',
  iconColor: '#A8B9CC',
  url: 'https://en.cppreference.com/w/c',
});

export const rust = createSkillFactory({
  name: 'Rust',
  icon: 'simple-icons:rust',
  iconColor: '#000000',
  url: 'https://www.rust-lang.org/',
});

export const aws = createSkillFactory({
  name: 'AWS',
  icon: 'simple-icons:awslambda',
  iconColor: '#232F3E',
  url: 'https://aws.amazon.com/',
});

export const llmModels = createSkillFactory({
  name: 'LLM Models',
  icon: 'simple-icons:openai',
  iconColor: '#412991',
  url: 'https://openai.com/',
});

// Additional technologies needed for experience section

export const springBoot = createSkillFactory({
  name: 'Spring Boot',
  icon: 'simple-icons:springboot',
  iconColor: '#6DB33F',
  url: 'https://spring.io/projects/spring-boot',
});

export const redux = createSkillFactory({
  name: 'Redux',
  icon: 'simple-icons:redux',
  iconColor: '#764ABC',
  url: 'https://redux.js.org/',
});

export const seo = createSkillFactory({
  name: 'SEO',
  icon: 'simple-icons:googlesearchconsole',
  iconColor: '#458CF5',
  url: 'https://developers.google.com/search',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://www.docker.com/',
});

export const scss = createSkillFactory({
  name: 'SCSS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const web3 = createSkillFactory({
  name: 'Web3',
  icon: 'simple-icons:web3dotjs',
  iconColor: '#F16822',
  url: 'https://web3.foundation/',
});

export const dataStructures = createSkillFactory({
  name: 'Data Structures & Algorithms',
  icon: 'simple-icons:codeforces', // No specific icon for data structures; using a general coding icon
  iconColor: '#1F8ACB',
  url: 'https://en.wikipedia.org/wiki/Data_structure', // No official site, linking to a reliable source
});

export const aiMl = createSkillFactory({
  name: 'AI/ML',
  icon: 'simple-icons:tensorflow', // Common AI/ML framework icon
  iconColor: '#FF6F00',
  url: 'https://www.tensorflow.org/',
});

export const bootstrap = createSkillFactory({
  name: 'Bootstrap',
  icon: 'simple-icons:bootstrap',
  iconColor: '#FF6F00',
  url: 'https://getbootstrap.com/',
});
