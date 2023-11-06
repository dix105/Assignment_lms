import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { SplashScreen, Stack, router } from "expo-router";
import { Button, View } from "react-native";
import useAuth from "../../Hooks/useAuth";
import PrimaryButton from "../PrimaryButton";
import { width } from "../../constant/Dimensions";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
interface Props {}

const RootLayout = (props: Props) => {
  const { logout } = useAuth();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        SplashScreen.hideAsync();

        router.replace("/");
      } else {
        console.log("user is signed out");
        SplashScreen.hideAsync();
        router.replace("/(auth)/login");
      }
    });
    return unsub;
  }, []);

  // here we don't have to specify all the screens just add when we need changes in header
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "My learning",
          headerRight: () => (
            <TouchableOpacity onPress={logout}>
              <AntDesign name="logout" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="AllCourseScreen/index"
        options={{ headerShown: true, headerTitle: "All Courses" }}
      />
    </Stack>
  );
};

export default RootLayout;
