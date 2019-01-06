import React, {Component} from 'react';
import Intro from '../Home/Components/Intro/Intro';
import About from '../Home/Components/About/About';
import OurService from '../Home/Components/OurService/OurService';
import ProductPromo from '../Home/Components/ProductPromo/ProductPromo';

class Home extends Component {
    render(){
        return(
            <div>
                <Intro />
                <About />
                <ProductPromo />
                <OurService />
            </div>
        );
    }
}

export default Home;