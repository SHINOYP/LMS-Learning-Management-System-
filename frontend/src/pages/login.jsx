import {useState} from 'react';
import App from '../App';
import {useNavigate} from 'react-router-dom';

const Login=()=>{
    const [email ,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()

        console.log(email,password)
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <h3>Log in</h3>

            <label>Email:</label>
            <input
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
            />
             <label>Password</label>
            <input
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
            />
            <button>Log in</button>

        </form>
    )
}

export default Login;