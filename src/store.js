import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store/';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  

  render() {
    console.log('render');
    return (
      <Fragment>
        <div>hello</div>
        <Input placeholder="basic usage" style={{marginRight: '10px', width: '300px'}} onChange={this.handleInput} value={this.state.inputValue}/>
        <Button type="primary" onClick={this.addItem}>提交</Button>
        <List
          style={{marginTop: '50px'}}
          size="small"
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </Fragment>
    )
  }

  handleInput(e) {
    const value = e.target.value;
    console.log(value);
    this.setState(() => ({
      value
    }), () => {
      console.log('页面已经被更新完成');
    });
  }
  addItem() {
    console.log('addItem');
    console.log(this.state.value);
    this.setState(() => ({
      list: [...this.state.list, this.state.value],
    }), () => {
      console.log('页面已经被更新完成');
    });
  }
}

export default TodoList;