import React from "react";
import { Image, Text, View } from "react-native";

interface Props {
  title: string;
  subtitle?: string;
}

const NoData = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={require("../../assets/images/No_data.png")}
        style={{ width: 150, height: 150 }}
      />
      <Text>{props.title}</Text>
      <Text>{props.subtitle}</Text>
    </View>
  );
};

export default NoData;
