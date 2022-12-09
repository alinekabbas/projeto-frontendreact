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

export const MainCard = styled.main`
    min-width: 24vw;
    max-width: 100vw;
    min-height: 100vh;
    height: 100%;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    background-color: black;
    background-image: url(${background});

    .products-card-principal{
    width: 90%;
    height: 90%;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 40px;
}
`

