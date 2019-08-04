import styled from 'styled-components'

export const ListWrapper = styled.div`
    margin-left: 200px;
    padding: 40px 0;
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

export const LoadMore = styled.div`
    width:100%;
    text-align: center;
    margin: 40px 0;
    cursor: pointer;
    border: 0.4px solid #999;
    border-radius: 5px;
    &:hover{
        font-size:20px;
        color:#000;
    }
    &:active{
        color:#7CD9FF
    }
`
