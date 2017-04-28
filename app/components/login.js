import {reduxForm} from "redux-form";
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity,
} from 'react-native';
import LoadingIndicator from './modals/loadingIndicator';

import {loginUser, signupUser,addAlert} from "../actions"

var Login = React.createClass({
   getInitialState: function(){
      return {
         loading:false,
         animating:false
      }
   },
   onSignIn: function (){
      var {dispatch, fields:{email,password}} = this.props;
      this.setState({
         loading:true,
         animating:true
      });
      dispatch(loginUser(email.value,password.value)).then(()=>{
         this.setState({
            loading:false,
            animating:false,
         });
      })

   },
   onSignUp: function (){
      var {dispatch, fields:{email,password}} = this.props;
      this.setState({
         loading:true,
         animating:true
      });
      dispatch(signupUser(email.value,password.value)).then(()=>{
         this.setState({
            loading:false,
            animating:false
         });
      });
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

      if (this.state.animating) {
         return(
               <LoadingIndicator />
         )

      } else {
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
                  <TouchableOpacity onPress={this.onSignIn}>
                     <Text style={styles.button} >
                        SIGN IN
                     </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.onSignUp}>
                     <Text style={styles.button}>
                        SIGN UP
                     </Text>
                  </TouchableOpacity>
               </View>
            </View>
         );
      }
   }
});

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      paddingTop: 20,
      backgroundColor:"#0A3634"

   },
   titleContainer:{
      padding:10
   },
   title:{
      color:"white",
      fontSize: 35,
      marginTop:20,
      marginBottom:20,
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
