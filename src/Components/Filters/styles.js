import styled from "styled-components";
import background from "../../assets/background.png"

export const FiltersContainer = styled.div`
    width: 100%;
    height: 10vh;
    padding: 20px 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    background-image: url(${background});
    
    select{
        height: 5vh;
        border: 1px solid white;
        background-image: url(${background});
        color: white;

        option{
            color: black;
        }
    }
`

export const PriceMinMax = styled.div`
    display: flex;
    align-items: center;
    height: 5vh;
    
    input{
        height: 5vh;
        border: 1px solid white;
        background-image: url(${background});
        color: white;
    }
`

export const Search = styled.div`
    width: 30vw;
    height: 5vh;
    display: flex;
    justify-content: center;

    input{
        flex-grow: 2;
        border: 1px solid white;
        background-image: url(${background});
        color: white;
    }

`