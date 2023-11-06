import React, { useEffect, useState } from "react";
import { CourseModel } from "../types/courseModal";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const useAllCourse = () => {
  const [courses, setCourse] = useState<CourseModel[] | undefined>();
  useEffect(() => {
    getAllCourse();
  }, []);

  const getAllCourse = async () => {
    await getDocs(collection(db, "Course")).then((querySnapshot) => {
      let courses: CourseModel[] = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        courses.push(doc.data() as CourseModel);
      });
      setCourse(courses);
    });
  };

  return { courses };
};

export default useAllCourse;
