import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.compoment'
import{Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.compoment'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.compoment'
import Header from './compoments/header/header.component'


function App() {
  return (
    <div>
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route path='/signin' component={SignInAndSignUpPage}/>


    </Switch>
    </div>
  );
}

export default App;
