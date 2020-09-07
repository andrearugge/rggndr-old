module.exports = {
  siteMetadata: {
    title: `Andrea Ruggeri - Digital Product Designer`,
    description: `Andrea Ruggeri - Digital Product Designer`,
    author: `Andrea Ruggeri <andrea@beconcept.studio> | Alessio Bortolotti <alessio@beconcept.studio>`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      // DOCS --> https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "'",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 100,
        // Enables Google Optimize using your container Id
        optimizeId: "",
        // Enables Google Optimize Experiment ID
        experimentId: "",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        siteSpeedSampleRate: 10,
        cookieDomain: "",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
