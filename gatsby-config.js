module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyQxHIDEz8hhTfXN`, // may instead specify via env, see below
        tables: [
          {
            baseId: `apppvRBO7pkSdMPOH`,
            tableName: `Sections`,
            tableView: `All`,
            mapping: { 'Body': `text/markdown` },
            tableLinks: [`Pages`],
          },
          {
            baseId: `apppvRBO7pkSdMPOH`,
            tableName: `Pages`,
            tableView: `All`,
            mapping: { 'Body': `text/markdown` },
            tableLinks: [`Sections`],
          },
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/COVID19-Icon-300px-dark.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
