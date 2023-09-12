export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'example brain',
    items: [
      {
        name: 'stoicism',
        slug: 'layouts',
        description:
          'amor fati. memento mori. temperance, courage, wisdom, justice.',
      },
      {
        name: 'existentialism',
        slug: 'route-groups',
        description: 'create our own meaning.',
      },
      {
        name: 'sufism',
        slug: 'parallel-routes',
        description: 'crying & pulling one heartstring at a time.',
      },
      {
        name: 'pop culturism',
        slug: 'parallel-routes',
        description: 'popular knowledge and wisdom.',
      },
    ],
  },
  {
    name: 'example swaps',
    items: [
      {
        name: 'nihilism',
        slug: 'loading',
        description: 'there is no meaning.',
      },
      {
        name: 'YOLO',
        slug: 'error-handling',
        description: 'you only live once.',
      },
      {
        name: 'absurdism',
        slug: 'not-found',
        description: 'comedy. life is absurd.',
      },
    ],
  },
  {
    name: 'create a swap',
    items: [
      {
        name: '__title__',
        slug: 'streaming',
        description: '__description__',
      },
    ],
  },
];
