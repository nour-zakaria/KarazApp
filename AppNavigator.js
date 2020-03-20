import React, { Component } from 'react';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Cong from './Cong';
import AssertPhone from './AssertPhone';
import AssertEmail from './AssertEmail';
import AccountPhone from './AccountPhone';
import AccountEmail from './AccountEmail';
import ForgetPass from './ForgetPass';
import CODE2 from './CODE2';
import CODE from './CODE';
import NewPass from './NewPass';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator(
{
Home: {
screen: Home,
  navigationOptions: {
    header: null,
    }
},
Signup: {
screen: Signup,
navigationOptions: {
      header: null,
    }
},
Login: {
screen: Login,
navigationOptions: {
      header: null,
    }
},
Cong: {
screen: Cong,
navigationOptions: {
      header: null,
    }
},
AssertEmail: {
screen: AssertEmail,
navigationOptions: {
      header: null,
    }
},
AssertPhone: {
screen: AssertPhone,
navigationOptions: {
      header: null,
    }
},
CODE: {
screen: CODE,
navigationOptions: {
      header: null,
    }
},
CODE2: {
screen: CODE2,
navigationOptions: {
      header: null,
    }
},

ForgetPass: {
screen: ForgetPass,
navigationOptions: {
      header: null,
    }
},
NewPass: {
screen: NewPass,
navigationOptions: {
      header: null,
    }
},
AccountEmail: {
screen: AccountEmail,
navigationOptions: {
      header: null,
    }
},
AccountPhone: {
screen: AccountPhone,
navigationOptions: {
      header: null,
    }
},


},
{
initialRouteName: 'Home',
}


);
export default createAppContainer(AppNavigator);







