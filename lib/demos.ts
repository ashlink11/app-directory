export type Item = {
  name: string;
  slug: string;
  description?: string;
  buttonText: string;
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
        buttonText: 'remove',
      },
      {
        name: 'existentialism',
        slug: 'route-groups',
        description: 'create our own meaning.',
        buttonText: 'remove',
      },
      {
        name: 'sufism',
        slug: 'parallel-routes',
        description: 'crying & pulling one heartstring at a time.',
        buttonText: 'remove',
      },
      {
        name: 'pop culturism',
        slug: 'parallel-routes',
        description: 'popular knowledge and wisdom.',
        buttonText: 'remove',
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
        buttonText: 'add',
      },
      {
        name: 'YOLO',
        slug: 'error-handling',
        description: 'you only live once.',
        buttonText: 'add',
      },
      {
        name: 'absurdism',
        slug: 'not-found',
        description: 'comedy. life is absurd.',
        buttonText: 'add',
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
        buttonText: 'create',
      },
    ],
  },
];
