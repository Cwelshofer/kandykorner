import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider"
import "./Employee.css"
import { Employee } from "./Employees.js";


export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    
  


    useEffect(() => {
        getEmployees().then(getLocations)
    }, [])

    return (
        <article className="employee">
            {
                employees.map(employee => {
                    const locationss = locations.find(loc => loc.id === employee.locationId) || {}
                    

                    /*
                        {
                            animalKey: {id: 1....}
                            ownerKey: {id: 1....},
                            locationKey: {id: 1....}
                        }
                    */
                    return <Employee key={employee.id} employee={employee} location={locationss} />
                })
            }
        </article>
    )}