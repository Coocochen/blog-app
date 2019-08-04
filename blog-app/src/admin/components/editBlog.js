import React from 'react';
import { Upload, Icon } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import {
	EditWrapper,
	InputTitle,
	Wrapper,
	EditorWrapper,
	BackButton,
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Button } from 'antd';


class EditBlog extends React.Component{
    state = {
        fileList: [],  //图片
        newTitle: "",
        newTag: "",
        newContent: "",
    };

    handleTitleChange(e){
        this.setState({
            newTitle: e.target.value
        })
    }

    handleTagChange(e){
        this.setState({
            newTag: e.target.value
        })
    }

    handleEditorChange(e){
        this.setState({
            newContent: e.target.getContent()
        })
    }

    handleBlogPost(){
        const { fileList, newTitle, newTag, newContent } = this.state;
        const formdata = new FormData();
        formdata.append('file', fileList[0]);
        formdata.append('title', newTitle);
        formdata.append('tag', newTag);
        formdata.append('content', newContent);
        console.log(formdata);
        this.props.changeToPosting();
        this.props.postBlog(formdata);
    }

    render(){
        const { fileList } = this.state;
        const props = {
            onRemove: file => {
                this.setState(state => {
                  const index = state.fileList.indexOf(file);
                  const newFileList = state.fileList.slice();
                  newFileList.splice(index,  1);
                  return {
                    fileList: newFileList,
                  };
                });
              },
            beforeUpload: file => {   
                this.setState(state => ({
                  fileList: [...state.fileList, file],
                }));
                return false;     
              },
            fileList,
        };

    	return (
            <EditWrapper>
                <BackButton onClick={this.props.handleClickBack.bind(this)}>返回</BackButton>
            	<Button
                    style={{float:'right'}}
                    type="primary"
                    loading={this.props.posting}
                    onClick={this.handleBlogPost.bind(this)}
                >
                  发表
                </Button>
                <InputTitle onChange={this.handleTitleChange.bind(this)}  placeholder="标题" />
            	<Wrapper>
            		<label htmlFor="tagselect">标签：</label>
            		<select id="tagselect" onChange={(e)=>this.handleTagChange(e)}>
            			<option>标签一</option>
            			<option>标签二</option>
            			<option >标签三</option>
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
				        initialValue="<p>This is the initial content of the editor</p>"
				        init={{
				            height: '400px',
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
})

const mapDispatchToProps = (dispatch) =>({
	handleClickBack: ()=>{
        const action=actionCreators.clickBackAction();
        dispatch(action);
	},
    postBlog: (formdata)=>{
        const action=actionCreators.postBlogAction(formdata);
        dispatch(action);
    },
    changeToPosting: ()=>{
        const action=actionCreators.changeToPosting();
        dispatch(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(EditBlog);