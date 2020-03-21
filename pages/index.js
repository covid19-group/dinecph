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
        <div className="max-w-6xl flex items-center mx-auto">
          <div className="flex-auto md:pr-16">
            <h1 className="font-extrabold text-4xl sm:text-5xl leading-none mb-6">
              Support Copenhagen restaurants by
              <br className="hidden sm:inline" />
              <span className="text-pink"> getting take-away</span>
            </h1>
            <p className="max-w-xl text-navy-light text-lg sm:text-xl mb-8">
              Your local restaurants are hurt by the current crisis—but they're
              still cooking! Help them stay alive by getting take away from the
              best restaurants in Copenhagen.
            </p>
            <div className="-m-2">
              <Link href="/map">
                <a className="h-12 btn btn-primary inline-flex items-center m-2">
                  Browse restaurants
                </a>
              </Link>
              <Link href="/submit">
                <a className="h-12 btn btn-secondary inline-flex items-center m-2">
                  Submit your restaurant
                </a>
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 hidden md:block w-80 lg:w-96 h-80 lg:h-96 bg-sand" />
        </div>
      </main>
      <Footer />
    </div>
  </>
)
