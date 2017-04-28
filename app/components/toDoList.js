
import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Octicons"
import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity,
   ScrollView,
   RefreshControl,

} from 'react-native';

import {connect} from 'react-redux';

import NewTodo from "./newTodo";
import {unauthUser,getTodos} from "../actions"


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






var ToDoList = React.createClass({
   getInitialState(){
      return {
         refreshing:false
      }
   },

   onLogout(){
      this.props.dispatch(unauthUser)
   },
   addNewTodo(){
      this.props.navigator.push({
         component:NewTodo,
         title:"New Todo",
         navigationBarHidden: true
      })
   },
   onRefresh(){
      this.setState({refreshin:true});
      this.props.dispatch(getTodos).then(()=>{
         this.setState({refreshing:false})
      })

   },

   render() {
      var renderTodos = () =>{
         return this.props.todos.map((todo)=>{
            return (
               <TodoItem key={todo._id}  text={todo.text} id={todo._id} />
            )
         });
      };
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

            </View>
            <ScrollView
               refreshControl={
                  <RefreshControl
                     refreshing={this.state.refreshing}
                     onRefresh={this.onRefresh} />
               }
               contentContainerStyle ={styles.scrollViewContainer}
               automaticallyAdjustContentInsets={false}>
               {renderTodos(), console.log(renderTodos())}
            </ScrollView>
         </View>
      );
   },
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

   },
   toDoContainer: {
      padding: 16,
      borderTopWidth: 1,
      borderBottomWidth: 1 ,
      marginTop: -1,
      borderColor:"#ccc"
   },

});

var mapStatetoProps =(state) =>{
   return {
      todos: state.todos
   }
}
module.exports = connect(mapStatetoProps)(ToDoList);
