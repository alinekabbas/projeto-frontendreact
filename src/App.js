import React, { useState } from "react";
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
  const [cart, setCart]= useState([])

  const goToPrincipalCard = () => { setCurrentPage("PrincipalCard") }
  const goToShoppingCart = () => { setCurrentPage("ShoppingCart") }

  const addToCart = (newProduct)=>{
    const newCart = [...cart, newProduct]
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
