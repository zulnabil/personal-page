import Head from 'next/head'
import Layout from 'components/layout/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>Content</Layout>
    </div>
  )
}
