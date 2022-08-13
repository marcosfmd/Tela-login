import './style.css';

import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm ({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

      const users = JSON.parse(localStorage.getItem('users'))

      const result = users.find(user => user.email === form.email && user.password === form.password)

      if(result) {
        localStorage.setItem('token', true)
        navigate('/home')
      } else {
        alert('Usuario ou senha invalido!!!')
      }

    // if(form.email === 'marcos@gmail.com' && form.password === '123') {
    //   alert('Login realizado com sucesso')
    //   localStorage.setItem('token', true)
    //   navigate('/home')
    // } else {
    //   alert('Login ou senha incorretos')
    // }
  }

  return (
    <div>
      <section className="section-container">
        <div className="left">
          <h3 className="logo">
            DinizGesso
          </h3>

          <h1 className="title">Faça seu login na plataforma</h1>
        </div>

        <div className="right">
          <form onSubmit={handleSubmit} className="form">
            <fieldset className="form-group">
              <i className="bi bi-envelope-fill form-group__icon"></i>
              <input 
              type="email" 
              className="input-text" 
              placeholder="E-mail"
              name="email"
              value={form.email}
              onChange={handleChange}
              />
            </fieldset>

            <fieldset className="form-group">
              <i className="bi bi-lock-fill form-group__icon"></i>
              <input 
              type="password" 
              className="input-text" 
              placeholder="Senha" 
              name="password"
              value={form.password}
              onChange={handleChange}
              />
            </fieldset>

            <a href="#" className="my-password">Esquecir minha senha?</a>

            <button className="btn__submit">ENTRAR</button>

            <p className="registe">Não tem uma conta? <Link to="../Registe" className="registre-count">Registre-se</Link></p>

            <fieldset className="form-group__login">
              <p className="access">Ou entre com</p>
              
              <p className="registe__github"><i className="bi bi-github access-icon"></i> Github</p>
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  )
}