import { useContext } from 'react'
import Link from 'next/link'
import { LanguageContext } from './LanguageSelector'
import useBreakpoint from '../hooks/useBreakpoint'

export default () => {
  const breakpoint = useBreakpoint()
  const { language } = useContext(LanguageContext)
  const content = {
    map: { 'da-DK': 'Restauranter', 'en-GB': 'Restaurants' },
    about: { 'da-DK': 'Om os', 'en-GB': 'About' },
    submit: {
      'da-DK': {
        sm: 'Tilføj',
        else: 'Tilføj din restaurant',
      },
      'en-GB': {
        sm: 'Submit',
        else: 'Add your restaurant',
      },
    },
  }
  return (
    <nav className="px-3 py-6">
      <div className="max-w-6xl flex items-center mx-auto">
        <div className="flex-auto flex items-center -mx-3">
          <Link href="/">
            <a className="inline-flex items-center mx-3 sm:mr-6">
              <span
                role="img"
                aria-label="Wine glass"
                style={{ transform: 'rotate(15deg) translateY(-2px)' }}
                className="text-3xl sm:mr-4"
              >
                🍷
              </span>
              <h2 className="hidden sm:inline-block font-extrabold text-2xl">
                Dine CPH
              </h2>
            </a>
          </Link>
          <NavLink href="/map" label={content.map[language]} />
          <NavLink href="/about" label={content.about[language]} />
        </div>
        <div className="-mx-3">
          <NavLink
            href="/submit"
            label={content.submit[language][breakpoint.sm ? 'else' : 'sm']}
          />
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, label }) => (
  <Link href={href}>
    <a className="font-medium mx-3">{label}</a>
  </Link>
)
