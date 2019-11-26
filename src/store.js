import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/';
import { handleInputAction, addItemAction, cancelItemAction } from './store/actionCreator';
import TodoListUI from './todoListUI';

/**
 * redux三大原则
 *  store是唯一的
 *  只有store能够改变自己的内容
 *  reducer必须是个纯函数，给定固定的输入就一定有会有固定的输出（不能有异步操作，也不能有与时间相关的操作），而且不会有任何副作用（不能修改参数）
 */

class TodoList extends Component {
  constructor(props) {
    super(props);
    // 获取store中的数据
    this.state = store.getState();
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.cancelItem = this.cancelItem.bind(this);
    // 订阅store,如果store发生变化就会执行handleStoreChange函数
    store.subscribe(this.handleStoreChange);
  }
  

  render() {
    console.log('render');
    return <TodoListUI
      inputValue={this.state.inputValue}
      handleInput={this.handleInput}
      addItem={this.addItem}
      cancelItem={this.cancelItem}
      list={this.state.list}/>
  }

  handleInput(e) {
    // 更改store首先派发一个action
    const action = handleInputAction(e.target.value);
    store.dispatch(action);
  }
  addItem() {
    const action = addItemAction();
    store.dispatch(action);
  }
  cancelItem(index) {
    const action = cancelItemAction(index);
    store.dispatch(action);
  }
  handleStoreChange() {
    // 这个时候store已经更新，把更新后的值重新赋值给当前的state，组件内的state就会发生更改
    this.setState(store.getState());
  }
}

export default TodoList;