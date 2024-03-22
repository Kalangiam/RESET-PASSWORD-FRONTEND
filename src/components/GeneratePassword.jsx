import React, { useEffect } from 'react'
import AxiosService from '../utils/AxiosService';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import ApiRoutes from '../utils/ApiRoutes';
import '../CSS/Login.css'


function ForgotPassword() {

    const navigate = useNavigate()

    useEffect(() => {
        sessionStorage.clear()
    }, [])

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);
            let res = await AxiosService.post(ApiRoutes.FORGOT_PASSWORD.path, formProps, {
                authenticate: ApiRoutes.FORGOT_PASSWORD.authenticate
            })

            if (res.status === 200) {
                alert("check code in your mail for password reset")
                navigate('/users/reset-password')
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }

    }

    return (
        <>
            <div className='loginwrapper'>
                <div className="wrapper" >
                    <div className="inner">
                        <div className="image-holder">
                            <img src="https://appsofthub.com/wp-content/uploads/2019/04/Best-Password-Reset-Tool.jpg" alt="" />
                        </div>
                        <form action="" onSubmit={handleSubmit}>
                            <h3>Forgot Password</h3>
                  
                            <div className="form-wrapper">
                                <input type="text" placeholder="Enter Email Address" className="form-control" name='email' />
                                <i className="zmdi zmdi-email"></i>
                            </div>

                            <button>submit
                                <i className="zmdi zmdi-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                </div>

            </div></>


    )
}

export default ForgotPassword