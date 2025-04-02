import Hero from '../Components/Home/Hero'
import Client from '../Components/Home/Client'
import Benefit from '../Components/Home/Benefit'
import Features from '../Components/Home/Features'
import CallToAction from '../Components/Home/CallToAction'
import Partners from '../Components/Home/Partners'
import WhatNow from '../Components/Home/WhatNow'
import { block } from 'million/react';
const Home = block(() => {
  return (
    <>
      <Hero/>
      <Client/>
      <Benefit/>
      <Features/>
      <Partners/>
      <WhatNow/>
      <CallToAction/>
    </>
  )
})

export default Home
