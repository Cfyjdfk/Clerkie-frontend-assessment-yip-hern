'use client'

import React from 'react'
import data from "../friendsData"
import Friend from '../components/Friend'
import "../styles/Friends.css"
import Header from '../components/Header'
import { friendStatus } from '../enums/friendStatus'
import Modal from '../components/Modal'

export default function Page() {

  const[friendsData, setFriendsData] = React.useState(data)
  const[isFiltered, setIsFiltered] = React.useState(false) 
  const[isModalOpen, setIsModalOpen] = React.useState(false)

  const clearButtonFilteredStyle = {color: isFiltered || isModalOpen ? "#39F" : "#D7D7D7"}
  const filterButtonFilteredStyle = {backgroundColor: isModalOpen || isFiltered ? "#424242" : "white"}

  const friends = friendsData.map((obj => <Friend key={obj.id} name={obj.name} email={obj.email} 
  number={obj.number} friendStatus={obj.friendStatus}/>))

  const [filterArray, setFilterArray] = React.useState(
      new Array(2).fill(false)
  )


  const handleOnChange = (id: number) => {
      setFilterArray(prevFilterArray => prevFilterArray.map((item, index) => {
          return index === id ? !item : item
      }))
  }

  function filter(statuses: Array<boolean>) {
    if (filterArray[0] && filterArray[1]) {
      setIsFiltered(true)
      setFriendsData(prevFriendsData => prevFriendsData.filter(obj => 
        obj.friendStatus === friendStatus.CLOSEFRIENDS || obj.friendStatus === friendStatus.SUPERCLOSEFRIENDS))
    }
    else if (filterArray[0]) {
      setIsFiltered(true)
      setFriendsData(prevFriendsData => prevFriendsData.filter(obj => obj.friendStatus === friendStatus.CLOSEFRIENDS))
    } else if (filterArray[1]) {  
      setIsFiltered(true)   
      setFriendsData(prevFriendsData => prevFriendsData.filter(obj => obj.friendStatus === friendStatus.SUPERCLOSEFRIENDS))
    }

    if (!filterArray[0] && !filterArray[1]) {
      setFriendsData(data)
    }

  }

  function clearAll() {
    setIsFiltered(false)
    setFriendsData(data)
    setFilterArray(new Array(2).fill(false))
  }

  function toggleModal() {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen)
  }

  return (
    <div>
      
      <Header pageName="Friends"/>
      
      <div className="friends">
        <div className="friends-filter-wrapper">
          <div className="filter-button" style={filterButtonFilteredStyle}  onClick={toggleModal}>
            <img src={isModalOpen ? "filter-icon-white.png" : "filter-icon-gray.png"}/>
            {isFiltered && <div className="filter-count">{filterArray.filter(item => item).length}</div>}
          </div>

            <svg className="filter-divider" xmlns="http://www.w3.org/2000/svg" width="2" height="30" viewBox="0 0 2 30" fill="none">
            <path d="M1 1L1 29" stroke="#D7D7D7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          <div onClick={clearAll} 
            className="filter-clear-all-button" 
            style={clearButtonFilteredStyle}>
              Clear all</div>
        </div>

        {isModalOpen && <Modal 
          clearButtonFilteredStyle={clearButtonFilteredStyle} 
          clearAll={clearAll}
          toggleModal={toggleModal}
          handleOnChange={handleOnChange}
          filterArray={filterArray}
          filter={() => filter}          
        />}

        <div className="friends-items">
          {friends}
        </div>
      </div>
    </div>
  )
}

