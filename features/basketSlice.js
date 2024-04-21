import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

// export interface basketSlice {
//   value: number
// }

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
        // Check if total items would exceed the limit after adding
        if (state.items.length < 20) {
            state.items.push(action.payload);
          } else {
            console.warn('Basket limit reached! Cannot add more items.');
          }
    },
    removeFromBasket: (state,action) => {
     const index =state.items.findIndex((item)=>item.id===action.payload.id);
     let newBasket  =[...state.items];
     if(index>=0){
        newBasket.splice(index,1);
     } else {
        console.warn(
            `cant remove product (id: ${action.payload.id} as its not in basket!`
        );
     }
     state.items=newBasket;
    },
},
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems=(state)=>state.basket.items;

export const selectBasketItemsWithId=(state,id)=> state.basket.items.filter(item=>item.id===id);

export const selectBasketTotal =(state)=>state.basket.items.reduce((total,item)=>
total+=item.price,0)

export default basketSlice.reducer