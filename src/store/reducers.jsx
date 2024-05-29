const initialState = {
    courses: [],
    enrolledCourses: [],
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COURSES':
        return { ...state, courses: action.payload };
      case 'ENROLL_COURSE':
        return { ...state, enrolledCourses: [...state.enrolledCourses, action.payload] };
      default:
        return state;
    }
  };
  
  export default courseReducer;
  