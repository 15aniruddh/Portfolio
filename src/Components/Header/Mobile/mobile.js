import React from 'react'
import './mobile.css'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

function Mobile({isOpen, setIsOpen}) {
  return (
    <div className='mobile'>
        <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
            <IoMdCloseCircleOutline/>
        </div>
        <div className='mobile-options'>
        <div className='mobile-option'>
            <a href='#project'>
            <AiOutlineFundProjectionScreen className='option-icon'/> Project
            </a>
        </div>
        <div className='mobile-option'>
            <a href='#skills'>
            <FaLaptopCode className='option-icon'/> Skills
            </a>
        </div>
        <div className='mobile-option'>
        <a href='#contact'>
            <AiOutlineUser className='option-icon'/> Contact
            </a>
        </div>
        </div>
    </div>
  )
}

export default Mobile