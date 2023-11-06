import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import useEnrolledCourse from "../Hooks/useEnrolledCourse";
import NoData from "../components/NoData";
import { CourseModel } from "../types/courseModal";
import CourseCard from "../components/CourseCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";

const Dashboard = () => {
  const { courses } = useEnrolledCourse();
  if (typeof courses === "undefined") {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <>
      <StatusBar style="dark" />
      <View>
        <FlatList
          data={courses}
          renderItem={({ item }) => <CourseCard data={item} />}
          ListEmptyComponent={() => (
            <NoData title="You have Not Enrolled in any class" />
          )}
          ListFooterComponent={() => (
            <View style={{ alignItems: "center", marginVertical: 10 }}>
              <Link href="/AllCourseScreen/">
                <Text style={{ color: "blue" }}>View All Course</Text>
              </Link>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default Dashboard;
