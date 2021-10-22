module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
    resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckux5ljfu0bim01zce2uy8w2x/master",

    }
  }
]
}
