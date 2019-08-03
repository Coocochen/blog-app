import React from 'react';
import {
	CommentForm,
	InputName,
	InputMail,
	InputComment,
	CommentButton,
} from '../style'

class InputGroup extends React.Component{
   render(){
   	   return (
         <CommentForm>
	            	<InputName placeholder="昵称" />
	            	<InputMail placeholder="邮箱" />
	            	<InputComment placeholder="评论" />
	            	<CommentButton>发表评论</CommentButton>
	     </CommentForm>
   	   );
   }
}

export default InputGroup;