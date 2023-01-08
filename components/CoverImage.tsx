import cn from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import { Category } from 'lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
  categories?: Category[]
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority, categories } = props
  const image = source?.asset?._ref ? (
    <div
      className={cn(
        'shadow-small',
        {
          'transition-shadow duration-200 hover:shadow-medium': slug,
        },
        'relative group-hover:scale-105'
      )}
    >
      <Image
        className="h-auto w-full object-cover object-left"
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
        priority={priority}
      />
      <div className="bottom-0 flex w-full justify-between rounded bg-black bg-opacity-20 p-5 text-white drop-shadow-lg backdrop-blur-lg">
        <div className="flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2">
          {categories?.length > 0
            ? categories.map((category) => (
                <div
                  key={category.slug}
                  className="rounded-full bg-[#F7AB0A] px-3 py-1 text-center text-sm font-semibold text-black"
                >
                  <p className="font-bold">{category.title}</p>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
