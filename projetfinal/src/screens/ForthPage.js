import React, { Component, } from 'react';
import {  Text, StyleSheet, } from 'react-native';
import Background from "../components/Background";
import Button from "../components/Button";
import firebase from '@firebase/app'
import { ScrollView } from 'react-native-gesture-handler';

export default class ForthPage extends Component{
  
  constructor() {
    super()
    this.state = {      
      reservas:[],
    }
  }
  
  componentDidMount() {
    const readUsersData = ()=> {
      const nameRef =  firebase.database().ref('user0001')
      nameRef.on('value', (snapshot)=> {
        const state = snapshot.val()
        this.setState({reservas:state}) })
      }
      readUsersData();
    }
    
    render(){
      const reservas =   JSON.stringify(this.state.reservas);
      const {navigate} = this.props.navigation;
      
      return (
        <Background>
        
        <ScrollView>
        <Text style= {styles.TextStyle}>  Mes reservations: {reservas}</Text>  
        <Button 
        color= 'orange'
        title= 'Aller au menu principal'
        style = {styles.TextStyle}
        onPress={() =>
          {navigate('mainPage')
          alert('Merci de votre visite')
        }
        
      }
      > Menu </Button>
      
      </ScrollView>
      
      </Background>
      )
    }
    
  }
  
  const styles = StyleSheet.create({
    
    TextStyle: {
      flex:1,
      alignItems:'center',
      alignContent:'center',
      fontSize: 23,
      textAlign: 'center',
      color: 'black',
      justifyContent: "center",
      
    },
  });
  
 