import React from 'react';
import {
	CommentWrapper,
	CommentList,
	CommentTitle,
	Avatar,
	CommentItem,
	Author,
	PostDate,
	CommentContent,
	LoadMore,
} from '../style';
import imgurl from '../../../statics/male.jpg';
import InputGroup from './inputgroup';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class Comment extends React.Component{
 
    componentDidMount(){
    	this.props.getCommentlist(this.props.page);
    }

	render(){
		return (
			<CommentWrapper>
				<CommentTitle>
				    评论
				</CommentTitle>
	            <CommentList>
	                {this.props.commentlist.map((item,index)=>(
                        <CommentItem key={item.get('id')}>
		            	    <Avatar>
		            	    	<img src={imgurl} alt="avatar"/>
		            	    </Avatar>
	            	    	<Author>{item.get('author')}</Author>
	                        <PostDate>{item.get('postdate')}</PostDate>
	                        <CommentContent>{item.get('commentcontent')}</CommentContent>
	                    </CommentItem>
	                ))}
	                <LoadMore className="iconfont" onClick={() => this.props.loadmore(this.props.page)}>&#xe61e;</LoadMore>
	            </CommentList>
	            <InputGroup />
            </CommentWrapper>
		);
	}
}

const mapStateToProps = (state)=>({
    commentlist: state.get('blogdetail').get('commentlist'),
    page: state.get('blogdetail').get('commentPage'),
})

const mapStateToDispatch = (dispatch) =>({
    getCommentlist: ()=>{
    	const action = actionCreators.getCommentAction();
    	dispatch(action);
    },
    loadmore: (page)=>{
        const action = actionCreators.getMoreCommentAction(page);
        dispatch(action);
    }
}) 

export default connect(mapStateToProps,mapStateToDispatch)(Comment);