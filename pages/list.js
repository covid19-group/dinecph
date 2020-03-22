import Promise from 'promise-polyfill'
import fetch from 'isomorphic-unfetch'

import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const airtableApiKey = process.env.AIRTABLE_API_KEY
const airtableBaseKey = process.env.AIRTABLE_BASE_KEY
const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY

export default ({ restaurants }) => {
  if (restaurants && !!restaurants.length)
    return (
      <>
        <Head />
        <div className="h-screen flex flex-col">
          <Nav />
          <main className="flex-auto px-3 pb-16">
            <div className="max-w-6xl mx-auto">
              <ul className="flex flex-wrap -m-3">
                {restaurants.map(restaurant => {
                  if (
                    restaurant.display &&
                    restaurant.name &&
                    restaurant.description &&
                    restaurant.url
                  )
                    return (
                      <ListItem key={restaurant.name} restaurant={restaurant} />
                    )
                })}
              </ul>
            </div>
          </main>
          <Footer />
        </div>
      </>
    )
  return (
    <div className="w-full h-full flex items-center justify-center text-3xl text-pink">
      <LoadingSpinner />
    </div>
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

  return { props: { restaurants } }
}

const ListItem = ({ restaurant }) => {
  const name = restaurant.name || undefined
  const description = restaurant.description || undefined
  const offerings = restaurant.offerings || undefined
  const delivery = restaurant.delivery || false
  const phone = restaurant.phone || undefined
  const url = restaurant.url || undefined
  return (
    <li className="w-full md:w-1/2 p-3">
      <div className="h-full flex flex-col items-start border border-sand overflow-hidden p-4 sm:p-8 md:px-12">
        <div className="flex-auto">
          {name && <h3 className="text-xl sm:text-2xl mb-2">{name}</h3>}
          {description && (
            <p className="max-w-2xl text-sm sm:text-base mb-4">{description}</p>
          )}
          {offerings && !!offerings.length && (
            <ul className="-m-2 mb-2">
              {offerings.map(label => (
                <li
                  key={label}
                  className="inline-block font-medium text-sm sm:text-base bg-sand px-2 py-1 m-2"
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
          {delivery && (
            <div className="text-sm sm:text-base mb-4">
              ✓ Delivery available
            </div>
          )}
          {phone && <div className="text-sm sm:text-base mb-4">{phone}</div>}
        </div>
        {url && (
          <a
            href={url.includes('http') ? url : 'https://' + url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm sm:text-base"
          >
            View and order&nbsp;&nbsp;&nbsp;⟶
          </a>
        )}
      </div>
    </li>
  )
}
