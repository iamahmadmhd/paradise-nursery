import products from '../data/products';
import { useCart } from '../context/CartContext';

function ProductPage() {
    const { addToCart } = useCart();
    const categories = [...new Set(products.map(p => p.category))];

    return (
        <div className="p-6">
            {categories.map(category => (
                <section key={category} className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">{category}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {products.filter(p => p.category === category).map(product => (
                            <div key={product.id} className="border p-4 rounded">
                                <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-2" />
                                <h3 className="text-lg font-bold">{product.name}</h3>
                                <p>${product.price.toFixed(2)}</p>
                                <button onClick={() => addToCart(product)} className="mt-2 bg-green-500 text-white px-4 py-1 rounded">Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default ProductPage;