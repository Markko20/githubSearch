import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { IRepo } from '../../models/models'

const LS_FAVORITE_KEY = 'rfc'

interface GithubState {
	favorites: IRepo[]
}

const initialState: GithubState = {
	favorites: JSON.parse(localStorage.getItem(LS_FAVORITE_KEY) ?? '[]') 
}

export const githubSlice = createSlice({
	name: 'github',
	initialState,
	reducers: {

		addFavorite: (state, action: PayloadAction<IRepo>) => {
			state.favorites.push(action.payload)
			localStorage.setItem(LS_FAVORITE_KEY, JSON.stringify(state.favorites))
		},

		removeFavorite(state, action: PayloadAction<IRepo>) {
			state.favorites = state.favorites.filter(f => f.id !== action.payload.id)
			localStorage.setItem(LS_FAVORITE_KEY, JSON.stringify(state.favorites))
		}
	}
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer