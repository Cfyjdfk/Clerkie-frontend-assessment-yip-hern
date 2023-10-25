import React from 'react'
import '../styles/Header.css'

type Props = {
    pageName: String
}

export default function Header(props: Props) {
  return (
    <div className="header-wrapper">
      <div className="header">
        {props.pageName}
      </div>
    </div>
  )
}

