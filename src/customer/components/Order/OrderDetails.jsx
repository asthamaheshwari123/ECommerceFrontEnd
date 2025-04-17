import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';
import { Grid,Box} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import { deepPurple } from '@mui/material/colors';

const OrderDetails = () => {
    return (
        <div className=' px:5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl mt-5 py-7'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>
            <Grid className='space-y-5' container>
                {[1,1,1,1,1].map((item)=> <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "cnter", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className='flex items-center space-x-4'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top'src='https://m.media-amazon.com/images/I/81iFlk9pdmL._AC_UF894,1000_QL80_.jpg' alt=''/>
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>Women's Floral Puff Sleeve Shirt Dress</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color : Red </span><span>Size : Free</span></p>
                            <p>Seller:DUNBRI</p>
                            <p>₹1099</p>

                        </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <Box sx={{color:deepPurple[500] }} className='mt-10'>
                            <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
                            <span>Rate & Review Product</span>
                        </Box>

                    </Grid>


                </Grid>)}
               

            </Grid>

        </div>
    )
}

export default OrderDetails;