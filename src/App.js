
import './App.css';
import Header from './Header';
import Home from './Home';
import{BrowserRouter as Router , Switch, Route }from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import Registration from './Registration';

function App() {
    return (
       
        <Router>
            <div className = "App">
                
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/Registration">
                    <Registration/>
                </Route>

                <Route path="/Checkout">
                      <Header/>
                    <Checkout/>
                </Route>
                <Route path="/">
                     <Header/>
                    <Home />
                </Route>
            </Switch>
        </div>
       </Router>
    );
}

export default App;