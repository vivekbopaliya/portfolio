import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Bachelor of Computer Application',
      institution: 'Atmiya University, Rajkot',
      image: import('@/assets/logos/atmiya-university-logo.png'),
      dates: [new Date('2022.7'), new Date('2025.05')],
      description: 'Bachelor degree. broad foundation in computer science and software development.',
      links: [website({ url: 'https://atmiyauni.ac.in' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
