import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.compoment'
import{Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.compoment'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.compoment'
import Header from './compoments/header/header.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component.jsx'

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

componentWillUnmount(){
  this.unsubscribeFromAuth();
}


render(){


  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route exact path='/checkout' component={CheckoutPage}/>

    <Route exact path='/signin' 
      render={()=> this.props.currentUser?(
        <Redirect to= '/' />
        ):(
        <SignInAndSignUpPage/>
        )

      }
    />

    </Switch>
    </div>
  );
}
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);