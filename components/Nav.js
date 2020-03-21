import Link from 'next/link'

export default () => (
  <nav className="px-2 py-8">
    <div className="max-w-5xl flex items-center mx-auto">
      <div className="flex-auto">
        <div className="h-10 w-10 bg-gray-900 rounded-full" />
      </div>
      <Link href="/">
        <a className="btn btn-primary">Button</a>
      </Link>
    </div>
  </nav>
)
