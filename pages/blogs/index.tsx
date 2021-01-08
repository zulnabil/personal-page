import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from 'components/layout/Layout'

export default function Connect() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zulnabil')
      .then((res) => res.json())
      .then((data) => {
        const res = data.items
        setBlogs(res)
      })
  }, [])

  console.log(blogs)

  return (
    <div>
      <Head>
        <title>Zulnabil | Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <p className="md:my-6 my-4 text-center font-medium md:text-6xl text-4xl tracking-tight">Blogs</p>
        <div className="mt-10 mx-auto max-w-lg">
          {blogs.map((blog) => (
            <div className="w-full overflow-hidden rounded border bg-white shadow">
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
                  <a className="hover:text-blue-500" href={blog.link} target="_blank">
                    {blog.title}
                  </a>
                </h3>

                <p className="mt-2 text-xs text-gray-500">
                  {blog.author} • {blog.pubDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  )
}
