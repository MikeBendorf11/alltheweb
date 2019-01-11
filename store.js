import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  modalId: ''
}

export const actionTypes = {
  GET_MODAL_ID : "GET_MODAL_ID"
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch(action.type){
    case actionTypes.GET_MODAL_ID:
      return Object.assign({

      })
      default:
      return state;

  }
}

// ACTIONS
export const getModalId = () => dispatch =>{
  return dispatch({type: actionTypes.GET_MODAL_ID});
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
