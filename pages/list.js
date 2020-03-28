import { useState } from 'react'
import Promise from 'promise-polyfill'
import fetch from 'isomorphic-unfetch'

import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default ({ restaurants }) => {
  const [filters, setFilters] = useState({})
  if (restaurants && !!restaurants.length)
    return (
      <>
        <Head />
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-auto px-3 pb-16">
            <div className="max-w-6xl mx-auto">
              <ul className="flex flex-wrap -m-3">
                {restaurants
                  // Filter for necessary content
                  .filter(
                    restaurant =>
                      restaurant.display &&
                      restaurant.name &&
                      restaurant.description &&
                      restaurant.url
                  )
                  // Filter for delivery
                  .filter(restaurant =>
                    filters.delivery ? restaurant.delivery : true
                  )
                  // Filter for offerings
                  .filter(restaurant =>
                    filters.offerings
                      ? !filters.offerings.every(
                          offer => !restaurant.offerings.includes(offer)
                        )
                      : true
                  )
                  .map(restaurant => (
                    <ListItem key={restaurant.name} restaurant={restaurant} />
                  ))}
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
  const airtableApiKey = process.env.AIRTABLE_API_KEY
  const airtableBaseKey = process.env.AIRTABLE_BASE_KEY

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
  const address = restaurant.address || undefined
  const description = restaurant.description || undefined
  const offerings = restaurant.offerings || undefined
  const delivery = restaurant.delivery || false
  const phone = restaurant.phone || undefined
  const url = restaurant.url || undefined
  return (
    <li className="w-full md:w-1/2 p-3">
      <div className="relative h-full flex flex-col items-start border border-sand overflow-hidden p-4 sm:p-8 lg:px-12">
        <div className="flex-auto">
          {name && <h3 className="text-xl sm:text-2xl mb-2">{name}</h3>}
          {address && <p className="text-xs sm:text-sm mb-2">{address}</p>}
          {phone && <p className="text-sm mb-4">{phone}</p>}
          {description && (
            <p className="max-w-xl text-sm sm:text-base mb-4">{description}</p>
          )}
          {offerings && !!offerings.length && (
            <ul className="-m-1 mb-6">
              {offerings.map(label => (
                <li
                  key={label}
                  className="inline-block font-medium text-xs sm:text-sm bg-sand px-2 py-1 m-1"
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>
        {url && (
          <a
            onClick={() =>
              process.env.NODE_ENV === 'production' &&
              fathom('trackGoal', 'NWXGO2MB', 0)
            }
            href={url.includes('http') ? url : 'https://' + url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm sm:text-base"
          >
            View and order&nbsp;&nbsp;&nbsp;⟶
          </a>
        )}
        {delivery && (
          <div className="sm:absolute top-0 right-0 font-medium text-sm sm:bg-sand sm:border-b border-sand sm:px-2 sm:py-1 mt-4 sm:m-2">
            ✓ Delivery available
          </div>
        )}
      </div>
    </li>
  )
}
