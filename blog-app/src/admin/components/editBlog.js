import React from 'react';
import { Upload, message, Button, Icon } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import {
	EditWrapper,
	InputTitle,
	Wrapper,
	EditorWrapper,
	SaveButton,
	BackButton,
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const fileList = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
]; 
const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...fileList],
};

class EditBlog extends React.Component{
    render(){
    	return (
            <EditWrapper>
                <BackButton onClick={this.props.clickBack.bind(this)}>返回</BackButton>
                <SaveButton>发表</SaveButton>
            	<InputTitle placeholder="标题" />
            	<Wrapper>
            		<label for="tagselect">标签：</label>
            		<select id="tagselect">
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
					        language: 'zh_CN',
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
				        onChange={this.handleEditorChange}
				      />
            	</EditorWrapper>
            </EditWrapper>
    	);
    }
}

const mapStateToProps = (state) =>({

})

const mapDispatchToProps = (dispatch) =>({
	clickBack: ()=>{
        const action=actionCreators.clickBackAction();
        dispatch(action);
	},
})

export default connect(mapStateToProps,mapDispatchToProps)(EditBlog);