// src/components/ItemList.js

import React, { useState } from 'react';
import { connect } from 'react-redux';


import { addItem, deleteItem, updateItem } from '../Action';
const ItemList = ({ items, addItem, deleteItem, updateItem }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [editingItemId, setEditingItemId] = useState(null);

  const handleAddItem = () => {
    if (name && age && city) {
      const newItem = {
        id: Date.now(),
        name,
        age,
        city
      };
      addItem(newItem);
      setName('');
      setAge('');
      setCity('');
    }
  };

  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  const handleEditItem = (id) => {
    const itemToEdit = items.find(item => item.id === id);
    if (itemToEdit) {
      setName(itemToEdit.name);
      setAge(itemToEdit.age);
      setCity(itemToEdit.city);
      setEditingItemId(id);
    }
  };

  const handleUpdateItem = () => {
    if (name && age && city && editingItemId !== null) {
      const updatedItem = {
        id: editingItemId,
        name,
        age,
        city
      };
      updateItem(editingItemId, updatedItem);
      setName('');
      setAge('');
      setCity('');
      setEditingItemId(null);
    }
  };

  return (
    <div className='form'>
      <h2 >Item List</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        {
          editingItemId === null ?
            <button onClick={handleAddItem}>Add Item</button> :
            <button onClick={handleUpdateItem}>Update Item</button>
        }
      </div>
      <ul className='display'>
        {items.map(item => (
          <li key={item.id}>
            <div>
              <strong>Name: </strong> {item.name}
            </div>
            <div>
              <strong>Age: </strong> {item.age}
            </div>
            <div>
              <strong>City: </strong> {item.city}
            </div>
            <div>
              <button  className ='delete'onClick={() => handleDeleteItem(item.id)}>Delete</button>
              <button className='edit' onClick={() => handleEditItem(item.id)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps, { addItem, deleteItem, updateItem })(ItemList);
