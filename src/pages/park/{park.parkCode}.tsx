import React, { FC } from 'react'
import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import * as styles from './park.module.css'

interface IParkImage {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

interface IPark {
  parkCode: string
  fullName: string
  description: string
  latitude: number
  longitude: number
  parkImages: IParkImage[]
}

const Park: FC<PageProps<IPark>> = (props) => {
  const { park } = props.data

  return (
    <Layout pageId="__park">
      <header className={`container ${styles.header}`}>
        <h3>{park.fullName}</h3>

        <p>{park.description}</p>
      </header>

      <main className={`container ${styles.images}`}>
        {park.parkImages.map(image => {
          return (
            <GatsbyImage
              key={image.src}
              image={image.childImageSharp?.gatsbyImageData}
              alt="Park Image"
              className={styles.image}
            />)
        })}
      </main>

      <aside className={`container ${styles.links}`}>
        <div className={styles.url}>
          <a href={`https://www.nps.gov/${park.parkCode}`}
             target="_blank" rel="noopener noreferrer">nps.gov/{park.parkCode}</a>
        </div>
        <div>
          <a href={`https://www.google.com/maps/search/?api=1&query=${park.latitude},${park.longitude}`}
             target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg"
                 className={styles.mapImg}
                 alt="Google Maps for Park Location"/>
          </a>
        </div>
      </aside>
    </Layout>
  )
}

export default Park

export const query = graphql`
  query($parkCode: String) {
    park (parkCode: { eq: $parkCode }) {
      parkCode
      fullName
      description
      latitude
      longitude
      images {
        url
      }
      parkImages {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
    }
  }
`
