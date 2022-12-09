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
    background-image: url(${imageCards});
    color: white;
    cursor: pointer;
    font-weight: 300;
    
    :hover{
        transform: scale(1.1);
        transition: all 400ms ease 0s;       
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
        width: 150px;
        cursor: pointer;
        background-color: #012f6d;
        border: 1px solid orange;
        color: white;
        border-radius: 5px;
    }
`
