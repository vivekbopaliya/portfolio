import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Vivek Bopaliya - Full Stack Developer',
    description:
      'I am a highly skilled Full-Stack Engineer with a BCA degree from Atmiya University in Gujarat, India. Vivek has a strong technical background and is proficient in a variety of programming languages such as Java, JavaScript, TypeScript, and Python. He also has experience with various frameworks and technologies including React.js, Next.js, Node.js, MongoDB, and SQL. In addition to his technical skills, Vivek has excellent soft skills and has successfully organized and managed multiple hackathons. He is a quick learner and has the ability to adapt to new and challenging tasks.',
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
