import styled from "styled-components"
import header from "../../assets/header.png"


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    min-width: 24vw;
    max-width: 100vw;
    height: 15vh;
    background-color: #000080;
    background-image: url(${header});
    color: white;
    margin-right: 0 auto;

    button{
        border: none;
        align-items: center;
        justify-content: center;
        background-color: #012f6d;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        position: relative;

        :hover {
            cursor: pointer;
            filter: brightness(1.1);
        }

        :active {
            filter: brightness(0.95);
        }
        span{
            position: absolute;
            top: 10%;
            right: 5%;
            border-radius: 50%;
            background-color: orange;
            height: 18px;
            width: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
       
    }

    h1:hover{
        cursor: pointer;
        filter: brightness(1.1);

        :active {
        filter: brightness(0.7);
        }

    }
    
`