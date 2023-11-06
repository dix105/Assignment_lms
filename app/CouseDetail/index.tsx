import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

import React from "react";
import { useLocalSearchParams } from "expo-router";
import { CourseModel } from "../../types/courseModal";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo } from "@expo/vector-icons";
import ProgressBar from "../../components/ProgressBar";

const CouseDetail = () => {
  const { data }: any = useLocalSearchParams();
  const courseData: CourseModel = JSON.parse(data);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",

        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <ScrollView>
        <View>
          <Image
            source={require("../../assets/images/co.jpg")}
            style={{ width: "100%", height: 200 }}
          />
          <View style={{ width: "95%", margin: 10 }}>
            <View
              style={{
                marginBottom: 5,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {courseData.name}
              </Text>
              <Text>by{courseData.instructor}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 5,
                alignItems: "center",
              }}
            >
              <AntDesign name="clockcircleo" size={20} color={"black"} />
              <Text style={{ marginLeft: 10, fontSize: 17 }}>
                {courseData.duration}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 5,
                alignItems: "center",
              }}
            >
              <Entypo name="location-pin" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 17 }}>
                {courseData.location}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 5,
                alignItems: "center",
              }}
            >
              <Entypo name="calendar" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 17 }}>
                {courseData.schedule}
              </Text>
            </View>
            <View>
              <Text
                style={{ marginVertical: 10, fontSize: 20, fontWeight: "bold" }}
              >
                Course Description
              </Text>
              <Text style={{ fontSize: 17 }}>{courseData.description}</Text>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Prerequisites
              </Text>
              {courseData.prerequisites.map((item, index) => (
                <Text style={{ fontSize: 17 }}>
                  {index}. {item}
                </Text>
              ))}
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Syllabus</Text>
              {courseData.syllabus.map((item, index) => (
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      marginVertical: 5,
                    }}
                  >
                    Week {item.week}
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "700" }}>
                    {item.topic}
                  </Text>
                  <Text style={{ fontWeight: "400" }}>{item.content}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        {courseData.progress ? (
          <View style={{ margin: 10 }}>
            <Text style={{ fontWeight: "700", fontSize: 18 }}>
              Progress:{courseData.progress}%
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            style={{
              width: "95%",
              alignItems: "center",
              height: 50,
              margin: 10,
              borderRadius: 10,
              justifyContent: "center",
              backgroundColor: "blue",
            }}
            onPress={() => {
              if (courseData.enrollmentStatus === "Open") {
                Alert.alert("Registered Successfully");
              } else {
                Alert.alert("Registration Closed");
              }
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Register
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: "#ccc",
    borderRadius: 10,
    margin: 10,
  },
  bar: {
    height: 20,
    backgroundColor: "#333",
    borderRadius: 10,
  },
});

export default CouseDetail;
