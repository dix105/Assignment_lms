type status = "Open" | "Closed" | "In Progress";

export type CourseModel = {
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: status;
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: {
    week: number;
    topic: string;
    content: string;
  }[];
  progress: number;
};
