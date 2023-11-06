import React from "react";
import { Image, Text, View } from "react-native";
import { CourseModel } from "../../types/courseModal";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  data: CourseModel;
}

const CourseCard = ({ data }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <Image
        source={require("../../assets/images/co.jpg")}
        style={{ width: "100%", height: 200 }}
      />
      <View style={{ width: "100%", marginVertical: 10 }}>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 5,
            justifyContent: "space-between",
          }}
        >
          <Text>{data.name}</Text>
          <Text>{data.instructor}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 5,
            justifyContent: "space-between",
          }}
        >
          <Text>{data.duration}</Text>
          <Text>{data.location}</Text>
        </View>
        <View>
          <Text>{data.schedule}</Text>
          <Link
            href={{
              pathname: "/CouseDetail/",
              params: { data: JSON.stringify(data) },
            }}
            style={{ marginVertical: 10 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ marginRight: 10 }}>View Details</Text>
              <AntDesign name="rightcircle" size={20} color={"black"} />
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default CourseCard;
