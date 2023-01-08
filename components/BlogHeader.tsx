import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './BlogHeader.module.css'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <div>
          <header className="mt-16 mb-10 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  className=""
                  src="https://i.postimg.cc/3wJv9RnB/logo-doavers.png"
                  alt={title}
                  width={270}
                  height={54}
                />
              </Link>
            </div>
          </header>
          <div className="mt-16 mb-10 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:pr-8 md:text-4xl">
              {title}
            </h1>
            <h4
              className={`mt-5 text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
            >
              <PortableText value={description} />
            </h4>
          </div>
        </div>
      )

    case 2:
      return (
        <div>
          <header className="mt-16 mb-10 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  className=""
                  src="https://i.postimg.cc/3wJv9RnB/logo-doavers.png"
                  alt={title}
                  width={270}
                  height={54}
                />
              </Link>
            </div>
            <h2 className="mt-8 mb-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
              <Link href="/" className="hover:underline">
                {title}
              </Link>
            </h2>
          </header>
        </div>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`
      )
  }
}
