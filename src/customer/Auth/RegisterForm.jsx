import React from 'react';
import {Grid,TextField,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser, register } from '../../state/Auth/Action';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const RegisterForm=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    const {auth} =useSelector(store=>store)
    useEffect(()=>{
        if(jwt){
        dispatch(getUser(jwt))
        }
    },[jwt],auth.jwt)
    
    const handleSumbit=(event)=>{
        event.preventDefault()
        const data=new FormData(event.currentTarget)

        const userData={
            firstName:data.get('firstName'),
            lastName:data.get('lastName'),
            email:data.get('email'),
            password:data.get('password')
        }
        dispatch(register(userData))
        console.log("userData",userData)

    }
    return(
        <div>
            <form onSumbit={handleSumbit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        id='firstName'
                        name='firstName'
                        label="FirstName"
                        fullWidth
                        autoComplete='givenName'/>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        id='lastName'
                        name='lastName'
                        label="LastName"
                        fullWidth
                        autoComplete='givenName'/>

                    </Grid>
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
                        sx={{padding:"0.8rem 0rem",bgcolor:"#9155FD"}}>Register</Button>

                    </Grid>
                    

                    </Grid>

            </form>
            <div className='flex justify-center flex-col items-center'>
               <div className='py-3 flex items-center'><p>If you have already account ?</p>
               <Button onClick={()=>navigate("/login")} className='ml-5' size='small'>Login</Button></div> 
            </div>
        </div>
    )
}
export default RegisterForm;