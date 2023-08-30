import React from "react";
import axios from "axios";
import './dashboard.css'
import { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Dashboard(){
    const {s_no}=useParams()
    const [name,SetName]=useState('')
    const [department,SetDepartment]=useState('')
    const [phone,SetPhone]=useState('')
    const [email,setEmail]=useState('')

    useEffect(()=>{
        fetch("http://localhost:3002/getdata/"+s_no)
        .then(res=>res.json())
        .then((data)=>{
            SetName(data[0].name)
            SetDepartment(data[0].department)
            SetPhone(data[0].phonehone)
            setEmail(data[0].email)
        })
    },[ ])
    
    
    return(
        <>
        <div className="bgimg text-center  ">
            <h3 className="pt-20">Dashboard</h3>
            <div className="bgcolor col-lg-12 mx-auto p-5">
             <h1> Welcome Mr/Miss {name} </h1>
             {/* <p><pre className="textsize p-5">Your Login Page <pre> Completed    Successfully</pre><pre>Thank you !</pre></p>
            </pre><p/> */}
            <p className="textsize">Your Login Page<br/>
            Completed    Successfully<br/> 
            Thank you !</p>
        <Link to='/Login' ><button className="btn btn-dark btn border border-radious button">Logout</button></Link>
            </div>
        </div>
        </>
    );
}