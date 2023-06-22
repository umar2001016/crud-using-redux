// src/actions/itemActions.js

export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item
  };
};

export const deleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    payload: id
  };
};

export const updateItem = (id, updatedItem) => {
  return {
    type: 'UPDATE_ITEM',
    payload: {
      id,
      updatedItem
    }
  };
};
