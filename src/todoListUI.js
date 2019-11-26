import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  render() {
    return (
      <Fragment>
        <div>hello</div>
        <Input placeholder="basic usage" style={{marginRight: '10px', width: '300px'}} onChange={this.props.handleInput} value={this.props.inputValue}/>
        <Button type="primary" onClick={this.props.addItem}>提交</Button>
        <List
          style={{marginTop: '50px'}}
          size="small"
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => <List.Item onClick={() => {this.props.cancelItem(index)}}>{item}</List.Item>}
        />
      </Fragment>
    )
  }
}

export default TodoListUI;