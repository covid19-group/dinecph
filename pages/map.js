import Promise from 'promise-polyfill'
import fetch from 'isomorphic-unfetch'

import Head from '../components/Head'
import Nav from '../components/Nav'
import Map from '../components/Map'

const airtableApiKey = process.env.AIRTABLE_API_KEY
const airtableBaseKey = process.env.AIRTABLE_BASE_KEY
const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY

export default ({ restaurants, pos }) => {
  return (
    <>
      <Head />
      <div className="h-screen flex flex-col">
        <Nav />
        <main className="flex-auto">
          <Map restaurants={restaurants} />
        </main>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const Airtable = require('airtable')
  const airtable = new Airtable({
    apiKey: airtableApiKey,
  }).base(airtableBaseKey)
  const base = await airtable('Restaurants')
  const records = await base
    .select({
      maxRecords: 999999, // don't want to paginate...
      view: 'Grid view', // NOTE: changing the view name will break things
    })
    .all()
  const restaurants = await Promise.all(records.map(record => record.fields))

  let i = -1
  for await (let restaurant of restaurants) {
    i++
    const res = await fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        encodeURI(restaurant.address) +
        '&key=' +
        googleMapsApiKey
    ).catch(err => {
      console.log(err)
    })
    const positionData = await res.json()
    if (positionData) restaurants[i].positionData = positionData
  }

  return { props: { restaurants } }
}
