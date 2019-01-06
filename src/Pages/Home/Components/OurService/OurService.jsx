import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './style.css';

 class OurService extends Component{
    render(){
        return(
         <Grid className="itour-container">
            <Row className="justify-content-center mb-5 pb-5">
              <Col className="text-center heading-section ftco-animate">
                <h2>Our Services</h2>
              </Col>
            </Row>
            <Row className="row">
              <Col md={6} lg={3} className="d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon d-flex justify-content-center mb-3">
                      <span className="align-self-center flaticon-sailboat"></span>
                    </div>
                  </div>
                  <div className="media-body p-2">
                    <h3 className="heading">Special Activities</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>      
              </Col>
              <Col md={6} lg={3} className="d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon d-flex justify-content-center mb-3">
                      <span className="align-self-center flaticon-around"></span>
                    </div>
                  </div>
                  <div className="media-body p-2">
                    <h3 className="heading">Travel Arrangements</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>      
              </Col>
              <Col md={6} lg={3} className="d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon d-flex justify-content-center mb-3">
                      <span className="align-self-center flaticon-compass"></span>
                    </div>
                  </div>
                  <div className="media-body p-2">
                    <h3 className="heading">Private Guide</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>    
              </Col>
    
              <Col md={6} lg={3} className="d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon d-flex justify-content-center mb-3">
                      <span className="align-self-center flaticon-map-of-roads"></span>
                    </div>
                  </div>
                  <div className="media-body p-2">
                    <h3 className="heading">Location Manager</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>      
              </Col>
            </Row>
          </Grid>

        );
    }
}

export default OurService;