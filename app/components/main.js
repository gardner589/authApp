
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity,
   NavigatorIOS
} from 'react-native';

import ToDoList from "./toDoList";


var Main = React.createClass({
   render() {
      return (
         <NavigatorIOS
            initialRoute={{
               component: ToDoList,
               title:"Todo List",
               navigationBarHidden:true}}
               style = {{flex: 1}}/>
         );
      }
   });

   const styles = StyleSheet.create({
      container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
      },
   });


   module.exports = (Main);
   // import {unauthUser} from "../actions";
   //
   // onLogout: function(){
   //    this.props.dispatch(unauthUser);
   // },
   //
   //
   //  <TouchableOpacity onPress={this.onLogout}>
   //    <Text>
   //       Logout
   //    </Text>
   // </TouchableOpacity>
