import { CourseModel } from "../types/courseModal";

type Courses = {
  [email: string]: CourseModel[];
};

export const enrolledCourses: Courses = {
  "student1@gmail.com": [
    {
      id: 1, // Unique identifier for the course
      name: "Introduction to React Native",
      instructor: "John Doe", // Name of the course instructor
      description:
        "Learn the basics of React Native development andbuild your first mobile app.",
      enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'InProgress'
      thumbnail:
        "https://cdn-ckjba.nitrocdn.com/XvHIXtRQMUYzLjoXbfBpiwAcydcSSOVj/assets/images/optimized/rev-b68df23/www.ciat.edu/wp-content/uploads/2022/10/react-logo.svg", //Link to the course thumbnail
      duration: "8 weeks", // Duration of the course
      schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to React Native",
          content:
            "Overview of React Native, setting up your development environment.",
        },
        {
          week: 2,
          topic: "Building Your First App",
          content:
            "Creating a simple mobile app using React Native components.",
        },
        // Additional weeks and topics...
      ],
      progress: 70,
    },
    {
      id: 2, // Unique identifier for the course
      name: "Introduction to React",
      instructor: "Stewen Smith", // Name of the course instructor
      description:
        "Learn the basics of React development and build your first websitr.",
      enrollmentStatus: "Closed", // Can be 'Open', 'Closed', or 'InProgress'
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQheIJRXrtM0o7a_M0cWT_jSQEjtys_XpiY0A&usqp=CAU", //Link to the course thumbnail
      duration: "12 weeks", // Duration of the course
      schedule: "Monday and Thursdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge", "Familiarity with HTML"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to React ",
          content:
            "Overview of React , setting up your development environment.",
        },
        {
          week: 2,
          topic: "Building Your First Website",
          content: "Creating a simple website app using React components.",
        },
        // Additional weeks and topics...
      ],
      progress: 60,
    },
  ],
  "student2@gmail.com": [
    {
      id: 1, // Unique identifier for the course
      name: "Introduction to React Native",
      instructor: "John Doe", // Name of the course instructor
      description:
        "Learn the basics of React Native development andbuild your first mobile app.",
      enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'InProgress'
      thumbnail:
        "https://cdn-ckjba.nitrocdn.com/XvHIXtRQMUYzLjoXbfBpiwAcydcSSOVj/assets/images/optimized/rev-b68df23/www.ciat.edu/wp-content/uploads/2022/10/react-logo.svg", //Link to the course thumbnail
      duration: "8 weeks", // Duration of the course
      schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to React Native",
          content:
            "Overview of React Native, setting up your development environment.",
        },
        {
          week: 2,
          topic: "Building Your First App",
          content:
            "Creating a simple mobile app using React Native components.",
        },
        // Additional weeks and topics...
      ],
      progress: 75,
    },
  ],
  "student3@gmail.com": [],
};
