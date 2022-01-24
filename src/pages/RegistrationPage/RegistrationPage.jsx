import './RegistrationPage.css';
import React, {useState} from 'react';
import Button from '../../components/Button/Button';
import {useNavigate} from 'react-router-dom';

function RegistrationPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isEmailError, setIsEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [isPasswordError, setIsPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const userCredentials = {};

  const navigate = useNavigate();

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePassword(password) {
    const re = /^[^-() /]*$/;
    return re.test(password);
  }

// Проверка имейла

  const emailValidation = (email) => {

    if (email !== "") {

      if (validateEmail(email)) {
        userCredentials.email = email;
        localStorage.setItem('email', userCredentials.email);
      } else {
        setIsEmailError(true);
        setEmailErrorMessage('Email невалидный')
      }
    }

    if (email === "") {
      setIsEmailError(true);
      setEmailErrorMessage('Поле обязательно для заполнения')
    }
  }

// Проверка пароля

  const passwordValidation = (password) => {

    if (password !== "") {

      if (password.length >= 8 && validatePassword(password)) {
        userCredentials.password = password;
        localStorage.setItem('password', userCredentials.password);
      } else {
        setIsPasswordError(true);
        setPasswordErrorMessage('Пароль невалидный')
      }
      if (password.length < 8) {
        setIsPasswordError(true);
        setPasswordErrorMessage('Пароль должен содержать как минимум 8 символов')
      }
    }

    if (password === "") {
      setIsPasswordError(true);
      setPasswordErrorMessage('Поле обязательно для заполнения')
    }
  }

  const redirect = () => {
    if (userCredentials.email && userCredentials.password) {
      navigate("/");
    }
  }

  function onClick() {
    emailValidation(email);
    passwordValidation(password);
    redirect();
  }

  return (
    <div className={'container'}>
      <form className={'login'}>
        <h1 className={'login__title'}>Регистрация</h1>
        <label className={'login__label'} htmlFor={'input-email'}>
          Email
        </label>
        <div className={'login__wrapper'}>
          <input
            id={'input-email'}
            value={email}
            className={'login__input'}
            type={'email'}
            placeholder={"Введите email"}
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className={'login__valid'}>
          {emailErrorMessage}
        </div>
        <label className={'login__label'} htmlFor={'input-password'}>
          Пароль
        </label>
        <div className={'login__wrapper'}>
          <input
            id={'input-password'}
            value={password}
            className={'login__input'}
            type={'password'}
            placeholder={"Введите пароль"}
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className={'login__valid'}>
          {passwordErrorMessage}
        </div>
        <div className={'login__checkbox-wrapper'}>
          <input
            className={'login__checkbox'}
            type={'checkbox'}
            id={'input-checkbox'}
          />
          <div className={'login__checkbox-mark'}/>
          <label className={'login__checkbox-label'} htmlFor={'input-checkbox'}>
            Я согласен получать обновления на почту
          </label>
        </div>
        <Button login onClick={onClick}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}

export default RegistrationPage;