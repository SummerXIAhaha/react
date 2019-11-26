import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, CANCEL_LIST_ITEM } from './actionTypes';

export const handleInputAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const addItemAction = (value) => ({
  type: ADD_LIST_ITEM,
  value,
});

export const cancelItemAction = (index) => ({
  type: CANCEL_LIST_ITEM,
  index,
});