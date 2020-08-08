import styled from 'styled-components';

export const PhotosWrapper = styled.div`
  margin-left: 200px;
  @media(max-width: 992px){
    margin: 0px;
  }
`

export const ImgWrapper = styled.div`
  position: relative;
  padding-bottom: 100%;
  width: 100%;
  img{
    position: absolute;
    margin-top: 0px;
    padding-bottom: 0px;
      min-height: 100%;
    transition: all 0.3s;
    cursor: pointer;
    z-index: 99;
    &:hover{
      margin-top: -35%;
      min-height: 135%;   
          padding-bottom: 35%;
    }
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

export const Caption = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 35%;
  background: black;
`

export const Title = styled.div`
  padding-bottom: 0px;
  color: #fff;
  font-size: 13px;
  padding-top: 5px;
  padding-left: 15px;
`

export const Desc = styled.div`
  color: #ddd;
  font-size: 13px;
  line-height: 1em;
  padding-left: 15px;
`

