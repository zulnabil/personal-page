import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from 'components/layout/Layout'
import Button from 'components/buttons/Button'
import IconGithub from 'components/icons/IconGithub'
import IconLinkedin from 'components/icons/IconLinkedin'
import IconTelegram from 'components/icons/IconTelegram'
import Image from 'next/image'

export default function Home() {
  const router = useRouter()

  const handleRedirect = (href) => (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Layout className="text-center" title="Front">
      <div className="flex flex-col justify-center items-center md:pt-8 pt-0">
        <div className="p-1 rounded-full bg-yellow-100 motion-safe:animate-bounce">
          <Image
            className="transform -translate-x-1 translate-y-2"
            src="/assets/img/smile-memoji.png"
            alt="smile-memoji"
            width={120}
            height={120}
            priority
          />
        </div>
        <p className="mt-2 font-semibold text-xl">Zulnabil Personal Site ✌️</p>
        <h1 className="md:my-6 my-4 max-w-screen-md text-center font-medium md:text-5xl text-4xl tracking-tight">
          Building web apps, web mobile, web platform and mobile apps.
        </h1>
        <h2 className="mb-8 max-w-sm tracking-tight">
          a <span className="font-semibold">Frontend Developer</span> in Indonesia 🇮🇩. He specialized in Javascript
          modern using ReactJS, SvelteJS, and NodeJS.
        </h2>
        <div className="flex gap-8 my-4">
          <a
            href="https://github.com/zulnabil"
            target="_blank"
            className="hover:text-gray-700 dark:hover:text-gray-300"
          >
            <IconGithub />
          </a>
          <a href="https://linkedin.com/in/zulnabil" target="_blank" className="hover:text-blue-600">
            <IconLinkedin />
          </a>
          <a href="https://t.me/zulnabil" target="_blank" className="hover:text-sky-600">
            <IconTelegram />
          </a>
        </div>
      </div>
    </Layout>
  )
}
