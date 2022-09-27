module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Toshiro`,
        short_name: `Toshiro`,
        start_url: `/`,
        background_color: `#1b1b1d`,
        theme_color: `#1b1b1d`,
        display: `minimal-ui`,
        icon: `src/images/toshiro-avi.jpeg`,
      },
    },
  ],
};
