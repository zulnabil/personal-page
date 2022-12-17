import Layout from 'components/layout/Layout'
import seo from 'constants/seo'
import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <Head>
        <link href={seo.url + '/blog'} rel="canonical"></link>
      </Head>
      <h1 className="md:my-8 my-4 text-center font-medium md:text-6xl text-4xl tracking-tight">Blog</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 px-4 py-4 md:px-0">
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
