import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import './style.css';

class About extends Component {
    render(){
        return(
            <div className="itour-container-grey">
                <Grid>
                    <Row>
                        <Col md={6} className="about-img" >
                        </Col>
                        <Col md={6} className="itour-text">
                           <p className="itour-text-title">
                           Welcome to Bon Voyage since 1898 established Far far away.
                           </p>
                            <p className="itour-text-content">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.                        
                            </p>
                            <p className="itour-text-content">
                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                            </p>
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

export default About;