function ProductList({products, addToCart}) {
    return (
        <div>
            {products.map(p =>(
                <div key={p.id}>
                    <span> {p.name} - ${p.price}</span>
                    <button onClick={()=> addToCart(p)}> Add to cart </button>
                </div>
            ))}
        </div>
    );
}
export default ProductList;