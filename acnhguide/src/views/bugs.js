import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "./components/NavBar";

const URL = 'http://acnhapi.com/v1/bugs/'

const BugHorde = () => {
    const [bugsData, setBugsData] = useState([])

    const fetchData = async () => {

        const response = await axios.get(URL)
        setBugsData(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    const renderBody = () => {
        let bugKeys = Object.keys(bugsData);

        bugKeys.forEach( bugkey => {
            console.log(bugsData[bugkey].id)
            console.log(bugsData[bugkey])
            
        // return keys.map((key, index) => {
        //     return <th key={index}>{key.toUpperCase()}</th>
        // })
            return (
            <tr>      
                <td>{bugsData[bugkey].id}</td>
            </tr>
            )
        });
    }

    return (
        <>
        <NavBar />
            {console.log(bugsData)}
            <table id='bugs'>
                <thead><tr><td>bugs</td></tr>
                </thead>
                <tbody>
                    <tr>{renderBody()}</tr>
                    {bugsData.data}
                </tbody>
            </table>
        </>
    );
}

export default BugHorde