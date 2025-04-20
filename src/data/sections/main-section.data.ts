import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Vivek Bopaliya',
  role: 'Software Engineer',
  details: [
    { label: 'Email', value: 'vivekpatel1nov@gmail.com', url: 'mailto:vivekpatel1nov@gmail.com' },
    { label: 'From', value: 'Rajkot, Gujarat (India)' },
  ],
  pdfDetails: [
    { label: 'Email', value: 'vivekpatel1nov@gmail.com' },
    { label: 'LinkedIn', value: '/in/vivek-bopaliya', url: 'https://www.linkedin.com/in/vivek-bopaliya' },
    { label: 'GitHub', value: '/vivekbopaliya', url: 'https://github.com/vivekbopaliya' },
  ],
  description:
    "Hello and welcome to my portfolio website! I'm a 20 years old developer who loves coding and building projects with different technologies. I thoroughly enjoy working on various projects and I am always eager to explore new opportunities. If you are seeking a valuable addition to your team or a skilled and thoughtful freelancer, Feel free to browse through my work and do not hesitate to get in touch on any platform!",
  tags: [{ name: 'Available for Freelance Projects' }, { name: 'Open for Developer Roles' }],
  action: {
    label: 'Download CV',
    url: '/VivekBopaliya_CV.pdf',
    downloadedFileName: 'VivekBopaliya_CV.pdf',
  },
  links: [
    github({ url: 'https://github.com/vivekbopaliya' }),
    linkedin({ url: 'https://www.linkedin.com/in/vivek-bopaliya' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
