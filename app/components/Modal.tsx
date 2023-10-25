"use client"

import React from 'react'
import "../styles/Modal.css"
import { friendStatus } from '../enums/friendStatus'

type Props = {
    clearAll: () => any,
    toggleModal: () => any,
    filter: () => any,
    handleOnChange: (id: number) => any,   
    filterArray: Array<boolean>, 
    clearButtonFilteredStyle: React.CSSProperties
}

export default function Modal(props: Props) {

  return (
    <div className="modal">
        <div className='modal-wrapper'>
        
            <div className="modal-header">

                <div onClick={props.clearAll} 
                    className="modal-filter-clear-all-button" 
                    style={props.clearButtonFilteredStyle}>
                    Clear all
                </div>

                <div className="modal-title">
                    <div>Filter</div>
                </div>

                <div onClick={props.toggleModal} className="x-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M4 4L8.5 8.5L13 13" stroke="#424242" stroke-width="2" stroke-linecap="round"/>
                        <path d="M13 4L4 13" stroke="#424242" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="318" height="2" viewBox="0 0 318 2" fill="none">
                <path d="M0 1L318 1" stroke="#EAEAEA"/>
            </svg>
            
            <div className="modal-description">Friend Status</div>
            <div className="modal-choice">                
                Close Friends                
                <div>
                    <input type="checkbox" 
                        checked={props.filterArray[0]}
                        onChange={() => props.handleOnChange(0)
                    }/>
                </div>
            </div>
            
            <div className="modal-choice">
                Super Close Friends
                <div>
                    <input type="checkbox" 
                        checked={props.filterArray[1]}
                        onChange={() => props.handleOnChange(1)
                    }/>
                </div>
            </div>
                    
            <button onClick={props.filter()} className="modal-apply-button">Apply</button>
        </div>
    </div>
  )
}
