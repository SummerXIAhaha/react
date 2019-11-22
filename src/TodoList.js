import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';
import axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    // 一个类中都会有一个构造函数 他都会优于其他函数先执行
    // 当state或者props改变时，render函数就会执行
    // 父组件render函数执行时，所有子组件的函数都会被执行
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    // ref的另一种写法
    this.myRef = React.createRef();
    this.state = {
      inputValue: '',
      list: [
        '学习引文',
        '学习react'
      ]
    }
  }
  
  // 组件被挂载之前，自动被执行
  // ajax如果放在componentWillMount里面，在使用reactNative时会有问题
  componentWillMount() {
    console.log('componentWillMount');
  }

  render() {
    console.log('render');
    return (
      // 占位符 
      <Fragment>
      <div>
        {/* htmlFor 为了防止label的for属性与for循环冲突，所以要替换成 htmlFor */}
        <label htmlFor="insertArea" ref={this.myRef}>输入输入</label>
        <input
        id="insertArea"
        className="input"
        type="text"
        onChange={this.handleInputChange}
        value={this.state.inputValue}
        ref={(input) => {this.input = input}}
        />
        <button onClick={this.handleButtonClick}>提交</button></div>
      <ul>
        {this.getToDoItem()}
      </ul>
      </Fragment>
    )  
  }

  // 组件被挂载到页面之后，自动被执行
  // ajax请求会放在componentDidMount函数里面  
  componentDidMount() {
    axios.get('/api/todolist').then(() => {

    }).catch(() => {

    })
    console.log('componentDidMount');
  }

  // 组件被更新之前会自动执行
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    // 该函数需要一个返回值，false: 组件不被更新 true: 组件被更新
    return true;
  }

  // 组件在更新之前会自动执行，但是他在shouldComponentUpdate后面执行，如果shouldComponentUpdate返回false，就会被执行，如果返回true，就不会被执行
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  // 组件更新完成之后，会被执行
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // 如果组件里面没有props，该函数不会执行
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  getToDoItem() {
    return this.state.list.map((item, index) => {
      // dangerouslySetInnerHTML={{__html: 不转义显示在html上的内容}} v-html？
      return (
        // key值绑定在最外层标签上, 不要用index，用固定的不同的值
        <div key={item}>
          {/* 父组件传给子组件的方法需要绑定this */}
          <TodoItem
            item={item}
            index={index}
            deleteItem={this.handleItemClick}/>
          {/* <li
          key={index}
          onClick={this.handleItemClick.bind(this, index)}
          dangerouslySetInnerHTML={{__html: item}}></li> */}
        </div>
      )
    })
  }
  // 输入处理
  handleInputChange(e) {
    // 改变state值需要setState方法
    // 如果想要拿到this，需要绑定this对函数的作用域进行变更，this.handleInputChange.bind(this)
    // this.setState({
    //   inputValue: e.target.value
    // });
    const value = e.target.value;
    // 也可以用ref拿到当前节点，但是不推荐
    // const value = this.input.value;
    // setstate是异步函数, 第二个参数就是他的回调函数，当回调函数执行时，页面已经被更新完成了。
    this.setState(() => ({
      inputValue: value
    }), () => {
      console.log('页面已经被更新完成');
    })
  }
  // 提交处理
  handleButtonClick() {
    // this.setState({
    //   list: [
    //     ...this.state.list,
    //     this.state.inputValue
    //   ]
    // })

    // const list = [...this.state.list];
    // list.push(this.state.inputValue);
    // this.setState({
    //   list,
    //   inputValue: '',
    // })

    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: '',
    }))
  }
  // 点击li标签处理
  handleItemClick(index) {
    // immutable 
    // state 不允许做任何改变 改变的话做性能优化会有问题
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list,
    // })

    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    })
  }
}

export default TodoList;