import React from 'react'
import { Header } from '../Base/Header'
import Footer from '../Base/Footer'
import { LatestPosts } from '../Components/LatestPosts'

export default function Blog() {
  return (
    <main>
      <Header title="Blog" />
      <div className='container'>
        <LatestPosts />
      </div>
      <Footer />
    </main>
  )
}
