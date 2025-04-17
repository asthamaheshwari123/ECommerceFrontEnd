import React from 'react';
import {Grid,TextField,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../state/Auth/Action';
import { useEffect } from 'react';
const LoginForm=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    // useEffect(()=>{
    //     if(jwt){
    //     dispatch(getUser(jwt))
    //     }
    // },[jwt],auth.jwt)
    const handleSumbit=(event)=>{
        event.preventDefault()
        const data=new FormData(event.currentTarget)

        const userData={
            email:data.get('email'),
            password:data.get('password')
        }
        dispatch(login(userData))
        console.log("userData",userData)

    }
    return(
        <div>
            <form onSumbit={handleSumbit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <TextField
                        required
                        id='email'
                        name='email'
                        label="Email"
                        fullWidth
                        autoComplete='email'/>

                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                        required
                        id='password'
                        name='password'
                        label="Password"
                        fullWidth
                        autoComplete='password'/>

                    </Grid>
                    <Grid item xs={12}>
                        <Button className="bg-[#9155FD] w-full" type='sumbit'
                        variant='contained' size='large'
                        sx={{padding:"0.8rem 0rem",bgcolor:"#9155FD"}}>Login</Button>

                    </Grid>
                    

                    </Grid>

            </form>
            <div className='flex justify-center flex-col items-center'>
               <div className='py-3 flex items-center'><p>If you have don't have account ?</p>
               <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Register</Button></div> 
            </div>
        </div>
    )
}
export default LoginForm;