import Head from '../components/Head'
import Nav from '../components/Nav'
import LoadingSpinner from '../components/LoadingSpinner'

export default () => (
  <>
    <Head />
    <Nav />
    <main className="px-2 py-16">
      <section className="max-w-5xl mx-auto">
        <h1 className="font-bold text-2xl mb-4">Heading</h1>
        <p className="mb-8">Paragraph</p>
        <img src="/og-image.png" alt="Image" className="rounded" />
      </section>
    </main>
  </>
)
