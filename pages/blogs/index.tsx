import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from 'components/layout/Layout'

interface Blog {
  title: string
  thumbnail: string
  categories: string[]
  link: string
  author: string
  pubDate: string
}

export default function Connect() {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zulnabil')
      .then((res) => res.json())
      .then((data) => {
        const res = data.items
        setBlogs(res)
      })
  }, [])

  return (
    <Layout title="Blogs">
      <p className="md:my-6 my-4 text-center font-medium md:text-6xl text-4xl tracking-tight">Blogs</p>
      <div className="mt-10 mx-auto max-w-lg">
        {(blogs as Blog[]).map((blog) => (
          <div className="w-full overflow-hidden rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
            <div className="relative">
              <div
                className="h-48 bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${blog.thumbnail})` }}
              ></div>
              <div className="absolute bottom-0 flex items-center">
                {blog.categories.map((category) => (
                  <div
                    style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                    className="mb-2 ml-3 px-2 py-1 rounded text-sm text-white"
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3">
              <h3 className="mr-10 text-sm truncate-2nd">
                <a className="hover:text-yellow-400" href={blog.link} target="_blank">
                  {blog.title}
                </a>
              </h3>

              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                {blog.author} • {blog.pubDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
