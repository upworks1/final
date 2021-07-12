import firebase from "firebase/app";
import "firebase/auth";

export const logoutUser = () => {
  firebase.auth().signOut();
};

export const signInUser = async ({ name, email, password }) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    firebase.auth().currentUser.updateProfile({
      displayName: name
    });

    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          error: "Adresse e-mail déjà enregistrée."
        };
      case "auth/invalid-email":
        return {
          error: "Adresse électronique incorrectement formatée."
        };
      case "auth/weak-password":
        return {
          error: "mot de passe trop faible."
        };
      case "auth/too-many-requests":
        return {
          error: "Trop de tentatives. Attendez 1 minute et réessayez."
        };
      default:
        return {
          error: "Vérifiez votre connexion Internet."
        };
    }
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Courrier mal formaté."
        };
      case "auth/user-not-found":
      case "auth/wrong-password":
        return {
          error: "Mot de passe ou courriel erroné"
        };
      case "auth/too-many-requests":
        return {
          error: "Trop d'essais. Attendez une minute et réessayez."
        };
      default:
        return {
          error: "Vérifiez votre connexion Internet."
        };
    }
  }
};

export const sendEmailWithPassword = async email => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Courriel mal formaté."
        };
      case "auth/user-not-found":
        return {
          error: "L'utilisateur avec cet email n'existe pas."
        };
      case "auth/too-many-requests":
        return {
          error: "Trop d'essais, attendez une minute et réessayez."
        };
      default:
        return {
          error: "Vérifiez votre connexion Internet."
        };
    }
  }
};
