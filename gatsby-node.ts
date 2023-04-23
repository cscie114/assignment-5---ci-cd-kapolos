import type { GatsbyNode } from 'gatsby'
import { getParks } from './fetch-parks'

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const parks = await getParks(0, [])

  parks.forEach(park => createNode({
    ...park,
    id: createNodeId(park.parkCode),
    parent: null,
    children: [],
    internal: {
      type: 'Park',
      contentDigest: createContentDigest(park)
    }
  }))
}
