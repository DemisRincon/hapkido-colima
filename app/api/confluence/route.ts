import aboutQuery from "@/lib/confluence/aboutQuery";
import homeQuery from "@/lib/confluence/homeQuery";
import locationQuery from "@/lib/confluence/locationQuery";
import galleryQuery from "@/lib/confluence/galleryQuery";
import contactQuery from "@/lib/confluence/contactQuery";

const getQuery = (type: string) => {
  switch (type) {
    case "home":
      return homeQuery;
    case "about":
      return aboutQuery;
    case "location":
      return locationQuery;
    case "gallery":
      return galleryQuery;
    case "contact":
      return contactQuery;
    default:
      return homeQuery;
  }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const paramValue = searchParams.get("page");
  const query = getQuery(paramValue ?? "");
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
