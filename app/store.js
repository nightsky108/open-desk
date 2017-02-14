import {createStore, combineReducers, compose} from 'redux'
import {reduxReactFirebase, firebaseStateReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
  firebase: firebaseStateReducer
})

const createStoreWithFirebase = compose(
    reduxReactFirebase('YOUR_FIREBASE_URL', {userProfile: 'users'}),
)(createStore)

export default initialState => createStoreWithFirebase(rootReducer, initialState)
