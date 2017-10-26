import React, {Component} from 'react';
import './assets/reset.scss';
import './app.scss';
import NavBar from './components/NavBar/navBar';
import Banner from './components/crousel-banner/banner';

class App extends Component {

    render(){
        return(
            <div>
                <NavBar/>
                <Banner/>
            </div>
        )
    }
}

export default App;