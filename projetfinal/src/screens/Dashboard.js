import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";

const Dashboard = ({navigation}) => (
  <Background>
  <Logo />
  <Header>Projet Final</Header>
  <Paragraph>
  Merci pour votre visite 
  </Paragraph>
  <Button 
  mode="outlined" onPress={() => navigation.navigate("mainPage")}>
  Entrer
  </Button>
  
  <Button mode="outlined" onPress={() => logoutUser()}>
  Sortir
  </Button>
  
  
  
  </Background>
  
  );
  
  export default memo(Dashboard);
  