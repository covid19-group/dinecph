import Link from 'next/link'
import {} from 'next/link'

export default () => (
  <nav className="px-3 py-6">
    <div className="max-w-5xl flex items-center mx-auto">
      <div className="flex-auto flex items-center -mx-3">
        <Link href="/">
          <a className="inline-flex items-center mx-3 mr-6">
            <span
              aria-label="Wine glass"
              style={{ transform: 'rotate(15deg) translateY(-2px)' }}
              className="text-3xl mr-4"
            >
              🍷
            </span>
            <h2 className="font-extrabold text-lg">CPH restaurants</h2>
          </a>
        </Link>
        <NavLink href="/map" label="View map" />
        <NavLink href="/about" label="About" />
      </div>
      <a
        href="https://airtable.com/shrtTiPoFHQ5L8nRt"
        target="_blank"
        rel="noopener"
        className="font-medium mx-3"
      >
        Submit your restaurant →
      </a>
    </div>
  </nav>
)

const NavLink = ({ href, label }) => (
  <Link href={href}>
    <a className="font-medium mx-3">{label}</a>
  </Link>
)
