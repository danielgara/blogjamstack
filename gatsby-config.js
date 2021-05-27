module.exports = {
  siteMetadata: {
    title: "Blog JAMstack",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-mysql",
      options: {
        connectionDetails: {
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'blogjamstack'
        },
        queries: [
          {
            statement: 'SELECT * FROM posts',
            idFieldName: 'id',
            name: 'posts'
          }
        ]
      }
    },
  ],
};
