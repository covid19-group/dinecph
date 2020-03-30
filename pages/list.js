import { useContext, useState } from 'react'
import Promise from 'promise-polyfill'
import fetch from 'isomorphic-unfetch'

import { LanguageContext } from '../components/LanguageSelector'
import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const pageContent = {
  'da-DK': {
    title: 'Restauranter',
    offersLabel: 'Tilbud',
    offers: {
      Food: 'Mad',
      Wine: 'Vin',
      Drinks: 'Drikkevarer',
      Giftcards: 'Gavekort',
    },
    delivery: 'Levering',
    orderLabel: 'Besøg og bestil',
  },
  'en-GB': {
    title: 'Restaurants',
    offersLabel: 'Offers',
    offers: {
      Food: 'Food',
      Wine: 'Wine',
      Drinks: 'Drinks',
      Giftcards: 'Giftcards',
    },
    delivery: 'Delivery',
    orderLabel: 'View and order',
  },
}

const ListItem = ({ restaurant, content }) => {
  const name = restaurant.name || undefined
  const address = restaurant.address || undefined
  const description = restaurant.description || undefined
  const offers = restaurant.offerings || undefined
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
          {offers && !!offers.length && (
            <ul className="-m-1 mb-6">
              {offers.map(offer => (
                <li
                  key={offer}
                  className="inline-block font-medium text-xs sm:text-sm bg-sand px-2 py-1 m-1"
                >
                  {content.offers[offer]}
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
            {content.orderLabel}&nbsp;&nbsp;&nbsp;⟶
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

export default ({ restaurants }) => {
  const { language } = useContext(LanguageContext)
  const content = pageContent[language]

  const [filterDelivery, setFilterDelivery] = useState(false)
  const [filterOffers, setFilterOffers] = useState([])

  if (restaurants && !!restaurants.length)
    return (
      <>
        <Head />
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-auto px-3 pt-8 sm:pt-16 pb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="flex-auto font-extrabold text-2xl sm:text-3xl leading-none mb-4 sm:mb-6">
                {content.title}
              </h2>
              <div className="flex flex-wrap sm:flex-no-wrap items-end -m-1 mb-6">
                <div className="w-full flex flex-wrap items-center mb-4 sm:mb-0">
                  <p className="w-full sm:w-auto font-medium m-1 mr-2">
                    {content.offersLabel}
                  </p>
                  {['Food', 'Wine', 'Drinks', 'Giftcards'].map(offer => {
                    const isChecked = filterOffers.includes(offer)
                    const handleChange = () => {
                      if (isChecked) {
                        const newOffers = [...filterOffers]
                        newOffers.splice(newOffers.indexOf(offer), 1)
                        setFilterOffers(newOffers)
                      } else {
                        setFilterOffers([...filterOffers, offer])
                      }
                    }
                    return (
                      <label
                        key={offer}
                        className={
                          'inline-block font-medium border-2 border-navy cursor-pointer px-2 py-1 m-1' +
                          (isChecked
                            ? ' text-sand-light bg-navy'
                            : ' text-navy')
                        }
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="select-none">
                          {content.offers[offer]}
                        </span>
                      </label>
                    )
                  })}
                </div>
                <label className="flex-shrink-0 inline-flex items-center font-medium cursor-pointer m-1">
                  <input
                    type="checkbox"
                    checked={filterDelivery}
                    onChange={() => setFilterDelivery(!filterDelivery)}
                    className="form-checkbox mr-2"
                  />
                  <span className="select-none">{content.delivery}</span>
                </label>
              </div>
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
                    filterDelivery ? restaurant.delivery : true
                  )
                  // Filter for offers
                  .filter(restaurant =>
                    filterOffers && filterOffers.length
                      ? filterOffers.every(offer =>
                          restaurant.offerings.includes(offer)
                        )
                      : true
                  )
                  .map(restaurant => (
                    <ListItem
                      key={restaurant.name}
                      restaurant={restaurant}
                      content={content}
                    />
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
