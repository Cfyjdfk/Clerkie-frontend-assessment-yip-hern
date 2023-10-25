import React from 'react'
import "../styles/Friend.css"
import { friendStatus } from '../enums/friendStatus'

type Props = {
    name: string,
    email: string,
    number: string,
    friendStatus: friendStatus
}

export default function Friend(props: Props) {
    let styles
    if (props.friendStatus == friendStatus.SUPERCLOSEFRIENDS) {
        styles = {color: "#19B444", backgroundColor: "#DCFFE6"}
    } else if (props.friendStatus == friendStatus.CLOSEFRIENDS) { 
        styles = {color: "#39F", backgroundColor: "#DFEFFF"}
    }

  return (
    <div className="friend">
        <div className="friend-name-section">
            {props.name}
            {props.friendStatus!= friendStatus.NORMALFRIENDS && 
            <div className="friend-status-indicator" style={styles}>
                {props.friendStatus}
            </div>}
        </div>

        <div className="friend-details-section">
            {props.email} 
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
                <circle cx="2" cy="2.5" r="2" fill="#ABABAB"/>
            </svg>
            {props.number}
        </div>

    </div>
  )
}

