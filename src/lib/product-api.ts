import { ApiResponse } from "@/types";

const PRODUCT_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  subTitle
  slug
  price
  productImage {
    url
  }
  details {
      json
  }
`;

async function fetchGraphQL(query: string, preview = false) : Promise<ApiResponse> {
    return fetch(
     `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
          // Contentful content or draft content
          Authorization: `Bearer ${
            preview
              ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
        // Associate all fetches for articles with an "articles" cache tag so content can
        // be revalidated or updated from Contentful on publish
        next: { tags: ["Products"] },
      }
    ).then((response) => response.json());
}

function extractProductEntries(fetchResponse: ApiResponse) {
    return fetchResponse?.data?.productsCollection?.items;
  }
  
  export async function getAllProducts(
    // By default this function will return published content but will provide an option to
    // return draft content for reviewing articles before they are live
    isDraftMode = false
  ) {
    const products = await fetchGraphQL(
      `query {
          productsCollection(where:{slug_exists: true}, order: title_DESC, preview: ${
        isDraftMode ? "true" : "false"
      }) {
            items {
              ${PRODUCT_GRAPHQL_FIELDS}
            }
          }
        }`,
      isDraftMode
    );
    return extractProductEntries(products);
  }

  export async function getProduct(
    slug: string,
    isDraftMode = false
  ) {
    const products = await fetchGraphQL(
      `query {
          productsCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
        isDraftMode ? "true" : "false"
      }) {
            items {
              ${PRODUCT_GRAPHQL_FIELDS}
            }
          }
        }`,
      isDraftMode
    );
    const [product] = extractProductEntries(products);
    
    return product;
  }