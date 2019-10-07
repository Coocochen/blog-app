import styled from 'styled-components'

export const ListWrapper = styled.div`
    margin-left: 200px;
    padding-bottom: 40px;
    @media (max-width:992px){
    	margin-left: 0;
    	padding: 40px 20px;
    }
`

export const List = styled.div`
    margin: 0 auto;
    margin-top: -60px;
    max-width: 600px;
    width: 100%;
`
export const ListItem = styled.div`
    margin-top: 60px;
    text-align: left;
    cursor: pointer;
`
export const ImgWrapper = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 62%;
    img{
    	position: absolute;
    	width: 100%;
    	height: 100%;
        animation: fadeIn 0.5s;

        @keyframes fadeIn{
            from{
                opacity: 0;
            }to{
                opacity: 1;
            }
        }
    }
`

export const Time = styled.div`
    padding: 10px 0;
    color: #666;
    font-size: 12px;
`

export const Title = styled.div`
    color: #666;
    font-size: 25px;
    padding: 15px 0;
    &:hover{
    	color: #000;
    	text-decoration: underline;
    }
`

export const Content = styled.p`
    font-size: 12px;
    color: #888;
    line-height: 1.5em;
    &:hover{
    	text-decoration: underline;
    	color: #000;
    }
`

export const LoadMore = styled.button`
    width:100%;
    text-align: center;
    margin: 40px 0;
    cursor: pointer;
    border: 0.4px solid #999;
    border-radius: 5px;
    background-color: transparent;
    &:hover{
        font-size:20px;
        color:#000;
    }
    &:active{
        color:#7CD9FF
    }
    &.hidden{
        display:none;
    }
`
export const EndLine = styled.div`
    width:100%;
    text-align:center;
    font-size: 12px;
    color:#999;
    margin-top: 60px
    padding: 10px;
    &:after{
        content:"我也是有底线的~";
    }
    border-top:0.4px solid #999;
    &.hidden{
        display:none;
    }
`

export const SearchWrapper = styled.div`
    float: right;
    width: 60px;
    height: 60px;
    background-color: #eaeaea;
    margin: 20px 40px 10px 0;
    padding-top: 10px;
    cursor: pointer;
    position: relative;
    @media (max-width:992px){
       margin: 0px;
    }
    input{
        position: absolute;
        bottom: 10px;
        width: 0px;
        border: none;
        outline: none;
        background-color: #eaeaea;
        margin-left: 10px;
        &.show{
            width: 220px;
            height: 30px;
            border-bottom: 1px solid;
        }
        &.inputslide-enter{
            transition: all .5s;
        }
        &.inputslide-enter-active{
            width: 220px;
        }
        &.inputslide-exit{
            transition: all .5s;
        }
        &.inputslide-exit-active{
            width: 0px;
        }
    }
    &.mouseover{
        width: 300px;
    }
    &.searchslide-enter{
        transition: all .5s;
    }
    &.searchslide-enter-active{
        width: 300px;
    }
    &.searchslide-exit{
        transition: all .5s;
    }
    &.searchslide-exit-active{
        width: 60px;
    }
`

export const ItemWrapper = styled.div`
   position: absolute;
   width: 220px;
   left: 50px;
   top: 50px;
   background-color: white;
   z-index: 999;
   border: 0.8px solid gray;
   &.hidden{
     display: none;
   }
`

export const HistoryItem = styled.div`
   font-size: 12px;
   position: relative;
   &:hover{
     background-color: #C0BCBC;
   }
   @media (max-width:992px){
       font-size: 16px;
    }
`

export const CloseItem = styled.span`
   &::after{
    content: '\u00D7';
   }
   display: inline-block;
   width: 20px;
   text-align: center;
   z-index: 999;
   position: absolute;
   right: 2px;
   &:hover{
     background-color: gray;
     color: white;
   }
`