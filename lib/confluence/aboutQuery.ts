const aboutQuery = `
query{
  pageCollection(where:{slug:"about"}, limit:1){
    items{
      componentsCollection{
        ...on PageComponentsCollection{
          items{
            ...on HeroSideImageHead{
              __typename
              text
              image{
                url
              }
            }
            ...on SimpleBanner{
              __typename
              text
            }
            ...on Article{
              __typename
              name
              imageCircular
              imageWidth
              content
              image{
                url
              }
            }
            ...on SectionBanner{
              __typename
              name
              content
            }
            ...on ImagesGrid{
              __typename
              name
              imagesCollection{
                items{url}
              }
            }
            
          }
        }
      }
    }
  }
}`;

export default aboutQuery;
