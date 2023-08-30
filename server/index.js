const express =require ('express')
const cors =require ('cors')
const bodyparser =require ('body-parser')
const mysql =require ('mysql')
const add =express()
add.use(cors())
add.use(bodyparser.json())
add.use (express())
add.use(bodyparser.urlencoded({extended:true}))
add.use(express.static('public'))
let con=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"baskerhema@123",
    database:"ysquare__task"
})
con.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("database is connected")
    }
    })

add.post('/regis',(request,response)=>{
    let {name,department,phone,email,password}=request.body
    let sql='insert into reg_table (name,department,phone,email,username,password) values (?,?,?,?,?,?)'
    con.query(sql,[name,department,phone,email,email,password],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            }
            else{
                response.send({"status":"success"})
            }
        }
      )
    })

    add.post('/login',(request,response)=>{
        let {username,password}=request.body
        let sql='select * from reg_table where username=?'
        con.query(sql,[username],(error,result)=>{
            if(error){
                response.send({"status":"error"})
                
                }
                else if(result.length>0){
                    let username1=result[0].username
                    let password1=result[0].password
                    let department=[0].department
                    let s_no=result[0].s_no
                if (username1===username && password1===password){
                    response.send({"status":"success","department":department,"s_no":s_no})
                }
                else{
                    response.send({"status":"invalid-user"})
                }
                }
            else{
                response.send({"status":"emailerror"})
            }   
            }
            )
        })

    add.get('/getdata/:s_no',(request,response)=>{
        let{s_no}=request.params
        let sql='select * from reg_table where s_no=?'
        con.query(sql,[s_no],(error,result)=>{
            if(error){
                response.send(error)
            }
            else{
                response.send(result)
            }
        })
    })

    add.listen(3002,()=>{
        console.log("port in running in 3002")
    })