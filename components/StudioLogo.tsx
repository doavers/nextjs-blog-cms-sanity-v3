import Image from 'next/image'
import React from 'react'

function StudioLogo(props: any) {
  const { renderDefault, title } = props
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://i.postimg.cc/qBPQ863H/logo-dov.png"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default StudioLogo
