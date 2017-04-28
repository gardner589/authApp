
import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Octicons"
import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity,
   ScrollView,
   RefreshControl,
   TextInput
} from 'react-native';
import LoadingIndicator from "./modals/loadingIndicator"

import {connect} from 'react-redux';
import {createTodo} from "../actions"
var NewTodo = React.createClass({

   getInitialState(){
      return{
         newTodoText:undefined,
         loading: false,
      }
   },

   addNewTodo(){
      var {newTodoText} = this.state;
      var {dispatch} = this.props;
      if (newTodoText && newTodoText !=""){
         this.setState({
            loading:true
         });
         dispatch(createTodo(newTodoText)).then(()=>{
            this.setState({loading:false})
            this.props.navigator.pop();
         })
      }
   },

   onBack(){
      this.props.navigator.pop()
   },

   render() {
      var renderScrollOrLoad = () =>{
         if (this.state.loading){
            return (
                  <LoadingIndicator />
         )
      } else {
         return (
            <ScrollView
               contentContainer style ={styles.scrollViewContainer}
               automaticallyAdjustContentInsets={false}>
               <View style={styles.inputContainer}>
                  <TextInput
                     onChangeText ={(newTodoText)=>{
                        this.setState({newTodoText})
                     }}
                     placeholder="New To-Do Text"
                     style={styles.input}
                  />
               </View>
            </ScrollView>
         )
      }
   };

   return (
      <View style ={styles.container}>
         <View style ={styles.topBar}>
            <TouchableOpacity onPress={this.onBack}>
               <Icon
                  name="chevron-left"
                  size={20}
                  color="white"
               />
            </TouchableOpacity>
            <Text style={styles.title}>
               New Todo
            </Text>
            <TouchableOpacity onPress={this.addNewTodo}>
               <Icon
                  name= "check"
                  size={20}
                  color="white"
               />
            </TouchableOpacity>

         </View>
         {renderScrollOrLoad()}
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
   inputContainer:{
      padding:5,
      paddingLeft:10,
      margin:10,
      borderWidth:2,
      borderRadius:10,
      borderColor:"#2ecc71"
   },

   input:{
      height:26
   }

});

var mapStatetoProps =(state) =>{
   return {
      todos: state.todos
   }
}
module.exports = connect(mapStatetoProps)(NewTodo);
