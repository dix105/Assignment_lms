import { View, Text, FlatList } from "react-native";
import React from "react";
import useAllCourse from "../../Hooks/useAllCourse";
import Loader from "../../components/Loader";
import CourseCard from "../../components/CourseCard";
import NoData from "../../components/NoData";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const AllCourseScreen = () => {
  const { courses } = useAllCourse();

  if (typeof courses === "undefined") {
    return <Loader />;
  }
  return (
    <SafeAreaView>
      <FlatList
        data={courses}
        renderItem={({ item }) => <CourseCard data={item} />}
        ListEmptyComponent={() => <NoData title="No course found at moment" />}
      />
    </SafeAreaView>
  );
};

export default AllCourseScreen;
