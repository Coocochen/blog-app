import { Tag, Input, Icon } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class EditableTagGroup extends React.Component {

  state = {
    inputVisible: false,
    inputValue: '',
  };
  
  componentDidMount(){
    this.props.loadTagGoup();
  }

  handleClose = removedTag => {
    const tags = this.props.tags.filter(tag => tag !== removedTag);
    // this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.props;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      inputVisible: false,
      inputValue: '',
    });

  };

  saveInputRef = input => (this.input = input);

  forMap = tag => {
    const tagElem = (
      <Tag
        closable
        onClose={e => {
          e.preventDefault();
          this.handleClose(tag);
        }}
        color="magenta"
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };
  render() {
    const { inputVisible, inputValue } = this.state;
    const tagChild = this.props.tags.map(this.forMap);
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <TweenOneGroup
            enter={{
              scale: 0.8,
              opacity: 0,
              type: 'from',
              duration: 100,
              onComplete: e => {
                e.target.style = '';
              },
            }}
            leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
            appear={false}
          >
            {tagChild}
          </TweenOneGroup>
        </div>
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag  onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
            <Icon type="plus" /> New Tag
          </Tag>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
   tags: state.get('admin').get('tags'),
})

const mapDispatchToProps = (dispatch) =>({
  loadTagGoup: ()=>{
    const action = actionCreators.loadTagGroupAction();
    dispatch(action) ;   
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(EditableTagGroup);