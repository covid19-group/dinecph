import { useContext } from 'react'
import LanguageSelector, { LanguageContext } from './LanguageSelector'
import Link from 'next/link'
import useBreakpoint from '../hooks/useBreakpoint'

export default () => {
  const breakpoint = useBreakpoint()
  const { language } = useContext(LanguageContext)
  const content = pageContent[language]
  return (
    <footer className="px-3">
      <div className="flex border-t-2 border-sand max-w-6xl py-12 mx-auto">
        <div className="flex-1 mb-3">
          <p className="">
            {content.prefix}{' '}
            {
              // <a href="https://techvaernet.dk" target="_blank" rel="noopener">
            }
            Techværnet
            {
              // </a>
            }{' '}
            {content.and}{' '}
            <a
              href="https://shop.empiricalspirits.co/"
              target="_blank"
              rel="noopener"
            >
              Empirical Spirits
            </a>
            {'. '}
            {content.built}{' '}
            <a
              href="https://www.sebastianwinther.com"
              target="_blank"
              rel="noopener"
            >
              Sebastian Winther
            </a>
            .
          </p>
          <p>
            {content.os}
            {' ⟶ '}
            <a
              className="ml-1"
              href="https://github.com/sjwinther/techvaernet-restaurants"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </p>
        </div>
        <LanguageSelector />
      </div>
    </footer>
  )
}

const NavLink = ({ href, label }) => (
  <Link href={href}>
    <a className="font-medium mx-3">{label}</a>
  </Link>
)

const pageContent = {
  'da-DK': {
    prefix: 'Et initiativ af',
    and: 'og',
    built: 'Udviklet af',
    os: "It's open source",
  },
  'en-GB': {
    prefix: 'An initiative by',
    and: 'and',
    built: 'Built by',
    os: 'Det er open source',
  },
}
