import Link from 'next/link'

import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default () => (
  <>
    <Head />
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-auto py-16 md:pt-8 lg:pt-0">
        <div className="max-w-6xl flex items-center md:overflow-hidden mx-auto">
          <div className="flex-auto w-128 md:flex-shrink-0 pl-3 md:pr-16">
            <h1 className="max-w-xl font-extrabold text-4xl sm:text-5xl leading-none mb-6">
              Støt restauranter i København ved at{' '}
              <br className="hidden sm:inline" />
              <span className="text-pink">købe take-away</span>
            </h1>
            <p className="max-w-xl text-navy-light text-lg sm:text-xl mb-8">
              Dine lokale spisesteder er ramt af den nuværende krise—men de
              laver stadig mad! Hjælp dem til at forblive åbne ved at købe
              take-away fra de bedste restauranter i København.
            </p>
            <div className="-m-2">
              <Link href="/map">
                <a className="h-12 btn btn-primary inline-flex items-center m-2">
                  Find restauranter
                </a>
              </Link>
              <Link href="/submit">
                <a className="h-12 btn btn-secondary inline-flex items-center m-2">
                  Tilføj din restaurant
                </a>
              </Link>
            </div>
          </div>
          <img
            src="/assets/hero-illu-alt.png"
            alt="Vin og sjov"
            className="hidden md:block w-128 h-128"
          />
        </div>
      </main>
      <Footer />
    </div>
  </>
)
