import React from 'react';
import {Grid} from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard=()=>{
    return(
        <div className=' mt-5 p-5 shadow-md shadow-black hover:shadow-2xl shadow-black border'>
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer mt-5'>
                       <img className='w-[5rem] h-[5rem] object-cover object-top'src="https://www.jiomart.com/images/product/original/rvepmdzovq/fabflee-women-red-printed-georgette-a-line-dress-red-product-images-rvepmdzovq-0-202301112214.jpg?im=Resize=(500,630)" alt=""></img>
                       <div className='ml-5 space-y-2'>
                        <p className=''>
                            Women Georgette Printed A-line Dress
                        </p>
                        <p className='opacity-50 text-xs font-semibold '>Free Size</p>
                        <p className='opacity-50 text-xs font-semibold '>Color:MultiColor</p>
                       </div>
                    </div>
                </Grid>
                <Grid item xs={2} >
                   <p className='mt-5'>₹1099</p> 

                </Grid>
                <Grid item xs={4} >
                   {true && <div>
                    <p className='mt-5'>
                    <AdjustIcon sx={{ width:"15 px",height:"15 px"}} className='text-green-600 mr-2 text-sm'/>
                        <span>
                            Delivered on April 1,2024
                        </span>
                    </p>
                    <p className='text-xs'>Your item has been delivered.</p>
                    </div>}
                   {false && <p>
                        <span>
                            Expected Delivery on April 1,2024
                        </span>
                    </p>}

                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard;