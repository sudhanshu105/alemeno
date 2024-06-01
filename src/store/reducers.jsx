import { fetchCourses } from "../api"; 

const courses = await fetchCourses();
const names = 'Alice Johnson';

const enrolledCourses= courses.filter(
  // eslint-disable-next-line
  c=>{
    let course={};
    c.students.forEach(e=>{
    if(e.name===names)course=c;
    })
    if(course.name)
    return course;
    }
    
);


const initialState = {
  courses: courses,
  enrolledCourses: enrolledCourses,
  expandedWeeks: {},
  completedCourses: {},
  namestudent: names
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
    default:
      return state;
  }
};

export default courseReducer;

