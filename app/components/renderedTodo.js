
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View
} from 'react-native';

var RenderedTodo = React.createClass({
   var renderTodos = () =>{
      return this.props.todos.map((todo)=>{
         return (
            <RenderedTodo key={todo._id} id={todo._id} text={todo.text} />
         )
      });
   };

   render() {
      return (
         <View style={styles.todoContainer}>
            <Text>
            {This.props.text}
            </Text>
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

module.exports = RenderedTodo;
