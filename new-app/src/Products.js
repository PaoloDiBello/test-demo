import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Products extends Component {
    state = {
        quantity: 1,
        key: 0,
        show: false,
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }


    handleChange(event) {
        this.setState({ quantity: event.target.value, key: event.target.id })
    }


    render() {
        const { products } = this.props;
        const productsList = products.map(product => {
            return (

                <div className="wineBox" key={product.id} data-id={product.id}>


                    <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                            <img className="wineLabelBoxBg img-fluid" src={product.img} alt={product.wineName} />
                        </Modal.Header>
                        <Modal.Footer>
                            <Button onClick={this.handleClose.bind(this)}>Close</Button>
                        </Modal.Footer>

                    </Modal>
                    <div className="wineBoxColLx">
                        <div className="zoomWineLabel">
                            <div className="pull-right"><i className="fa fa-plus-square pull-right" data-toggle="modal" data-target="#zoomImageModal" onClick={this.handleShow.bind(this)}></i>
                            </div>
                            <div className="wineLabelBox">
                                <img className="wineLabelBoxBg img-fluid" src={product.img} alt={product.wineName} />
                            </div>

                        </div>
                        <a onClick={this.handleShow.bind(this)}>Product Sheet</a>
                    </div>
                    <div class="wineBoxColRx">

                        Select quantity :
                    <div>Quantity: <input type="number" name="quantity_bottle" className="rsQuantity wineQuantity" step={1} max={product.quantity_bottle} defaultValue={1} min={1} onChange={this.handleChange.bind(this)} id={product.id} />
                            &nbsp;<img src={"http://www.viniexport.com/trading/vximg/wineBottleIcon.png"} className="wineBottleIcon" alt="bottle_icon" /></div>
                        <div className="wineName">Name: {product.wineName}<br /><small>{product.source}</small></div>
                        <input type="hidden" className="rsPrice" name="prezzo_vendita" value={product.winePrice} />
                        <input type="hidden" name="etichetta_id" value={product.id} />
                        <div>Subtotal: {product.quantity_bottle}</div>
                        <div>Bottles: {(this.state.key + "") === (product.id + "") ? product.winePrice * this.state.quantity : product.winePrice}</div>

                    </div>
                    <div className="clearfix" />

                    <div className="winemakerName" title={product.wineName}>{product.wineName}</div>


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