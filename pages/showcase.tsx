import CardProject from 'components/cards/CardProject.component'
import Layout from 'components/layout/Layout'
import projects from 'constants/projects'
import Image from 'next/image'

export default function Showcase() {
  return (
    <Layout title="Showcase">
      <div className="flex items-center justify-center">
        <Image src="/assets/img/show-memoji.png" alt="smile-memoji" width={80} height={80} priority />
        <p className="md:my-6 my-4 text-center font-medium md:text-6xl text-4xl tracking-tight">Showcase</p>
      </div>
      <div className="my-10 grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <CardProject {...project} />
        ))}
      </div>
    </Layout>
  )
}
