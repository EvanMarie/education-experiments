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
    <FlexFull className="h-[100svh] bg-col-150 text-col-900">
      <NavContainer className="h-4vh">
        <NavIconButton icon={BsHouse} to="/" type="smallNormal" />
        <FlexFull className="justify-center">
          <h5 className="text-col-800 lightTextShadow font-semibold">
            Search Wikipedia
          </h5>
        </FlexFull>
      </NavContainer>
      <FlexFull className="pt-4vh justify-center">
        <VStackFull className="p-1vh pt-2vh max-w-[120vh]" gap="gap-3vh">
          <Form method="get">
            <HStack>
              <Input
                className="w-30vh"
                type="text"
                name="query"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button
                htmlType="submit"
                buttonText="search"
                type="smallNormal"
              />
            </HStack>
          </Form>
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
          <FlexFull className="bg-linear1op50 shadowNarrowTight">
            <FlexFull className="p-1vh md:p-1.5vh xl:p-2vh xxl:p-3vh max-h-[65svh] overflow-y-auto overflow-x-hidden insetShadowXl hide-scrollbar border-900-md">
              {articleContent && (
                <VStackFull gap="gap-2vh">
                  <h2 className="text-col-800 lightTextShadow">{query}</h2>
                  <div
                    className="wikimedia-content text-2vh leading-[2.8vh]"
                    dangerouslySetInnerHTML={{ __html: articleContent }}
                  />
                </VStackFull>
              )}
            </FlexFull>
          </FlexFull>
        </VStackFull>
      </FlexFull>
    </FlexFull>
  );
}
