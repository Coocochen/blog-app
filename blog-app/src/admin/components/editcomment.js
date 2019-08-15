import React from 'react';
import {
	Wrapper,
	CommentItem,
	CommentHead,
	CommentMain,
	Comment,
	Del
} from '../style';
import { Popconfirm} from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class EditComment extends React.PureComponent{
    
    componentDidMount(){
    	this.props.loadCommentlist();
    }
    confirm(id) {
		this.props.deleteCommentById(id);
	}

	render(){
		const { commentlist } =this.props;
		return (
            <Wrapper>
                {commentlist.map(item=>(
                    <CommentItem key={item.get('id')}>
            		<CommentHead>
            			博客名：<span style={{marginRight: 30}}>{item.get('blogTitle')}</span>
            			昵称：<span style={{marginRight: 30}}>{item.get('name')}</span>
            			邮箱：<span style={{marginRight: 30}}>{item.get('mail')}</span>
            			时间：<span>{item.get('time')}</span>
            		</CommentHead>
            		<CommentMain>
	            		<Comment>
	            			{item.get('comment')}
	            		</Comment>
	            		<Del>
		            		<Popconfirm
								    title="确定要删除此评论吗？"
								    onConfirm={()=>this.confirm(item.get('id'))}
								    okText="Yes"
								    cancelText="No"
							>
				           	    删除
				           	</Popconfirm>
	            		</Del>
            		</CommentMain>
            	</CommentItem>
                ))}
            </Wrapper>
		);
	}
}

const mapStateToProps = (state) => ({
   commentlist: state.get('admin').get('commentlist'),
})

const mapDispatchToProps = (dispatch) => ({
	deleteCommentById: (id) => {
        const action = actionCreators.deleteCommentByIdAction(id);
        dispatch(action);
	},
    loadCommentlist: () => {
    	const action = actionCreators.loadCommentlistAction();
    	dispatch(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(EditComment);