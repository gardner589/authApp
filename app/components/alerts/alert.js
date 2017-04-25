
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View,
   TouchableWithoutFeedback
} from 'react-native';
import {connect} from "react-redux";

import {removeAlert} from "../../actions";

var Alert = React.createClass({
   onRemoveAlert() {
      var {dispatch, alert} = this.props;
      this.props.dispatch(removeAlert(alert.id))
   },
   render() {
      return (
         <TouchableWithoutFeedback onPress={this.onRemoveAlert}>
            <View style={styles.container}>
               <Text style={styles.text}>
                  {this.props.alert.text}
               </Text>
            </View>
         </TouchableWithoutFeedback>
   );
}
});

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "row",
      padding: 16,
      backgroundColor: "#83312C",
      borderColor:"#E90527",
      borderTopWidth: 2,

   },

   text: {
      color:"#a94442"
   }

});

module.exports = connect()(Alert)
