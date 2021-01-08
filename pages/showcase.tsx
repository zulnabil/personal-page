import Head from 'next/head'
import Layout from 'components/layout/Layout'

export default function Showcase() {
  return (
    <div>
      <Head>
        <title>Zulnabil | Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <p className="md:my-6 my-4 text-center font-medium md:text-6xl text-4xl tracking-tight">Showcase</p>
        <section className="my-10">
          <div className="container mx-auto px-4">
            <section className="py-8 px-4">
              <div className="flex flex-wrap -mx-4">
                <div className="hidden md:block md:w-1/2 px-4">
                  <a
                    className="relative block h-full w-full bg-cover rounded-lg shadow-lg"
                    href="https://filimo.online"
                    target="_blank"
                    style={{ backgroundImage: 'url(/assets/img/filimo.png)' }}
                  >
                    <div className="rounded-lg cursor-pointer opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-30 absolute top-0 left-0 w-full h-full transition ease-in-out duration-500">
                      <div className="rounded-b-lg absolute bottom-0 w-full h-1/3 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
                        <p className="text-md font-semibold mb-2">Filimo</p>
                        <p className="text-xs font-light">Final Project of Bachelor Degree</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="md:w-1/2 h-auto px-4">
                  <a className="mb-8 block relative" href="https://smelter-kolaka.now.sh/" target="_blank">
                    <img className="rounded-lg shadow-lg" src="/assets/img/smelter.png" alt="" />
                    <div className="rounded-lg cursor-pointer opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-30 absolute top-0 left-0 w-full h-full transition ease-in-out duration-500">
                      <div className="rounded-b-lg absolute bottom-0 w-full h-1/3 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
                        <p className="text-md font-semibold mb-2">Smelter Kolaka</p>
                        <p className="text-xs font-light">Cloud File Management</p>
                      </div>
                    </div>
                  </a>
                  <a className="block relative" href="#">
                    <img className="rounded-lg shadow-lg" src="/assets/img/deliverit.png" alt="" />
                    <div className="rounded-lg cursor-pointer opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-30 absolute top-0 left-0 w-full h-full transition ease-in-out duration-500">
                      <div className="rounded-b-lg absolute bottom-0 w-full h-1/3 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
                        <p className="text-md font-semibold mb-2">Deliverit</p>
                        <p className="text-xs font-light">Online Shop Delivery Management</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            <section className="py-8 px-4">
              <div className="flex flex-wrap -mx-4">
                <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                  <a className="block relative" href="https://mugijaya.now.sh/" target="_blank">
                    <img className="rounded-lg shadow-lg" src="/assets/img/mugijaya.png" alt="" />
                    <div className="rounded-lg cursor-pointer opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-30 absolute top-0 left-0 w-full h-full transition ease-in-out duration-500">
                      <div className="rounded-b-lg absolute bottom-0 w-full h-1/3 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
                        <p className="text-md font-semibold mb-2">Mugijaya</p>
                        <p className="text-xs font-light">Landing Page Delivery Company</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                  <a className="block relative" href="#">
                    <img className="rounded-lg shadow-lg" src="/assets/img/sipakpos.png" alt="" />
                    <div className="rounded-lg cursor-pointer opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-30 absolute top-0 left-0 w-full h-full transition ease-in-out duration-500">
                      <div className="rounded-b-lg absolute bottom-0 w-full h-1/3 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
                        <p className="text-md font-semibold mb-2">SIPAKPOS</p>
                        <p className="text-xs font-light">Mails Management and Disposition</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            <section className="pt-8 px-4">
              <div className="flex flex-wrap -mx-4">
                <div className="md:w-1/3 px-4 mb-8">
                  <a className="block relative" href="https://kabdonggala.xyz" target="_blank">
                    <img className="rounded-lg shadow-lg" src="/assets/img/kabdonggala.png" alt="" />
                    <div className="rounded-lg cursor-pointer opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-30 absolute top-0 left-0 w-full h-full transition ease-in-out duration-500">
                      <div className="rounded-b-lg absolute bottom-0 w-full h-1/3 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
                        <p className="text-sm font-semibold mb-1">Pemda Kab. Donggala</p>
                        <p className="text-xs font-light">Landing Page</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="md:w-1/3 px-4 mb-8">
                  <a className="block relative" href="#">
                    <img className="rounded-lg shadow-lg" src="/assets/img/untadrepoijazah.png" alt="" />
                    <div className="rounded-lg cursor-pointer opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-30 absolute top-0 left-0 w-full h-full transition ease-in-out duration-500">
                      <div className="rounded-b-lg absolute bottom-0 w-full h-1/3 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
                        <p className="text-sm font-semibold mb-1">Untad Repo Ijazah</p>
                        <p className="text-xs font-light">Certificate Repository</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="md:w-1/3 px-4 mb-8">
                  <a className="block relative" href="#">
                    <img className="rounded-lg shadow-lg" src="/assets/img/uniqservishp.png" alt="" />
                    <div className="rounded-lg cursor-pointer opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-30 absolute top-0 left-0 w-full h-full transition ease-in-out duration-500">
                      <div className="rounded-b-lg absolute bottom-0 w-full h-1/3 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
                        <p className="text-sm font-semibold mb-1">Uniq Servis HP</p>
                        <p className="text-xs font-light">Point of Sale</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
      </Layout>
    </div>
  )
}
