import React from 'react'
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../compoments/sign-in/sign-in.compoment'
import SignUp from '../../compoments/sign-up/sign-up.compoment'


const SignInAndSignUpPage = () =>  (
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
  export default SignInAndSignUpPage

