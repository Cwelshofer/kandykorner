import React from "react"
import "./Product.css"
import { ProductTypeContext } from "./ProductTypeProvider"

export const Product = ({ product, productType }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <address className="product__price">Price:{product.price}</address>
        <div className="product__type">Product Type: {productType.name} </div>
    </section>
)