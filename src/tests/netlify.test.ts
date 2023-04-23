// This test was used for development of the Netlify function
import { config } from 'dotenv'

import { handler } from '../../netlify/functions/weather'

config()

describe('Netlify tests', () => {
  test('It fetches Weather data', async () => {
    const event = {
      body: JSON.stringify({
        lat: '38.9697',
        long: '-77.385'
      })
    }
    const data = await handler(event)

    expect(data).toHaveProperty('statusCode', 200)
    expect(data).not.toHaveProperty('error')
  })
})
