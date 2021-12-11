import './LoginPage.css';
import {Link} from "react-router-dom";
import React from "react";
import Button from "../../components/Button/Button";


function LoginPage() {

  const emailInput = document.getElementById('input-email');
  const passwordInput = document.getElementById('input-password');
  const emailLabel = document.querySelector('.login__label-email');
  const passwordLabel = document.querySelector('.login__label-password');
  const emailRequiredSign = document.querySelector('.login__email-wrapper > .login__required-sign');
  const passwordRequiredSign = document.querySelector('.login__password-wrapper > .login__required-sign');
  const noEmail = document.querySelector('.login__email-warning');
  const noPassword = document.querySelector('.login__password-warning');
  const userCredentials = {};

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePassword(password) {
    const re = /^[^-() /]*$/;
    return re.test(password);
  }

  function makeFieldRed(field = {}) {
    if (field.email) {
      noEmail.textContent = field.email;
      noEmail.style.display = 'block';
      emailInput.classList.add('invalid-input');
      emailLabel.classList.add('invalid-text');
      emailRequiredSign.classList.add('invalid-text');
    }
    if (field.password) {
      noPassword.textContent = field.password;
      passwordInput.classList.add('invalid-input');
      passwordLabel.classList.add('invalid-text');
      passwordRequiredSign.classList.add('invalid-text');
      noPassword.style.display = 'block';
    }
  }

// Проверка имейла

  const emailValidation = () => {
    console.log(emailInput)
    if (emailInput.value !== "") {

      if (validateEmail(emailInput.value)) {
        emailInput.classList.remove('invalid-input');
        emailLabel.classList.remove('invalid-text');
        emailRequiredSign.classList.remove('invalid-text');
        noEmail.style.display = 'none';
        userCredentials.email = emailInput.value;
      } else {
        makeFieldRed({email: 'Email невалидный'})
      }
    }

    if (emailInput.value === "") {
      makeFieldRed({email: 'Поле обязательно для заполнения'})
    }
  }

// Проверка пароля

  const passwordValidation = () => {
    if (passwordInput.value !== "") {

      if (passwordInput.value.length >= 8 && validatePassword(passwordInput.value)) {
        passwordInput.classList.remove('invalid-input');
        passwordLabel.classList.remove('invalid-text');
        passwordRequiredSign.classList.remove('invalid-text');
        noPassword.style.display = 'none';
        userCredentials.password = passwordInput.value;
      } else {
        noPassword.textContent = 'Пароль невалидный';
      }

      if (passwordInput.value.length < 8) {
        makeFieldRed({password: 'Пароль должен содержать как минимум 8 символов'})
      }
    }
    if (passwordInput.value === "") {
      makeFieldRed({password: 'Поле обязательно для заполнения'})
    }
  }

  function onClick() {
    emailValidation();
    passwordValidation();
    if (userCredentials.email && userCredentials.password) {
      console.log(userCredentials);
    }
  }

  return (
    <div className={'container'}>
      <form className={'login'} method={'post'}>
        <h1 className={'login__title'}>Вход</h1>
        <label className={'login__label-email'} htmlFor={'input-email'}>Email</label>
        <div className={'login__email-wrapper'}>
          <span className={'login__required-sign'}>*</span>
          <input className={'login__input'} type={'email'} placeholder="Введите email" id={'input-email'} required/>
        </div>
        <div className={'login__valid'}>
          <p className={'login__email-warning'}/>
        </div>
        <label className={'login__label-password'} htmlFor={'input-password'}>Пароль</label>
        <div className={'login__password-wrapper'}>
          <span className={'login__required-sign'}>*</span>
          <input className={'login__input'} type={'password'} placeholder="Введите пароль" id={'input-password'}
                 required/>
        </div>
        <div className={'login__valid'}>
          <p className={'login__password-warning'}/>
        </div>
        <div className={'login__checkbox-wrapper'}>
          <input className={'login__checkbox'} type={'checkbox'} id={'input-checkbox'}/>
          <div className={'login__checkbox-mark'}/>
          <label className={'login__checkbox-label'} htmlFor={'input-checkbox'}>Я согласен получать обновления на
            почту</label>
        </div>
        <Button login onClick={onClick}>
          <Link to={'/products'} className={'enter-link'}>
          Войти
          </Link>
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;