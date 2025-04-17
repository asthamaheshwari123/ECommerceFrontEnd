import axios from 'axios';
import api,{API_BASE_URL} from '../../config/apiConfig';
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from './type';
import { GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS } from '../Cart/ActionType';

export const createOrder =(reqData)=>async(dispatch)=>{
    dispatch({type:CREATE_ORDER_REQUEST});
    try {
        
       
        const {data}=await api.post(`/api/orders`,reqData.address);
        if(data.id){
            reqData.navigate({search:`step=3&order_id=${data.id}`});
        }
        console.log("createdOrder-",data);
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data});
    } catch (error) {
        console.log("catch error -",error);
        dispatch({type:CREATE_ORDER_FAILURE,
            payload:error.message
        })
        
    }
}

export const getOrderBtId=(orderId)=>async(dispatch)=>{
    dispatch({type:GET_CART_REQUEST});
    try {
        const {data}=await api.get(`/api/orders/${orderId}`);
        console.log("order by id",data);
        dispatch({type:GET_CART_SUCCESS,payload:data});
    } catch (error) {
        console.log("catch - ",error);
        dispatch({type:GET_CART_FAILURE,payload:error.message});
    }
}