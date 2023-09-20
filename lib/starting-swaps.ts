export type Item = {
  name: string;
  slug: string;
  description?: string;
  buttonText: string;
};

export const startingSwaps: { items: Item[] }[] = [
  {
    items: [
      {
        name: 'happy',
        slug: 'layouts',
        description: 'life is about finding happiness and joy.',
        buttonText: 'remove',
      },
      {
        name: 'comedy',
        slug: 'layouts',
        description: "life isn't meant to be taken seriously. :)",
        buttonText: 'remove',
      },
      {
        name: 'emotional (emo)',
        slug: 'layouts',
        description: "it's good and healthy to process feelings",
        buttonText: 'remove',
      },
      {
        name: 'pop culturism',
        slug: 'parallel-routes',
        description: 'popular knowledge and wisdom.',
        buttonText: 'remove',
      },
      {
        name: 'news reader',
        slug: 'parallel-routes',
        description: "it's important to keep up with the news.",
        buttonText: 'remove',
      },
      {
        name: 'art lover',
        slug: 'parallel-routes',
        description: 'things like music are the joy of life.',
        buttonText: 'remove',
      },
      {
        name: 'nihilism',
        slug: 'loading',
        description: 'there is no meaning.',
        buttonText: 'add',
      },
      {
        name: 'emohappy',
        slug: 'loading',
        description: 'laughing and crying our way through life.',
        buttonText: 'add',
      },
      {
        name: 'metatheorist',
        slug: 'loading',
        description: 'viewing the big picture of all theories of theories',
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
      {
        name: 'stoicism',
        slug: 'layouts',
        description:
          'amor fati. memento mori. temperance, courage, wisdom, justice.',
        buttonText: 'add',
      },
      {
        name: 'existentialism',
        slug: 'route-groups',
        description: 'create our own meaning.',
        buttonText: 'add',
      },
      {
        name: 'sufism',
        slug: 'parallel-routes',
        description: 'crying & pulling one heartstring at a time.',
        buttonText: 'add',
      },
    ],
  },
];
