import React, {  useState } from "react"
import { Button, Input } from "../login/Element"
import { useNavigate } from "react-router-dom"
import { register} from './slice'
import { useDispatch } from "react-redux"
export const Register = () => {
  const navigate = useNavigate('/')
  const dispatch = useDispatch()
  const [password, setPassword] = useState(true)
  const [confirm, setConfirm] = useState(true)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [stateError, setStateEror] = useState('')

  const handlePassword = () => {
    setPassword(!password)
  }
  const handleConfirm = () => {
    setConfirm(!confirm)
  }
  const handleClick = () => {
    let data = JSON.parse(localStorage.getItem('users')) || 'error';

    if (!Array.isArray(data)) {
      data = [];
    }
    const isEmailExist = data.some(user => user.email === email)
    const validationEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/
    const isEmail = validationEmail.test(email)
    if(isEmailExist) {
      setStateEror('Email Sudah Terdaftar')
    } else if(username === '' || email === '' || passwordInput === '' || confirmPassword === '') {
      setStateEror('Harap isi semua kolom')
    } else if(!isEmail){
      setStateEror('Format email salah')
    }else if(confirmPassword !== passwordInput) {
      setStateEror('Konfirmasi Password salah')
    }else{
      const newUSer = {
        username,
        email,
        passwordInput,
        confirmPassword}
      data.push(newUSer)
      // const newData = [...data, newUSer]
      localStorage.setItem('users', JSON.stringify(data))
      dispatch(register())
      alert('Registrasi Success!! Silahkan Login ')
      navigate('/')
    }
  }
   
  return(
    <div className="w-screen h-lvh bg-green-500 flex justify-center items-center">
      <div className="w-[30%] bg-green-100  rounded-xl">
        <Input 
          head="Username"
          type="text"
          placeholder="Masukkan Nama"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input 
          head="Email"
          type="email"
          placeholder="Masukkan Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          head="Password"
          type={password ? 'password' : 'text'}
          placeholder="Masukkan Password"
          EyePassword
          onClick={handlePassword}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <Input 
          head="Konfirmasi Password"
          type={confirm ? 'password' : 'text'}
          placeholder="Konfirmasi Password"
          EyePassword
          onClick={handleConfirm}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <h1 className="text-center text-red-600 italic">{stateError}</h1>
        <Button textButton="Create Akun" hanldeButton={handleClick}/>
        <button 
          className="text-blue-900 text-center w-full my-5"
          onClick={() => navigate('/')}
        >
          Sudah Punya Akun!!
        </button>
      </div>
    </div>
  )
}