import React from 'react'
import Hero from './Hero'
import CardPhoto from '../components/static/CardPhoto'
import Category from './Category'
import Reaction from '../components/static/Reaction'
import Testimony from './Testimony'

const HomeScreen = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <Testimony/>
    </div>
  )
}

export default HomeScreen