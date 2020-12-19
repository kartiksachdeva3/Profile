import styled from 'styled-components'
// import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import  { Link }   from 'react-scroll'

export const Nav = styled.nav`
background : transparent;
height : 100px;
display: flex;
align-items: center
justify-content: space-between;
padding : 0.5rem calc((100vw - 1100px) /2);
z-index: 10;
position: fixed;
top : 0;

`
export const NavLink = styled(Link)`
color : #fff;
display: flex;
align-items: center;
text-decoration: none;
font-size: 32px;
padding: 0 2rem;
height: 100%;
cursor: pointer;
&.active {
    color: #90EE90;

}
&.hover{
    color: pink;
}
`
export const Bars = styled(FaBars)`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 20px;
    margin-right:5px;
    trasform: translate(-100%,75%);
    font-size: 32px;
    cursor: pointer;
    color: #fff;

}
`

export const NavMenu = styled.div`
display: flex;
alignm-items: right;

@media screen and (max-width: 768px){
    display:none;

}
`
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right : 24px;

@media screen and (max-width: 768px){
    display: none;
}
`
export const NavBtnLink = styled(Link)`
border-radius:4px;
background: transparent;
padding: 10px 22px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&.hover {
    transition: all 0.2s ease-in-out;
    background : #ffff;
    color: black;
}
`