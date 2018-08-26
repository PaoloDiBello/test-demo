import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class Products extends Component {
    state = {
        quantity: 1,
        key: 0,
        show: null,
        show2: null,
        hovering: false,
        keyb: 0
    }

    handleShow = this.handleShow.bind(this);
    handleClose = this.handleClose.bind(this);
    handleShow2 = this.handleShow2.bind(this);
    handleClose2 = this.handleClose2.bind(this);

    handleClose(id) {
        this.setState({ show: id });
    }

    handleShow(id) {
        this.setState({ show: id });
    }

    handleClose2(id) {
        this.setState({ show2: id });
    }

    handleShow2(id) {
        this.setState({ show2: id });
    }

    handleChange(event) {
        this.setState({ quantity: event.target.value, key: event.target.id })
    }

    handleOnMouseLeave() {

    }


    render() {
        const { products } = this.props;
        const productsList = products.map(product => {
            return (

                <div className="wineBox" key={product.id} data-id={product.id}>

                    {/*///////////////////////////////////////////////////////////////////////////*/}

                    <Modal
                        show={this.state.show + "" === product.id + ""} onHide={this.handleClose}
                    >
                        <Modal.Header closeButton closeLabel="close window" className="modal-content modal-content-bg">
                            <img src={product.img} alt="logo" />

                        </Modal.Header>

                    </Modal>

                    {/*///////////////////////////////////////////////////////////////////////////*/}


                    <Modal show={this.state.show2 + "" === product.id + ""} onHide={this.handleClose2}
                    >
                        <Modal.Header closeButton closeLabel="close window" className="modal-content modal-content-bg" style={{ width: 900 + "px" }}>
                            <div className="modal-header">
                                <div className="wsWineName">{product.wineName} - {product.wineMaker}</div>
                                <div className="wsWineDenomination">Trentino DOC Chardonnay</div>
                                <div className="wsWinemaker">{product.name}</div></div>
                            <div className="modal-body">
                                <div id="wsColLx">
                                    <form>
                                        <div id="wsColLxLx"><img src={product.img} alt="" className="wsBottleImage no" />
                                        </div>
                                        <div id="wsColLxRx"><br />
                                            <strong>Geographic area:</strong><br />{product.source}<br />
                                            <br /><strong>Type:</strong><br />{product.wineName}<br />
                                            <br /><strong>Volume:</strong><br />0.75 lt<br />
                                            <br /><strong>Service temperature:</strong><br />11.00 °<br />
                                            <br /><strong>Alcoholic content:</strong><br />12.50 °</div>
                                        <div className="clearfix"></div><hr />

                                        <div className="wsWinePrice">$ {product.winePrice}<div className="vatFlag">+&nbsp;Vat</div></div>
                                        <div className="wsQuantityContainer">x <input type="number" name="quantity_bottle" className="rsQuantity wineQuantity" step={1} max={product.quantity_bottle} defaultValue={1} min={1} onChange={this.handleChange.bind(this)} id={product.id} />

                                            <input type="hidden" className="wsPrice" name="prezzo_vendita" value={product.winePrice} />
                                            <input type="hidden" name="etichetta_id" value={product.id} />
                                            <input type="hidden" name="quantita_per_contenitore" value={product.quantity_bottle} />
                                            <img src={"http://www.viniexport.com/trading/vximg/wineBottleIcon.png"} className="wineBottleIcon" style={{ height: 40 + 'px', paddingBottom: -40 + 'px' }} alt="icon-bottle" /></div><div className="clearfix"></div><div className="wsBuyButton">ADD TO CART <i className="fa fa-shopping-cart"></i></div><div className="clearfix"></div><div className="wsPriceSummary">Subtotal <span className="wsTotalBottles">{product.quantity_bottle} </span>
                                            Bottles: $ <span className="wsTotalPrice">{(this.state.key + "") === (product.id + "") ? (product.winePrice * this.state.quantity).toFixed(2) : product.winePrice}</span></div></form></div><div id="wsColRx"><br /><strong>Vinification:</strong><br />Vinificazione tradizionale con breve contatto sulle bucce per garantire la massima conservazione e la trasmissione al vino degli aromi varietali caratteristici dell’uva e successiva fermentazione a bassa temperatura.<br /><strong>Organoleptic properties:</strong><br />Questo vino offre un bouquet particolarmente fruttato ed elegante, con sentori di mela, albicocca, melone bianco e agrumi. Al palato si presenta armonico con moderata acidità.<br /><strong>Pairings:</strong><br />Eccellente aperitivo, si accompagna con antipasti, minestre, verdure e pesce.</div>
                                <div className="clearfix"></div>
                            </div>

                        </Modal.Header>

                    </Modal>

                    {/*///////////////////////////////////////////////////////////////////////////*/}

                    <div className="wineBoxColLx">
                        <div className="zoomWineLabel">
                            <div className="pull-right"><i className="fa fa-plus-square pull-right" data-toggle="modal" data-target="#zoomImageModal" onClick={() => this.handleShow(product.id)}></i>
                            </div>
                            <div className="wineLabelBox">
                                <img className="wineLabelBoxBg img-fluid" src={product.img} alt={product.wineName} />
                            </div>

                        </div>
                        <a onClick={() => this.handleShow2(product.id)} className="padding-sheet">Product Sheet</a>
                    </div>
                    <div className="wineBoxColRx" onMouseEnter={this.handleMouseHover}
                        onMouseLeave={() => this.setState({ hovering: false, quantity: 1 })}>

                        {this.state.keyb + "" === product.id + "" && this.state.hovering ?
                            <div className="inside-rx-box">
                                Select quantity :
                    <div><input type="number" name="quantity_bottle" className="rsQuantity wineQuantity" step={1} max={product.quantity_bottle} defaultValue={1} min={1} onChange={this.handleChange.bind(this)} id={product.id} />
                                    &nbsp;<img src={"http://www.viniexport.com/trading/vximg/wineBottleIcon.png"} className="wineBottleIcon" alt="bottle_icon" /></div>
                                <br />
                                <div>Subtotal: <strong>{product.quantity_bottle}</strong></div>
                                <div>Bottles: <strong>$ {(this.state.key + "") === (product.id + "") ? product.bottles = (product.winePrice * this.state.quantity).toFixed(2) : product.winePrice}</strong></div>

                            </div> : <div className="inside-rx-box">


                                {/*///////////////////////////////////////////////////////////////////////////*/}

                                <div className="wineName">{product.wineName} - {product.wineMaker}<br /><small>{product.source}</small></div>
                                <input type="hidden" name="etichetta_id" value={product.id} />
                                <br />
                                <input type="hidden" className="rsPrice" name="prezzo_vendita" value={product.winePrice} />
                                <div className="rsPrice winePrice"> $ {product.winePrice}<span class="vatSpan">+Vat</span></div>

                                {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
                            </div>
                        }

                        <br />
                        <div className="buy-button" onMouseEnter={() => this.setState({ hovering: true, keyb: product.id })}>ADD TO CART <i className="fa fa-shopping-cart"></i>  </div>
                    </div>

                    <div className="clearfix" />

                    <div className="winemakerName" title={product.wineName}>{product.wineName}</div>



                </div>



            )
        });

        return (
            <div className="container-fluid" >
                {productsList}
            </div>
        )

    }
}


export default Products