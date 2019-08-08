import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-left: 200px;
    padding: 40px 0;
    @media (max-width:992px){
    	margin-left: 0;
    	padding: 40px 20px;
    }
`
export const BlogWrapper = styled.div`
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
`

export const Time = styled.div`
    color: #666;
    font-size: 12px;
`
export const PicWrapper = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 62%;
    img{
        position: absolute;
        width: 100%;
        height: 100%;
    }
`

export const Title = styled.div`
    color: #666;
    font-size: 25px;
    padding: 20px 0;
`

export const Content = styled.div`
    margin-top: 30px;
    font-size: 14px;
    color: #333;
    line-height: 1.8em;
`

export const CommentWrapper = styled.div`
    margin: 40px 0;
`

export const CommentList = styled.div`
    margin-top: 20px;
    margin-bottom: 30px;
`
export const CommentTitle = styled.div`
	font-size: 18px;
	color: #333;
`
export const Avatar = styled.div`
	width: 60px;
	height: 60px;
	float:left;
	margin-right:10px;
	margin-top: 5px;
	margin-bottom: 5px;
`

export const CommentItem = styled.div`
    margin: 20px 0;
    &:after{
    	content: "";
    	clear: both;
    	display: block;
    }
`

export const Author = styled.div`
    color: #111;
    display: inline-block;
    margin-right: 20px;
    font-size: 16px;
`

export const PostDate = styled.div`
    display: inline-block;
    color: #999;
    font-size: 13px;
`

export const CommentContent = styled.div`
	font-size: 13px;
	color: #666;
	margin-top: 10px;	
`

export const CommentForm = styled.div`
	padding: 0px;
	margin: 0px;
`

export const InputName = styled.input`
	display: block;
	width: 100%;
	border:none;
	background: #eee;
	padding: 10px;
	margin: 10px 0;
`
export const InputMail = styled.input`
	display: block;
	width: 100%;
	border:none;
	background: #eee;
	padding: 10px;
	margin: 10px 0;
`

export const InputComment = styled.textarea`
    display: block;
	width: 100%;
	border:none;
	background: #eee;
	padding-left: 10px;
	height: 60px;
	margin: 10px 0;
`

export const CommentButton = styled.button`
    background-color: #fff;
    border: 0.5px solid #333;
    padding:5px 15px;
    border-radius: 2px;
    cursor: pointer;
    &:hover{
    	background-color: #000;
    	color: #fff;
    }
`

export const LoadMore = styled.div`
    width:100%;
    text-align: center;
    margin: 10px 0;
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
    &.hidden{
        display:none;
    }
`

export const EndLine = styled.div`
    width:100%;
    text-align:center;
    font-size: 12px;
    color:#999;
    margin: 40px 0;
    padding: 10px;
    border-top:0.4px solid #999;
    &.hidden{
        display:none;
    }
`
