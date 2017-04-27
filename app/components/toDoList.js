
import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Octicons"
import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity,
   ScrollView,
   RefreshControl
} from 'react-native';

import {connect} from 'react-redux';

var ToDoList = React.createClass({
   getInitialState(){
      return {
         refreshing:false
      }
   },

   onLogout(){

   },
   addNewTodo(){

   },
   onRefresh(){

   },

   render() {
      console.log(this.props.todos);
      return (
         <View style={styles.container}>
            <View style={styles.topBar}>
               <TouchableOpacity onPress={this.onLogout}>
                  <Icon
                     name="x"
                     size={20}
                     color="white"
                  />
               </TouchableOpacity>
               <Text style={styles.title}>
                  To-Do list
               </Text>
               <TouchableOpacity onPress={this.addNewTodo}>
                  <Icon
                     name= "plus"
                     size={20}
                     color="white"
                  />
               </TouchableOpacity>
               <ScrollView
                  refreshControl={
                     <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                     />
               }
               contentContainerStyle ={styles.scrollViewContainer}
               automaticallyAdjustContentInsets={false}>

            </ScrollView>

         </View>
      </View>
   );
}
});

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
   },
   topBar: {
      padding:16,
      paddingTop:28,
      paddingBottom:8,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      backgroundColor:"#2F7575",
   },
   title:{
      justifyContent:"center",
      color:"white",
      fontSize:20,

   }

});

var mapStatetoProps =(state) =>{
   return {
      todos: state.todos
   }
}
module.exports = connect(mapStatetoProps)(ToDoList);
