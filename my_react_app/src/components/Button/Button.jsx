import './Button.css';
import classNames from 'classnames';

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={classNames('button', {
      'button_card': props.card,
      'button_login': props.login
    })}>
      {props.children}
    </button>
  )
}

export default Button;

