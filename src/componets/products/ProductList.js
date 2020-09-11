import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider";
import "./Product.css"
import { Product } from "./Product.js";
import { ProductTypeContext } from "./ProductTypeProvider.js";

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes} = useContext(ProductTypeContext)


    useEffect(() => {
        getProducts().then(getProductTypes)
    }, [])

    return (
        <article className="products">
            {
                products.map(product => {
                    const productTypess = productTypes.find(pro => pro.id === product.ProductTypeId) || {}
                    

                    /*
                        {
                            animalKey: {id: 1....}
                            ownerKey: {id: 1....},
                            locationKey: {id: 1....}
                        }
                    */
                    return <Product key={product.id} product={product} productType={productTypess} />
                })
            }
        </article>
    )}