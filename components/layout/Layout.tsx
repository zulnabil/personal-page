import seo from 'constants/seo'
import Head from 'next/head'
import Nav from './Nav'

interface Props {
  title: string
  children: React.ReactNode
  description?: string
  className?: string
}

export default function Layout({ title, description = seo.description, children, className }: Props) {
  const metaTitle = title ? `${title} | ${seo.title}` : seo.title
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
        <meta content="website" property="og:type" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={seo.title} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:image" content={seo.image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={seo.twitter} />
        <meta name="twitter:creator" content={seo.twitter} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={seo.image} />
      </Head>
      <Nav />
      <main className={`container mx-auto px-4 py-6 sm:px-0 ${className}`}>{children}</main>
    </>
  )
}
