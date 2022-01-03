const initialState = {
    settings: [],
    isLoading: false
  }
  
  export const appSettings = (state = initialState, action) => {
    const { payload } = action
    switch (action.type) {
      case 'FETCH_APP_SETTING_REQUEST':
        return {
          ...state,
          isLoading: true
        }
  
      case 'FETCH_APP_SETTING_SUCCESS':
        return {
          ...state,
          settings: payload,
          isLoading: false
        }
      case 'FETCH_APP_SETTING_FAILED':
        return {
          ...state,
          isLoading: false
        }
  
      default:
        return state
    }
  }
  
  export default appSettings
  