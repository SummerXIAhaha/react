
import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, CANCEL_LIST_ITEM } from './actionTypes';

const defaultState = {
  inputValue: '122',
  list: [1,2],
}

// reducer 可以接受state但是不能改变state
export default (state = defaultState, action) => {
  // 初始化时也会自动执行一次
  console.log(state, action);
  // 派发action后reducer会检测到动作，根据传过来的type以及其他参数做相应的判断
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    console.log(newState);
    return newState;
  }
  if (action.type === ADD_LIST_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === CANCEL_LIST_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}