import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'http://acnhapi.com/v1/bugs/'

const BugHorde = () => {
    const [employees, setEmployees] = useState([])

   
    const fetchData = async () => {

        const response = await axios.get(URL)
        setEmployees(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const renderHeader = () => {
        let headerElement = ['id', 'name', 'email', 'phone', 'operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return employees && employees.map(({ id, name, email, phone }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                </tr>
            )
        })
    }

    return (
        <>
            <h1 id='title'>React Table</h1>
            <table id='employee'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}


export default BugHorde