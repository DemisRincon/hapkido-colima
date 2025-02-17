const navigationQuery = `
query{
  navbarCollection{
    items{
      slug
      linksObject
      title
      logo{
        url
      }
      footerData
      bottomMessage
    }
  }
}
`;

export default navigationQuery;
