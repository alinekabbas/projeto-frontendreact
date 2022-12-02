import { HeaderContainer } from "./styles";
import cartIcon from "../../assets/cart.svg"

export function Header(props) {
  const {
    goToPrincipalCard,
    goToShoppingCart,
    cartItens
  } = props

  return (
    <HeaderContainer>
      
      <h1 onClick={goToPrincipalCard}>Space Store</h1>
      <button onClick={goToShoppingCart}><img src={cartIcon} alt="Icone" /></button>
      
    </HeaderContainer>
  )
}

