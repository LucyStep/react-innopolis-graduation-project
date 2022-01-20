import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

export default class CardList extends React.Component {
  static defaultProps = {
    productList: []
  }

  render() {
    return (
      <div className={'card-list'}>
        {
          this.props.productList.map((product) => {
            return (
              <div className={'card-list__item'} key={product.id}>
                <Card
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                  price={product.price}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}