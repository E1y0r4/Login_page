import styled from "styled-components";

const Container =styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`
const Wrapper =styled.div`
    width: 580px;
    height: 376px;
    padding-top: 25px;
    padding-bottom: 50px;
    padding-left: 30px;
    padding-right: 30px;
    background: #FFFFFF;
    box-shadow: 0px 20px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
`
const Input =styled.input`
    width: 100%;
    border: none;
    border-bottom: 2px solid #0061DF;
    outline: none;
    margin: 30px 0;
`
const Button =styled.button`
    width: 100%;
    background: #0061DF;
    color: #ffffff;
    border: none;
    border-radius: 2px;
    margin-top: 30px;
    padding: 15px 0;
    font-size: 20px;
    cursor: pointer;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    :active{
        transform: scale(0.98);
        opacity: 0.7;
    }
    `
 

export {Container,Wrapper,Input,Button}