import Link from 'next/link'
import { useContext } from 'react'

import { LanguageContext } from '../components/LanguageSelector'
import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default () => {
  const { language } = useContext(LanguageContext)
  const content = pageContent[language]
  return (
    <>
      <Head />
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-auto px-3 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-extrabold text-2xl sm:text-3xl leading-none mb-6">
              {content.title}
            </h2>
            <p className="max-w-xl text-navy-light text-lg mb-4">
              {content.description}
              <a href="https://cellars.nyc" target="_blank" rel="noopener">
                cellars.nyc
              </a>
              .
            </p>
            <p className="max-w-xl text-navy-light text-lg mb-4">
              {content.contact}
              <a href="mailto:martin@pelion.app">martin@pelion.app</a>.
            </p>
            <p className="max-w-xl text-navy-light text-lg">
              {content.webmaster}
              <a href="mailto:sebastianwinther@gmail.com">
                sebastianwinther@gmail.com
              </a>
              .
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

const pageContent = {
  'da-DK': {
    title: 'Om os',
    description: `COVID-19 krisen har ramt restaurant-scenen i København. Mange af dem er begyndt at tilbyde take-away som en respons. Vi har lavet den her side for at sprede ordet – inspireret af `,
    contact: 'De fleste henvendelser til ',
    webmaster: 'Ris og ros til hjemmesiden til ',
  },
  'en-GB': {
    title: 'About',
    description: `The COVID-19 crisis has hit the Copenhagen restaurant scene hard. Many establishments have started offering take-out. We've made this site to help spread the word — inspired by `,
    contact: 'Most inquiries: ',
    webmaster: 'Site feedback: ',
  },
}
