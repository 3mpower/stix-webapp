import React from 'react'
import AdsBanner from '../ads-banner'
import Recommendation from '../recommendation'
import Popular from '../popular'
import HomeFooter from '../footer/home-footer'

const HomeContent = () => {
  return (
    <div className='w-screen'>
        <AdsBanner />
        <Recommendation />
        <Popular />
        <HomeFooter />
    </div>
  )
}

export default HomeContent

