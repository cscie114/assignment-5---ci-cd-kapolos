const axios = require('axios')

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
    const response = await axios.get(apiUrl)

    return {
      statusCode: 200,
      body: JSON.stringify({ data: response.data })
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error })
    }
  }
}

module.exports = { handler }
