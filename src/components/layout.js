import Header from './Header'
import SEO from './seo'

export default function Layout({ children }) {
  return (
    <>
    <SEO />
    <Header/>
      <main>{children}</main>
      
    </>
  )
}