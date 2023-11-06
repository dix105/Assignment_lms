import { Alert } from "react-native";
import { auth } from "../firebase/firebase";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const useAuth = () => {
  // * Functions

  const login = async (email: string, password: string) => {
    console.log(email, password);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error: any) {
      Alert.alert(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      console.log(error?.code);
    }
  };

  return {
    login,
    logout,
  };
};

export default useAuth;
