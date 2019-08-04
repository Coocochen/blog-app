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
			                    <Content dangerouslySetInnerHTML = {{ __html:item.get('content').substring(0,100) }}></Content><span>...</span>
		                    </ListItem>
		                    </Link>
					    ))}
					    <LoadMore 
					         className={this.props.hasBlog?"iconfont":"iconfont hidden"} 
					         onClick={() => this.props.loadmore(this.props.page)}
					      >
					      &#xe61e;
					    </LoadMore>
		                <EndLine className={this.props.hasBlog?"hidden":""}/>
		            </List>
	            </ListWrapper>
	        </React.Fragment>
		);
	}
}

const mapStateToProps=(state) => ({
   bloglist: state.get('blog').get('bloglist'),
   page: state.get('blog').get('page'),
   hasBlog: state.get('blog').get('hasBlog'),
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