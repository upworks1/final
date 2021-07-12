import React, {Component} from 'react'
import { Text, View, StyleSheet, Animated } from 'react-native'
import Emoji from 'react-native-emoji'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Background from "../components/Background";
import { logoutUser } from "../api/auth-api";
import Button from "../components/Button";

export default class mainPage extends Component  {

  
  state = {
        fadeValue: new Animated.Value(2)
      };
    
      _start = () => {
        Animated.timing(this.state.fadeValue, {
          toValue: 1,
          duration: 1000
        }).start()
    }

    static navigationOptions = {
        title: 'Projet final',
      };
      render() {
        const { navigate } = this.props.navigation;
          return (
    <Background>     
          
          <Button mode="outlined" onPress={() => logoutUser()}>
  Sortir
  </Button>
          
          <Animated.View  >
          <TouchableOpacity onPress ={() => alert("Epitech") }>  
          <Emoji   
          name = "man"
          style={{fontSize: 40, textAlign:'center'}}        
          /> 
          <Text style={{fontSize:30,fontStyle:'italic',textAlign:'center'}}>Nous contacter</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => navigate ('ForthPage')}>  
          <Emoji 
          name = "beer"
          style={{fontSize: 40, textAlign:'center'}} 
          /> 
          <Text style={{fontSize:30,fontStyle:'italic',textAlign:'center'}}>Mes réservations</Text> 
          </TouchableOpacity> 
         
          <TouchableOpacity onPress ={() => navigate ('FirstPage')} > 
                 
          <Emoji 
          
          name = "🤘"
          style={{fontSize: 60, textAlign:'center'}} 
          
          /> 
          <Text style={{fontSize:40,fontStyle:'italic',textAlign:'center'}}> Reserver </Text> 
          </TouchableOpacity> 
          </Animated.View>
          </Background> 
    
       
  
    );
}
}