import React, { useState, useEffect } from 'react';
import { createItem, getAllItems, updateItem, deleteItem, getInventoryStock } from './apiService';

const InventoryManagement = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', category: '', quantity: 0, status: '' });
    const [totalStock, setTotalStock] = useState(0);

    useEffect(() => {
        fetchItems();
        fetchStock();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await getAllItems();
            setItems(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchStock = async () => {
        try {
            const response = await getInventoryStock();
            setTotalStock(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleCreateItem = async () => {
        try {
            await createItem(newItem);
            fetchItems();
            fetchStock();
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdateItem = async (id) => {
        try {
            const updatedItem = items.find(item => item.id === id);
            await updateItem(id, updatedItem);
            fetchItems();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            await deleteItem(id);
            fetchItems();
            fetchStock();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Inventory Management</h2>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Item Name"
                    value={newItem.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={newItem.category}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={newItem.quantity}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="status"
                    placeholder="Status"
                    value={newItem.status}
                    onChange={handleInputChange}
                />
                <button onClick={handleCreateItem}>Add Item</button>
            </div>
            <h3>Total Stock: {totalStock}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.quantity}</td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={() => handleUpdateItem(item.id)}>Update</button>
                                <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryManagement;
