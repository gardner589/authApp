import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import LoadingIndicator from './loadingIndicator';

export default class Loading{

   constructor() {
      this.state = {animating: true};
   }
   closeActivityIndicator() {
      setTimeout(() => {
         this.setState({animating: false});
      }, 3000);
   }
   componentDidMount() {
      this.closeActivityIndicator();
   }

   render() {
      return (
         <Loading
            animating = {this.state.animating}/>
      );
   }
}
