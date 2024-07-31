export interface OpenStaxBook {
  id: string;
  title: string;
  url: string;
  subjects: string[];
  description: string;
}

export const mockBooks: OpenStaxBook[] = [
  {
    id: '1',
    title: 'Biology',
    url: 'https://openstax.org/books/biology/pages/1-introduction',
    subjects: ['Biology'],
    description: 'An in-depth introduction to the field of biology.',
  },
  {
    id: '2',
    title: 'Chemistry',
    url: 'https://openstax.org/books/chemistry/pages/1-introduction',
    subjects: ['Chemistry'],
    description: 'Comprehensive overview of fundamental chemistry concepts.',
  },
    {
    id: '3',
    title: 'Algebra and Trigonometry',
    url: 'https://openstax.org/books/algebra-and-trigonometry/pages/1-introduction',
    subjects: ['Mathematics', 'Algebra', 'Trigonometry'],
    description: 'An in-depth introduction to algebra and trigonometry.',
  },
  // Add more mock books as needed
];

export async function fetchOpenStaxBooks(): Promise<OpenStaxBook[]> {
  // Simulate a delay to mimic an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockBooks);
    }, 1000);
  });
}
