import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-left: 200px;
    @media(max-width:992px){
        margin-left: 0px;
    }
`

export const ContentWrapper = styled.div`
    margin: 0 auto;
    padding-top: 40px;
    max-width: 600px;
    width: 100%;
`

export const ImgWrapper = styled.div`
    position: relative;
`
export const Img = styled.img`
    width: 100%;
`

export const IconLeft = styled.div`
    position: absolute;
    font-size: 2.2rem;
    color: #777;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    &:hover{
    	color: #fff;
    }
`

export const IconRight = styled.div`
    position: absolute;
    font-size:2.2rem;
    color: #777;
    right: 5%;
    top:50%;
    transform:translateY(-50%);
    cursor:pointer;
    &:hover{
    	color: #fff;
    }
`