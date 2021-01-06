import Head from 'next/head'
import Layout from 'components/layout/Layout'

export default function Showcase() {
  return (
    <div>
      <Head>
        <title>Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>Showcase</Layout>
    </div>
  )
}
