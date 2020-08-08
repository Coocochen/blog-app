import styled from 'styled-components';
import logourl from '../statics/site-logo.png';

export const Form = styled.form`
  position: absolute;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: table;
`
export const Input = styled.input`
  display: table-cell;
  border: 0.5px solid #969494;
  border-radius: 3px;
  margin-bottom: 10px;
  width: 100%;
`
export const Row = styled.div`
  display: table-row;
`

export const Label = styled.label`
  display: table-cell;
  margin-bottom: 10px;
`

export const SubmitInput = styled(Input)`
  background: #fff;
  cursor: pointer;
  &:hover{
    color: #fff;
    background: #000;
  }
`
export const Logo = styled.div`
  height: 60px;
  width: 100%;
  background: url(${logourl}) no-repeat 50%;
  background-size: contain;
  &.logo-enter{
      transition: width 0.3s;
  }
  &.logo-enter-active{
      width: 0px;
  }
  &.logo-exit{
      transition: width 0.3s;
  }
  &.logo-exit-active{
      width: 100%;
  }
`
export const BlogListWrapper = styled.div`
  margin: 20px;
  &.hide{
      display: none;
  }
`

export const BlogItem = styled.div`
  width:100%;
  border-bottom: 1px solid #BFBFBF;
  height: 50px;
  position: relative;
`
export const Title = styled.span`
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
`
export const RightItem = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 50px;
  line-height: 50px;
`
export const Time = styled.span`
  height: 50px;
  font-size: 10px;
  line-height: 50px;
  margin-left: 20px;
`

export const Edit = styled.span`
  margin-right: 20px;
  color: #217FCE;
  cursor: pointer;
`
export const Delete = styled.span`
  margin-right: 20px;
  color: #217FCE;
  cursor: pointer;
`
export const EditWrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  @media(max-width: 992px){
      width:100%;
  }
`

export const InputTitle = styled.input`
  display: block;
  width:100%;
`

export const Wrapper = styled.div`  
  margin: 20px 0;
`

export const EditorWrapper = styled.div`
  height:900px;
  width: 100%;
`
export const Button = styled.button`
  margin: 20px 0;
  background: #fff;
  border-radius: 2px;
  margin-bottom: 10px;
  border: 1px solid #C5B8B8;
  cursor: pointer;
  &:hover{
      background: black;
      border: 1px solid black;
      color: #fff;
  }
`

export const BackButton = styled(Button)`
  float: left;
  &:before{
      content:"<<";
  }
`
export const CommentItem = styled.div`
  margin-bottom: 20px;
`
export const CommentHead = styled.div`
  background:#DCF0FF;
  overflow: auto;
`
export const CommentMain = styled.div`
  &:after{
      content:"";
      clear: both;
      display: block;
  }
  border-bottom: 0.5px solid #BFBFBF;
`
export const Comment = styled.div`
  padding-top:10px;
  font-size:12px;
`
export const Del = styled(Delete)`
  float: right;
`
export const OutEditorWrapper = styled.div`
  margin-top: 20px;
  z-index: 99;
`