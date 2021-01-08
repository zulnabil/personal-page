import Head from 'next/head'
import Layout from 'components/layout/Layout'

export default function Connect() {
  return (
    <div>
      <Head>
        <title>Zulnabil | Connect with me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <p className="md:my-6 my-4 text-center font-medium md:text-6xl text-4xl tracking-tight">Connect with me</p>
        <div className="mt-10 mx-auto max-w-xs text-center">
          <div className="my-5 flex items-center">
            <img src="/assets/icon/linkedin.svg" width="24" height="24" alt="github-icon" />
            <a className="ml-4 hover:text-yellow-400" href="https://linkedin.com/in/zulnabil" target="_blank">
              linkedin.com/in/zulnabil
            </a>
          </div>
          <div className="my-5 flex items-center">
            <img src="/assets/icon/github.svg" width="24" height="24" alt="github-icon" />
            <a className="ml-4 hover:text-yellow-400" href="https://github.com/zulnabil" target="_blank">
              github.com/zulnabil
            </a>
          </div>
          <div className="my-5 flex items-center">
            <img src="/assets/icon/telegram.svg" width="24" height="24" alt="github-icon" />
            <a className="ml-4 hover:text-yellow-400" href="https://t.me/zulnabil" target="_blank">
              t.me/zulnabil
            </a>
          </div>
          <div className="my-5 flex items-center">
            <img src="/assets/icon/gmail.svg" width="24" height="24" alt="github-icon" />
            <a className="ml-4 hover:text-yellow-400" href="mailto:zulnabil.22@gmail.com" target="_blank">
              zulnabil.22@gmail.com
            </a>
          </div>
        </div>
      </Layout>
    </div>
  )
}
