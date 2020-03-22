import Head from 'next/head'

export default ({ children }) => {
  const title = 'DINE CPH'
  const description =
    'Dine lokale spisesteder er ramt af den nuværende krise—men de laver stadig mad! Hjælp dem til at forblive åbne ved at købe take-away fra de bedste restauranter i København.'
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:site_name" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content="/og-image.png" />
      <meta name="twitter:card" content="summary" />
      {/* <meta name="twitter:site" content="" /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/og-image.png" />
      {children}
    </Head>
  )
}
