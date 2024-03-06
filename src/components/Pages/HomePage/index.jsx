import React from 'react'
import HeroSection from "../../sections/HeroSection"
import ServicesSection from "../../sections/ServicesSection"
import WorksSection from "../../sections/WorksSection"
import ExperienceSection from "../../sections/ExperienceSection"

export default function index() {
  return (
    <div className='text-white'>
        <HeroSection />
        <ServicesSection />
        <WorksSection />
        <ExperienceSection />
    </div>
  )
}
