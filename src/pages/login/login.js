import React, { useEffect, useState } from 'react';
import { Button, Input } from './Element';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {LoadStorage, login} from './slice'
export const Login = () => {
  const navigate = useNavigate('')
  const dispatch = useDispatch()
  const [state, setState] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [notif, setNotif] = useState('')
  const data = useSelector((state) => state.login.data)
  useEffect(() => {
    dispatch(LoadStorage())
  },[])
  const handleClick = () => {
    setState(!state)
  }
  const hanldeButton = () => {
    const userToLogin = data.find(user=> user.email === email && user.passwordInput === password)
    const validationEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/
    const isEmail = validationEmail.test(email)
    if(email === '' || password === ''){
      setNotif('isi semua colom');
    } else if (!isEmail) {
      setNotif('Format Email salah');
    } else if (userToLogin) {
      dispatch(login(userToLogin))
      localStorage.setItem('currentUser', JSON.stringify(userToLogin))
      navigate('/dashboard')
      alert('Waktu login hanya 1 jam!!')
    } else {
      setNotif('Email belum terdaftar.. Silahkan Registrasi');
    }
  }

  return(
    <div className='bg-green-500 w-screen h-svh flex justify-center'>
      <div className='w-1/2 flex justify-center items-center'>
        <div className='w-1/2 '>
          <h1 className='text-center text-4xl font-bold p-5 animate-pulse'>Welcome is Login Example Project !!</h1>
          <div className=' bg-green-100 w-full h-96 rounded-2xl'>
            <Input 
              type='email' 
              head='Email' 
              placeholder='Masukkan email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              type={state ? 'password' : 'text'} 
              head='Password' 
              placeholder='Masukkan Password'
              EyePassword 
              onClick={handleClick}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h1 className='text-center text-red-600 italic'>{notif}</h1>
            <Button hanldeButton={hanldeButton} textButton='Login Sekarang' />
            <div className='w-full flex justify-between px-4'>
              <button>Forgot Password?</button>
              <button onClick={() => navigate('/create')}>create Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
