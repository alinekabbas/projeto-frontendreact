import styled from "styled-components";
import imageCards from "../../assets/backgroundCards2.png"

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
    font-weight: 500;
    padding: 12px 8px;
    text-align: center;

    img{
        width: 80%;
        height: 70%;
        border-radius: 10%;
    }   

    select{
        color: orange;
        background-color: transparent;

        option{
            color: black;
        }
    }

    .options{
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        .quantity{
           width: 60px;
           display: flex;
           justify-content: space-between;
           color: white;

           button{
            cursor: pointer;
            width: 20px;
            height: 20px;
            color: white;
            background-color: #012f6d;
            border: 1px solid orange;
            border-radius: 50%;
        }  
    }
    }

    .deleteButton{
        cursor: pointer;
        border-radius: 50%;
        border: none;
        background-color: transparent;

        :hover{
            background-color: orange;
        }
    }
`