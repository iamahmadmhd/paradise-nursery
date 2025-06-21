import { Link } from 'react-router-dom';
import { useCart } from '../context/CartSlice';
import { ShoppingCart } from 'lucide-react';

function Header() {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="flex justify-between items-center p-4 bg-green-100">
            <Link to="/" className="text-xl font-bold">Paradise Nursery</Link>
            <nav className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/products">Shop</Link>
                <Link to="/cart" className="relative">
                    <ShoppingCart />
                    <span className="absolute -top-2 -right-2 text-sm bg-red-500 text-white rounded-full px-2">{totalItems}</span>
                </Link>
            </nav>
        </header>
    );
}

export default Header;