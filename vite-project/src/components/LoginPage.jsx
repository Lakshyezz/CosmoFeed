import { useState } from "react"
import Space from "./Space";
import HomePage from "./HomePage";
import { Login } from "../data";
// import HomePage from "./HomePage";


const LoginPage = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [user, setUser] = useState(false)
    console.log(localStorage.getItem('user'));
  return (
    
     (!localStorage.getItem('user')? <div>
        <h1>Enter Details</h1>
        <Space/>
        <input
        value={email}
         placeholder="email" onChange={
            (e)=> setEmail(e.target.value)
            }
            />
        <Space/>
        <input
        value={password}
         placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        <Space/>
        <button onClick={()=>{
            // if(email !== '' && password !== ''){
            //     alert('credentials entered');
                
            // }else{
            //     alert("put details first");
            // }
            if(Login(email, password)){
                localStorage.setItem("user" , true)
                window.location.reload();
            }else alert("Wrong Credential")
        }}>Submit</button>
    </div>: <HomePage />) 
  )
}

export default LoginPage