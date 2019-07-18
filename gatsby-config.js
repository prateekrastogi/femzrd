module.exports = {
  siteMetadata: {
    title: `femzrd charter`,
    author: `Prateek Rastogi`,
    description: `femzrd charter`,
    siteUrl: `https://femzrd.com/`,
    social: {
      twitter: `femzrd`,
    },
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
        trackingId: `UA-144078892-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `femzrd`,
        short_name: `femzrd`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#‎85bb65`,
        display: `minimal-ui`,
        icon: `content/assets/femzrd.png`,
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
