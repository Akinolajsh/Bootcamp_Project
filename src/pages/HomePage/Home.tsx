import React from 'react'
import Header from '../../components/static/Header'
import Footer from '../../components/static/Footer'
import HeroPage from './HeroPage'
import CoursePrice from './CoursePrice'
import Skills from './Skills'
import Skill from './Skills'

const Home = () => {
  return (
    <div>
        <Header/>
        <HeroPage/>
        <CoursePrice/>
        <Skill/>
        <Footer/>
    </div>
  )
}

export default Home