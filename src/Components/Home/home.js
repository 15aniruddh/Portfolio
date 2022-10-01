import React from 'react'
import Body from '../Body/body'
import Footer from '../Footer/footer'
import Header from '../Header/header'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home