import React, { Component } from 'react';
import Products from './Products';

class App extends Component {
    state = {
        products: [
            { wineName: 'Red', img: 'http://www.viniexport.com/trading/storage/2017/January/week4/60273_RUBRATO-AGLIANICO.png', source: 'NY', winePrice: 30, quantity_bottle: 4, id: 1 },
            { wineName: 'White', img: 'http://www.viniexport.com/trading/storage/2018/January/week1/80263_CAVIT-ALTEMASI-MILLESIMATO.png', source: 'LA', winePrice: 40, quantity_bottle: 5, id: 2 },
            { wineName: 'Pink', img: 'http://www.viniexport.com/trading/storage/2017/February/week2/63622_L_408.png', source: 'CA', winePrice: 50, quantity_bottle: 6, id: 3 },
        ]

    }

    render() {
        return (
            <div className="App">
                <h1>My first test using React</h1>
                <Products products={this.state.products} />
            </div>
        );
    }
}

export default App;
