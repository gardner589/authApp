import {reduxForm} from "redux-form";
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity,
} from 'react-native';



var Login = React.createClass({
   onSignIn: function (){
      var {email,password} = this.props.fields;
      console.log(this.props.fields);
      console.log(email.value, password.value)
   },


   render() {
      var {fields: {email,password}} = this.props;

      var renderError = (field)=>{
         if (field.touched && field.error){
            return(
               <Text style= {styles.formError}>
                  {field.error}
               </Text>
            )
         }
      }
      return (
         <View style={styles.container}>

            <View style ={styles.titleContainer}>
               <Text style={styles.title}>
                  To-Do
               </Text>
            </View>

            <View style= {styles.field}>
               <TextInput
                  {...email}
                  style={styles.textInput}
                  placeholder="Email"
               />
               <View>
                  {renderError(email)}
               </View>
            </View>

            <View style= {styles.field}>
               <TextInput
                  {...password}
                  style={styles.textInput}
                  placeholder="Password"
               />
               <View>
                  {renderError(password)}
               </View>
            </View>

            <View style= {styles.buttonContainer}>
               <TouchableOpacity>
                  <Text style={styles.button} onPress={this.onSignIn}>
                     SIGN IN
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity>
                  <Text style={styles.button}>
                     SIGN UP
                  </Text>
               </TouchableOpacity>
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
      paddingTop: 20,
      backgroundColor:"#CCCCCC"

   },
   titleContainer:{
      padding:10
   },
   title:{
      color:"white",
      fontSize: 35
   },
   field:{
      borderRadius: 5,
      padding:5,
      paddingLeft:8,
      margin:7,
      marginTop:0,
      backgroundColor:"white"
   },
   textInput:{
      height:26,
   },
   buttonContainer:{
      padding:20,
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems: "center",

   },
   button:{
      fontSize:30,
      color: "white"
   },

   formError:{
      color:"#F4506B"

   }

});

var validate = (formProps) =>{
   var errors = {};
   if (!formProps.email){
      errors.email = "Please enter an email."
   }
   if (!formProps.password){
      errors.password = "Please enter an password."
   }
   return errors;
}

module.exports = reduxForm({
   form:"login",
   fields:["email", "password"],
   validate: validate
}, null, null)(Login);
