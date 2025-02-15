const homeQuery = `
query{
  pageCollection(where:{slug:"home"}, limit:1){
    items{
    componentsCollection{
        ...on PageComponentsCollection{
          items{
            ...on HeroBackgroundImage{
              __typename
              name
              text
              image{
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

export default homeQuery;
