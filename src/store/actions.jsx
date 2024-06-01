
export const setCourses = (courses) => ({
  type: 'SET_COURSES',
  payload: courses
});

export const enrollCourse = (course) => ({
  type: 'ENROLL_COURSE',
  payload: course
});

export const toggleSyllabusWeek = (courseId, weekIndex) => ({
  type: 'TOGGLE_SYLLABUS_WEEK',
  payload: { courseId, weekIndex }
});

export const markCourseCompleted = (courseId) => ({
  type: 'MARK_COURSE_COMPLETED',
  payload: { courseId }
});
