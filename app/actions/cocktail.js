import { SET_SELECTED_ALCOHOLS, SET_FETCHED_COCKTAILS} from './types'
import Api from '../lib/api'

export function searchCocktails(alcohols) {
    return (dispatch, getState) => {
		//const params = 
		return Api.post('/cocktails', {alcohols: alcohols})
			.then(resp => {
				dispatch(setSearhedCocktails({cocktails: resp.cocktails}));
			}).catch( (err) => {
				console.log('err is', err);
			});
    }
}

export function setSelectedAlcohols(alcohols) {
    return {
        type: SET_SELECTED_ALCOHOLS,
        alcohols,
    }
}

export function setSearhedCocktails({ cocktails }) {
    return {
        type: types.SET_FETCHED_COCKTAILS,
        cocktails,
    }
}