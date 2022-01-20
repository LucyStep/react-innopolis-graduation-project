import './Button.css';
import classNames from 'classnames';

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={classNames('button', {
        'button_card': props.card,
        'button_login': props.login,
        'button_card_details': props.details
      })}>
      {props.children}
    </button>
  )
}

export default Button;

