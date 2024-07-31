import { fetchSmithsonianData, SmithsonianSearchResult } from "./smithsonian";
import { useLoaderData, Form, useNavigate } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { useState } from "react";
import ScreenContainer from "../components/screenContainer";
import ResultsContainer from "../components/resultsContainer";
import Text from "~/components/buildingBlocks/text";
import InputForm from "../components/inputForm";
import ResultCard from "../components/resultCard";
import HTMLContainer from "../components/htmlContainer";

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
  console.log("results", results);
  return (
    <ScreenContainer>
      <InputForm inputValue={inputValue} setInputValue={setInputValue} />

      {results.length === 0 ? (
        <p>No results available. Please try a different query.</p>
      ) : (
        <ResultsContainer maxHeight="max-h-[85svh]">
          {results.map((result: SmithsonianSearchResult, index: number) => (
            <ResultCard key={index}>
              <Text className="text-lg font-semibold">{result.title}</Text>
              {/* <p>{result.content}</p> */}
              <HTMLContainer content={result.content} />
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
            </ResultCard>
          ))}
        </ResultsContainer>
      )}
    </ScreenContainer>
  );
}
