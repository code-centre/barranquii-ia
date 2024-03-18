import React from 'react'

interface Props {
    children: React.ReactNode
    styles?: string
}

function Wrapper({children, styles}: Props) {
  return (
    <div className={`mx-auto max-w-2xl lg:max-w-4xl ${styles}`}>
        {children}
    </div>
  )
}

export default Wrapper