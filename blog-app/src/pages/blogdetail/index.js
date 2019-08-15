import React from 'react';
import {
	Wrapper,
	BlogWrapper,
	Time,
	Title,
	Content,
  PicWrapper,
} from './style';
import Comment from './components/comment';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import HeadAside from '../../common/header';
import { BackTop } from 'antd';
import { withRouter} from 'react-router-dom';

class Blogdetail extends React.PureComponent{

  componentDidMount(){
    this.props.loadBlogsingle(this.props.match.params.id);
  }

	render(){
		return (
            <React.Fragment>
              <HeadAside />
              <Wrapper>
                <BlogWrapper>
                  <Title>{this.props.blogsingle.get('title')}</Title>
                	<Time>{this.props.blogsingle.get('time')}</Time>
                  <PicWrapper>
                      <img src={this.props.blogsingle.get('imgurl')} alt="img"/>
                  </PicWrapper>
                  <Content dangerouslySetInnerHTML = {{ __html:this.props.blogsingle.get('content')}} />
                  <Comment />
                </BlogWrapper>
              </Wrapper> 
              <div>
                <BackTop />
              </div>
            </React.Fragment>   
        );
	}
}

const mapStateToProps = (state)=> ({
    blogsingle: state.get('blogdetail').get('blogsingle'),
})

const mapDispatchToProps = (dispatch) =>({
    loadBlogsingle: (id)=>{
      const action = actionCreators.loadBlogSingle(id);
      dispatch(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Blogdetail));