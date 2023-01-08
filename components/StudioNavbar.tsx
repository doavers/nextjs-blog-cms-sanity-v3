import React from 'react'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-[#F7AB0A]">
          <ArrowUturnLeftIcon className="mr-2 h-6 w-6 text-[#F7AB0A]" />
          Go to website
        </Link>

        <div className="hidden justify-center rounded-lg border-2 border-[#F7AB0A] p-4 md:flex">
          <h1 className="font-bold text-white">Coupon for you </h1>
          <Link
            href="https://doavers.com"
            className="ml-2 font-bold text-[#F7AB0A]"
          >
            check it now
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
