module.exports = {
  siteMetadata: {
    title: `Inserire un titolo`,
    description: `...ci penso io`,
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
    // {
    //   resolve: 'gatsby-plugin-iubenda-cookie-footer',
    //   options: {
    //     iubendaOptions: { "perPurposeConsent": true, "whitelabel": false, "lang": "it", "siteId": 1887281, "cookiePolicyId": 27650681, "banner": { "acceptButtonDisplay": true, "customizeButtonDisplay": true, "acceptButtonColor": "#4059d1", "acceptButtonCaptionColor": "white", "customizeButtonColor": "#DADADA", "customizeButtonCaptionColor": "#4D4D4D", "rejectButtonColor": "#0073CE", "rejectButtonCaptionColor": "white", "position": "float-bottom-center", "textColor": "black", "backgroundColor": "white" } },
    //   }
    // },
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
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
