import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useState } from "react";
import { validate } from "./util";
import axios from "axios";
import SERVER_ADDRESS from "../../baseUrl";

export default function Login(props) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
  })
  
  function handleChange(e) {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    setError(prev => ({
      ...prev,
      [name]: '',
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate(formData, setError)) {
      return;
    }
    const data = {
      username: formData.email,
      password: formData.password
    }
    axios.post(`${SERVER_ADDRESS}:8000/user/login/`, data)
      .then(res => {
        localStorage.setItem('refresh', res.data.refresh);
        localStorage.setItem('access', res.data.access);
        
        setFormData({
          email: '',
          password: '',
        })
        setError({
          email: '',
          password: '',
        })
    
        navigate('/')
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  

  return (
    <>
      <div className="content">
        <div className="wrapper">
          <p className="form-title">Личный кабинет</p>
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              { error.email && <span className="error-msg">{error.email}</span> }
              <input 
                id="email" 
                type="text"
                className="form-field" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <div>
              <label htmlFor="password">Пароль</label>
              { error.password && <span className="error-msg">{error.password}</span> }
              <input 
                id="password"
                type="password"
                className="form-field" 
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Link to='/register' className="link">
              <button className="btn-link" type="button">
                Зарегистрироваться
              </button>
            </Link>
            <button className="btn-submit" type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
