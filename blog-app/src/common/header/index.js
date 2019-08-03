import React from 'react'
import{
	HeadWrapper,
	Logo,
	MenuWrapper,
	Icon,
	Nav,
	NavItem,
	FootAside,
	Iconlist,
	IconItem,
	Tag,
	Intro
} from './style';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';

class HeadAside extends React.Component{   

    componentDidMount(){
    	this.props.loadTags();
    }

    render(){
        return(
			<HeadWrapper>
			    <Link to="/">
			        <Logo />
			    </Link>
			    <MenuWrapper>
			        <CSSTransition
	                in={this.props.opened}
	                timeout={500}
	                classNames="Iconslide"
			        >
						<Icon 
						    onClick={this.props.handleClick.bind(this)}
						    className={this.props.opened ? "close" : ""}
						/>
				      </CSSTransition>
				      <CSSTransition
	                in={this.props.opened}
	                timeout={500}
	                classNames="Navslide"
			        >
						<Nav className={this.props.opened ? "show" : ""}>
                            <Link to="/photos">
							    <NavItem>相册</NavItem>
							</Link>
							<Link to="/about">
							    <NavItem>关于</NavItem>
							</Link>
							{this.props.taglist.map((item,index)=>(
                                <Link to={"/tag/"+item}>
							        <NavItem>{item}</NavItem>
							    </Link>
							   )
                            )}
							<Link to="/">
							    <NavItem>留言</NavItem>
							</Link>
						</Nav>
		          </CSSTransition>
		          <CSSTransition
	                in={this.props.opened}
	                timeout={500}
	                classNames="Introslide"
			        >
				          <Intro className={this.props.opened ? "close" : ""}>
				              {this.props.intro}
				          </Intro>
		          </CSSTransition>
				  </MenuWrapper>
				  <FootAside>
				      <Iconlist>
				          <IconItem>
				          	 <a href="/" className="iconfont">&#xe610;</a>
				          </IconItem> 
				          <IconItem>
				          	 <a href="/" className="iconfont">&#xe6a1;</a>
				          </IconItem> 
				          <IconItem>
				          	 <a href="/" className="iconfont">&#xe699;</a>
				          </IconItem>   
				      </Iconlist>
				      <Tag>
				          <p>©2019年</p>
	                <p>陈峘的个人博客</p>
				      </Tag>
				  </FootAside>
		  </HeadWrapper> 
	);
    }
}

const mapStateToProps = (state) => {
    return {
        opened: state.get('header').get('opened'),
        taglist: state.get('header').get('taglist'),
        intro: state.get('header').get('intro'),
    }
}

const mapDispatchToProps = (dispatch) => {
	  return {
        handleClick(){
        	dispatch(actionCreators.clickIcon());
        },
        loadTags(){
        	const action = actionCreators.loadTagsAction();
        	dispatch(action);
        }
	  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeadAside);