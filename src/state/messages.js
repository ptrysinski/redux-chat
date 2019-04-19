import {database} from '../firebaseConf'

const SET = 'message/SET'
const NEW_TEXT_CHANGED = 'message/NEW_TEXT_CHANGED'

const mapObjectToArray = (obj) => (
    Object.entries(obj || {})
      .map(([key, value]) => (
        typeof value === 'object' ?
          {...value, key}
          :
          {key, value}
      ))
  )

export const addMessageAsyncActionCreator = () => (dispatch, getState) => {
    const state = getState()
    database.ref('JFDDL7/chat').push({text: state.messages.newMessageText})
}



export const startListeningMessagesAsyncActionCreator = () => (dispatch, getState) => {
    database.ref('JFDDL7/chat').on(
        'value',
        (snapshot) => {
           dispatch(setMessageActionCreator(mapObjectToArray(snapshot.val()))) 
        }
    )
}

export const newTextChangedActionCreator = newMessageText => ({
    type: NEW_TEXT_CHANGED,
    newMessageText
})


export const setMessageActionCreator = messages => ({
    type: SET,
    messages,
})

const initialState = {
    messages: [],
    newMessageText: '',
}

export default (state=initialState, action) => {
    switch(action.type){
        case NEW_TEXT_CHANGED:
        return {
            ...state,
            newMessageText: action.newMessageText,
        }
        case SET:
        return{
            ...state,
            newMessageText: '',
            messages: action.messages,
        }

        default:
            return state
    }
    
    
}
    

