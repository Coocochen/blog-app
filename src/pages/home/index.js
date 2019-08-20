import React from 'react';
import {
	ListItem,
	List,
	Time,
	ListWrapper,
	Title,
	Content,
	ImgWrapper,
	LoadMore,
	EndLine
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import { BackTop } from 'antd';
import { withRouter} from 'react-router-dom';

class BlogList extends React.PureComponent{
	
	componentDidMount(){
        this.props.loadBloglist(this.props.match.params.id);
	} 

	render(){
        return (
        	<React.Fragment>
        	    <ListWrapper>
					<List>
					    {this.props.bloglist.map((item,index)=>(
	                        <Link 
	                            to={'/blogdetail/' + item.get('Id')}
	                            key={item.get('Id')}
	                            style={{textDecoration: 'none'}}
	                         >
	                        <ListItem>
	                            <ImgWrapper>
			                	    <img src= {item.get('imgurl')} alt='img' />
			                	</ImgWrapper>
			                	<Time>{item.get('time')}</Time> 
			                    <Title>{item.get('title')}</Title>
			                    <Content>{item.get('content').replace(/<\/?.+?\/?>|&lt;\/?|&gt;\/?|&nbsp/g,'').substring(0,200)}</Content><span>...</span>
		                    </ListItem>
		                    </Link>
					    ))}
					    <LoadMore 
					         className={this.props.hasBlog?"iconfont":"iconfont hidden"} 
					         onClick={
		                    	this.props.loadMoreEvent? 
		                    	() => this.props.loadmore(this.props.page,this.props.match.params.id):
	                            {}
					     }>
					      &#xe61e;
					    </LoadMore>
		                <EndLine className={this.props.hasBlog?"hidden":""}/> 
		            </List>
		            <div>
					    <BackTop />
					</div>
				</ListWrapper>
	        </React.Fragment>
		);
	}
}

const mapStateToProps=(state) => ({
   bloglist: state.get('blog').get('bloglist'),
   page: state.get('blog').get('page'),
   hasBlog: state.get('blog').get('hasBlog'),
   action: state.get('blog').get('action'),
   loadMoreEvent: state.get('blog').get('loadMoreEvent')
})

const mapDispatchToProps = (dispatch) =>({
	loadBloglist: (id) => {
		dispatch(actionCreators.loadBloglist(id));
	},
	loadmore: (page,id)=>{
        const action = actionCreators.getMoreBlogAction(page,id);
        dispatch(action);
        dispatch(actionCreators.bandonLoadMore());
    },
    setActionaction: (raction) => {
    	const action = actionCreators.setActionaction(raction);
    	dispatch(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(BlogList));