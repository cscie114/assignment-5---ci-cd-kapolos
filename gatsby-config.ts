import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'assignment-4-gatsby',
    description: 'Starter Gatsby project for Assignment 4',
    course: 'CSCI E-114',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-remote-images',
      options: {
        nodeType: 'Park',
        imagePath: 'images[].url',
        name: 'parkImages',
        silent: true   // ignore 404s
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'md',
        // eslint-disable-next-line node/no-path-concat
        path: `${__dirname}/src/md`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {},
    },
  ],
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
}

export default config
