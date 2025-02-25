import styled from "styled-components";
import background from "../../assets/background.png"

export const FiltersContainer = styled.div`
    min-width: 24vw;
    max-width: 100vw;
    height: 20vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    color: orange;
    background-image: url(${background});

    input{
        height: 32px;
        width: 130px;
        border: 1px solid white;
        background-image: url(${background});
        color: orange;
        padding: 0 4px;

        ::placeholder{
            color: orange;
        }
    }
    
    select{
        height: 32px;
        border: 1px solid white;
        background-image: url(${background});
        color: orange;

        option{
            color: black;
        }
    }
`

export const PriceMinMax = styled.div`
    display: flex;
    align-items: center;
    height: 32px;
    
    label{
        margin-right: 4px;
    }
    
`

export const Search = styled.div`
    width: 400px;
    height: 32px;
    display: flex;
    justify-content: center;

    input{
        flex-grow: 2;
    }

`