"use client"
import React from 'react'
import '../styles/Sidebar.css'
import Tab from './Tab'

export default function Sidebar() {
  const tabData = [{
    id: 0,
    page: "/",
    name: "Home",
    imageSource: "./home-icon.png",
    isClicked: false
  }, {
    id :1,
    page: "./friends",
    name: "Friends",
    imageSource: "./friends-icon.png",
    isClicked: false
  }
]

const [stateTabData, setStateTabData] = React.useState(tabData)

function toggleClick(id: number) {
  setStateTabData(oldData => 
    oldData.map((obj) => {
      return obj.id === id ? {...obj, isClicked: true} : {...obj, isClicked: false} 
    })
  )
}

const tabs = stateTabData.map(
    (obj) => 
      <Tab key={obj.id} 
        page={obj.page} 
        name={obj.name}
        imageSource={obj.imageSource} 
        isClicked={obj.isClicked}
        toggleClick={() => toggleClick(obj.id)}/>
  )
  return (
    <div className="sidebar">

        <div className="sidebar-container">
          <div className="site-title">
            <img src='./clerkie-logo.png'/>
            <div>Clerkie Challenge</div>
          </div>

          <div className="sidebar-items">
            {tabs}
          </div>
        </div>
      
    </div>
  )
}
