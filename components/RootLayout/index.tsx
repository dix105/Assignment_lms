import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import RootLayoutNav from "../DashboardLayout";
import { router } from "expo-router";

interface Props {}

const RootLayout = (props: Props) => {
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/(dashboard)/");
      } else {
        console.log("user is signed out");

        router.replace("/(auth)/login");
      }
    });
    return unsub;
  }, []);

  return <RootLayoutNav />;
};

export default RootLayout;
