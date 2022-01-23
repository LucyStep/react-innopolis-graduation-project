export const addItemToBasket = (
  basketItems,
  content
) => {
  const existingBasketItem = basketItems.find(
    item => item.id === content.id
  );

  if (existingBasketItem) {
    basketItems.map((item) => {
      if (item.id === content.id) {
        item.quantity = item.quantity + 1;
        item.priceSum = content.price * item.quantity;
      }
    })
  } else {
    basketItems.push({
      quantity: 1,
      id: content.id,
      image: content.image,
      name: content.name,
      price: content.price,
      priceSum: content.price
    })
  }
  return basketItems
};


export const removeItemFromBasket = (
  basketItems,
  content
) => {
  const existingBasketItem = basketItems.find(
    item => item.id === content.id
  );

  if (existingBasketItem) {
    if (existingBasketItem.quantity >= 2) {
      basketItems.map((item) => {
        if (item.id === content.id) {
          item.quantity = item.quantity - 1;
          item.priceSum = content.price * item.quantity;
        }
      })
      console.log('basketItems', basketItems)
      return basketItems
    } else {
      return deleteObjectFromBasket(basketItems, content.id)
    }
  }
};


export const deleteObjectFromBasket = (
  basketItems,
  id
) => {
  const existingBasketItem = basketItems.find(
    item => item.id === id
  );

  if (existingBasketItem) {
    const index = basketItems.findIndex((item) => {
      return item.id === id;
    })
    basketItems.splice(index, 1);
  }

  return basketItems
};


export const recalculateTotal = (basket) => {
  let totalPrice = 0
  let totalCount = 0
  if (basket.basketItems.length) {
    basket.basketItems.map((item) => {
      totalPrice = totalPrice + item.priceSum;
      totalCount = totalCount + item.quantity;
    })
    return {price: totalPrice, count: totalCount}
  } else {
    return {price: totalPrice, count: totalCount}
  }
}