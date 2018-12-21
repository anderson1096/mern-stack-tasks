import React, {Component} from 'react';
import Navbar from './navbar';
import Header from './header';
import Tasks from './tasks';

class App extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Header />
                <Tasks />
            </div>
        );
    }

}

export default App;