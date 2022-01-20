import Header from '../../components/Header/Header';
import './ProductPage.css'
import React, {useEffect, useState} from 'react';
import Button from '../../components/Button/Button';
import {useDispatch} from 'react-redux';
import {addItem} from '../../app/basket/basket.actions';
import {useParams} from 'react-router-dom';


function ProductPage() {
  const dispatch = useDispatch();
  const addItemDispatcher = () => {
    dispatch(addItem(Number(id), product.image, product.name, product.price));
  };

  const {id} = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`/productList.json`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setProduct(jsonResponse.find(item => item.id === Number(id)))
      })
  })

  return (
    <div className={'ProductPage'}>
      <Header/>
      <div className={'card-container'}>
        <img className={'card-image'} src={product.image} alt="Рюкзак"/>
        <div className={'card-info'}>
          <h2 className={'card-info__title'}>{product.name}</h2>
          <div className={'card-info__description'}>{product.description}</div>
          <div className={'card-info__details'}>
            {product.details}
          </div>
          <div className={'card-info__price'}>{product.price} ₽</div>
          <Button className={'card-info__buy'} onClick={addItemDispatcher} details>
            В корзину
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;