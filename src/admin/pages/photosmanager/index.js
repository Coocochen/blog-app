import React from 'react';
import { Upload, Icon } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';

class PhotosManager extends React.PureComponent {

  componentDidMount() {
    this.props.loadPhotos();
  }

  handleChange = (photolist) => {
    this.props.changePhotos(photolist.fileList);
  };
  handleRemove = (removedPhoto) => {
    this.props.removePhoto(removedPhoto.uid);
  };
  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
  };

  render() {
    const { photolist } = this.props;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <div className="clearfix">
        <Upload
          action="/photos/test/addphotolist"
          listType="picture-card"
          fileList={photolist}
          onChange={this.handleChange}
          onRemove={this.handleRemove}
        >
          {uploadButton}
        </Upload>
      </div>
    );
  }
}

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const mapStateToProps = (state) => ({
  photolist: state.get('admin').get('photolist').toJS(),
})

const mapDispatchToProps = (dispatch) => ({
  loadPhotos: () => {
    const action = actionCreators.loadPhotosAction();
    dispatch(action);
  },
  changePhotos: (photolist) => {
    const action = actionCreators.changePhotosAction(photolist);
    dispatch(action);
  },
  removePhoto: (id) => {
    const action = actionCreators.removePhotoAction(id);
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotosManager);