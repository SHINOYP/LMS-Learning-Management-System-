import {useState} from 'react';
import {useSignup} from '../hooks/useSignup';
import { Link ,Navigate} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Signup=()=>{
    const [email ,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {signup,error,isLoading}= useSignup();
    const {user}=useAuthContext();

    const handleSubmit=async(e)=>{
        e.preventDefault()

        await signup(email,password)
    }
    return(
        <div className="login text-white flex items-center justify-center ">
        {user && (
          <Navigate to="/login" replace={true} />
        )}
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <h3 className='mx-auto mb-14 font-medium text-4xl'>Sign Up</h3>
            
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
                
            <button disabled={isLoading} className='bg-sky-600 hover:bg-sky-400 rounded-xl mt-10 ml-2 text-white text-xl' style={{width:'390px' ,height:'58px'}}>Signup</button>
            {error && <div>{error}</div>}
            <span className='mt-10 mx-auto'> Have an account ! <Link to={'/login'} className="text-blue-400">Sign Up</Link></span>
        </form>

        </div>
    )
}

export default Signup;

