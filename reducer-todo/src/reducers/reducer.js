import { useState } from 'react'

export const initialState = [{ 
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]
export function reducer(state, action) {
    switch(action.type){
        case "ADD_ITEM":
            return [{
                ...state,
                item: action.payload,
                completed: false,
                id: Date.now()
            }]
        default: return state;
    }
}
