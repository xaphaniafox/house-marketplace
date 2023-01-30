import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const {email, password} = formData

  const onChange = () => {

  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back!</p> 
        </header>

        <main>
          <form>
            <input 
              className='emailInput' 
              type='email' 
              placeholder='Email' 
              id='email' 
              value={email} 
              onChange={onChange}
            />

            <div className='passwordInputDiv'>
              <input 
                className='passwordInput' 
                type={showPassword ? 'text' : 'password'} 
                placeholder='password'
                id='password'
                value={password}
                onChange={onChange}
              />
              <img
                src={visibilityIcon}
                className='showPassword'
                alt='show password'
                onClick={() => setShowPassword((prevState) => 
                !prevState) }
              />
            </div>
          </form>

            <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>

            <div className='signInBar'>
              <p className='signInText'>Sign In</p>
              <button className='signInButton'>
                <ArrowRightIcon fill='#fff' width='34px' height='34px'></ArrowRightIcon>
              </button>
            </div>

            {/*Google OAuth*/}

            <Link to='/sign-up' className='registerLink'>Sign Up Instead</Link>


        </main>
      </div>
    </>
  )
}
export default SignIn