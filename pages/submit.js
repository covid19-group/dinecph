import Link from 'next/link'

import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default () => (
  <>
    <Head />
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-auto px-3 py-16">
        <div className="max-w-6xl flex mx-auto">
          <div className="flex-auto md:pt-16 md:pr-16">
            <h2 className="font-extrabold text-2xl sm:text-3xl leading-none mb-6">
              Submit your restaurant
            </h2>
            <p className="max-w-xl text-navy-light text-lg sm:text-xl mb-8">
              Your local restaurants are hurt by the current crisis—but they're
              still cooking! Help them stay alive by getting take away from the
              best restaurants in Copenhagen.
            </p>
            <a
              href="https://airtable.com/shrtTiPoFHQ5L8nRt"
              target="_blank"
              rel="noopener"
              className="h-12 btn btn-primary inline-flex items-center"
            >
              Submit your restaurant
            </a>
          </div>
          <div className="flex-shrink-0 hidden md:block w-80 lg:w-96 h-80 lg:h-96 bg-sand" />
        </div>
      </main>
      <Footer />
    </div>
  </>
)
