export interface SmithsonianSearchResult {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  content: string;
}

export interface SmithsonianResponse {
  response: {
    rows: any[];
  };
}

export async function fetchSmithsonianData(
  query: string,
  apiKey: string
): Promise<SmithsonianSearchResult[]> {
  const url = new URL("https://api.si.edu/openaccess/api/v1.0/search");
  url.searchParams.append("q", query);
  url.searchParams.append("api_key", apiKey);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch Smithsonian data");
  }

  const data: SmithsonianResponse = await response.json();

  return data.response.rows.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.content.descriptiveNonRepeating?.record_link || "",
    thumbnail:
      item.content.descriptiveNonRepeating?.online_media?.media?.[0]
        ?.thumbnail || "",
    content: item.content.freetext?.notes?.[0]?.content || "",
  }));
}
