import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import promo_1 from '../../../../global/images/promo-1.jpg';
import promo_2 from '../../../../global/images/promo-2.jpg';
import promo_3 from '../../../../global/images/promo-3.jpg';
import "./style.css";


class ProductPromo extends Component{
    render(){
        return(

            <div className="itour-container" >
               <Grid>

                    <Row>
                        <Col md={3} className="promo ftco-animate fadeInUp ftco-animated">
                            <div style={{ backgroundImage: `url(${promo_1})` }} className="product-promo-img"></div>
                            <div className="text text-center">
                                <h2>Group Cruises</h2>
                                <h3 className="price"><span>from</span> $299</h3>
                                <a href="#" className="read">Read more</a>
                            </div>
                        </Col>
                        <Col md={3} className="promo ftco-animate fadeInUp ftco-animated">
                            <div style={{ backgroundImage: `url(${promo_2})` }} className="product-promo-img"></div>
                            <div className="text text-center">
                                <h2>Group Cruises</h2>
                                <h3 className="price"><span>from</span> $299</h3>
                                <a href="#" className="read">Read more</a>
                            </div>
                        </Col>
                        <Col md={3} className="promo ftco-animate fadeInUp ftco-animated">
                            <div style={{ backgroundImage: `url(${promo_3})` }} className="product-promo-img"></div>
                            <div className="text text-center">
                                <h2>Group Cruises</h2>
                                <h3 className="price"><span>from</span> $299</h3>
                                <a href="#" className="read">Read more</a>
                            </div>
                        </Col>
                        <Col md={3} className="promo ftco-animate fadeInUp ftco-animated">
                            <div style={{ backgroundImage: `url(${promo_1})` }} className="product-promo-img"></div>
                            <div className="text text-center">
                                <h2>Group Cruises</h2>
                                <h3 className="price"><span>from</span> $299</h3>
                                <a href="#" className="read">Read more</a>
                            </div>
                        </Col>
                    </Row>
               </Grid>
            </div>

        );
    }
}

export default ProductPromo;