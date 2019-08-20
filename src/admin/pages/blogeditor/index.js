import React from 'react';
import { Upload, Icon } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import { withRouter} from 'react-router-dom';
import {
  EditWrapper,
  InputTitle,
  Wrapper,
  EditorWrapper,
  BackButton,
} from '../../style';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import { Button } from 'antd'; 

class BlogEditor extends React.PureComponent{

    handleTitleChange(e){
        this.props.changeBlogTitle(e.target.value);
    }

    handleTagChange(e){
        this.props.changeBlogTag(e.target.value);
    }

    handleEditorChange(e){
        this.props.changeBlogEditor(e.target.getContent()); 
        // console.log(e.target.getContent( { 'format' : 'text' } ).substr(0,200));
    }

    handleBlogPost(){
        const formdata = new FormData();
        formdata.append('file', this.props.fileList.toJS()[0]);
        formdata.append('title', this.props.blog.get('title'));
        formdata.append('tag',  this.props.blog.get('tag'));
        formdata.append('content', this.props.blog.get('content'));
        console.log(formdata);
        this.props.changeToPosting();
        this.props.postBlog(formdata,this.props.match.params.id);
    }

    componentDidMount(){
        this.props.loadTaglist();
        this.props.loadDefaultBlog(this.props.match.params.id);
    }

    render(){
        const { fileList, removeBlogPicture, addBlogPicture } = this.props;
        const props = {
            onRemove: file => {
                const index = fileList.toJS().indexOf(file); 
                removeBlogPicture(index);
              },
            beforeUpload: file => {  
                addBlogPicture(file);
                return false;     
              },
            fileList:fileList.toJS(),
            listType: 'picture',
        };

      return (
            <EditWrapper>
                <a href="/admin"><BackButton>返回</BackButton></a>
                <Button
                    style={{float:'right'}}
                    type="primary"
                    loading={this.props.posting}
                    onClick={this.handleBlogPost.bind(this)}
                >
                  发表
                </Button>
                <InputTitle 
                    onChange={this.handleTitleChange.bind(this)}  
                    placeholder="标题" 
                    value={this.props.blog.get('title')}
                />
                <Wrapper>
                    <label htmlFor="tagselect">标签：</label>
                    <select 
                        id="tagselect" 
                        onChange={(e)=>this.handleTagChange(e)} 
                        value={this.props.blog.get('tag')}
                    >
                        {this.props.tags.map((item)=>(
                                <option key={item}>{item}</option>
                            ))}
                    </select>
                </Wrapper>
                <Wrapper>
                    <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> 上传图片
                    </Button>
                    </Upload>
                </Wrapper>
                <EditorWrapper>
                    <Editor
                        initialValue={this.props.blog.get('content')}
                        init={{
                            height: '800px',
                            plugins: 'codesample',
                            codesample_languages: [
                                {text: 'HTML/XML', value: 'markup'},
                                {text: 'JavaScript', value: 'javascript'},
                                {text: 'CSS', value: 'css'},
                                {text: 'PHP', value: 'php'},
                                {text: 'Ruby', value: 'ruby'},
                                {text: 'Python', value: 'python'},
                                {text: 'Java', value: 'java'},
                                {text: 'C', value: 'c'},
                                {text: 'C#', value: 'csharp'},
                                {text: 'C++', value: 'cpp'}
                            ],
                          toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link image | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | codesample',
                          relative_urls: false,
                        }}
                        onChange={this.handleEditorChange.bind(this)}
                    />
                </EditorWrapper>
            </EditWrapper>
      );
    }
}

const mapStateToProps = (state) =>({
    posting: state.get('admin').get('posting'),
    blog: state.get("admin").get('blog'),
    fileList: state.get('admin').get('fileList'),
    tags: state.get('admin').get('tags'),
})

const mapDispatchToProps = (dispatch) =>({
    postBlog: (formdata,id)=>{
        const action=actionCreators.postBlogAction(formdata,id);
        dispatch(action);
    },
    changeToPosting: ()=>{
        const action=actionCreators.changeToPosting();
        dispatch(action);
    },
    loadDefaultBlog: (id)=>{
        const action=actionCreators.loadDefaulBlogAction(id);
        dispatch(action);
    },
    changeBlogTitle: (title)=>{
        const action=actionCreators.changeBlogTitle(title);
        dispatch(action);
    },
    changeBlogTag: (tag) =>{
        const action=actionCreators.changeBlogTag(tag);
        dispatch(action);
    },
    changeBlogEditor: (content) =>{
        const action=actionCreators.changeBlogEditor(content);
        dispatch(action);
    },
    removeBlogPicture: (index) =>{
        const action=actionCreators.removeBlogPicture(index);
        dispatch(action);
    },
    addBlogPicture: (file) =>{
        const action=actionCreators.addBlogPicture(file);
        dispatch(action);
    },
    loadTaglist: () =>{
        const action = actionCreators.loadTagGroupAction();
        dispatch(action) ; 
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(BlogEditor));