import Button from 'components/buttons/Button'
import Layout from 'components/layout/Layout'
import seo from 'constants/seo'
import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import ReactMarkdown from 'react-markdown'

export default function DetailBlog({ frontmatter, content }) {
  const router = useRouter()
  const { slug } = router.query
  const handleBack = useCallback(router.back, [])
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Head>
        <link href={seo.url + '/blog/' + slug} rel="canonical"></link>
      </Head>
      <article className="prose md:prose-lg lg:prose-xl dark:prose-invert py-4 m-auto">
        <Button className="mb-4 rounded-md text-sm" onClick={handleBack}>
          ← Back
        </Button>
        <ReactMarkdown
          components={{
            img: ({ node, alt, src, height, width, placeholder, ...props }) => (
              <Image
                {...props}
                src={src || ''}
                alt={alt || ''}
                height={300}
                width={500}
                placeholder={(placeholder as 'blur' | 'empty') || 'empty'}
                className="m-auto"
                title={alt || ''}
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Retrieve all slugs
  const files = fs.readdirSync('md-posts')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`md-posts/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}
