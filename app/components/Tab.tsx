"use client"

import React from 'react'
import "../styles/Tab.css"
import Link from 'next/link'

type Props = {
  name: string
  page: string
  imageSource: string,
  isClicked: boolean
  toggleClick: (a: any) => any 
}

export default function Tab(props: Props) {
  const clickedStyle = {
    backgroundColor: props.isClicked ? "#424242" : "",
    borderRadius : "6px"
  }

  return (
    <Link className="tab" href={props.page} onClick={props.toggleClick}>
      <div  style={clickedStyle}>
        <div className="tab-items">
          <img alt="icon" src={props.imageSource} />
          <div>{props.name}</div>
        </div>        
      </div>
    </Link>
  )
}
