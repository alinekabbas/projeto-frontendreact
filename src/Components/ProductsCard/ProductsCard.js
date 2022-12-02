import { Card } from "./styles";
import { getFeature } from "../../utils/ReturnProductImage";

export function ProductsCard(props) {
    const { product, addToCart } = props
    return (
        <Card>
            <img src={getFeature(product.feature)} alt="" />
            <span>{product.name}</span>
            <p>R$ {product.price.toFixed(2)}</p>
            <button onClick={()=>addToCart(product)}>Adicionar ao carrinho</button>
        </Card>
    )
}