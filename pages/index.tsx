import Layout from 'components/layout/Layout'
import IconGithub from 'components/icons/IconGithub'
import IconLinkedin from 'components/icons/IconLinkedin'
import IconTelegram from 'components/icons/IconTelegram'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import seo from 'constants/seo'

export default function Home({ posts }) {
  return (
    <Layout className="text-center" title="Front">
      <Head>
        <link href={seo.url} rel="canonical"></link>
      </Head>
      <div className="flex flex-col justify-center items-center md:pt-8 pt-0 pb-16">
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
        <h4 className="mb-8 max-w-sm tracking-tight">
          a <span className="font-semibold">Frontend Developer</span> in Indonesia 🇮🇩. He specialized in Javascript
          modern using ReactJS, SvelteJS, and NodeJS.
        </h4>
        <div className="flex gap-8 my-4 mb-8">
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

        <hr className="w-full my-8" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 p-4 md:p-0">
          {posts.map(({ slug, frontmatter }) => (
            <Link key={slug} href={`/blog/${slug}`} title={frontmatter.description}>
              <div className="h-80 w-full border border-gray-200 rounded-xl shadow-lg overflow-hidden relative hover:scale-110 hover:rotate-3 transition-transform">
                <Image
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={frontmatter.image}
                  className="object-cover "
                />
                <div className="absolute bottom-0 w-full">
                  <div className="flex items-center gap-2 p-2 overflow-auto">
                    {frontmatter.tags?.map((tag) => (
                      <label className="px-2 py-1 flex-shrink-0 bg-gray-900 bg-opacity-50 text-white rounded">
                        {tag}
                      </label>
                    ))}
                  </div>
                  <h1 className="p-4 w-full bg-white bg-opacity-5 backdrop-blur-md">{frontmatter.title}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Get all posts
  const files = fs.readdirSync('md-posts')
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`md-posts/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts,
    },
  }
}
