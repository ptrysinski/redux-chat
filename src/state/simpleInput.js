const CHANGE = 'message/CHANGE'

export const changeActionCreator = (newValue) => ({
    type: CHANGE,
    newValue,
})

const initialState = {
    value: '',
}

export default (state=initialState, action) => {
    switch(action.type){
        case CHANGE:
        return {
            ...state,
            value: action.newValue,
        }

        default:
            return state
    }
    
    
}