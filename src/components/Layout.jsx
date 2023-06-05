import Header from './Header';
import SEO from './seo';


export default function Layout({children}) {
  return (
    <>
      <SEO />

      <Header />
      <main>{children}</main>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-7XVY1VPYB5"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
    </>
  );
}
