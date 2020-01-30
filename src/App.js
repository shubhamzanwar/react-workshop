import React from 'react';
import { products } from './mockData/products';

class App extends React.Component {
    state = {
        productsCount: {},
        displayCart: false
    }

    incrementCount = (productName) => () => {
        const oldProductsCount = this.state.productsCount;
        const desiredProductCount = (oldProductsCount[productName] || 0) + 1;
        this.setState({
            productsCount: {
                ...oldProductsCount, 
                [productName]: desiredProductCount
            }
        });
    }

    decrementCount = (productName) => () => {
        const oldProductsCount = this.state.productsCount;
        const desiredProductCount = Math.max(oldProductsCount[productName] - 1, 0);
        this.setState({productsCount: {
            ...oldProductsCount, 
            [productName]: desiredProductCount
        }});
    }

    showCart = () => {
        this.setState({displayCart: true});
    }

    hideCart = () => {
        this.setState({displayCart: false});
    }

    render = () => {
        const cartClass = this.state.displayCart ? "cart cart-active" : "cart";
        return (
            <div className="app">
                <header className="app-header">
                    <div className="logo">React Shopping</div>
                    <button className="show-cart-btn" onClick={this.showCart}>Cart</button>
                </header>
                <div className="product-grid">
                    {products.map((product) => {
                        return (
                            <div className="product-wrapper">
                                <div className="product">
                                    <img src={product.image} alt="" className="product-image" />
                                    {product.name}
                                    <div className="counter" role="group">
                                        <button type="button" onClick={this.decrementCount(product.name)} className="counter-btn">-</button>
                                        <div className="counter-text">{this.state.productsCount[product.name] || 0}</div>
                                        <button type="button" onClick={this.incrementCount(product.name)} className="counter-btn">+</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={cartClass}>
                    <header className="app-header">
                        <div className="logo">Cart</div>
                        <button className="show-cart-btn" onClick={this.hideCart}>Close</button>
                    </header>
                </div>
            </div>
        );
    }
}

export default App;