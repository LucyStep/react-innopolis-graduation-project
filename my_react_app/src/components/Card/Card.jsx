import './Card.css';
import Button from '../Button/Button';
import {useDispatch} from 'react-redux';
import {increment} from '../../app/reducers/counter';

function Card({
    image = '',
    name = '',
    description = '',
    price = 0 + '₽'
  }) {
  const dispatch = useDispatch();
  return (
    <div className={'card'}>
      <div className={'card__image'}>
        <img src={image} alt="Рюкзак"/>
      </div>
      <div className={'card__content'}>
        <div className={'card-name'}>
          <h2 className={'card-title'}>{name}</h2>
          <div className={'card-description'}>{description}</div>
        </div>
        <div className={'card-buy'}>
          <div className={'card-price'}>{price}</div>
          <Button card onClick={() => dispatch(increment())}>
            В корзину
            </Button>
        </div>
      </div>
    </div>
  )
}

export default Card;