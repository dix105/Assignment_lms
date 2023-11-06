import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { CourseModel } from "../types/courseModal";
import { enrolledCourses } from "../constant/Course";

const useEnrolledCourse = () => {
  const [courses, setCourse] = useState<CourseModel[] | undefined>();
  useEffect(() => {
    if (auth.currentUser?.email && typeof courses === "undefined") {
      setCourse(enrolledCourses[auth.currentUser.email]);
    }
  }, [auth.currentUser?.email]);

  return { courses };
};

export default useEnrolledCourse;
