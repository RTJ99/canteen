import React from 'react'
import Card from '../components/Card/Card'
import sadzaBeans from "../assets/sadza-beans.jpg"
import sadzaBeef from "../assets/sadza-beef.jpg"
import sadzaTbone from "../assets/tbone.jpg"
import sadzaVegies from "../assets/sadza-vegetables.jpg"
import sadzaChicken from "../assets/sadza-chicken.jpg"
import riceBeans from "../assets/rice-beans.jpg"
import riceBeef from "../assets/rice-beef.webp"
import riceTbone from "../assets/rice-tbone.jpg"
import riceVegies from "../assets/rice-soup.jpg"
import riceChicken from "../assets/rice-chicken.jpg"
import chips from "../assets/French-fries.webp"
import lacarte from "../assets/lacarte.webp"
import chickenChips from "../assets/chicken-chips.jpg"
import burger from "../assets/burger.webp"
function Home() {
  return (
    <div>
        
        <div className='ml-2'>
          <div className='flex items-center'>
            <h1 className='text-left font-bold mr-2 '>Meals</h1>
            <hr className=' w-full'/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <Card title={"Sadza and Vegies"} pic={sadzaVegies}/>
                <Card title={"Sadza and Beef"} pic={sadzaBeef}/>
                <Card title={"Sadza and Chicken"} pic={sadzaChicken}/>
                <Card title={"Sadza and Tbone"} pic={sadzaTbone}/>
                <Card title={"Sadza and Beans"} pic={sadzaBeans}/>
                <Card title={"Rice and Beef"} pic={riceBeef}/>
                <Card title={"Rice and Chicken"} pic={riceChicken}/>
                <Card title={"Rice and Tbone"} pic={riceTbone}/>
                <Card title={"Rice and Soup"} pic={riceVegies}/>
                <Card title={"Rice and Beans"} pic={riceBeans}/>
            </div>
            <div className='flex items-center mt-10'>
            <h1 className='text-left font-bold mr-2 '>Specials</h1>
            <hr className=' w-full'/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <Card title={"Chicken and Chips"} pic={chickenChips}/>
                <Card title={"Burger"} pic={burger}/>
                <Card title={"Chips"} pic={chips}/>
                <Card title={"La Carte"} pic={lacarte}/>
                </div>
        </div>
    </div>
  )
}

export default Home