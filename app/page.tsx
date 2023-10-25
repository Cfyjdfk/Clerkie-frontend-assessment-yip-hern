'use client'

import React from 'react'
import Header from './components/Header'
import "./globals.css"

export default function page() {
    // const pageMap: {[key: string]: string}= {
    //   "/" : "Home",
    //   "/friends" : "Friends"
    // }
    // const pathname = usePathname()
    // const pageName = pageMap[pathname]

  return (
    <div className="home">
      <Header pageName="Home"/>
        <div className="main">
          <h1>Welcome to the Clerkie Challenge!</h1>
        </div>
    </div>
  )
}

