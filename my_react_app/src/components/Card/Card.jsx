import React from 'react';
import './Card.css';
import Button from '../Button/Button';
import {useDispatch} from 'react-redux';
import {addItem} from '../../app/basket/basket.actions';
import {connect} from 'react-redux';

function Card({
                id = 0,
                image = '',
                name = '',
                description = '',
                price = 0
              }) {

  const dispatch = useDispatch();
  const addItemDispatcher = () => {
    dispatch(addItem(id, image, name, price));
  };

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
          <div className={'card-price'}>{price} ₽</div>
          <Button
            card
            onClick={addItemDispatcher}
          />
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Card);