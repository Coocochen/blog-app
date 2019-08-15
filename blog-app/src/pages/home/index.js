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
import { BackTop } from 'antd';
import ReactPullLoad, { STATS } from "react-pullload";
import "react-pullload/dist/ReactPullLoad.css";
import { withRouter} from 'react-router-dom';

class BlogList extends React.PureComponent{
	
	componentDidMount(){
        this.props.loadBloglist(this.props.match.params.id);
	} 

    handleAction = action => {
	    console.info(action, this.props.action, action === this.props.action);
	    //new action must do not equel to old action
	    if (action === this.props.action) {
	      return false;
	    }

	    if (action === STATS.refreshing) {
	      this.handRefreshing();
	    } else {
	      if(action === STATS.loading){
	      	return false;
	      }
	      this.props.setActionaction(action);
	    }
  };

  handRefreshing = () => {
    if (STATS.refreshing === this.props.action) {
      return false;
    }
    this.props.setActionRefreshing();
    this.props.loadBloglist(this.props.match.params.id);
  };

	render(){
        return (
        	<React.Fragment>
        	    <ReactPullLoad
		          downEnough={150}
		          action={this.props.action}
		          handleAction={this.handleAction}
		          distanceBottom={1000}
		        >
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
				                    <Content >{item.get('content').replace(/<\/?.+?\/?>|&lt;\/?|&gt;\/?|&nbsp/g,'').substring(0,200)}</Content><span>...</span>
			                    </ListItem>
			                    </Link>
						    ))}
						    <LoadMore 
						         className={this.props.hasBlog?"iconfont":"iconfont hidden"} 
						         onClick={() => this.props.loadmore(this.props.page,this.props.match.params.id)}
						      >
						      &#xe61e;
						    </LoadMore>
			                <EndLine className={this.props.hasBlog?"hidden":""}/> 
			            </List>
		            </ListWrapper>
		            <div>
					    <BackTop />
					</div>
				</ReactPullLoad>
	        </React.Fragment>
		);
	}
}

const mapStateToProps=(state) => ({
   bloglist: state.get('blog').get('bloglist'),
   page: state.get('blog').get('page'),
   hasBlog: state.get('blog').get('hasBlog'),
   action: state.get('blog').get('action'),
})

const mapDispatchToProps = (dispatch) =>({
	loadBloglist: (id) => {
		dispatch(actionCreators.loadBloglist(id));
	},
	loadmore: (page,id)=>{
        const action = actionCreators.getMoreBlogAction(page,id);
        dispatch(action);
    },
    setActionaction: (raction) => {
    	const action = actionCreators.setActionaction(raction);
    	dispatch(action);
    },
    setActionRefreshing: () =>{
    	const action = actionCreators.setActionRefreshing();
    	dispatch(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(BlogList));