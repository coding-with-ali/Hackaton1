import React from 'react'
import Herosection from '../app/homepage/herosection'
import Featured from '../app/homepage/featured'
import Latest from '../app/homepage/latest'
import Shopex from '../app/homepage/shopex'
import Banner from '../app/homepage/banner'
import Trending from '../app/homepage/trending'
import Discount from '../app/homepage/discount'
import Topcati from '../app/homepage/topcati'
import Brand from '../app/homepage/brand'
import Blog from '../app/homepage/blog'

export default function page() {
  return (
    <div>
      <Herosection/>
      <Featured/>
      <Latest/>
      <Shopex/>
      <Banner/>
      <Trending/>
      <Discount/>
      <Topcati/>
      <Brand/>
      <Blog/>
    </div>
  )
}
