import React from 'react';
import {
  SearchWrapper,
  ItemWrapper,
  HistoryItem,
  CloseItem
} from '../style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class Search extends React.PureComponent {
  onKeyup(e) {
    if (e.keyCode === 13) {
      if (this.props.searchContent.trim() === "") {
        return;
      }
      this.props.handleSearchResult(this.props.searchContent);
      let arr = [];
      if (localStorage.getItem('historyItems')) {
        arr = [...JSON.parse(localStorage.getItem('historyItems'))];
      }
      let item = {};
      item.time = +new Date();
      item.content = this.props.searchContent;
      arr.unshift(item);
      let obj = {};
      arr = arr.reduce((prev, curr) => {  //去重
        if (!obj[curr.content]) {
          obj[curr.content] = true;
          prev.push(curr);
        }
        return prev;
      }, []);

      arr.splice(6);
      localStorage.setItem('historyItems', JSON.stringify(arr));
      this.props.handlehideItem(this.props.searchContent);
    }
    if (localStorage.getItem('historyItems')) {
      if (e.target.value.trim() === "") {
        this.props.setTips(JSON.parse(localStorage.getItem('historyItems')));
        this.props.handleinputFocus();
      } else {
        let tipsarr = [];
        JSON.parse(localStorage.getItem('historyItems')).forEach(item => {
          if (item.content.indexOf(e.target.value) > -1) {
            let index = item.content.indexOf(e.target.value);
            let newitem = {};
            newitem.time = item.time;
            let newcontent = '';
            newcontent = newcontent + item.content.slice(0, index) + '<strong>' + item.content.slice(index, index + e.target.value.length) + '</strong>' + item.content.slice(index + e.target.value.length);
            newitem.content = newcontent;
            tipsarr.push(newitem);
          }
        })
        this.props.setTips(tipsarr);
      }
    }
  }
  handleMouseDown(e) {
    this.props.handlehideItem(e.target.textContent);
    this.props.clickItem();
  }
  handleMouseover() {
    this.props.handleMouseover();
  }
  handleinputFocus(e) {
    this.props.handleinputFocus();
    this.props.clickItemTofalse();
    if (e.target.value.trim() === "") {
      if (localStorage.getItem('historyItems')) {
        this.props.setTips(JSON.parse(localStorage.getItem('historyItems')));
      }
    } else {
      this.props.setTips([])
    }
  }
  handleCloseItem(time) {
    this.props.clickItem();
    let arr = JSON.parse(localStorage.getItem('historyItems'));
    let index;
    arr.forEach((item, ind) => {
      if (item.time === time) {
        index = ind;
      }
    })
    arr.splice(index, 1);
    this.props.setTips(arr);
    localStorage.setItem('historyItems', JSON.stringify(arr));
  }
  handleOnBlur() {
    if (this.props.isClickItem) {
      return false;
    }
    this.props.handleMouseleave();

  }
  handleClickSearch() {
    this.props.clickItem();
    if (this.props.searchContent.trim() === "") {
      return;
    }
    this.props.handleSearchResult(this.props.searchContent);
    let arr = [];
    if (localStorage.getItem('historyItems')) {
      arr = [...JSON.parse(localStorage.getItem('historyItems'))];
    }
    let item = {};
    item.time = +new Date();
    item.content = this.props.searchContent;
    arr.unshift(item);
    let obj = {};
    arr = arr.reduce((prev, curr) => {  //去重
      if (!obj[curr.content]) {
        obj[curr.content] = true;
        prev.push(curr);
      }
      return prev;
    }, []);

    arr.splice(6);
    localStorage.setItem('historyItems', JSON.stringify(arr));
    this.props.handlehideItem(this.props.searchContent);
  }
  render() {
    return (
      <div style={{ display: 'flow-root' }}>
        <CSSTransition
          in={this.props.ismouseover}
          timeout={500}
          classNames="searchslide"
        >
          <SearchWrapper
            onMouseOver={this.props.handleMouseover.bind(this)}
            className={this.props.ismouseover ? 'mouseover' : ''}
          >
            <span
              className="iconfont"
              style={{ fontSize: 30, marginLeft: 10 }}
              onClick={this.handleClickSearch.bind(this)}
            >
              &#xe649;
					    </span>
            <CSSTransition
              in={this.props.ismouseover}
              timeout={500}
              classNames="inputslide"
            >
              <input
                value={this.props.searchContent}
                onMouseOver={this.handleMouseover.bind(this)}
                className={this.props.ismouseover ? 'show' : ''}
                onFocus={this.handleinputFocus.bind(this)}
                onKeyUp={this.onKeyup.bind(this)}
                onChange={this.props.handleOnChange.bind(this)}
                ref={input => this.input = input}
                onBlur={this.handleOnBlur.bind(this)}
              />
            </CSSTransition>
            <ItemWrapper className={this.props.isInputFocus ? '' : 'hidden'}>
              {this.props.tips.map((item, index) => (
                <HistoryItem
                  key={item.time}
                >
                  <span
                    style={{ display: 'inline-block', width: '80%' }}
                    onMouseDown={this.handleMouseDown.bind(this)}
                    dangerouslySetInnerHTML={{ __html: item.content }}>
                  </span>
                  <CloseItem onMouseDown={this.handleCloseItem.bind(this, item.time)}></CloseItem>
                </HistoryItem>
              ))}
            </ItemWrapper>
          </SearchWrapper>
        </CSSTransition>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ismouseover: state.get('blog').get('ismouseover'),
    searchContent: state.get('blog').get('searchContent'),
    isInputFocus: state.get('blog').get('isInputFocus'),
    tips: state.get('blog').get('tips'),
    isClickItem: state.get('blog').get('isClickItem')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleMouseover: () => {
      dispatch(actionCreators.mouseOverSearch())
    },
    handleMouseleave: () => {
      dispatch(actionCreators.mouseLeaveSearch())
    },
    handleOnChange: (e) => {
      dispatch(actionCreators.searchContentChange(e.target.value));
    },
    handleSearchResult: (content) => {
      dispatch(actionCreators.searchResult(content))
    },
    handleinputFocus: () => {
      dispatch(actionCreators.inputFocus())
    },
    handlehideItem: (value) => {
      dispatch(actionCreators.hideItem(value))
    },
    setTips: (data) => {
      dispatch(actionCreators.setTips(data))
    },
    clickItem: () => {
      dispatch(actionCreators.clickItem())
    },
    clickItemTofalse: () => {
      dispatch(actionCreators.clickItemTofalse())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);