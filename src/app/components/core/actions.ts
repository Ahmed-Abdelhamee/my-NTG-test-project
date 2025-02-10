import { createAction, createActionGroup, props } from "@ngrx/store";

export const cartActions = createActionGroup({
    source:"cart",
    events: {
        'add item': props<{obj:any}>(),
        'remove item': props<{prodID:any}>()
    }
})

export const add = createAction("Add" , props<{obj:any}>());
export const remove = createAction("Remove" , props<{id:number}>());


export const loadApi = createAction('loadApi')
export const loadApiSuccess = createAction('load Api Success', props<{users:any}>())