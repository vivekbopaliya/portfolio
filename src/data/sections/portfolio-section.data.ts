import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  react,
  typescript,
  nextJs,
  nodeJs,
  expressJs,
  mongoDb,
  tailwindCss,
  javascript,
  llmModels,
  postgreSql,
  reactQuery,
  python,
  bootstrap,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Cold Emails Automation',
      image: import('@/assets/portfolio/project-4.jpeg'),
      dates: [new Date('2025-04'), new Date('2025-04')],
      details: [{ label: 'Category', value: ['SaaS'] }],
      pdfDetails: [{ label: 'Repository', value: 'https://email-sequence-frontend.vercel.app' }],
      description: `
        A tool to help businesses send cold emails easily.

        - Pick contacts from different sources.
        - Set up email schedules and delays.
        - Use ready-made email templates or create from scratch.

        Uses automated scheduling and email sending with error handling.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), typescript(), nodeJs(), expressJs(), mongoDb(), tailwindCss()],
      },
      links: [
        website({ url: 'https://email-sequence-frontend.vercel.app' }),
        github({ url: 'https://github.com/vivekbopaliya/email-sequence-frontend' }),
      ],
    },

    {
      name: 'File Manager',
      image: import('@/assets/portfolio/file-manager-logo.png'),
      dates: [new Date('2024-05'), new Date('2024-05')],
      details: [
        { label: 'My role', value: ['Full Stack Developer'] },
        { label: 'Category', value: ['Web App', 'File Management'] },
      ],
      pdfDetails: [{ label: 'Website', value: 'https://file-manager-vivek.vercel.app/' }],
      description: `
        A web app to organize and manage files and folders securely.

        - Upload, rename, or delete files.
        - Create folders with nesting functionality.
        - Move files between folders.
        - Rename or delete folders easily.

        Handles secure file storage using in <b>Cloudinary</b> and database queries for smooth file organization.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [typescript(), nextJs(), postgreSql()],
      },
      links: [
        website({ url: 'https://file-manager-vivek.vercel.app/' }),
        github({ url: 'https://github.com/vivekbopaliya/file-manager-webapp' }),
      ],
    },
    {
      name: 'Chat-PDF',
      image: import('@/assets/portfolio/chat-pdf-logo.png'),
      dates: [new Date('2024-03'), new Date('2024-04')],
      details: [{ label: 'Category', value: ['AI Tool'] }],
      pdfDetails: [
        { label: 'Website', value: 'https://vivek-chatpdf.vercel.app/', url: 'https://chat-pdf.yourdomain.app' },
      ],
      description: `
        An app to ask questions about PDF documents and get quick answers.

        - Upload any PDF to start exploring.
        - Ask questions in plain language and get replies with sources.
        - Move through long documents with an easy interface.

        Splits documents into parts and uses embeddings for fast, accurate answers.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), python(), llmModels(), tailwindCss()],
      },
      links: [
        website({ url: 'https://vivek-chatpdf.vercel.app/' }),
        github({ url: 'https://github.com/vivekbopaliya/chat-pdf-client' }),
      ],
    },

    {
      name: 'Twitter Clone',
      image: import('@/assets/portfolio/twitter-clone-logo.png'),
      dates: [new Date('2023-06'), new Date('2023-07')],
      details: [{ label: 'Category', value: ['Web app', 'Social Media'] }],
      pdfDetails: [
        {
          label: 'Demo',
          value: 'vivs-youonit-client.onrender.com',
          url: 'vivs-youonit-client.onrender.com',
        },
      ],
      description: `
        A social media app that works like Twitter for posting and connecting.

        - Share posts and interact with others instantly.
        - Create and manage user profiles securely.
        - Follow users to see their posts in your feed.
        - Use it on any device with a clean design.

        Handles real-time updates and secure data connections for fast performance.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), nodeJs(), expressJs(), mongoDb(), tailwindCss()],
      },
      links: [
        website({ url: 'vivs-youonit-client.onrender.com' }),
        github({ url: 'https://github.com/vivekbopaliya/TwitterClone-client' }),
      ],
    },
    {
      name: 'Rick and Morty Wiki',
      image: import('@/assets/portfolio/rick-and-morty-logo.jpg'),
      dates: [new Date('2023-4'), new Date('2023-5')],
      details: [{ label: 'Category', value: ['API Integration'] }],
      pdfDetails: [
        {
          label: 'Demo',
          value: 'vivs-rickandmorty-wiki.netlify.app',
          url: 'vivs-rickandmorty-wiki.netlify.app',
        },
      ],
      description: `
        A wiki for fans to explore Rick and Morty characters and episodes.

        - Browse characters, locations, and episodes with filters.
        - Works well on both desktop and mobile screens.

        Pulls data from APIs quickly for a smooth browsing experience.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), javascript(), bootstrap()],
      },
      links: [
        website({ url: 'vivs-rickandmorty-wiki.netlify.app' }),
        github({ url: 'https://github.com/vivekbopaliya/Rick-Morty-wiki' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
