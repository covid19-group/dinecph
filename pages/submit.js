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
      <Head>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main style={{ marginBottom: '-2px' }} className="flex-auto px-3 pt-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-extrabold text-2xl sm:text-3xl leading-none mb-6">
              {content.title}
            </h2>
            <p className="max-w-xl text-navy-light text-lg mb-8">
              {content.description}{' '}
              <a href="mailto:sebastianwinther@gmail.com">{content.contact}</a>.
            </p>
            <ul className="mb-16">
              {resourceList.map(
                ({ title, description, actionLabel, actionUrl }) => (
                  <li className="flex flex-col items-start border border-sand overflow-hidden p-4 sm:p-8 md:px-12 mb-4 last:mb-0">
                    {title && (
                      <h4 className="text-xl sm:text-2xl mb-2">{title}</h4>
                    )}
                    {description && (
                      <p className="max-w-xl text-sm sm:text-base mb-4">
                        {description}
                      </p>
                    )}
                    {actionLabel && actionUrl && (
                      <a
                        href={actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary text-sm sm:text-base"
                      >
                        {actionLabel}&nbsp;&nbsp;&nbsp;⟶
                      </a>
                    )}
                  </li>
                )
              )}
            </ul>
            <h3
              id="add"
              className="font-extrabold text-2xl sm:text-3xl leading-none mb-6"
            >
              {content.add}
            </h3>
          </div>
          <iframe
            className="airtable-embed airtable-dynamic-height"
            src="https://airtable.com/embed/shrtTiPoFHQ5L8nRt?backgroundColor=red"
            frameBorder="0"
            onmousewheel=""
            width="100%"
            height="1747"
            style={{ background: 'transparent', border: '1px solid #ccc' }}
          ></iframe>
        </main>
        <Footer />
      </div>
    </>
  )
}

const pageContent = {
  'da-DK': {
    title: 'Til restauranter',
    description:
      'Vi har listet et par ressourcer, som måske kan være hjælpsomme nedenfor. Har du nogle tilføjelser?',
    contact: 'Skriv til os',
    add: 'Tilføj din restaurant til Dine CPH',
  },
  'en-GB': {
    title: 'For restaurants',
    description:
      "We've added a few resources that might be useful for restaurants at this time. Do you know of others that we should add?",
    contact: 'Get in touch',
    add: 'Add your restaurant to Dine CPH',
  },
}

const resourceList = [
  {
    title: 'Superb Corona Support Programme',
    description:
      'Superb is currently offering restaurants worldwide to use their platform to sell take-out and gift cards online — free of charge.',
    actionLabel: 'Sign up now',
    actionUrl:
      'https://www.superbexperience.com/corona-support-program-for-restaurants',
  },
]
