import { useContext } from 'react'
import Promise from 'promise-polyfill'
import fetch from 'isomorphic-unfetch'

import { LanguageContext } from '../components/LanguageSelector'
import Head from '../components/Head'
import Nav from '../components/Nav'
import Map from '../components/Map'

const pageContent = {
  'da-DK': {
    offers: {
      Food: 'Mad',
      Wine: 'Vin',
      Drinks: 'Drikkevarer',
      Giftcards: 'Gavekort',
    },
    orderLabel: 'Besøg og bestil',
  },
  'en-GB': {
    offers: {
      Food: 'Food',
      Wine: 'Wine',
      Drinks: 'Drinks',
      Giftcards: 'Giftcards',
    },
    orderLabel: 'View and order',
  },
}

export default ({ restaurants }) => {
  const { language } = useContext(LanguageContext)
  const content = pageContent[language]

  return (
    <>
      <Head />
      <div className="h-screen flex flex-col">
        <Nav />
        <main className="flex-auto">
          <Map restaurants={restaurants} content={content} />
        </main>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const airtableApiKey = process.env.AIRTABLE_API_KEY
  const airtableBaseKey = process.env.AIRTABLE_BASE_KEY
  // Reducing number of requests to Maps API
  const googleMapsApiKey =
    process.env.NODE_ENV === 'production'
      ? process.env.GOOGLE_MAPS_API_KEY
      : undefined

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
