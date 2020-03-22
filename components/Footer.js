import Link from 'next/link'
import useBreakpoint from '../hooks/useBreakpoint'

export default () => {
  const breakpoint = useBreakpoint()
  return (
    <footer className="px-3">
      <div className="border-t-2 border-sand max-w-6xl py-12 mx-auto">
        <p>
          Et initiativ fra{' '}
          <a href="https://techvaernet.dk" target="_blank" rel="noopener">
            Techværnet
          </a>
        </p>
      </div>
    </footer>
  )
}

const NavLink = ({ href, label }) => (
  <Link href={href}>
    <a className="font-medium mx-3">{label}</a>
  </Link>
)
