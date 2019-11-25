import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style2.css';

// 等价于
// import React from 'react';
// const Component = React.Component;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      list: []
    }
    this.handleToggole = this.handleToggole.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  render() {
    return (
      // 也是jsx语法 Fragment:占位符，
      <Fragment>
        <TransitionGroup>
        {
          this.state.list.map((item, index) => {
            return (
              <CSSTransition
              // in={this.state.show}
              timeout={300}
              classNames="my-node"
              // unmountOnExit 隐藏后dom元素会被移除
              unmountOnExit
              // 动画进入完成钩子
              onEntered={(el) => {el.style.color="blue"}}
              // 初始化也有动画 appear
              appear={true}
              key={index}
            >
              <div>{item}</div>
              {/* <div>hello</div> */}
            </CSSTransition>
            )
          })
        }
        </TransitionGroup>
        {/* <div className={this.state.show ? 'show' : "hide"}>
          hello,dello 
        </div> */}
        {/* <button onClick={this.handleToggole}>toggole</button> */}
        <button onClick={this.handleAddItem}>toggole</button>
      </Fragment>
    )
  }

  handleToggole() {
    this.setState({
      show: !this.state.show
    })
  }
  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}

export default App;
