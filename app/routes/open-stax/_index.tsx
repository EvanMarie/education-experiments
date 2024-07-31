import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { fetchOpenStaxBooks, OpenStaxBook } from "./open-stax";

interface LoaderData {
  books: OpenStaxBook[];
}

export const loader: LoaderFunction = async () => {
  try {
    const books = await fetchOpenStaxBooks();
    return { books };
  } catch (error) {
    console.error("Error in loader:", error);
    return { books: [] };
  }
};

export default function Index() {
  const { books } = useLoaderData<LoaderData>();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">OpenStax Textbooks</h1>
      {books.length === 0 ? (
        <p>No books available. Please try again later.</p>
      ) : (
        <ul>
          {books.map((book: OpenStaxBook) => (
            <li key={book.id} className="mb-2">
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {book.title}
              </a>
              <p>{book.description}</p>
              <p className="text-sm text-gray-600">
                Subjects: {book.subjects.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
