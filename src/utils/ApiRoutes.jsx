const ApiRoutes = {
    FORGOT_PASSWORD:{
        path:'/users/forgot-password',
        authenticate:false
    },
    RESET_PASSWORD :{
        path:'/users/reset-password',
        authenticate:false
    }
}

export default ApiRoutes