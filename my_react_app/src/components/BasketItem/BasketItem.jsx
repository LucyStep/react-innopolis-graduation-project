import React from 'react';
import './BasketItem.css';

export default class BasketItem extends React.Component {
  static defaultProps = {
    id: 0,
    image: '',
    name: '',
    description: '',
    price: 0 + '₽'
  }

  render() {
    const { image, name, price } = this.props;
    return (
      <div className={'selected-item'}>
        <div className={'item-name-wrapper'}>
          <img className={'item-image'} src={image} alt="Рюкзак"/>
            <span className={'item_name'}>{name}</span>
        </div>
        <div className={'item-price-wrapper'}>
          <span className={'item-price'}>{price}</span>
          <div className={'item-remove'}>
            <a className={'delete'} href="#" title="Удалить из корзины">
              <div className={'circle'}/>
            </a>
          </div>
        </div>
      </div>
      )
  }
}