import { Tag, Input, Icon } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';

class TagsManager extends React.PureComponent {
  
    componentDidMount(){
    this.props.loadTagGoup();
    }

    handleClose = removedTag => {
        //const tags = this.props.tags.filter(tag => tag !== removedTag);
        // this.setState({ tags });
        this.props.removeTag(removedTag);
    };

    showInput = () => {
        this.props.showInput();
    };

    handleInputChange = e => {
        this.props.changeInputValue(e.target.value);
    };

    handleInputConfirm = () => {
        this.props.addInputTag(this.props.inputValue);
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
        const { inputVisible, inputValue } = this.props;
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
    inputVisible: state.get('admin').get('inputVisible'),
    inputValue: state.get('admin').get('inputValue'),
})

const mapDispatchToProps = (dispatch) =>({
    loadTagGoup: () => {
        const action = actionCreators.loadTagGroupAction();
        dispatch(action) ;   
    },
    changeInputValue: (value) => {
        const action = actionCreators.changeInputValueAction(value);
        dispatch(action);
    },
    showInput: () => {
        const action = actionCreators.showInputAction();
        dispatch(action);
    },
    addInputTag: (inputValue) => {
        const action = actionCreators.addInputTagAction(inputValue);
        dispatch(action);
    },
    removeTag: (removedTag) => {
        const action = actionCreators.removeTagAction(removedTag);
        dispatch(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(TagsManager);