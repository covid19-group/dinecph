import Link from 'next/link'

import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default () => (
  <>
    <Head />
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-auto px-3 pt-16 pb-24">
        <div className="max-w-6xl flex mx-auto">
          <div className="flex-auto md:pt-16 md:pr-16">
            <h2 className="font-extrabold text-2xl sm:text-3xl leading-none mb-6">
              About
            </h2>
            <p className="max-w-xl text-navy-light text-lg sm:text-xl mb-2">
              The Covid-19 crisis has hit the restaurant scene of Copenhagen.
              Many of them have started doing take-away as a response. We
              created this site as a means to spread the word. Contact us at{' '}
              <a href="mailto:martin@pelion.app">martin@pelion.app</a>.
            </p>
          </div>
          <div className="flex-shrink-0 hidden md:block w-80 lg:w-96 h-80 lg:h-96 bg-sand" />
        </div>
      </main>
      <Footer />
    </div>
  </>
)
