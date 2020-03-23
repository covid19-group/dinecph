import Head from 'next/head'

export default ({ children }) => {
  const title = 'Dine CPH'
  const description =
    "Your local food joints are struggling during the current crisis — but they're still cooking! Help them keep the lights on, by getting take-out from the best restaurants in Copenhagen."
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="https://dinecph.now.sh/favicon.png" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:site_name" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content="https://dinecph.now.sh/og.png" />
      <meta name="twitter:card" content="summary" />
      {/* <meta name="twitter:site" content="" /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/og.png" />
      {process.env.NODE_ENV === 'production' && (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(f, a, t, h, o, m){
            a[h]=a[h]||function(){
            (a[h].q=a[h].q||[]).push(arguments)
            };
            o=f.createElement('script'),
            m=f.getElementsByTagName('script')[0];
            o.async=1; o.src=t; o.id='fathom-script';
            m.parentNode.insertBefore(o,m)
            })(document, window, 'https://cdn.usefathom.com/tracker.js', 'fathom');
            fathom('set', 'siteId', 'RKISHSLQ');
            fathom('trackPageview');`,
          }}
        ></script>
      )}
      {children}
    </Head>
  )
}
