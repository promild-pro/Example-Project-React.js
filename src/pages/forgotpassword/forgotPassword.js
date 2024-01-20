import React, { useState } from "react"
import { Input, Button } from "../login/Element"
import { useNavigate } from "react-router-dom"

export const ForgotPassword = () => {
  const navigate = useNavigate()

  let [formData, setFormData] = useState({
    state: false,
    eyePassword: true,
    email: '',
    name: '',
    newPassword: ''
  })

  const data = JSON.parse(localStorage.getItem('users'))
  const validation = data.find(user => user.email === formData.email)
  const handleClick = () => {
    if(validation) {
      setFormData(prevData => ({ ...prevData, state: true, name: validation.username }));
    } else if(!validation) {
      alert('email tidak terdaftar')
    }
  }
  const handlePassword = () => {
    const updatePassword = data.map(user => {
      if(user.email === validation.email) {
        user.passwordInput = formData.newPassword
        user.confirmPassword = formData.newPassword
      }
      return user
    })
    localStorage.setItem('users',JSON.stringify(updatePassword))
    console.log(updatePassword);
    alert('berhasil')
    navigate('/')
  }
  const handleEye = () => {
    setFormData({...formData, eyePassword: !formData.eyePassword})
  }
  return(
    <section className="w-full h-svh bg-green-500 flex justify-center items-center">
      <div className=" w-[30%]">
        <div className=" bg-green-100 rounded-xl mb-5">
          <Input 
            head="Forgot Password"  
            placeholder="Masukkan Email" 
            type="Email"
            onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <Button 
            textButton="Reset Password"
            hanldeButton={handleClick} />
          <button 
            onClick={() => navigate('/')}
            className="pl-5 pb-5"
          >kembali ke login</button>
        </div>
        {formData.state ?
          <div className=" bg-green-100 rounded-xl pb-5">
            <Input 
              head={`Nama User adalah ${formData.name}`}
              placeholder="Masukkan Password Baru"
              type={`${formData.eyePassword ? 'password': 'text'}`}
              EyePassword
              onClick={handleEye}
              onChange={(e) => setFormData(prevData => ({...prevData, newPassword: e.target.value}))}/>
            <Button 
              textButton="Ganti Password"
              hanldeButton={handlePassword} />
          </div> : null
        }
      </div>
    </section>
  )
}
    