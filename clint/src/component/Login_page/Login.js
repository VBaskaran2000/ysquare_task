import React from "react";
import axios from "axios";
export function Login(){
    function handlelogin (event){
        event.preventDefault();
        var username=document.getElementById("username").value
        // alert(username)
        var password=document.getElementById("password").value
        var key={
            username:username,
            password:password
        }
        
        if(username===''){
            alert("name is empty")
        }
        else if(password===''){
        alert("enter the password")
       }
        else{
            axios.post("http://localhost:3002/login",key)
            .then(function(res){
                if(res.data.status==="success"){
                    let s_no=res.data.s_no
                    let department=res.data.department
                    window.location.href=`/dashboard/${s_no}`
                }
                else if(res.data.status==="invalid-user"){
                    alert("please check the login details")
                }
                else if(res.data.status==='emailerror'){
                    alert("please check you email")
                }
            })
        }
    }
      
    
    return(
        <>
        <div className=" regbg ">
           
            <div className="text-center bg-white col-lg-12  mx-auto my-auto bgcolor">
                 <h1>login  Form</h1>
                 <form onSubmit={handlelogin} className="reg_form mb-5 ">
                    <input type="text" name="username" id="username" placeholder="enter the username" className="mb-3  col-12 col-lg-7 col-md-5" /> <br/>
                    <input type="password" name="password" className="mb-3 col-12 col-lg-7 col-md-5"  id="password" placeholder="enter the password" /> <br/>
                    <button type="submit" className="mb-3 col-12 col-lg-7 col-md-5 btn btn-info">submit</button>
                </form>
            </div>
        </div>
        </>
    );
}
