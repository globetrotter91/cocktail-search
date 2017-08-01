import createReducer from '../lib/createReducer'
import { SET_SELECTED_ALCOHOLS, SET_FETCHED_COCKTAILS } from '../actions/types'
const initialState = {
    selectedAlcohols: [], 
    listOfCocktails: []
}

export default (state = initialState, action={}) => {
    switch(action.type){
        case SET_SELECTED_ALCOHOLS:
            return {
                selectedAlcohols: action.alcohols
            }
        case SET_FETCHED_COCKTAILS:
            return {
                listOfCocktails: action.cocktails
            }
        default: return state;
    }
}

