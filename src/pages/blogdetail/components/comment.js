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
    EndLine
} from '../style';
import imgurl from '../../../statics/male.jpg';
import InputGroup from './inputgroup';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { withRouter} from 'react-router-dom';

class Comment extends React.PureComponent{
 
    componentDidMount(){
        this.props.getCommentlist(this.props.match.params.id);
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
                            <Author>{item.get('name')}</Author>
                            <PostDate>{item.get('time')}</PostDate>
                            <CommentContent>{item.get('comment')}</CommentContent>
                        </CommentItem>
                    ))}
                    <LoadMore 
                        className={this.props.hasComment? "iconfont" : "iconfont hidden"}  
                        onClick={
                            this.props.loadMoreEvent? 
                            () => this.props.loadmore(this.props.page,this.props.match.params.id):
                            {}
                        }>
                        &#xe61e;
                    </LoadMore>
                    <EndLine className={this.props.hasComment ? "hidden" : ""}/>
                </CommentList>
                <InputGroup />
            </CommentWrapper>
        );
    }
}

const mapStateToProps = (state)=>({
    commentlist: state.get('blogdetail').get('commentlist'),
    page: state.get('blogdetail').get('commentPage'),
    hasComment: state.get('blogdetail').get('hasComment'),
    loadMoreEvent: state.get('blogdetail').get('loadMoreEvent')
})

const mapStateToDispatch = (dispatch) =>({
    getCommentlist: (blogid)=>{
        const action = actionCreators.getCommentAction(blogid);
        dispatch(action);
    },
    loadmore: (page,blogid)=>{
        const action = actionCreators.getMoreCommentAction(page,blogid);
        dispatch(action);
        dispatch(actionCreators.bandonLoadMore());
    }
}) 

export default connect(mapStateToProps,mapStateToDispatch)(withRouter(Comment));