require('dotenv').config()

const queries = require('./src/utils/algolia_queries')

const pluginConfig = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-transition-link`,
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  },
  {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `uploads`,
      path: `${__dirname}/static/assets/img`,
    }
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-relative-images',
          options: {
            name: 'uploads'
          }
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 960,
            linkImagesToOriginal: false
          }
        },
        `gatsby-remark-lazy-load`,
        `gatsby-remark-responsive-iframe`,
        `gatsby-remark-external-links`,
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            icon: false,
            removeAccents: true
          }
        },
        `gatsby-remark-prismjs`
      ]
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Bruno Albano`,
      short_name: `Bruno Albano`,
      start_url: `/`,
      background_color: `#16202c`,
      theme_color: `#16202c`,
      display: `minimal-ui`,
      icon: `static/assets/img/favicon.png`, // This path is relative to the root of the site.
    }
  },
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/posts`
    }
  },
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }]
              })
            })
          },
          query: `
            {
              allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
                edges {
                  node {
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      description
                      date
                    }
                    excerpt(truncate: true, pruneLength: 500, format: HTML)
                  }
                }
              }
            }
          `,
          output: '/feed.xml',
          title: 'Bruno Albano Website - RSS Feed'
        }
      ]
    }
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-sitemap`
]

if (process.env.CONTEXT === 'production') {
  const algolia = {
    resolve: `gatsby-plugin-algolia-search`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      queries,
      chunkSize: 10000, // default: 1000
      enablePartialUpdates: true
    }
  }

  const analytics = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
      head: false
    }
  }

  pluginConfig.push(algolia)
  pluginConfig.push(analytics)
}

module.exports = {
  siteMetadata: {
    title: `Bruno Albano`,
    description: `Utilizo meu website pessoal para expor meus projetos e escrever um pouco sobre o mundo front-end em geral`,
    position: `Desenvolvedor Front End`,
    author: `@obrunoalbano`,
    siteUrl: `https://brunoalbano.com.br/`,
  },
  plugins: pluginConfig
}