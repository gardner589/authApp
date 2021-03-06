import React, { Component } from 'react';
import {Provider} from "react-redux";
import {
   AppRegistry,
   StyleSheet,
   Text,
   View
} from 'react-native';

import App from "./app/components/app"
import {configureStore} from "./app/store"

export default class authApp extends Component {
   render() {
      return (
         <Provider store={configureStore()}>
            <App />
      </Provider>

   );
}
}

AppRegistry.registerComponent('authApp', () => authApp);
