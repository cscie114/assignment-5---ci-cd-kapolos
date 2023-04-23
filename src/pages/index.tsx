import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/layout'
import * as styles from './index.module.css'
import { graphql } from 'gatsby'

interface IAllMd {
  allMarkdownRemark: {
    nodes: Array<{
      html: string
    }>
  }
}

const IndexPage: React.FC<PageProps<IAllMd>> = (props) => {
  const mdContent = props.data.allMarkdownRemark.nodes[0].html

  return (
    <Layout pageId="__homepage">

      <div className={`container ${styles.twoCol}`}>
        <div className={styles.left}>
          <h3>
            NPS Parks powered by Gatsby.
          </h3>

          <StaticImage src="../images/nps.png" alt="National Park Service Logo"/>
        </div>

        <div className={styles.right}>
          <ul>
            <a href="/all-parks">All Parks</a>
          </ul>

          <div dangerouslySetInnerHTML={{ __html: mdContent }} />
        </div>
      </div>

    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        html
      }
    }
  }
`
