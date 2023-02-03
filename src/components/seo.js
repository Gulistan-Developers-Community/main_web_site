import Head from 'next/head';
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
    </>
  );
}
