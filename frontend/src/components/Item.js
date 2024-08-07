import React from 'react';
import '../style/item.css';
import { FaCheckSquare } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { FaTrashAlt } from "react-icons/fa";
import { useTheme } from '../hooks/themeContext';

const Item = ({ item, deleteItem, markAsBought, editItem, origem, pending }) => {
  const { theme } = useTheme();
  return (
    <li className='listItem'>
      <div>
        <span style={{ color: item.bought ? '#999' : '#14140f', textDecoration: item.bought ? 'line-through' : 'none' }} className='itemName'>
          {item.name}
        </span>
        {origem === 'pendente' ?
          <span>
            <span className={theme === 'dark' ? 'darkQuantItem' : 'quantItem'}>
              Quantidade: {item.quantity}
            </span>
            <span className={theme === 'dark' ? 'darkDateCreate' : 'dateCreate'}>
              Data: {
                new Date(item.createdAt).toLocaleString('pt-BR', {
                  timeZone: 'America/Sao_Paulo',
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })
              }
            </span>
          </span> : <span>
            <span className={theme === 'dark' ? 'darkQuantItem' : 'quantItem'}>
              Quantidade: {item.quantity}
            </span>
            <span className={theme === 'dark' ? 'darkDateUpdate' : 'dateUpdate'}>
              Data: {
                new Date(item.updatedAt).toLocaleString('pt-BR', {
                  timeZone: 'America/Sao_Paulo',
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })
              }
            </span>
          </span>

        }

      </div>
      <div>
        {pending === 'pending' ?
          <span>
            <button
              className={theme === 'dark' ? 'darkButtonEdit' : 'buttonEdit'}
              onClick={() => editItem(item)}
            >
              <FaEdit />
            </button>
            <button
              className={theme === 'dark' ? 'darkButtonDelete' : 'buttonDelete'}
              onClick={() => deleteItem(item.id)}
            >
              <FaTrashAlt />
            </button>
            <button
              className={theme === 'dark' ? 'darkButtonBuy' : 'buttonBuy'}
              onClick={() => markAsBought(item.id)}
            >
              {item.bought ? <TbReload /> : <FaCheckSquare />}
            </button>
          </span> :
          <span>
            <button
              className={theme === 'dark' ? 'darkButtonBuy' : 'buttonBuy'}
              onClick={() => markAsBought(item.id)}
            >
              {item.bought ? <TbReload /> : <FaCheckSquare />}
            </button></span>}

      </div>
    </li>
  );
};

export default Item;
