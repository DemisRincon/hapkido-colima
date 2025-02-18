import homeQuery from "@/lib/confluence/homeQuery";

export async function GET() {
  const query = homeQuery;
  try {
    const responseFromAPI = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
        cache: "no-cache",
      }
    );

    if (!responseFromAPI.ok) {
      const errorText = await responseFromAPI.text();
      throw new Error(`Error fetching data: ${errorText}`);
    }

    const data = await responseFromAPI.json();
    return new Response(
      JSON.stringify(
        data.data.pageCollection.items[0].componentsCollection.items
      ),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
