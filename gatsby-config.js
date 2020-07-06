module.exports = {
  siteMetadata: {
    title: "Politeknik Keuangan Negara STAN",
    description: "Situs Web Resmi PKN STAN",
    author: "UPT Sistem Informasi PKN STAN",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#191970",
        theme_color: "#191970",
        display: "minimal-ui",
        icon: "src/images/pkn-stan-icon.png",
      },
    },
    // "gatsby-plugin-offline",
  ],
};
