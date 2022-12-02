import { getFeature } from "../../utils/ReturnProductImage";
import { useState } from "react";
import { CartContainer, ProductCart } from "./styles";

export function ProductsInCart(props) {
    const { product } = props
    const [size, setSize] = useState()
    const [color, setColor] = useState()

    return (
        <CartContainer>
            <ProductCart>
                <img src={getFeature(product.feature)} alt="" />
                <span>{product.name}</span>
                <p>R$ {product.price.toFixed(2)}</p>
            </ProductCart>
            <div className="options">
                <div>
                    <span>
                        <label for="size"></label>
                        <select value={size} onChange={(e) => { setSize(e.target.value) }}>
                            <option>Tamanho</option>
                            <option>P</option>
                            <option>M</option>
                            <option>G</option>
                            <option>GG</option>
                            <option>XG</option>
                        </select>
                    </span>
                    <span>
                        <label for="color"></label>
                        <select value={color} onChange={(e) => { setColor(e.target.value) }}>
                            <option>Cor</option>
                            <option>Preto</option>
                            <option>Branco</option>
                            <option>Azul</option>
                            <option>Vermelho</option>
                            <option>Cinza</option>
                        </select>
                    </span>
                </div>
                <div className="quantity">
                    <button>+</button>
                    <button>-</button>
                    <span>Quantidade:</span>
                </div>
                <button>Remover</button>
            </div>



        </CartContainer>
    )
}