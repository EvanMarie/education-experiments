

export async function searchWikipedia(query: string): Promise<SearchResult[]> {
  const url = new URL('https://en.wikipedia.org/w/api.php');
  url.searchParams.append('action', 'query');
  url.searchParams.append('list', 'search');
  url.searchParams.append('srsearch', query);
  url.searchParams.append('format', 'json');
  url.searchParams.append('origin', '*');

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Failed to fetch search results: ${response.statusText}`);
  }
  const data: SearchResponse = await response.json();
  return data.query.search;
}

export async function getArticleContent(title: string): Promise<string> {
  const url = new URL('https://en.wikipedia.org/w/api.php');
  url.searchParams.append('action', 'query');
  url.searchParams.append('prop', 'extracts');
  url.searchParams.append('exintro', 'true');
  url.searchParams.append('titles', title);
  url.searchParams.append('format', 'json');
  url.searchParams.append('origin', '*');

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Failed to fetch article content: ${response.statusText}`);
  }
  const data: ExtractResponse = await response.json();
  const page = Object.values(data.query.pages)[0];
  return page.extract;
}



export interface SearchResult {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

export interface SearchResponse {
  query: {
    search: SearchResult[];
  };
}

export interface ExtractResponse {
  query: {
    pages: {
      [key: string]: {
        pageid: number;
        ns: number;
        title: string;
        extract: string;
      };
    };
  };
}
