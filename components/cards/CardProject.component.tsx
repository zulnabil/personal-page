import Image from 'next/image'

export interface CardProjectProps {
  url: string
  image: string
  title: string
  description: string
  className?: string
}

export default function CardProject({ url, image, title, description, className }: CardProjectProps) {
  return (
    <a className={`block relative md:h-96 h-40 ${className}`} href={url} target="_blank">
      <Image
        className="rounded-lg shadow-lg"
        src={image}
        alt={title}
        title={title}
        style={{ objectFit: 'cover' }}
        fill
        priority
      />
      <div className="rounded-lg cursor-pointer opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-30 absolute top-0 left-0 w-full h-full transition ease-in-out duration-500">
        <div className="rounded-b-lg absolute bottom-0 w-full p-4 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
          <p className="text-md font-semibold mb-1">{title}</p>
          <p className="text-sm font-light">{description}</p>
        </div>
      </div>
    </a>
  )
}
