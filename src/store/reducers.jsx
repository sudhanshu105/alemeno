import { fetchCourses } from "../api";

const courses = await fetchCourses();
const names = 'Alice Johnson';
const id = '101';

const enrolledCourses = courses.filter(
  c => c.students.some(e => e.name === names)
);

const initialState = {
  courses: courses,
  enrolledCourses: enrolledCourses,
  expandedWeeks: {},
  completedCourses: {},
  namestudent: names,
  studentId: id,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COURSES':
      return { ...state, courses: action.payload };
    case 'ENROLL_COURSE':
      return { ...state, enrolledCourses: [...state.enrolledCourses, action.payload] };
    case 'TOGGLE_SYLLABUS_WEEK': {
      const { courseId, weekIndex } = action.payload;
      const currentExpandedWeeks = state.expandedWeeks[courseId] || [];
      const isExpanded = currentExpandedWeeks.includes(weekIndex);
      const updatedExpandedWeeks = isExpanded
        ? currentExpandedWeeks.filter(index => index !== weekIndex)
        : [...currentExpandedWeeks, weekIndex];

      return {
        ...state,
        expandedWeeks: {
          ...state.expandedWeeks,
          [courseId]: updatedExpandedWeeks
        }
      };
    }
    case 'MARK_COURSE_COMPLETED': {
      const { courseId } = action.payload;
      return {
        ...state,
        completedCourses: {
          ...state.completedCourses,
          [courseId]: true
        }
      };
    }
    case 'LIKE_COURSE':
      return {
        ...state,
        courses: state.courses.map(course =>
          course.id === action.payload
            ? { ...course, likes: parseInt(course.likes) + 1 }
            : course
        ),
      };
    default:
      return state;
  }
};

export default courseReducer;
