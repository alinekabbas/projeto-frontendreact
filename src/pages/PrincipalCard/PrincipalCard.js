import { useState } from "react";
import { MainCard, Buying } from "./styles";
import { ProductsCard } from "../../Components/ProductsCard/ProductsCard";
import { Filters } from "../../Components/Filters/Filters"
import products from "../../assets/products.json"


export function PrincipalCard(props) {
    const [search, setSearch] = useState("")
    const [minPrice, setMinPrice] = useState(-Infinity)
    const [maxPrice, setMaxPrice] = useState(Infinity)
    const [order, setOrder] = useState("")

    const {addToCart}=props
    
    
    return (
        <>
            
            <Buying>
                <h3>Como comprar sua camiseta personalizada?</h3>
                <span>1º: Escolha sua estampa 2º: Adicione ao carrinho 3º: Escolha a cor e o  tamanho da sua camiseta</span>
            </Buying>

            <Filters
                search={search}
                setSearch={setSearch}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                order={order}
                setOrder={setOrder}
            />

            <MainCard>

                <section className="products-card-principal">
                    {products
                        .filter((product) => {
                            return product.name.toLowerCase().includes(search.toLowerCase())
                        })
                        .filter((product) => {
                            return product.price >= minPrice || minPrice === ""
                        })
                        .filter((product) => {
                            return product.price <= maxPrice || maxPrice === ""
                        })
                        .sort((a, b) => {
                            if (order === "asc") {
                                if (a.name > b.name) {
                                    return 0
                                } else {
                                    return -1
                                }
                            } else if (order === "desc") {
                                if (a.name < b.name) {
                                    return 0
                                } else {
                                    return -1
                                }
                            }
                        })
                        .sort((a, b) => {
                            if (order === "priceMin") {
                                if (a.price > b.price) {
                                    return 0
                                } else {
                                    return -1
                                }
                            } else if (order === "priceMax") {
                                if (a.price < b.price) {
                                    return 0
                                } else {
                                    return -1
                                }
                            }
                        })
                        .map((product) => {
                            return <ProductsCard key={product.id} product={product} addToCart={addToCart} />
                        })
                    }
                </section>
                
            </MainCard>
        </>
    )
}