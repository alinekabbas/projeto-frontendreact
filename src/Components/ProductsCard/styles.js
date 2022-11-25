import styled from "styled-components";
import imageCards from "../../assets/backgroundCards2.png"

export const Card = styled.div`
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
    transition-duration: 400ms;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
    :hover{
        width: 250px;
        height: 400px;
    }
    

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
