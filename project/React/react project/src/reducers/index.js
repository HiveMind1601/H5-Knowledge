
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import reducer from './counter'

export default combineReducers({
    reducer,
    form: formReducer
})