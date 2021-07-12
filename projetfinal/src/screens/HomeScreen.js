import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";

const HomeScreen = ({ navigation }) => (
  <Background>
  <Logo />
  <Header> Projet Final </Header>
  
  <Button 
  mode="contained" 
  onPress={() => navigation.navigate("LoginScreen")}
  
  >
  Entrer
  </Button>
  <Button
  mode="outlined"
  onPress={() => navigation.navigate("RegisterScreen")}
  >
  s'enregistrer
  </Button>
  

  </Background>
  );
  
  


  export default memo(HomeScreen);
  