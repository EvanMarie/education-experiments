import {
  searchWikipedia,
  getArticleContent,
  SearchResult,
} from "~/utils/wikimedia";

import { useState } from "react";
import { Form, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Input from "~/components/buildingBlocks/input";

interface LoaderData {
  searchResults: SearchResult[];
  articleContent: string;
  query: string;
}

export const loader: LoaderFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query") || "Remix";
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

  return (
    <FlexFull>
      <VStackFull>
        <h1>Wikipedia Search Results for "{query}"</h1>
        <Form method="get">
          <Input type="text" name="query" defaultValue={query} />
          <button type="submit">Search</button>
        </Form>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <ul>
          {searchResults.map((result: SearchResult) => (
            <li key={result.pageid}>{result.title}</li>
          ))}
        </ul>
        {articleContent && (
          <div>
            <h2>Article Content</h2>
            <div dangerouslySetInnerHTML={{ __html: articleContent }} />
          </div>
        )}
      </VStackFull>
    </FlexFull>
  );
}
