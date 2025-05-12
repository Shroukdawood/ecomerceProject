import React from 'react'
import MainNavBar from '../components/MainNavBar'
 import MainFooter from '../components/MainFooter'
import { Outlet } from 'react-router-dom'
import Section from '../components/Section'
import MainHeader from '../components/MainHeader'

export default function MainLayout() {
  return (
    <>
    
        <MainHeader/>
        <br />
        <MainNavBar/>
        <main >
        <section className='container py-5'>
        <Outlet/>
        </section>
     </main>
        <Section/>
         <MainFooter/>
    </>
  )
}
