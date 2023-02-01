import React, { useState } from 'react'
import { loginAction, registerAction } from './../redux/actions/auth';
import { useDispatch } from 'react-redux'

const Auth = () => {
   const [signup, setSignup] = useState(true);
   const [authData, setAuthData] = useState({username: "", email: "", password: "" });
   const dispatch = useDispatch();

   const handleChange = (e) => {
    setAuthData({...authData, [e.target.name] : e.target.value})
  };

  const authFunc = () => {
    if(signup) {
      dispatch(registerAction(authData))
    }else {
      dispatch(loginAction(authData))
    }
  }


  console.log("authData", authData);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-2xl">
      <h1 className='text-4xl font-medium mb-5 text-indigo-600'>{signup ? "Kayıt Ol" : "Giriş Yap"}</h1>
          <div className="mb-4"> 
          {signup && <input className="input-style" type="text" name="username" value={authData.username} onChange={handleChange} placeholder="Username" />}
          <input className="input-style" type="text" name="email" value={authData.email} onChange={handleChange}  placeholder="Email" />
          <input className="input-style" type="text" name="password" value={authData.password} onChange={handleChange}  placeholder="Şifre" />
        </div>
        <div className='text-indigo-500  hover:text-indigo-700 mb-5 ml-1'>
          {
            signup ? <span onClick={() => setSignup(false)}>Hesabın var mı? Giriş Yap</span> :
                     <span onClick={() => setSignup(true)} >Hesabın yok mu? Kayıt Ol</span>
          }
        </div>
        <div onClick={authFunc} className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-full">{signup ? "Kayıt Ol" : "Giriş Yap"}</div>
      </div>
    </div>
  )
}

export default Auth;
