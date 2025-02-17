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
            ...on Carousel{
              __typename
              text
              imagesCollection{
                items {
                  url
                }
              }
            }
            ...on SimpleBanner{
              __typename
              text
            }
            ...on Testimonials{
              __typename
              text
              testimonials
            }
          }
        }
      }
    }
  }
}`;

export default homeQuery;
