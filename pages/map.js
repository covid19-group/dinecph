import Head from '../components/Head'
import Nav from '../components/Nav'
import Map from '../components/Map'

export default () => (
  <>
    <Head />
    <div className="h-screen flex flex-col">
      <Nav />
      <main className="flex-auto px-3 pb-3">
        <Map />
      </main>
    </div>
  </>
)
