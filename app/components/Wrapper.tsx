import React from 'react'

interface Props {
    children: React.ReactNode
    styles?: string
}

function Wrapper({children, styles}: Props) {
  return (
    <div className={`mx-auto max-w-2xl lg:max-w-3xl ${styles}`}>
        {children}
    </div>
  )
}

export default Wrapper