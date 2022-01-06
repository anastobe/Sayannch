



export const LoginSaved = (data) =>{
return async (dispatch)=>{
dispatch({type :'LOGIN_PROCESSED',payload:'data'})
}
}
export const logOut = () =>{
    return async (dispatch)=>{
    dispatch({type :'LOG_OUT'})
    }
    }