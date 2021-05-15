import React,{useState} from 'react'
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';



function Header() {

    const [bur,setBur]= useState(false);
    return (
        <Container>
                <a >
                    <img src="/images/logo.svg" alt=""/>
                </a>
                <Menu>
                
                                <a href="#">Model X</a>
                                <a href="#">Model 3</a>
                                <a href="#">Model S</a>
                                <a href="#">Model Y</a>
                    
                </Menu>
                <RightMenu>
                                <a href="#">Shop</a>
                                <a href="#">Tesla Account</a>
                                <BurgerMenu onClick={() => setBur(true)} />
                </RightMenu>
                <CustomMenu   stats={bur} >
                        <CloseWrapper>
                                <CustomClose onClick={ () =>setBur(false) }/>  
                        </CloseWrapper>  
                        <li><a href="#">existing inventory</a></li>
                        <li><a href="#">used inventory</a></li>
                        <li><a href="#">trade-in</a></li>
                        <li><a href="#">cybertruck</a></li>
                        <li><a href="#">roadster</a></li>
                        <li><a href="#">semi</a></li>    
                        <li><a href="#">charging</a></li>
                        <li><a href="#">powerwall</a></li>
                        <li><a href="#">commercial energy</a></li>
                        <li><a href="#">utilities</a></li>
                        <li><a href="#">test drive</a></li>
                </CustomMenu>

        </Container>
    )
}

export default Header


const Container =styled.div`
    z-index:1;
    min-height:60px;
    position :fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    right:0;
    left:0;
`
const Menu =styled.div`
    @media(max-width:768px)
    {display:none;}
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
   
    a
    {
        font-weight:600;
        color:black;
        text-transform: uppercase;
        padding:0 10px;
        flex-wrap:no-wrap;
        
    }

`
const RightMenu =styled.div
`
display:flex;
align-items:center;
    a{
        font-weight:600;
        color:black;
        text-transform: uppercase;
        margin-right:10px;
        flex-wrap:no-wrap;
        
    }
`

const BurgerMenu = styled(MenuIcon)`
cursor:pointer;`


const CustomMenu =styled.div`

position:fixed;
top:0;
right:0;
bottom:0;
width:300px;
background:white;
transform: ${props => props.stats ? 'translateX(0)' : 'translateX(100%)' };
transition:transform 0.2s ease-in;
z-index:16;
list-style:none;
padding:20px;
display:flex;


flex-direction:column;
text-align:start;

a{
    font-weight:600;
    color:black;
    text-transform: uppercase;
}

li{
        padding:15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
}
`
const CustomClose=styled(CloseIcon)`
cursor:pointer;`

const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
`