import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate;

  const {email, password} = formData

  const onChange = (e) => {
   setFormData((prevState) => ({
    ...prevState,
    [e.target.id]: e.target.value,
   }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if(userCredential.user) {
        navigate('/')
      }
    } catch (error) {
      toast.error('Wrong email or password')
    }
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back!</p> 
        </header>

        <main>
          <form onSubmit={onSubmit}>
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

            <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>

            <div className='signInBar'>
              <p className='signInText'>Sign In</p>
              <button className='signInButton'>
                <ArrowRightIcon fill='#fff' width='34px' height='34px'></ArrowRightIcon>
              </button>
            </div>
          </form>

            {/*Google OAuth*/}

            <Link to='/sign-up' className='registerLink'>Sign Up Instead</Link>


        </main>
      </div>
    </>
  )
}
export default SignIn