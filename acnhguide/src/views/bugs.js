import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "./components/NavBar";

const URL = 'http://acnhapi.com/v1/bugs/'

const BugHorde = () => {
    const [bugsData, setBugsData] = useState([])
    const [bugData, setBugData] = useState([])

    const fetchData = async () => {
        try {
        const response = await axios.get(URL)
        setBugsData(response.data)
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    const renderHeading = () => {
        // return bugsData.map((bug, index) => {
        //         return <th key={index}>{bug.toUpperCase()}</th>
        //     })
    }





    const renderBody = () => {
        if(!bugsData){
            return(   
                    <td>sup</td>
            )
        }
        else{
            let bugKeys = Object.keys(bugsData);
            
            bugKeys.forEach( bugkey => {
            // console.log(bugsData[bugkey].id)
             console.log(bugsData[bugkey])
            });
        }
            
    }


    return (

        <>
        <NavBar />
            {console.log(bugsData)}
            <table id='bugs'>
                <thead><tr><td>{renderHeading()}</td></tr>
                </thead>
                <tbody>
                    <tr>{renderBody()}</tr>
                </tbody>
            </table>
        </>
    );
}

export default BugHorde