import { getFeature } from "../../utils/ReturnProductImage";
import { useState } from "react";
import { ProductCart } from "./styles";
import deleteIcon from "../../assets/deleteItem.svg"

export function ProductsInCart(props) {
    const {
        product,
        removeToCart,
        increaseInCart,
        decreaseInCart
    } = props
    
    const [size, setSize] = useState()
    const [color, setColor] = useState()

    let priceProduct = product.quantity * product.price

    return (
        <ProductCart>
            <img src={getFeature(product.feature)} alt="" />
            <span>{product.name}</span>
            <p>R$ {priceProduct.toFixed(2)}</p>
            <div className="options">
                <div >
                    <div>
                        <label for="size"></label>
                        <select value={size} onChange={(e) => { setSize(e.target.value) }}>
                            <option>Tamanho</option>
                            <option>P</option>
                            <option>M</option>
                            <option>G</option>
                            <option>GG</option>
                            <option>XG</option>
                        </select>
                    </div>
                    <div>
                        <label for="color"></label>
                        <select value={color} onChange={(e) => { setColor(e.target.value) }}>
                            <option>Cor</option>
                            <option>Preto</option>
                            <option>Branco</option>
                            <option>Azul</option>
                            <option>Vermelho</option>
                            <option>Cinza</option>
                        </select>
                    </div>
                </div>
                <div className="quantity">
                    <button onClick={() => decreaseInCart(product)} >-</button>
                    <p>{product.quantity}</p>
                    <button onClick={() => increaseInCart(product)} >+</button>

                </div>
                <button className="deleteButton" onClick={() => removeToCart(product)}><img src={deleteIcon} alt="Botão lixeira" /></button>
            </div>
        </ProductCart>
    )
}