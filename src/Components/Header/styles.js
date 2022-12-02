import styled from "styled-components"


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    width: 100%;
    height: 12vh;
    background-color: #000080;
    color: white;
    margin-right: 0 auto;

    button{
        border: none;
        align-items: center;
        justify-content: center;
        background-color: #000080;
        width: 50px;
        height: 50px;

        :hover {
            cursor: pointer;
            filter: brightness(1.1);
        }

        :active {
            filter: brightness(0.95);
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

// export const HeaderUl = styled.ul`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 20vw;

//     li{
//         text-decoration: none;
//         color: currentColor;  
//     }
    
// `