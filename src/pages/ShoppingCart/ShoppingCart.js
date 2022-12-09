import { CartContainer, Buying, TotalPrice } from "./styles";
import { ProductsInCart } from "../../Components/ProductsInCart/ProductsInCart";


export function ShoppingCart(props) {
    const {
        cart,
        cartItens,
        removeToCart,
        increaseInCart,
        decreaseInCart,
        goToPrincipalCard
    } = props

    let totalPrice = 0
    cart.map((item) => (totalPrice = totalPrice + item.price * item.quantity))

    return (
        <>
            <Buying>
                <h3>Como comprar sua camiseta personalizada?</h3>
                <span>1º: Escolha sua estampa 2º: Adicione ao carrinho 3º: Escolha a cor e o  tamanho da sua camiseta</span>
            </Buying>

            <TotalPrice>
                <h2>Meu Carrinho</h2>

                <span>Total: R$ {totalPrice.toFixed(2)} </span>
                <div className="totalPriceButtons">
                    {cartItens >= 1 && <button onClick={goToPrincipalCard} >Continuar comprando</button> } 
                    {cartItens >= 1 && <button onClick={()=>window.alert("Compra finalizada com sucesso!")} >Finalizar compra</button>}
                </div>
            </TotalPrice>

            <CartContainer>

                <section className="products-shopping-cart">
                    {cart.map((product) => {
                        return <ProductsInCart
                            key={product.id}
                            product={product}
                            removeToCart={removeToCart}
                            increaseInCart={increaseInCart}
                            decreaseInCart={decreaseInCart}
                        />
                    })}
                </section>

            </CartContainer>
        </>
    )
}