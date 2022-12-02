import { CartContainer } from "./styles";
import { ProductsInCart } from "../../Components/ProductsInCart/ProductsInCart";


export function ShoppingCart(props) {
    const {cart} = props
    
    return (
        <CartContainer>
            <h2>Meu Carrinho</h2>
            <hr/>
            
            <span>Total: R$ </span>
            <section className="products-shopping-cart">
                {cart.map((product)=>{
                    return <ProductsInCart key={product.id} product={product} />
                })}
            </section>
            
        </CartContainer>
    )
}