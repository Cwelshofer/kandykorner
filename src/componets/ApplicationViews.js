import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import { LocationList } from "./location/LocationList"
import { ProductList } from "./products/ProductList.js"
import { ProductTypeProvider } from "./products/ProductTypeProvider.js"
import { EmployeeList } from "./employees/EmployeeList.js"
import { EmployeeProvider } from "./employees/EmployeeProvider.js"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/locations */}
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <ProductTypeProvider>
                {/* Render the animal list when http://localhost:3000/products */}
                <Route path="/products">
                    <ProductList />
                </Route>
                </ProductTypeProvider>
            </ProductProvider>

            <EmployeeProvider>
                <LocationProvider>
                {/* Render the location list when http://localhost:3000/locations */}
                <Route path="/employees">
                    <EmployeeList />
                </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}