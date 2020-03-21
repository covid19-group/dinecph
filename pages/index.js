import Link from 'next/link'

import Head from '../components/Head'
import Nav from '../components/Nav'

export default () => (
  <>
    <Head />
    <Nav />
    <main className="px-3 py-16">
      <div className="max-w-6xl flex items-center mx-auto">
        <div className="flex-auto">
          <h1 class="font-extrabold text-4xl sm:text-5xl leading-none mb-6">
            Support Copenhagen restaurants by
            <br class="hidden sm:inline" />
            <span class="text-blue-600"> getting take-away</span>
          </h1>
          <p class="max-w-xl text-gray-700 text-lg sm:text-xl mb-8">
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
        <div className="flex-shrink-0 hidden md:block w-96 h-96 bg-gray-200 rounded-lg" />
      </div>
    </main>
  </>
)
