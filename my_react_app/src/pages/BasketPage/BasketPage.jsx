import React from 'react';
import {Link} from 'react-router-dom';
import './BasketPage.css';
import BasketItemsList from '../../components/BasketItemsList/BasketItemsList';
import Button from '../../components/Button/Button';

export default class BasketPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  /*здесь отображаются выбранные товары*/

  componentDidMount() {
    fetch('productList.json')
      .then((response) => response.json())
      .then((result) => {
        this.setState({products: result});
      })
  }

  renderProducts() {
    return <BasketItemsList productList={this.state.products}/>
  }

  render() {
    return (
      <div className={'BasketPage'}>
        <Link to={'/products'} className={'main-page-link'}>
          Вернуться к списку товаров
        </Link>
        <div className={'items-container'}>
          <h1 className={'items-title'}>Корзина с выбранными товарами</h1>
          {this.renderProducts()}
          <div className={'total-sum'}>
            <div className={'total-sum__wrapper'}>
              <span className={'total-sum__text'}>Заказ на сумму: </span>
              <span className={'total-sum__counter'}>6 220 ₽</span>
            </div>
            <Button>Оформить заказ</Button>
          </div>
        </div>
      </div>
    );
  }
}