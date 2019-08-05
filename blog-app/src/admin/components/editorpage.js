import React from 'react';
import { connect } from 'react-redux';
import EditBlog from './editBlog';
import { Layout, Menu, Icon } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {
  Logo
} from '../style';

const { Header, Sider, Content } = Layout;
class EditPage extends React.Component{
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
            <Menu theme="white" mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%' }}>
              <CSSTransition
                  in={this.state.collapsed}
                  timeout={200}
                  classNames="logo"
              >
                  <Logo />
              </CSSTransition>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>博客管理</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>标签管理</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>相册管理</span>
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
           <EditBlog />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default EditPage;