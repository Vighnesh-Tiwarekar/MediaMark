import React from 'react'

const Login = () => {
  return (
    <div className='relative'>
      <header className='primary-blue-bg text-black text-lg lg:text-3xl p-[10px] py-[15px] logo'>
        MediaMark
      </header>

      <main className='m-[20px] my-[10vh] md:mx-[35vw]'>

        <div className='text-2xl lg:text-4xl font-extrabold'>
          Welcome Back
        </div>

        <div className='font-light text-[12px]'>
          Please enter your details
        </div>


        <form action="" className='mt-[40px] flex flex-col gap-y-[5vh] justify-center'>

          <div>
            <div >Username</div>
            <input type="text" className='border-[var(--primary-blue)] w-full h-[5vh] p-[10px]' />
          </div>

          <div >
            <div>Password</div>
            <input type="password" className='border-[var(--primary-blue)] w-full h-[5vh] p-[10px]' />
          </div>

          <div className='w-fit mx-auto primary-blue-bg px-[10px] py-[5px] rounded-[10px] font-bold'>
            <button type='submit'>Sign In</button>
          </div>

          <div className='text-center font-bold'>
            <div className='w-fit mx-auto primary-blue-bg px-[10px] py-[5px] rounded-[10px]'>
              <button type='text'>Sign Up</button>
            </div>
            <div className='font-light text-[12px] mt-[10px] underline'>If you are a new user</div>
          </div>

        </form>

      </main>

      <footer className='h-[7.5vh] w-[100vw] primary-blue-bg fixed z-10 bottom-0'>
      </footer>
    </div>
  )
}

export default Login