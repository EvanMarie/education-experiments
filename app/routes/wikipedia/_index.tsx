import { useState } from "react";
import { Form, useLoaderData, useNavigate } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Input from "~/components/buildingBlocks/input";
import Button from "~/components/buildingBlocks/button";
import Wrap from "~/components/buildingBlocks/wrap";
import Flex from "~/components/buildingBlocks/flex";
import NavContainer from "~/components/buildingBlocks/navContainer";
import { BsHouse } from "react-icons/bs";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";
import HStack from "~/components/buildingBlocks/hStack";
import { getArticleContent, SearchResult, searchWikipedia } from "./wikipedia";
import ScreenContainer from "../components/screenContainer";
import ResultsContainer from "../components/resultsContainer";
import InputForm from "../components/inputForm";
import HTMLContainer from "../components/htmlContainer";

interface LoaderData {
  searchResults: SearchResult[];
  articleContent: string;
  query: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query") || "unicorn";
  const searchResults = await searchWikipedia(query);

  // Fetch the content of the first article in the search results
  const articleTitle = searchResults[0]?.title || "";
  const articleContent = articleTitle
    ? await getArticleContent(articleTitle)
    : "";

  return { searchResults, articleContent, query };
};

export default function Index() {
  const { searchResults, articleContent, query } = useLoaderData<LoaderData>();
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState(query);
  const navigate = useNavigate();

  const handleTopicClick = (topic: string) => {
    setInputValue(topic);
    navigate(`?query=${encodeURIComponent(topic)}`);
  };

  return (
    <ScreenContainer>
      <InputForm inputValue={inputValue} setInputValue={setInputValue} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Wrap className="w-full gap-y-1vh gap-x-2vh justify-evenly p-1vh">
        {searchResults.map((result: SearchResult) => (
          <Flex
            key={result.pageid}
            className="bg-col-200 hover:bg-col-300 transition-300 px-1.5vh py-0.2vh border-800-md shadowNarrowTight hover:cursor-pointer rounded-[2vh]"
            onClick={() => handleTopicClick(result.title)}
          >
            {result.title}
          </Flex>
        ))}
      </Wrap>
      <ResultsContainer>
        {articleContent && (
          <VStackFull gap="gap-2vh">
            <h3 className="text-col-800 lightTextShadow">{query}</h3>
            <HTMLContainer content={articleContent} />
          </VStackFull>
        )}
      </ResultsContainer>
    </ScreenContainer>
  );
}
