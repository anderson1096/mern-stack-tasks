import React, {Component} from 'react';
import Navbar from './navbar';
import Banner from './banner';


class App extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Banner />
            </div>
        );
    }

}

export default App;