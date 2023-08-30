import React from "react";
import './reg.css';
import axios from "axios";
import { Link } from "react-router-dom";
export function Registration(){
    function handlesignup(event){
        event.preventDefault();
        
        var name=document.getElementById("name").value
        var department=document.getElementById("Department").value
        var phone=document.getElementById("phone").value
        var email=document.getElementById("email").value
        var password=document.getElementById("password").value
        var key={
           
            name:name,
            phone:phone,
            department:department,
            email:email,
            password:password
        }
        
         if(name===''){
            alert("name is empty")
        }
        else if(phone===''){
            alert("phone is empty")
        }
        else if(email===''){
            alert("email is empty")
        }
       else if(password===''){
        alert("enter the password")
       }
       else{
        axios.post("http://localhost:3002/regis",key)
        .then(function(res){
            if(res.data.status==="error"){
                alert("your data is not inserted")
            }
            else if(res.data.status==="success"){
                alert("data are inserted")
                window.location.href='/login'
            }
        })
    }
}

    return(
        <>
        <div className=" bgcolor p-5 ">
           
            <div className="text-center bg-white bgcolor ">
                 <h1 className="mb-5 ">Registration Form</h1>
                 <form onSubmit={handlesignup} className="reg_form">
                    

                    <input type="text" name="name" id="name" placeholder="enter the name" className="mb-3  col-12 col-lg-7 col-md-5" /> <br/>
                        <div>
                            <select className="col-7" id="Department" name="department">
                            <option>Select the Department</option>
                            <option value="Full Stock Developer"> Full Stock Developer</option>
                            <option value="Front End Developer"> Front End Developer</option>
                            <option value="Back End Developer">Back End Developer</option>
                            <option value="Tester">Tester</option>
                            <option value="UI & UX Designer">UI & UX Designer</option>
                            <option value="Manager">Manager</option>
                            <option value="Team Leader">Team Leader</option>
                            </select>
                        </div> <br />
                    <input type="text" name="phone" id="phone" className="mb-3  col-12 col-lg-7 col-md-5"  placeholder="enter the phone" /><br/>
                    <input type="email" name="email" id="email" className="mb-3  col-12 col-lg-7 col-md-5"  placeholder="enter the email" /><br/>
                    <input type="password" name="password" className="mb-3 col-12 col-lg-7 col-md-5"  id="password" placeholder="enter the password" /> <br/>
                    <button type="submit" className="mb-3 col-12 col-lg-7 col-md-5 btn btn-success">submit</button>
                    <p>or</p>
                    <Link to="/login" className="mb-3 col-12 col-lg-7 col-md-5 btn btn-info">login</Link>
                </form>
            </div>
        </div>
        </>
    );
}
