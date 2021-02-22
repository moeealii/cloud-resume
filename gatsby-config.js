module.exports = {
    siteMetadata: {
        title: `Mohamed Ali`,
        description: `Portfolio/Resume of Mohamed Ali, AWS Certified Solutions Architect Professional and Application Support Engineer`,
        author: `@moeealii`,
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `mohamed-ali-cloudresume`,
                short_name: `moe-cloudresume`,
                start_url: `/`,
                icon: `static/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
