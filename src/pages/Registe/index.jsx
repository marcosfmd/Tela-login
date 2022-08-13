import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './style.css';

export default function Registe () {

  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    email: '',
    name: '',
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
    let users = []

    if(localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'))
    }
    users.push(form)
    localStorage.setItem('users', JSON.stringify(users))
    setForm({
      email: '',
      name: '',
      password: ''
    })
  }

  return (
    <div>
    <section className="section-container__registe">
      <div className="registe__right">
        <h3 className="registe__logo">
          DinizGesso
        </h3>

        <h1 className="registe__title">Mais de 200 mil boosters já estão conectados.</h1>
        <p className="description">Junte-se a milhares de devs e acelere na direção dos seus objetivos</p>

        <div className="login-group__previus">
          <i class="bi bi-arrow-left-short registe__arrow"></i>
          <Link to="/" className="registe__login">Voltar para login</Link>
        </div>
      </div>

      <div className="left">
        <form className="registe__form" onSubmit={handleSubmit}>
          <h1 className="form__tittle">Crie sua conta</h1>

          <fieldset className="registe-form__group">
            <i className="bi bi-envelope-fill registe-group__icon"></i>
            <input 
            type="email" 
            className="registe__input-text" 
            placeholder="E-mail"
            name="email"
            value={form.email}
            onChange={handleChange}
            />
          </fieldset>

          <fieldset className="registe-form__group">
            <i className="bi bi-person registe-group__icon"></i>
            <input 
            type="text" 
            className="registe__input-text" 
            placeholder="Seu nome completo" 
            name="name"
            value={form.name}
            onChange={handleChange}
            />
          </fieldset>

          <fieldset className="registe-form__group">
            <i className="bi bi-lock-fill registe-group__icon"></i>
            <input 
            type="password" 
            className="registe__input-text" 
            placeholder="Sua senha" 
            name="password"
            value={form.password}
            onChange={handleChange}
            />
          </fieldset>

          <p className="description__term">Ao se registrar, você aceita nossos <a href="#" className="accept__terms">termos de uso e</a> a nossa <Link to="#" className="accept__terms">política de privacidade</Link>.</p>

          <button className="btn-registe">Cadastar</button>
          
        </form>
      </div>
    </section>
  </div>
  )
}