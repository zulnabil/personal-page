import Head from 'next/head'
import Layout from 'components/layout/Layout'

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>About</Layout>
    </div>
  )
}
