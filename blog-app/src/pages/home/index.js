import React from 'react';
import {
	ListItem,
	List,
	Time,
	ListWrapper,
	Title,
	Content,
	ImgWrapper,
	Footer,
	LoadMore
} from './style';
import HeadAside from '../../common/header';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';

class BlogList extends React.Component{
	
	componentDidMount(){
        this.props.loadBloglist();
	} 


	render(){
        return (
        	<React.Fragment>
	        	<HeadAside />
				<ListWrapper>
					<List>
					    {this.props.bloglist.map((item,index)=>(
	                        <Link to={'/blogdetail/' + item.get('Id')}>
	                        <ListItem key={item.get('Id')}>
	                            <ImgWrapper>
			                	    <img src= {item.get('imgurl')} alt='img' />
			                	</ImgWrapper>
			                	<Time>{item.get('time')}</Time> 
			                    <Title href="/">{item.get('title')}</Title>
			                    <Content dangerouslySetInnerHTML = {{ __html:item.get('content').substring(0,200) }}></Content>
		                    </ListItem>
		                    </Link>
					    ))}
					    <LoadMore className="iconfont" onClick={() => this.props.loadmore(this.props.page)}>&#xe61e;</LoadMore>
		            </List>
	            </ListWrapper>
	        </React.Fragment>
		);
	}
}

const mapStateToProps=(state) => ({
   bloglist: state.get('blog').get('bloglist'),
   page: state.get('blog').get('page'),
})

const mapDispatchToProps = (dispatch) =>({
	loadBloglist: () => {
		dispatch(actionCreators.loadBloglist());
	},
	loadmore: (page)=>{
        const action = actionCreators.getMoreBlogAction(page);
        dispatch(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(BlogList);