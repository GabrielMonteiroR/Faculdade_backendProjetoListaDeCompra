import React, { useState, useEffect } from 'react';
import '../style/itemForm.css'
import { useTheme } from '../hooks/themeContext';

const ItemForm = ({ addItem, editItem, currentItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const { theme } = useTheme();
  useEffect(() => {
    if (currentItem) {
      setName(currentItem.name);
      setQuantity(currentItem.quantity.toString()); // Certifique-se de que é uma string
    } else {
      setName('');
      setQuantity('');
    }
  }, [currentItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) {
      alert('Nome e quantidade são obrigatórios.');
      return;
    }
    const quantityNumber = parseInt(quantity, 10);
    if (isNaN(quantityNumber)) {
      alert('Quantidade deve ser um número válido.');
      return;
    }
    if (currentItem) {
      editItem({ ...currentItem, name, quantity: quantityNumber });
    } else {
      addItem({ name, quantity: quantityNumber, bought: false });
    }
    setName('');
    setQuantity('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={theme === 'dark' ? 'darkItemForm' : 'itemForm'}
    >
      <div className={theme === 'dark' ? 'darkInputContainer' : 'inputContainer'}>
        <input
          type="text"
          placeholder="Nome do Item"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={theme === 'dark' ? 'inputDarkNameItem' : 'inputNameItem'}
        />
        <input
          type="text"
          placeholder="Quantidade"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className={theme === 'dark' ? 'inputDarkQuantItem' : 'inputQuantItem'}
        />
      </div>
      <button
        type="submit"
        className={theme === 'dark' ? 'darkButtonAdd' : 'buttonAdd'}
      >
        {currentItem ? 'ATUALIZAR ITEM' : 'ADICIONAR ITEM'}
      </button>
    </form>
  );
};

export default ItemForm;
