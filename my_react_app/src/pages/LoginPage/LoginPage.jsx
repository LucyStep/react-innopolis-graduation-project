import './LoginPage.css';
import React, {useState} from 'react';
import Button from '../../components/Button/Button';

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isEmailError, setIsEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [isPasswordError, setIsPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const userCredentials = {};

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePassword(password) {
    const re = /^[^-() /]*$/;
    return re.test(password);
  }

// // Проверка имейла

  const emailValidation = (email) => {

    if (email !== "") {

      if (validateEmail(email)) {
        userCredentials.email = email;
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

// // Проверка пароля

  const passwordValidation = (password) => {

    if (password !== "") {

      if (password.length >= 8 && validatePassword(password)) {
        userCredentials.password = password;
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

  function onClick() {
    passwordValidation(password);
    emailValidation(email);
    if (userCredentials.email && userCredentials.password) {
      localStorage.setItem('credentials', JSON.stringify(userCredentials));
    }
  }

  return (
    <div className={'container'}>
      <form className={'login'}>
        <h1 className={'login__title'}>Вход</h1>
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
          Войти
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;