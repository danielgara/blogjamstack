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
          host: 'database-1.cyehxs5qyhwe.us-east-1.rds.amazonaws.com',
          user: 'admin',
          password: 'Hola12345.y',
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
