const locationQuery = `
query {
  pageCollection(where: {slug: "location"}, limit: 1) {
    items {
      componentsCollection {
        items {
          ... on ImagesGrid {
            __typename
            name
            imagesCollection {
              items {
                url
              }
            }
          }
        }
      }
    }
  }
}
`;
export default locationQuery;
