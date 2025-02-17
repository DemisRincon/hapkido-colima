const contactQuery = `
query{
  pageCollection(where: {slug: "contact"}, limit: 1) {
    items {
      componentsCollection {
        items {
          ... on ButtonScreen {
            __typename
            name
            buttons
            
            
          }
        }
      }
    }
  }
}
`;

export default contactQuery;
