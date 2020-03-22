import Promise from 'promise-polyfill'
import fetch from 'isomorphic-unfetch'

import Head from '../components/Head'
import Nav from '../components/Nav'
import Map from '../components/Map'

const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY

export default ({ pos }) => (
  <>
    <Head />
    <div className="h-screen flex flex-col">
      <Nav />
      <main className="flex-auto">
        <Map pos={pos} />
      </main>
    </div>
  </>
)

export async function getStaticProps() {
  const res = await fetch(
    'https://maps.googleapis.com/maps/api/geocode/json?address=' +
      'Ryesgade 25, Copenhagen N 2200, DK' +
      '&key=' +
      googleMapsApiKey
  ).catch(err => {
    console.log(err)
  })
  const data = await res.json()
  const pos = data.results[0].geometry.location

  return { props: { pos } }
}
