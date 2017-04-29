
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity
} from 'react-native';

var TodoItem = React.createClass({
   render() {
      return (
         <View style={styles.toDoContainer}>
            <TouchableOpacity>
               <Text>
                  {this.props.text}
               </Text>
            </TouchableOpacity>
         </View>
      );
   }
});
const styles = StyleSheet.create({
   todoContainer: {
      padding: 16,
      borderTopWidth: 1,
      borderBottomWidth: 1 ,
      marginTop: -1,
      borderColor:"#ccc"
   },

});

module.exports = TodoItem;
