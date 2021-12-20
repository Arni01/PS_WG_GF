import { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Menu from './components/Menu/Menu'
// Images
import IS6 from './public/img/productItem/IS-6.png'
import Lowe from './public/img/productItem/Lowe.png'
import Pack from './public/img/productItem/Pack.png'
import Premium from './public/img/productItem/Premium3.png'
import Scroprion from './public/img/productItem/Scroprion.png'
import FV4202 from './public/img/productItem/FV4202.png'
import Revalorise from './public/img/productItem/M4A1.png'
import Reserves from './public/img/productItem/Reserves.png'
import Gold from './public/img/productItem/Gold.png'
import T92 from './public/img/productItem/T92.png'

function App() {
  const productList = [
    {
      isTank: true,
      type: 'heavy',
      flag: 'ussr',
      name: 'IS-6',
      alt: 'Tank IS-6',
      tier: 'VIII',
      img: IS6,
      price: 47.99,
      id: 1,
    },
    {
      isTank: true,
      type: 'heavy',
      flag: 'germany',
      name: 'Lowe',
      alt: 'Tank Lowe',
      tier: 'VIII',
      img: Lowe,
      price: 42.99,
      id: 2,
    },
    {
      isTank: false,
      name: 'Extrension Pack',
      alt: 'Pack gold',
      img: Pack,
      price: 28.99,
      id: 3,
    },
    {
      isTank: false,
      name: 'WOT premium account: 3 days',
      alt: 'Premium: 3 days',
      img: Premium,
      price: 2.99,
      id: 4,
    },
    {
      isTank: true,
      type: 'destroyers',
      flag: 'usa',
      name: 'M56 Scorpion',
      alt: 'Tank M56 Scorpion',
      tier: 'VII',
      img: Scroprion,
      price: 24.99,
      id: 5,
    },
    {
      isTank: true,
      type: 'medium',
      flag: 'uk',
      name: 'FV4202',
      alt: 'Tank FV4202',
      tier: 'VIII',
      img: FV4202,
      price: 40.99,
      id: 6,
    },
    {
      isTank: true,
      type: 'medium',
      flag: 'france',
      name: 'M4A1 Revalorise',
      alt: 'Tank M4A1 Revalorise',
      tier: 'VIII',
      img: Revalorise,
      price: 35.99,
      id: 7,
    },
    {
      isTank: false,
      name: '10 Personal Reserves: +15% XP LIMITED EDITION',
      alt: 'Reserves',
      img: Reserves,
      price: 29.99,
      id: 8,
    },
    {
      isTank: false,
      name: 'Gold: 25.000',
      alt: 'Gold',
      img: Gold,
      price: 99.99,
      id: 9,
    },
    {
      isTank: true,
      type: 'light',
      flag: 'usa',
      name: 'T92',
      alt: 'Tank T92',
      tier: 'VII',
      img: T92,
      price: 36.99,
      id: 10,
    },
  ]

  const [wishlist, setWishlist] = useState(0)
  const [card, setCard] = useState(0)

  const handleAddWishlist = () => {
    setWishlist(wishlist + 1)
  }
  const handleDeleteWishlist = () => {
    setWishlist(wishlist - 1)
  }
  const handleAddCard = () => {
    setCard(card + 1)
  }
  return (
    <div className="wrapper">
      <Header wishlist={wishlist} card={card} />
      <Menu />
      {/* <Routes>
        <Route
          path="/"
          element={ */}
      <Main
        productList={productList}
        addWishlistItem={handleAddWishlist}
        deleteWishlistItem={handleDeleteWishlist}
        addCardItem={handleAddCard}
      />
      {/* }
        />
      </Routes> */}
    </div>
  )
}

export default App
