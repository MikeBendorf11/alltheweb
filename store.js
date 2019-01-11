import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  name: ''
}

export const actionTypes = {
  GET_MODAL_NAME : "GET_MODAL_NAME"
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch(action.type){
    case actionTypes.GET_MODAL_NAME:
    //console.log(state)
    console.log(action.payload)
      return Object.assign({}, state, {
        name: action.payload
      })
      default:
      return state;

  }
}

// ACTIONS
export const getModalName = name => dispatch =>{
  return dispatch({
    type: actionTypes.GET_MODAL_NAME,
    payload: name
  });
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
