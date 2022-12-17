import CardProject from 'components/cards/CardProject.component'
import Layout from 'components/layout/Layout'
import projects from 'constants/projects'
import seo from 'constants/seo'
import Head from 'next/head'
import Image from 'next/image'

export default function Showcase() {
  return (
    <Layout title="Showcase">
      <Head>
        <link href={seo.url + '/showcase'} rel="canonical" />
      </Head>
      <div className="flex items-center justify-center">
        <Image src="/assets/img/show-memoji.png" alt="smile-memoji" width={80} height={80} priority />
        <h1 className="md:my-6 my-4 text-center font-medium md:text-6xl text-4xl tracking-tight">Showcase</h1>
      </div>
      <div className="my-10 grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <CardProject {...project} />
        ))}
      </div>
    </Layout>
  )
}
