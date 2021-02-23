import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Transactionscreen from './Screens/Transactionscreen';
import Searchscreen from './Screens/Searchscreeen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}}

const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:Transactionscreen},
  Search:{screen:Searchscreen}
})

const AppContainer = createAppContainer(TabNavigator)