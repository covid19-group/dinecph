import Link from 'next/link'

import Head from '../components/Head'
import Nav from '../components/Nav'
import LoadingSpinner from '../components/LoadingSpinner'

export default () => (
  <>
    <Head />
    <Nav />
    <main className="px-3 py-16">
      <div className="max-w-6xl flex items-center mx-auto">
        <div>
          <h1 class="font-extrabold text-4xl lg:text-5xl leading-none mb-6">
            Support Copenhagen restaurants by
            <br class="hidden md:inline" />
            <span class="text-indigo-600">getting take-away</span>
          </h1>
          <p class="max-w-xl text-gray-700 lg:text-lg xl:text-xl mb-8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua ad ad non deserunt sunt.
          </p>
          <div className="-m-2">
            <Link href="/map">
              <a className="h-12 btn btn-primary inline-flex items-center m-2">
                <span role="img" aria-label="Map pin" className="text-xl mr-1">
                  📍
                </span>
                Browse restaurants
              </a>
            </Link>
            <a
              href="https://airtable.com/shrtTiPoFHQ5L8nRt"
              target="_blank"
              rel="noopener"
              className="h-12 btn btn-secondary inline-flex items-center m-2"
            >
              Submit your restaurant
            </a>
          </div>
        </div>
        <div className="w-96 h-96 flex-shrink-0 bg-gray-200 rounded-lg" />
      </div>
    </main>
  </>
)
