import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {
  Logo,
  Button,
  Wrapper,
} from '../style';
import BlogManager from './blogmanager';
import EditableTagGroup from './editableTagGroup';

const { Header, Sider, Content } = Layout;

class TagManager extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
         <Sider
          breakpoint="lg"
          collapsedWidth="0"
          trigger={null} 
          collapsible 
          collapsed={this.state.collapsed}
          >
            <Menu theme="white" mode="inline" defaultSelectedKeys={['2']} style={{ height: '100%' }}>
              <CSSTransition
                  in={this.state.collapsed}
                  timeout={200}
                  classNames="logo"
              >
                  <Logo />
              </CSSTransition>
              <Menu.Item key="1">
                <Icon type="user" />
                <span><Link to='/admin'>博客管理</Link></span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span><Link to='/tagmanager'>标签管理</Link></span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span><Link to='/photosmanager'>相册管理</Link></span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="upload" />
                <span>评论管理</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="upload" />
                <span>修改密码</span>
              </Menu.Item>
            </Menu>
          </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0}}>
            <Icon
              style={{fontSize:20,marginLeft: 20}}
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
        </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 700,
            }}
          >
            <Wrapper>
               <EditableTagGroup />
            </Wrapper>
          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default TagManager;