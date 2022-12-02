import styled from "styled-components";
import background from "../../assets/background.png"


export const CartContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 40px 0;
    display: flex;
    //justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: black;
    background-image: url(${background});
    color: white;
    gap: 16px;

    hr{
      color: white;
    }

    .options{
      display: flex;
      justify-content: space-between;
    }
    
    .products-shopping-cart{
      display: grid;
      gap: 16px;
    }
    

`