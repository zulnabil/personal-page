import Head from 'next/head'
import Image from 'next/image'

import Layout from 'components/layout/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zulnabil's page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="flex justify-center items-center text-center">
          <div className="flex flex-col justify-center items-center">
            <div className="p-1 rounded-full bg-yellow-100 animate-bounce">
              <Image
                className="transform -translate-x-1 translate-y-2"
                src="/assets/img/smile-memoji.png"
                alt="smile-memoji"
                width={120}
                height={120}
              />
            </div>
            <p className="my-2 font-semibold text-xl">Hi! I'm Zul ✌️</p>
            <p className="my-6 max-w-screen-sm text-center font-medium text-6xl tracking-tight">
              Building web apps, web mobile, landing page, and mobile apps.
            </p>
            <p className="my-4 max-w-sm tracking-tight">
              a Frontend Developer in Indonesia 🇮🇩. I specialize in Javascript using ReactJS, SvelteJS, and NodeJS.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}
