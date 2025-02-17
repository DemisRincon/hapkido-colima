const galleryQuery = `
query {
  pageCollection(where: {slug: "gallery"}, limit: 1) {
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
export default galleryQuery;
