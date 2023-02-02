import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import{useLogin} from '../hooks/useLogin';




const Login=()=>{
    const [email ,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const  {login,error,isLoading} =useLogin()
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault()

        await login(email,password)
        navigate("/Dashboard")

        
    }
    
    return(
        <div className="login text-white flex flex-col items-center justify-center ">
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <h3 className='mx-auto mb-14 font-medium text-4xl'>Log in</h3>
            
                <label className=' mb-2'>Email:</label>
                <input
                    placeholder="   you@example.com"
                    className='field peer bg-black border rounded-xl border-slate-600 '
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />
                <p className="mt-2 invisible peer-invalid:visible  text-pink-600 text-sm">
                Please provide a valid email address.
                </p>
            
            
                <label className='mt-4 mb-2'>Password</label>
                <input
                    placeholder="  *************"
                    className='field bg-black rounded-xl border border-slate-600 '
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
                
            <button disabled={isLoading} className='bg-sky-600 hover:bg-sky-400 rounded-xl mt-10 ml-2 text-white text-xl' style={{width:'390px' ,height:'58px'}}>Log in</button>
            {error && <div>{error}</div>}

        </form>
        <span className='mt-10'>Don't have an account? <Link to={'/Signup'} className="text-blue-400">Sign Up</Link></span>
        </div>
    )
}

export default Login;