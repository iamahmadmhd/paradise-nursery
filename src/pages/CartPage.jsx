import { useCart } from '../context/CartSlice';

function CartPage() {
    const { cartItems, updateQuantity, removeItem } = useCart();
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
            {cartItems.length === 0 ? <p>Your cart is empty.</p> : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="flex items-center justify-between border-b py-4">
                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                            <div className="flex-1 ml-4">
                                <h2 className="font-bold">{item.name}</h2>
                                <p>Unit Price: ${item.price.toFixed(2)}</p>
                                <div className="flex items-center mt-2">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2">-</button>
                                    <span className="px-4">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2">+</button>
                                </div>
                            </div>
                            <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                            <button onClick={() => removeItem(item.id)} className="ml-4 text-red-600">Delete</button>
                        </div>
                    ))}
                    <div className="mt-6 text-right">
                        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
                        <div className="mt-4 flex justify-end gap-4">
                            <a href="/products" className="bg-gray-300 px-4 py-2 rounded">Continue Shopping</a>
                            <button className="bg-green-600 text-white px-4 py-2 rounded">Checkout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;