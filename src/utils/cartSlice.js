import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    //reducers is take mutiple small reducer fnction
    reducers : {
        //muteting the state here
        /**
         * 
         *action : {
            payload : "pizza"
         }
         */

         /**
          * 
          * vanilla(older) Redux => Dont Mutate State returning was mandatory
          * 
          * const newState = [...state]
          * newState.items.push(action.payload)
          * return newState
          * 
          * 
          */

        addItem : (state , action)=>{

            //redux behind the seen used--> Immer library --> basically find diff between older state and new state and make change behind
            // the scene redux used immutable like earlier older version do but for developer not think about it
            state.items.push(action.payload)
        },
        removeItem : (state)=>{
            state.items.pop()
        },
        clearCart : (state)=>{
            state.items.length = 0
        }
    }
})

/**
 * craeteSlice is return
 * {
 *   actions : {
 *       addItem : "",
 *       removeItem : ""
 * } ,
 *   reducer
 * }
 */

export const {addItem , removeItem , clearCart} = cartSlice.actions

//reducer i sbasically combination of this small reducers function
export default cartSlice.reducer