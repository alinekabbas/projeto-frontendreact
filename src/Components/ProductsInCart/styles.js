import styled from "styled-components";
import imageCards from "../../assets/backgroundCards2.png"
import imageCart from "../../assets/backgroundShoppingCart.png"

export const CartContainer = styled.section`
    width: 500px;
    height: 480px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    background-image: url(${imageCart});
    color: black;

    .options{
        width: 500px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .quantity{
           width: 130px;
           display: flex;
           justify-content: space-between;
        }
               
    }
`


export const ProductCart = styled.div`
    width: 240px;
    height: 390px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    background-color: #012f6d;
    background-image: url(${imageCards});
    color: white;
    font-weight: 300;

    img{
        width: 80%;
        height: 70%;
        border-radius: 10%;
    }

    span{
        font-weight: 500;
        text-align: center;
        
    }

    button{
        cursor: pointer;
    }
`