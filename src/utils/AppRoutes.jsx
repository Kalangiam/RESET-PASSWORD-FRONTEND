
import { Navigate } from 'react-router-dom'
import ForgotPassword from '../components/GeneratePassword'
import ResetPassword from '../components/ResetPassword'


const AppRouter = [
    {
        path: '/users/forgot-password',
        element: <ForgotPassword />
    },
    {
        path: '/users/reset-password',
        element: <ResetPassword />
    },
    {
        path: "*",
        element: <Navigate to='/users/forgot-password' />
    },

]

export default AppRouter