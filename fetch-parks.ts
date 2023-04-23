import { config } from 'dotenv'
import EleventyFetch from '@11ty/eleventy-fetch'

import type * as Park from 'Park'

config()

const apiKey = process.env.NPS_API_KEY
const LIMIT = 500
const headers = {
  'X-Api-Key': apiKey,
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
}
const eleventyReqOptions = {
  type: 'json',
  duration: '2w',
  fetchOptions: { headers },
  directory: '.fetch-cache'
}

/**
 * Given a starting offset, it returns the park data results from the API, with a limit of LIMIT
 */
const getParksFromOffset = async (offset = 0): Promise<Park.Datum[]> => {
  const endpoint = 'https://developer.nps.gov/api/v1/parks'

  const params = new URLSearchParams()
  params.append('limit', LIMIT.toString())
  params.append('start', offset.toString())

  try {
    console.log(`Retrieving ${endpoint}?${params.toString()}`)
    const resp = await EleventyFetch(`${endpoint}?${params.toString()}`, eleventyReqOptions)
    console.log('...done!')

    return resp.data
  } catch (error) {
    console.error(error)

    return []
  }
}

/**
 *  Recursively queries the API for all the park data.
 */
export const getParks = async (offset: number, results: Park.Datum[]): Promise<Park.Datum[]> => {
  const reqResults = await getParksFromOffset(offset)
  if (reqResults.length === 0) {
    console.log('Completed park data retrieval')

    return results
  }

  return await getParks(offset + LIMIT, [...results, ...reqResults])
}
