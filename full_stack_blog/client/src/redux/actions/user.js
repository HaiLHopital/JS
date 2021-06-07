export const logIn=(info)=>({
    type:"USER_LOGIN",
    payload:info
})

export const logOut =()=>({
    type:"USER_LOG_OUT"
})

export const register=(info)=>({
    type:"USER_REGISTER",
    payload:info
})