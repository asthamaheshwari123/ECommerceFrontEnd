import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const CartItem=()=>{
    return(
        <div className="p-5 shadow-lg border rounded-md">
            <div className='flex item-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className="w-full h-full object-over object-top"src="https://www.jiomart.com/images/product/original/rvepmdzovq/fabflee-women-red-printed-georgette-a-line-dress-red-product-images-rvepmdzovq-0-202301112214.jpg?im=Resize=(500,630)" alt=""></img>

                </div>
                <div clssName="ml-5 space-y-1">
                    <p className="font-semi-bold ml-6">Women Georgette Printed A-line Dress</p>
                    <p className="opacity-70 ml-6">Size:Free,MultiColor</p>
                    <p className="opacity-70 mt-2 ml-6">Seller:Fabble</p>
                    <div className='flex space-x-5 items-center  text-gray-900 pt-6 ml-6'>
            <p className='font-semibold'>₹199
               
            </p>
            <p className='opacity-50 line-through'>₹211</p>
            <p className='text-green-600 font-semibold'>5% Off</p>
            </div>
                </div>
            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2">
                    <IconButton>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <span className="py-1 px-7 border rounded-sm">3 </span>
                    <IconButton sx={{color:"RGB(145 85 253)"}}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                   
                </div>

                <div>
                   <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
                </div>

            </div>
        </div>
    )
}

export default CartItem;