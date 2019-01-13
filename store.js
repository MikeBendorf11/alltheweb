import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  name: '',
  modalVisible: false
}

export const actionTypes = {
  CHANGE_MODAL_NAME : "CHANGE_MODAL_NAME",
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch(action.type){
    case actionTypes.CHANGE_MODAL_NAME:
    //console.log(state)
    //console.log(action.payload)

    //this was done by slide before. Avoids caching of the bg loader, so it starts downcounting from 10 again
    if(action.payload !== ''){
      setTimeout(()=>{
        var theIfr = document.querySelector('#ifr');
        //console.log(theIfr)  
        if(theIfr){
          theIfr.style.backgroundImage = `url(static/gifs/loading2.gif?r=${new Date().getTime()})`
        }
      },1000)
    }
    //console.log(state)
      return Object.assign({}, state, {
        name: action.payload,
        modalVisible: !state.modalVisible
      })
      default:
      return state;

  }
}

// ACTIONS
export const changeModalName = name => dispatch =>{
  return dispatch({
    type: actionTypes.CHANGE_MODAL_NAME,
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
