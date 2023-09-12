import styled from "styled-components"

const Input = styled.input`
    order: 1px solid #ffffff;
    background-color: transparent;
    border: 1px solid #ffffff;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #ffffff;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
        color: #ffffff;
        font-size: 16px;
    }
`

export default Input