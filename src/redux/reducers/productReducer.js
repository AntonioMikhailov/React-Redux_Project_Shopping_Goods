import { Actiontypes } from "../constants/action-types";

const initialState = {
   products: []
   }
// деструктурируем action - {type, payload}
export const productReduser = (state=initialState, {type, payload})=> {
  switch (type) {
    case Actiontypes.SET_PRODUCTS: 
    return {...state, products: payload }
     default:
     return state
  }
}
 // для отдельного товара
export const selectedProductReduser = (state={}, {type, payload})=> {
  switch (type) {
    case Actiontypes.SELECTED_PRODUCT: 
   return {...state, ...payload }
    case Actiontypes.REMOVE_SELECTED_PRODUCT: 
    return { }
     default:
     return state
  }

}

 