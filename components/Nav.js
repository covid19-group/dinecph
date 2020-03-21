import Link from 'next/link'
import {} from 'next/link'

export default () => (
  <nav className="px-3 py-6">
    <div className="max-w-6xl flex items-center mx-auto">
      <div className="flex-auto flex items-center -mx-3">
        <Link href="/">
          <a className="inline-flex items-center mx-3 mr-6">
            <span
              role="img"
              aria-label="Wine glass"
              style={{ transform: 'rotate(15deg) translateY(-2px)' }}
              className="text-3xl sm:mr-4"
            >
              🍷
            </span>
            <h2 className="hidden sm:inline-block font-extrabold text-lg">
              CPH restaurants
            </h2>
          </a>
        </Link>
        <NavLink href="/map" label="Map" />
        <NavLink href="/about" label="About" />
      </div>
      <a
        href="https://airtable.com/shrtTiPoFHQ5L8nRt"
        target="_blank"
        rel="noopener"
        className="hidden md:inline-block font-medium mx-3"
      >
        Submit your restaurant
      </a>
    </div>
  </nav>
)

const NavLink = ({ href, label }) => (
  <Link href={href}>
    <a className="font-medium mx-3">{label}</a>
  </Link>
)
