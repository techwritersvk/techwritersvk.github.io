module.exports = {
  siteMetadata: {
    title: `Ján Haláček | Blog`,
    name: `Ján Haláček`,
    siteUrl: `https://www.janhalacek.com`,
    description: `A personal blog about everything around us.`,
    hero: {
      heading: `Welcome to my world. It's lovely to see you here!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/JanHalacek`,
      },
      {
        name: `medium`,
        url: `https://medium.com/@janhalacek`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jan-halacek-b7aa97ab/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
