import React, { useEffect, useState } from "react";
import { createGlobalStyle } from 'styled-components';
import { Header } from "./Components/Header/Header";
import { PrincipalCard } from "./pages/PrincipalCard/PrincipalCard";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { Footer } from "./Components/Footer/Footer"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }
`
function App() {
  const [currentPage, setCurrentPage] = useState("PrincipalCard")
  const [cart, setCart] = useState([])

  useEffect(() => {
    if (cart.length > 0) {
      const cartString = JSON.stringify(cart)
      localStorage.setItem("cart", cartString)
    }
  }, [cart]);

  useEffect(() => {
    const getSaveCart = JSON.parse(localStorage.getItem("cart"))
    if (getSaveCart !== null) {
      setCart(getSaveCart)
    }
  }, [])


  const goToPrincipalCard = () => { setCurrentPage("PrincipalCard") }
  const goToShoppingCart = () => { setCurrentPage("ShoppingCart") }

  const addToCart = (productCart) => {
    const newCart = [...cart]
    const productFound = newCart.find(
      (productInCart) => productInCart.id === productCart.id
    )
    if (!productFound) {
      const newProduct = { ...productCart, quantity: 1 }
      newCart.push(newProduct)
    } else {
      productFound.quantity++
    }
    setCart(newCart)
  }

  const removeToCart = (product) => {
    const newCart = [...cart]
    const productToRemove = newCart.findIndex(
      (productInCart) => productInCart.id === product.id
    )

    newCart.splice(productToRemove, 1)
    window.localStorage.removeItem("cart")
    setCart(newCart)
  }

  const increaseInCart = (productToIncrease) => {
    const newCart = [...cart]

    const productFound = newCart.find(
      (productInCart) => productInCart.id === productToIncrease.id
    )

    productFound.quantity++

    setCart(newCart)
  }

  const decreaseInCart = (productToDecrease) => {
    const newCart = [...cart]

    const productFound = newCart.find(
      (productInCart) => productInCart.id === productToDecrease.id
    )

    productFound.quantity--

    setCart(newCart)
  }


  const renderPage = () => {
    switch (currentPage) {
      case "PrincipalCard":
        return <PrincipalCard
          addToCart={addToCart}
        />;
      case "ShoppingCart":
        return <ShoppingCart
          cart={cart}
          removeToCart={removeToCart}
          increaseInCart={increaseInCart}
          decreaseInCart={decreaseInCart}
          goToPrincipalCard={goToPrincipalCard}
          cartItens={cart.length}
        />;
      default:
        return <h1>Página não encontrada</h1>
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header
        goToPrincipalCard={goToPrincipalCard}
        goToShoppingCart={goToShoppingCart}
        cartItens={cart.length}
      />
      {renderPage()}
      <Footer />
    </>
  )
}

export default App;
