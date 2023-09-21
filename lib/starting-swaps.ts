export type Item = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  buttonText: string;
};

export const startingSwaps: { items: Item[] }[] = [
  {
    items: [
      {
        id: 1,
        name: 'happy',
        slug: 'layouts',
        description: 'life is about finding happiness and joy.',
        buttonText: 'remove',
      },
      {
        id: 2,
        name: 'comedy',
        slug: 'layouts',
        description: "life isn't meant to be taken seriously. :)",
        buttonText: 'remove',
      },
      {
        id: 3,
        name: 'emotional (emo)',
        slug: 'layouts',
        description: "it's good and healthy to process feelings",
        buttonText: 'remove',
      },
      {
        id: 4,
        name: 'pop culturism',
        slug: 'parallel-routes',
        description: 'popular knowledge and wisdom.',
        buttonText: 'remove',
      },
      {
        id: 5,
        name: 'news reader',
        slug: 'parallel-routes',
        description: "it's important to keep up with the news.",
        buttonText: 'remove',
      },
      {
        id: 6,
        name: 'art lover',
        slug: 'parallel-routes',
        description: 'things like music are the joy of life.',
        buttonText: 'remove',
      },
      {
        id: 7,
        name: 'nihilism',
        slug: 'loading',
        description: 'there is no meaning.',
        buttonText: 'add',
      },
      {
        id: 8,
        name: 'emohappy',
        slug: 'loading',
        description: 'laughing and crying our way through life.',
        buttonText: 'add',
      },
      {
        id: 9,
        name: 'metatheorist',
        slug: 'loading',
        description: 'viewing the big picture of all theories of theories',
        buttonText: 'add',
      },
      {
        id: 10,
        name: 'YOLO',
        slug: 'error-handling',
        description: 'you only live once.',
        buttonText: 'add',
      },
      {
        id: 11,
        name: 'absurdism',
        slug: 'not-found',
        description: 'comedy. life is absurd.',
        buttonText: 'add',
      },
      {
        id: 12,
        name: 'stoicism',
        slug: 'layouts',
        description:
          'amor fati. memento mori. temperance, courage, wisdom, justice.',
        buttonText: 'add',
      },
      {
        id: 13,
        name: 'existentialism',
        slug: 'route-groups',
        description: 'create our own meaning.',
        buttonText: 'add',
      },
      {
        id: 14,
        name: 'sufism',
        slug: 'parallel-routes',
        description: 'crying & pulling one heartstring at a time.',
        buttonText: 'add',
      },
    ],
  },
];
