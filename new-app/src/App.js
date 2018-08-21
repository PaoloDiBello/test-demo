import React, { Component } from 'react';
import Products from './Products';
class App extends Component {
    state = {
        products: [
            { wineName: 'Red', source: 'NY', winePrice: 30, quantity_bottle: 4, id: 1 },
            { wineName: 'White', source: 'LA', winePrice: 40, quantity_bottle: 5, id: 2 },
            { wineName: 'Pink', source: 'CA', winePrice: 50, quantity_bottle: 6, id: 3 },
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>My first React app</h1>
                <Products products={this.state.products} />
            </div>
        );
    }
}

export default App;
