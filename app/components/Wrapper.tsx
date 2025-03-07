import React from 'react'

interface Props {
    children: React.ReactNode
    styles?: string
}

function Wrapper({children, styles}: Props) {
  return (
    <div className={`mx-auto max-w-14xl lg:max-w-14xl ${styles}`}>
        {children}
    </div>
  )
}

export default Wrapper