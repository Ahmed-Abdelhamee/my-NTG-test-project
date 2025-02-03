import { createReducer, on } from "@ngrx/store";
import { add, cartActions, loadApi, loadApiSuccess, remove } from "./actions";
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export const initState ={
    cart : [],
    others : []
}

export const cartReducer = createReducer(initState , 
    on(add, (initState:any, obj) => {
        return {...initState , cart : [...initState.cart,obj]}
    }),
    on(remove, (initState:any, prodId)=>{
        return {...initState , cart : initState.cart.filter((item:any) => item.id != prodId.id)}
    }),

    // handling reducer using   createActionGroup
    on(cartActions.addItem, (initState:any, item)=>{
        return {...initState , cart:[...initState.cart,item]}
    }),

    // on(loadApi,(initState) => {
    //     return initState ;
    // }),

    on(loadApiSuccess , (initState, {users})=>{
        return {...initState , others : users}
    })
)

