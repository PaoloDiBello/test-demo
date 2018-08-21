import React, { Component } from 'react'

class Products extends Component {
    state = {
        quantity: 1,
        key: ''
    }

    handleChange(event) {
        this.setState({ quantity: event.target.value })

    }


    render() {
        const { products } = this.props;
        const productsList = products.map(product => {
            return (

                <div className="wineBox" key={product.id} data-id={product.id}>

                    Select quantity :
                    <div>Quantity: <input type="number" name="quantity_bottle" className="rsQuantity wineQuantity" step={1} max={product.quantity_bottle} defaultValue={1} min={1} onChange={this.handleChange.bind(this)} />
                        &nbsp;<img src={"http://www.viniexport.com/trading/vximg/wineBottleIcon.png"} className="wineBottleIcon" alt="aa" /></div>
                    <div className="wineName">Name: {product.wineName}<br /><small>{product.source}</small></div>
                    <input type="hidden" className="rsPrice" name="prezzo_vendita" value={product.winePrice} />
                    <input type="hidden" name="etichetta_id" value={product.id} />
                    <div>Subtotal: {product.quantity_bottle}</div>
                    <div>Bottles: {product.winePrice * this.state.quantity}</div>

                </div>

            )
        });

        return (
            <div className="container-fluid">
                {productsList}
            </div>
        )

    }
}


export default Products