import React from 'react'
import SocialContact from "../../Common/Social Contact/SocialContact";
import { FaCloudDownloadAlt } from "react-icons/fa";
import './contact.css';
import Separator from '../../Common/Separator/separator';

function Contact() {
  return (
    <div className='contact'>
      <Separator />
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Want to get in touch? Contact me on any of the Platform</p>
          <SocialContact />          
        </div>
        <div className='download'>
          <a download href={require("../../Data/Resume.pdf")}>
            <FaCloudDownloadAlt />
            &nbsp;Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;