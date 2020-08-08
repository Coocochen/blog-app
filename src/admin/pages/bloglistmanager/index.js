import React from 'react';
import {
  BlogListWrapper,
  BlogItem,
  Title,
  Edit,
  Delete,
  RightItem,
  Time,
  Button,
  OutEditorWrapper
} from '../../style';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import { Popconfirm } from 'antd';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import BlogEditor from '../blogeditor/loadable';

class BlogListManager extends React.PureComponent {

  componentDidMount() {
    this.props.loadTitlelist();
  }
  confirm(id) {
    this.props.deleteBlogById(id);
  }

  render() {
    return (
      <Router>
        <BlogListWrapper className={this.props.editorView ? 'hide' : ''}>
          {this.props.titlelist.map((item, index) => (
            <BlogItem key={item.get('Id')}>
              <Title>{item.get('title')}</Title>
              <Time>{item.get('time')}</Time>
              <RightItem>
                <Link to={'/admin/blogeditor/' + item.get('Id')}>
                  <Edit onClick={this.props.showEditor.bind(this)}>编辑</Edit>
                </Link>
                <Delete>
                  <Popconfirm
                    title="确定要删除这篇博客吗？"
                    onConfirm={() => this.confirm(item.get('Id'))}
                    okText="Yes"
                    cancelText="No"
                  >
                    删除
                                </Popconfirm>
                </Delete>
              </RightItem>
            </BlogItem>
          ))}
          <Link to="/admin/blogeditor/-1">
            <Button onClick={this.props.showEditor.bind(this)}>添加博客</Button>
          </Link>
        </BlogListWrapper>
        <OutEditorWrapper>
          <Route path="/admin/blogeditor/:id" exact component={BlogEditor} />
        </OutEditorWrapper>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  titlelist: state.get('admin').get('titlelist'),
  editorView: state.get('admin').get('editorView')
})

const mapDispatchToProps = (dispatch) => ({
  loadTitlelist: () => {
    const action = actionCreators.loadTitleListAction();
    dispatch(action);
  },
  deleteBlogById: (id) => {
    const action = actionCreators.deleteBlogById(id);
    dispatch(action);
  },
  showEditor: () => {
    const action = actionCreators.showEditor();
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogListManager);