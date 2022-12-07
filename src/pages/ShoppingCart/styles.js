import styled from "styled-components";
import background from "../../assets/background.png"

export const Buying = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ee9d2b;
  min-width: 24vw;
  max-width: 100vw;
  height: 15vh;
  gap: 16px;
  padding: 4px;
  font-size: 0.8750rem ;
`
export const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  color: white;
  padding: 20px;
  gap: 8px
`

export const CartContainer = styled.main`
  min-width: 24vw;
  max-width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  background-color: black;
  background-image: url(${background});
  color: white;
     
    .products-shopping-cart{
      width: 90%;
      height: 90%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 28px;
    }
`
