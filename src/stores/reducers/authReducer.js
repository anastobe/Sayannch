const initialState = {
    isLoading: false,
    token: null,
    users: ""
}

export const auth = (state = initialState, action) => {
    const { payload } = action
    
    switch (action.type) {
        case "LOGIN_PROCESSING": {
            return {
                ...state,
                
            }
        }
        case "LOGIN_PROCESSED": {
            return {
                ...state,
                
                users:payload
            }
        }
        case "LOG_OUT": {
            return {
                ...initialState

                
                
            }
        }
        case 'LOGOUT_PROCESSED': {
            return {
        ...initialState

            }
        }
         case 'CLEAR_PROCESSING': {
            return {
                ...state,
            }
        }

        // case "LOGOUT_PROCESSED": {
        //     return initialState
        // }

        default:
            return state
    }
}

export default auth
