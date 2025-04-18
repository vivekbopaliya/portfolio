import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'Others',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  books: {
    title: 'Books I read',
    data: [
      {
        image: import('@/assets/favorites/books/the-martian-book.jpg'),
        title: 'The Martian',
        author: 'Andy Weir',
        url: 'https://www.amazon.in/Martian-Novel-Andy-Weir/dp/0553418025',
      },
      {
        image: import('@/assets/favorites/books/project-hair-mery-book.jpg'),
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        url: 'https://www.amazon.in/Project-Hail-Mary-bestselling-Martian/dp/1529157463/ref=pd_lpo_d_sccl_1/260-6535998-4957768?psc=1',
      },
      {
        image: import('@/assets/favorites/books/theory-of-everything-book.webp'),
        title: 'The Theory Of Everything',
        author: 'Stephen Hawking ',
        url: 'https://www.amazon.in/Theory-Everything-Stephen-Hawking/dp/8179925919?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1WYWER0W24N8S',
      },
      {
        image: import('@/assets/favorites/books/book-4.jpeg'),
        title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
        author: 'Robert C. Martin',
        url: 'https://www.goodreads.com/book/show/10284614-the-clean-coder',
      },
    ],
  },

  // videos: {
  //   title: 'Movies I watched',
  //   data: [
  //     {
  //       image: import('@/assets/favorites/videos/video-1.jpeg'),
  //       title: 'Building Resilient Frontend Architecture • Monica Lent • GOTO 2019',
  //       url: 'https://youtu.be/TqfbAXCCVwE',
  //     },
  //     {
  //       image: import('@/assets/favorites/videos/video-2.jpeg'),
  //       title: 'Scaling Yourself • Scott Hanselman • GOTO 2012',
  //       url: 'https://youtu.be/FS1mnISoG7U',
  //     },
  //     {
  //       image: import('@/assets/favorites/videos/video-3.jpeg'),
  //       title: "Why Isn't Functional Programming the Norm? - Richard Feldman",
  //       url: 'https://youtu.be/QyJZzq0v7Z4',
  //     },
  //   ],
  // },
  medias: {
    title: 'My Open-Source Contributions',
    data: [
      {
        image: import('@/assets/favorites/media/p5js-logo.png'),
        title: 'p5.js Web Editor #1',
        type: 'AddToCollection issue resolved',
        url: 'https://github.com/processing/p5.js-web-editor/pull/2782',
      },
      {
        image: import('@/assets/favorites/media/p5js-logo.png'),
        title: 'p5.js Web Editor #2',
        type: 'Oauth issue resolved',
        url: 'https://github.com/processing/p5.js-web-editor/pull/2892',
      },
      {
        image: import('@/assets/favorites/media/p5js-logo.png'),
        title: 'p5.js Web Editor #3',
        type: 'New feature added',
        url: 'https://github.com/processing/p5.js-web-editor/pull/3034',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
