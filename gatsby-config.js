module.exports = {
  siteMetadata: {
    title: `famzrd charter`,
    author: `Prateek Rastogi`,
    description: `famzrd charter`,
    siteUrl: `https://famzrd.com/`,
    social: {
      twitter: `femzrd`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-144097542-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `famzrd`,
        short_name: `famzrd`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#722F37`,
        display: `minimal-ui`,
        icon: `content/assets/famzrd.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
