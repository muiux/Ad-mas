module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-93349937-2`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-root-import`,
  ],
};
