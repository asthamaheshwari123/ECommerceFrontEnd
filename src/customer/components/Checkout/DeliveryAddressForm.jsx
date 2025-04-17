import React from 'react';
import {Button, Grid,Box,TextField} from '@mui/material'
import AddressCard from '../AddressCard/AddressCard'


const DeliveryAddressForm=()=>{
     const handleSubmit=(e)=>{
        e.preventDefault();
   const data=new FormData(e.currentTarget);
       const address={
            firstName:data.get("FirstName"),
            lastName:data.get("LastName"),
            streetAddress:data.get("Street"),
            city:data.get("City"),
             state:data.get("State"),
             zipCode:data.get("ZipCode"),
             mobile:data.get("Mobile Number")
         }
        
         console.log("Address",address);
    }
    return(
        <div>
           <Grid container spacing-={4}>
            <Grid xs={12} lg={5}className='border rounded-e-md shadow -md h-[30.5rem] overflow-y-scroll'>
                <div className='p-5 py-7 border-b cursor-pointer'>
                    <AddressCard/>
                    <Button sx={{mt:2, bgcolor:"RGB(145 85 253"}} size='large' variant='contained'>Deliver Here</Button>

                </div>

            </Grid>
            <Grid item xs={12} lg={7}>
                <Box className="border rounded-s-md shadow-md p-5">
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="FirstName" name="FirstName" label="FirstName" fullWidth autoComplete='given-name'/>
                                

                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField required id="LastName" name="LastName" label="LastName" fullWidth autoComplete='given-name'/>
                            </Grid>
                            <Grid item xs={12}>
                            <TextField required id="Address" name="Address" label="Address" fullWidth autoComplete='given-name' multiline rows={4}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField required id="City" name="City" label="City" fullWidth autoComplete='given-name'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField required id="State" name="State" label="State" fullWidth autoComplete='given-name'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField required id="ZipCode" name="ZipCode" label="ZipCode" fullWidth autoComplete='Shipping Postal-Code'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField required id="Phone Number" name="Phone Number" label="Phone Number" fullWidth autoComplete='given-name'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Button sx={{py:1.5,mt:2, bgcolor:"RGB(145 85 253"}} size='large' variant='contained' type="submit">Deliver Here</Button>
                            </Grid>

                        </Grid>
                    </form>
                </Box>

            </Grid>

           </Grid>

                    </div>

        
    )
}

export default DeliveryAddressForm;