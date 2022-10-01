import React from 'react'
import './web.css'
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

function Web() {
  return (
    <div className='web'>
        <div className='web-option'>
            <a href='#project'>
            <AiOutlineFundProjectionScreen className='option-icon'/>&nbsp;Project
            </a>
        </div>
        <div className='web-option'>
            <a href='#skills'>
            <FaLaptopCode className='option-icon'/>&nbsp;Skills
            </a>
        </div>
        <div className='web-option'>
        <a href='#contact'>
            <AiOutlineUser className='option-icon'/>&nbsp;Contact
            </a>
        </div>
    </div>
  )
}

export default Web