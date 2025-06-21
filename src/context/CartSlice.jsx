import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (product) => {
        setCartItems((prev) => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, quantity) => {
        setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item).filter(item => item.quantity > 0));
    };
    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addItem, updateQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);