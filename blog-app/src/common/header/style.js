import styled from 'styled-components';
import siteLogo from '../../statics/site-logo.png';
import menuIcon from '../../statics/menu-icon.png';
export const HeadWrapper = styled.header`
   position: fixed;
   left: 0;
   width: 200px;
   height: 100%;
   padding-top:20px;
   text-align: center;
   background-color: #eaeaea;
   &:after{
   	content: '';
   	clear: both;
   	display: block;
   }
   @media (max-width: 992px){
   	 position:inherit;
	 width:100%;
	 display:block;
	 background-color:#eaeaea;
	 min-height:65px;
   }
`;
export const Logo = styled.div`
   height:85px;
   width: 142px;
   margin: 0 auto;
   margin-top: 20px;
   background: url(${siteLogo}) no-repeat ;
   @media (max-width: 992px){
   	 width: 50%; 
   	 margin-top: 0px;
   	 margin-left: 10px;
   	 padding-bottom:20px;
	 float:left;
   }
`;
export const MenuWrapper = styled.div`
   margin-top: 10px;
   width: 100%;
   @media (max-width: 992px){
   	 margin-top: 0px;
   	 &:after{
	   	content: '';
	   	clear: both;
	   	display: block;
      }
   }
 `;
export const Icon = styled.div`
   background: url(${menuIcon}) no-repeat;
   width: 30px;
   height: 30px;
   margin:0 auto;
   cursor: pointer;
   &:hover{
   	opacity: 0.4;
    filter: alpha(opacity=40);
   }
   &.close{
   	 background-position: 0 -30px;
   }
   &.Iconslide-enter{
     transition: all .5s;
   }
   &.Iconslide-enter-active{
     background-position: 0 -30px;
   }
   &.Iconslide-exit{
   	 transition: all .5s;
   }
   &.Iconslide-exit-active{
   	 background-position: 0 0;
   }
   @media (max-width: 992px){
     float: right;
     margin-top: 0px;
     margin-right: 20px;
   }
 `;
export const Nav = styled.nav`
   width: 100%;
   background-color: #333;
   font-size: 14px;
   overflow: hidden;
   margin: 15px 0;
   max-height: 0px;
   &.show{
      max-height:500px;
   }
   &.Navslide-enter{
     transition: all .5s;
   }
   &.Navslide-enter-active{
      max-height: 500px;
   }
   &.Navslide-exit{
   	 transition: all .5s;
   }
   &.Navslide-exit-active{
   	 max-height: 0px;
   }
   @media (max-width: 992px){
   	 margin:0px;
   }
`;
export const NavItem = styled.div`
   margin: 22px auto;
   cursor: pointer;
   color: #fff;
   width: 4em;
   &:hover{
   	border-bottom: 2px solid #4CFAC4;
   }
`;
export const FootAside = styled.footer`
   position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   padding-bottom: 30px;
   @media (max-width: 992px){
     display: none;
   }
`
export const Iconlist = styled.div`
   width:100%;
`
export const IconItem = styled.div`
   width: 20px;
   height: 20px;
   display: inline-block;
   margin:0 5px;
   a{
   	font-size: 25px;
   	color: #999;
   }
   a:hover{
   	font-size: 30px;
   }
`
export const Tag = styled.div`
   margin-top: 30px;
   font-size: 12px;
   color: #332020;
   p{
   	margin:5px;
   }
`
export const Intro = styled.div`
   padding: 0 30px;
   font-size: 13px;
   line-height:1.2rem;
   overflow: hidden;
   max-height: 100px;
   &.close{
   	max-height: 0px;
   }
   &.Introslide-enter{
     transition: all .5s;
   }
   &.Introslide-enter-active{
      max-height: 0px;
   }
   &.Introslide-exit{
   	 transition: all .5s;
   }
   &.Introslide-exit-active{
   	 max-height: 100px;
   }
   @media (max-width: 992px){
     display: none;
   }
`