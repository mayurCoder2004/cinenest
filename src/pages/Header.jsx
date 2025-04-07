import React from 'react'
import NavListItem from '../components/NavListItem'
import navListData from '../data/navListData'
import './header.css'
import Search from '../components/Search'
import Button from '../components/Button'

const Header = () => {
  return (
    <header>
        <a href="/" className='logo'>CineNest</a>
        <ul className="nav">
            {
                navListData.map((nav) => (
                    <NavListItem key={nav._id} nav={nav} />
                ))
            }
        </ul>  
        <Search />
        <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name='Sign in' color='#ff3700' bgColor='#ffffff' />
    </header>
  )
}

export default Header