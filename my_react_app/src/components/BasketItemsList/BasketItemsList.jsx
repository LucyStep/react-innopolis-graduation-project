import React from 'react';
import BasketItem from '../BasketItem/BasketItem';

export default class BasketItemsList extends React.Component {
  static defaultProps = {
    productList: []
  }
  render() {
    return (
      <div className={'items-list'}>
        {
          this.props.productList.map((product) => {
            return (
              <BasketItem key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={`${product.price} ₽`}/>
            )
          })
        }
      </div>
    )
  }
}