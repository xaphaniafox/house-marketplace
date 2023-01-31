import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from '../firebase.config'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const {name, email, password} = formData

  const navigate = useNavigate()

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

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      navigate('/')

    } catch (error) {
      console.log(error)
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
              className='nameInput' 
              type='text' 
              placeholder='Name' 
              id='name' 
              value={name} 
              onChange={onChange}
            />
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

            <div className='signUpBar'>
              <p className='signUpText'>Sign Up</p>
              <button className='signUpButton'>
                <ArrowRightIcon fill='#fff' width='34px' height='34px'></ArrowRightIcon>
              </button>
            </div>
          </form>

            {/*Google OAuth*/}

            <Link to='/sign-in' className='registerLink'>Sign In Instead</Link>

        </main>
      </div>
    </>
  )
}
export default SignUp