import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Layout from 'components/layout/Layout'
import Button from 'components/buttons/Button'

export default function Home() {
  const router = useRouter()

  const handleRedirect = (href) => (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <div>
      <Head>
        <title>Zulnabil's page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="flex justify-center items-center text-center">
          <div className="flex flex-col justify-center items-center">
            <div className="p-1 rounded-full bg-yellow-100 motion-safe:animate-bounce">
              <Image
                className="transform -translate-x-1 translate-y-2"
                src="/assets/img/smile-memoji.png"
                alt="smile-memoji"
                width={120}
                height={120}
              />
            </div>
            <p className="my-2 font-semibold text-xl">Hi! I'm Zul ✌️</p>
            <p className="md:my-6 my-4 max-w-screen-md text-center font-medium md:text-6xl text-4xl tracking-tight">
              Building web apps, web mobile, landing page, and mobile apps.
            </p>
            <p className="my-4 max-w-sm tracking-tight">
              a <span className="font-semibold">Frontend Developer</span> in Indonesia 🇮🇩. I specialize in Javascript
              using ReactJS, SvelteJS, and NodeJS.
            </p>
            <div className="my-6 flex items-center">
              <Button primary className="mx-3 px-6 py-3 uppercase font-normal">
                Connect
              </Button>
              <div className="inline-block mr-0.5 w-0 h-8 border-solid border-r border-gray-400"></div>
              <Button onClick={handleRedirect('/showcase')} className="mx-3 px-6 py-3 uppercase font-normal">
                Showcase
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}
