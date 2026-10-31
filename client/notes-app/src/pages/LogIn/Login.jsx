
import PasswordInput from '../../components/Input/PasswordInput'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Navbar />

      <div className='flex items-center justify-center mt-28'>
        <div className='w-98 border rounded bg-white px-7 py-10'>
          <form onSubmit={() => { }}>
            <h4 className='text-2xl mb-4'> Login</h4>
            <input type='text' placeholder='Email' className='input-box'></input>

            <PasswordInput />
            
            <button type='submit' className='btn-primary'>Login</button>
            <p className=' text-center text-sm mt-4'>Not registered yet?{" "}
              <Link to='/signUp' className='font-medium text-primary underline'>Create an account</Link>
              </p>

          </form>
        </div>
      </div>
    </>
  )
}

export default Login
