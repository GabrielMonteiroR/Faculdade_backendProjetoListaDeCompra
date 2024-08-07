import React from 'react';
import Item from './Item';
import '../style/itemList.css'
import { useTheme } from '../hooks/themeContext';

const ItemList = ({ items, deleteItem, markAsBought, editItem }) => {
  const activeItems = items.filter((item) => !item.bought);
  const completedItems = items.filter((item) => item.bought);
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'darkItensContainer' : 'itensContainer'}>
      <div className={theme === 'dark' ? 'itemDarkPending' : 'itemPending'}>
        <h2 className={theme === 'dark' ? 'darkSubtitleAtivo' : 'subtitleAtivo'}>PENDENTES</h2>
        <div className={theme === 'dark' ? 'darkScrollContainer' : 'scrollContainer'}>
          <ul className={theme === 'dark' ? 'darkListPending' : 'listPending'}>
            {activeItems.map((item) => (
              <li
                key={item.id}
              >
                <Item
                  item={item}
                  deleteItem={deleteItem}
                  markAsBought={markAsBought}
                  editItem={editItem}
                  origem='pendente'
                  pending='pending'
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={theme === 'dark' ? 'itemDarkConclude' : 'itemConclude'}>
        <h2 className={theme === 'dark' ? 'darkSubtitleConcluido' : 'subtitleConcluido'}>CONCLUÍDO</h2>
        <div className={theme === 'dark' ? 'darkScrollContainer' : 'scrollContainer'}>
          <ul className={theme === 'dark' ? 'darkListCompleted' : 'listCompleted'}>
            {completedItems.map((item) => (
              <li
                key={item.id}
              >
                <Item
                  item={item}
                  deleteItem={deleteItem}
                  markAsBought={markAsBought}
                  editItem={editItem}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div >
  );
};

export default ItemList;
