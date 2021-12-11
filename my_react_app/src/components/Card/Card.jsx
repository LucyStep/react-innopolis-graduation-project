import './Card.css';
import Button from "../Button/Button";

function Card(
  {
    id = 0,
    image = '',
    name = '',
    description = '',
    price = 0 + '₽'
  }) {

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
          <Button card onClick={() =>
            alert('It works!')
          }>
            В корзину
            </Button>
        </div>
      </div>
    </div>
  )
}

export default Card;