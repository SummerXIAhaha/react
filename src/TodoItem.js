import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    // bind写在constructor里面会更节省性能
    this.handleClick = this.handleClick.bind(this);
  }

  // 可以控制子组件不要做无用的render(性能优化）
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.item !== this.props.item) return true;
    return false;
  }

  render() {
    const { item } = this.props;
    return (
      // JSX -> JS 对象 -> 真实的dom
      <div onClick={this.handleClick}>{item}</div>
    )
    // return React.createElement('div', {}, item);
  }

  // 1》组件从父组件接受参数， 2》当父组件的render函数被重新执行了，该函数就会执行
  componentWillReceiveProps() {
    console.log('child-componentWillReceiveProps');
  }

  // 当组件即将被从页面中移除时
  componentWillUnmount() {
    console.log('child-componentWillUnmount');
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}
// 如果没有isRequired 则可以不传， 如果写了就那必须要传并且需要满足条件
// object, bool, func, array, symbol, node, element, elementType,
// arrayOf(PropTypes.number, PropTypes.object)   数组类型，数组value可以是数字，也可以是对象
// oneOf(['News', 'Photos'])  是News，photos中的一种
// oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Message)])  字符串类型，或者数字类型，或者与message同类型
// objectOf(PropTypes.number) 对象类型，对象value只能是number类型
// .shape({color: PropTypes.string})  对象类型，key值color，value只能是字符串类型
// .exact
// .any
TodoItem.propTypes = {
  // test: PropTypes.string,
  item: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
}

TodoItem.defaultProps = {
  test: 'heelo',
}
export default TodoItem