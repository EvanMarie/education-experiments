import { fetchSmithsonianData, SmithsonianSearchResult } from "./smithsonian";
import { useLoaderData, Form, useNavigate } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { useState } from "react";

// Define the interface for Loader Data
interface LoaderData {
  results: SmithsonianSearchResult[];
  query: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query") || "artifacts";
  const apiKey = process.env.SMITHSONIAN_API_KEY || "your_api_key_here"; // Replace with your actual API key

  try {
    const results = await fetchSmithsonianData(query, apiKey);
    return { results, query };
  } catch (error) {
    console.error("Loader Error:", error);
    return { results: [], query };
  }
};

export default function Index() {
  const { results, query } = useLoaderData<LoaderData>();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(query);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`?query=${encodeURIComponent(inputValue)}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Smithsonian Search Results for "{query}"
      </h1>
      <Form method="get" onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </Form>
      {results.length === 0 ? (
        <p>No results available. Please try a different query.</p>
      ) : (
        <ul>
          {results.map((result: SmithsonianSearchResult) => (
            <li key={result.id} className="mb-4">
              <h2 className="text-xl font-semibold">{result.title}</h2>
              <p>{result.content}</p>
              {result.thumbnail && (
                <img
                  src={result.thumbnail}
                  alt={result.title}
                  className="w-48 h-48 object-cover"
                />
              )}
              <a
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                More Info
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
