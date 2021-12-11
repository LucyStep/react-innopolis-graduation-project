import React from 'react';
import CardList from '../../components/CardList/CardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  componentDidMount() {
      fetch('productList.json')
        .then((response) => response.json())
        .then((result) => {
          this.setState({products: result});
        })
    }

  renderProducts() {
    if (this.state.products.length) {
      return <CardList productList={this.state.products}/>
    }
    return <div>Загрузка...</div>
  }

  render() {
    return (
      <div className="MainPage">
        <Header/>
        {this.renderProducts()}
        <Footer/>
      </div>
    );
  }
}