const fetch = require('node-fetch')

const handler = async function (event) {
  const baseUrl =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
  const { lat, long } = JSON.parse(event.body)
  console.log(`Received: ${lat}, ${long}`)

  if (lat == null || long == null) {
    return {
      statusCode: 500,
      body: 'Invalid parameters'
    }
  }

  const apiUrl = `${baseUrl}${lat},${long}?key=${process.env.WEATHER_API_KEY}`

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })

    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText }
    }

    const data = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify({ data })
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message })
    }
  }
}

module.exports = { handler }
