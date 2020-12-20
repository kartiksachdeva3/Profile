import styled from 'styled-components'
// import { NavLink as Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import  { Link }   from 'react-scroll'

export const Nav = styled.nav`
background : #181818;
height : 100px;
display: flex;
width:100%;
align-items: center;
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
    top: 30px;
    right:5px;
    trasform: translate(-100%,60%);
    font-size: 32px;
    cursor: pointer;
    color: #fff;
    cursor: pointer;

}
`


export const Times = styled(FaTimes)`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 30px;
    right:5px;
    trasform: translate(-100%,60%);
    font-size: 32px;
    cursor: pointer;
    color: #fff;
    cursor: pointer;

}
`
export const NavMenu = styled.div`
display: flex;
align-items: right;

@media screen and (max-width: 768px){
    display: flex;
    align-items: center;
    flex-direction: column;
    width:100%;
    height:250px;
    position:absolute;
    top:100px;
    left:-100%;
    opacity:1;
    transition: all 0.5s ease;
    &.active{
        background: #181818;
        left:0;
        opacity:1;
        transition: all 0.5s ease;
        z-index:1;

        }
    }
`
