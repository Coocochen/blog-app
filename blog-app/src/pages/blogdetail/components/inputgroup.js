import React from 'react';
import {
	CommentForm,
	InputName,
	InputMail,
	InputComment,
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { withRouter} from 'react-router-dom';
import { Button } from 'antd';

class InputGroup extends React.Component{
   render(){
   	   const {posting, inputName, inputMail, inputComment } =this.props;
   	   return (
         <CommentForm>
        	<InputName 
        	    placeholder="昵称" 
        	    value={inputName} 
        	    onChange={(e)=>this.props.changeInputName(e)}
        	/>
        	<InputMail 
        	    placeholder="邮箱" 
        	    value={inputMail} 
        	    onChange={(e)=>this.props.changeInputMail(e)}
        	/>
        	<InputComment 
        	    placeholder="评论" 
        	    value={inputComment} 
        	    onChange={(e)=>this.props.changeInputComment(e)}
        	/>
        	<Button 
                loading={posting}
        	    onClick={()=>this.props.submitComment(inputName,inputMail,inputComment,this.props.match.params.id)}
        	 >
        	    发表评论
        	</Button>
	     </CommentForm>
   	   );
   }
}

const mapStateToProps = (state) => ({
    posting: state.get('blogdetail').get('posting'),
    inputName: state.get('blogdetail').get('inputName'),
    inputMail: state.get('blogdetail').get('inputMail'),
    inputComment: state.get('blogdetail').get('inputComment'),
})

const mapDispatchToProps = (dispatch) => ({
	submitComment: (name,mail,comment,blogid) => {
		const action = actionCreators.submitCommentAction(name,mail,comment,blogid);
		dispatch(action);
	},
	changeInputName: (e) => {
		const action = actionCreators.changeInputNameAction(e.target.value);
		dispatch(action);
	},
    changeInputMail: (e) => {
        const action = actionCreators.changeInputMailAction(e.target.value);
        dispatch(action);
    },
    changeInputComment: (e) => {
        const action = actionCreators.changeInputCommentAction(e.target.value);
        dispatch(action);
     }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(InputGroup));