import * as React from 'react'
import { graphql } from 'gatsby'

import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/layout'
import * as styles from './all-parks.module.css'

interface IParkNode {
  node: {
    id: string
    fullName: string
    parkCode: string
  }
}

interface IAllPark {
  allPark: {
    edges: IParkNode[]
  }
}

const AllParksPage = ({ data }: PageProps<IAllPark>): JSX.Element => {
  const { allPark } = data

  return (
    <Layout pageId='__page_allParks'>
      <div id="__page_allParks" className='container'>
        <header>
          <h4>All NPS Parks</h4>
        </header>

        <main>
          <ul className={styles.twoCol}>
            {allPark.edges.map(({ node }) => (
              <li key={node.id}>
                <a href={`/park/${node.parkCode}`}>{node.fullName}</a>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </Layout>
  )
}

export default AllParksPage

export const Head: HeadFC = () => <title>All Parks</title>

export const query = graphql`
query {
  allPark {
    edges {
      node {
        id
        parkCode
        fullName
      }
    }
  }
}
`
