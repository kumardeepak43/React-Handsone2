import React from 'react'
import { useState } from 'react';
import './Form.css'


function Form(){
    const[name,setName] = useState(null);
    const[department,setDepartment] = useState(null);
    const[rating,setRating] = useState(null);
    const [items,setitems]=useState([]);

    const updateName = (event) => {
        setName(event.target.value);
    }
    const updateDepart = (event) => {
        setDepartment(event.target.value);
    }

    const updateRate = (event) => {
        setRating(event.target.value);
    }

    
    const handleSubmit = (event) => {
        event.preventDefault();
        setitems((values)=>{
            return [...values,["Name : ",name, " | " , "Department : " ,department, " | ","Rating : ",rating]]

        })
    }

    return(
        <div className='wrapper'>
            <h1><u>Student Feedback Form</u></h1>
            <form onSubmit={handleSubmit}>
                <label id = "naming">Name:</label>
                <input type = "text" className= "name" value = {name} onChange= {updateName}></input><br></br>
                <label id = "depart">Department:</label>
                <input type = "text" className="dep" value = {department} onChange = {updateDepart}></input><br></br>
                <label id = "rate">Rating:</label>
                <input type = "number" className="rating" value = {rating} onChange = {updateRate}></input><br></br>
                <button id = "fsubmit">Submit</button><br></br>
            </form>
            
            <div className="box">
                {
                items.map((saveValue) => 
                {
                    return <div className="boxItem">{saveValue}</div>
                })
                }    
            </div>

        </div>
    );
}

export default Form