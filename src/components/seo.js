import Head from 'next/head';
import Script from 'next/script';
export default function SEO() {
  return (
    <>
      <Head>
        <title>GDEV.UZ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="dasturlash, guliston, community, it, developer, gulistan developers community, gdev"
        />
        <meta property="og:URL" content="https://www.gdev.uz" />
        <meta
          property="og:title"
          content="gdev.uz | dasturlash, guliston, community, it, developer, gulistan developers community, gdev"
        />
        <meta
          property="og:description"
          content="dasturlash, guliston, community, it, developer, gulistan developers community, gdev"
        />
        {/* <link rel="icon" type="image/png" href="../public/images/logo2.png" /> */}
        
       
      </Head>
       <Script id='seo' strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','G-7XVY1VPYB5');`}}></Script>
    </>
  );
}
