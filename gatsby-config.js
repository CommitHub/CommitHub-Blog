module.exports = {
  siteMetadata: {
    title: 'CommitHub',
    author: 'Luis Alvarez',
    siteUrl: 'https://commithub.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'commithub-blog',
        short_name: 'commithub',
        start_url: '/',
        background_color: '#21c6ce',
        theme_color: '#21c6ce',
        display: 'minimal-ui',
        icon: 'src/images/logo/favicon.png', // This path is relative to the root of the site.
        icons: [
          {
            src: `/icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
        ]
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blogs`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-emoji`,
        ]
      }
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: `mongodb+srv://luis-alvarez:S1wD8t*s*a%23!@commithub-hqtll.mongodb.net/test?retryWrites=true&w=majority`,
        dbName: `CommitHub`,
        collection: [`Projects`]
      },
    },
  ],
}
