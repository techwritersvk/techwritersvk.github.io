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
      resolve: "@zahradnik-io/gatsby-theme-novela",
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
        name: `Ján Haláček | Blog`,
        short_name: `Ján Haláček`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-cookiehub-banner`,
      options: {
        cookieHubId: "4968b982",
        cookieHubV2Api: true,
        categories: [
          {
            categoryName: 'analytics',
            cookieName: 'gatsby-plugin-google-analytics-gdpr_cookies-enabled'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        trackingId: "G-WC6N4CL3J0",
        anonymizeIP: true,
        autoStartWithCookiesEnabled: false,
      },
    },
    {
    	resolve: "gatsby-plugin-sitemap"
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
