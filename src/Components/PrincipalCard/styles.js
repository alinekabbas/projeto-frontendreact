import styled from "styled-components";
import background from "../../assets/background.png"


export const MainCard = styled.main`
width: 100%;
min-height: 100vh;
height: 100%;
padding-bottom: 16px;
display: flex;
justify-content: center;
//align-items: center;
background-color: black;
background-image: url(${background});

.products-card-principal{
    width: 90%;
    height: 90%;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 28px;
}
`
export const Quantify = styled.p`
    text-align: center ;
    padding: 20px;
    color: white;
    background-image: url(${background});
`
export const Buying = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blueviolet;
    width: 100%;
    height: 10vh;
    gap: 16px;
    font-size: 20px;
`