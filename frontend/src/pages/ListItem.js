import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from '../components/itemForm';
import ItemList from '../components/itemList';
import TropaDoJapaLightLogo from '../images/LogoTropaDoJapaLight.png';
import TropaDoJapaDarkLogo from '../images/LogoTropaDoJapaDark.png';
import '../style/listItem.css'
import { useTheme } from '../hooks/themeContext';
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ListItem = () => {
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState(null);
    const { theme, toggleTheme } = useTheme();
    useEffect(() => {
        fetchItems();
    }, []);
    //console.log(theme);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:4000/');
            setItems(response.data);
            console.log('Itens buscados com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao buscar itens:', error.response ? error.response.data : error.message);
        }
    };

    const addItem = async (item) => {
        try {
            console.log('Enviando item:', item); // Log do item enviado
            const response = await axios.post('http://localhost:4000/', item, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setItems([...items, response.data]);
            console.log('Item adicionado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao adicionar item:', error.response ? error.response.data : error.message);
        }
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/${id}`);
            setItems(items.filter((item) => item.id !== id));
            console.log('Item deletado com sucesso:', id);
        } catch (error) {
            console.error('Erro ao deletar item:', error.response ? error.response.data : error.message);
        }
    };

    const editItem = async (item) => {
        try {
            console.log('Editando item:', item); // Log do item sendo editado
            const response = await axios.put(`http://localhost:4000/${item.id}`, item, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setItems(items.map((i) => (i.id === item.id ? response.data : i)));
            setCurrentItem(null);
            console.log('Item editado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao editar item:', error.response ? error.response.data : error.message);
        }
    };

    const markAsBought = async (id) => {
        try {
            const item = items.find((item) => item.id === id);
            console.log('Marcando como comprado:', item); // Log do item sendo marcado
            const response = await axios.put(`http://localhost:4000/${id}`, { ...item, bought: !item.bought }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setItems(items.map((i) => (i.id === id ? response.data : i)));
            console.log('Item marcado como comprado:', response.data);
        } catch (error) {
            console.error('Erro ao marcar item como comprado:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className={theme === 'dark' ? 'darkListItemContainer' : 'listItemContainer'}>
            <div className={theme === 'dark' ? 'darkDivEsquerda' : 'divEsquerda'}>
                <button onClick={toggleTheme} className={theme === 'dark' ? 'darkButtonTheme' : 'buttonTheme'}>{theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}</button>
                <img className={theme === 'dark' ? 'darkLogo' : 'logo'} src={theme === 'dark' ? TropaDoJapaDarkLogo : TropaDoJapaLightLogo} alt='Logo tropa do Japa' />
                <div className={theme === 'dark' ? 'minhaDark' : 'minha'}>MINHA</div>
                <div className={theme === 'dark' ? 'listaDark' : 'lista'}>LISTA</div>
                <div className={theme === 'dark' ? 'deDark' : 'de'}>DE</div>
                <div className={theme === 'dark' ? 'comprasDark' : 'compras'}>COMPRAS</div>
            </div >
            <div className={theme === 'dark' ? 'darkDivDireita' : 'divDireita'}>
                <ItemForm addItem={addItem} editItem={editItem} currentItem={currentItem} />
                <ItemList items={items} deleteItem={deleteItem} markAsBought={markAsBought} editItem={setCurrentItem} />
            </div>
        </div >
    );
}

export default ListItem;