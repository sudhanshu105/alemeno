
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample data
const courses = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: '/native.jpg',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online', 
    likes: '10',
    dueDate: "2024-06-01",
    progress: 50,
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
      }
    ],
    students: [
      { id: 101, name: 'Alice Johnson', email: 'alice@example.com',progress: 75  },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com',progress: 75  }
    ]
  },

  {
    id: 2,
    name: 'Introduction to Flutter',
    instructor: 'Signal Fox',
    description: 'Learn the basics of Flutter development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: '/flutter.jpg',
    duration: '9 weeks',
    schedule: 'Tuesdays and Saturdays, 5:00 PM - 8:00 PM',
    location: 'Online',
    likes: '10',
    dueDate: "2024-06-01",
    progress: 50,
    prerequisites: ['Basic Dart and Java Knowledge', 'Familiarity with Android Studio'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Flutter',
        content: 'Overview of Flutter, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using Flutter components.'
      }
    ],
    students: [
      { id: 101, name: 'Sudhanshu', email: 'sudhanshu@example.com',progress: 75  },
      { id: 102, name: 'Harsh Kotary', email: 'Harko@example.com' ,progress: 75 }
    ]
  },

  {
    id: 3,
    name: 'Introduction to React',
    instructor: 'Popular Doe',
    description: 'Learn the basics of React development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: '/react.jpg',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    likes: '10',
    dueDate: "2024-06-01",
    progress: 50,
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React',
        content: 'Overview of React, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React components.'
      }
    ],
    students: [
      { id: 101, name: 'Alice Johnson', email: 'alice@example.com' ,progress: 75, },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com',progress: 75,  }
    ]
  },

  {
    id: 4,
    name: 'Introduction to Java',
    instructor: 'John Doe',
    description: 'Learn the basics of Java development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: '/java.jpg',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    likes: '10',
    dueDate: "2024-06-01",
    progress: 100,
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Java',
        content: 'Overview of Java, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using Java components.'
      }
    ],
    students: [
      { id: 101, name: 'Alice Johnson', email: 'alice@example.com', progress: 100, },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com', progress: 75, }
    ]
  },

  {
    id: 5,
    name: 'Introduction to SQL',
    instructor: 'John Doe',
    description: 'Learn the basics of SQL development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: '/SQL.jpg',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    likes: '10',
    dueDate: "2024-06-01",
    progress: 50,
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to SQL',
        content: 'Overview of SQL, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using SQL components.'
      }
    ],
    students: [
      { id: 101, name: 'Alice Johnson', email: 'alice@example.com',progress: 75,  },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com' ,progress: 75, }
    ]
  },
  {
    id: 6,
    name: 'Introduction to Angular',
    instructor: 'Sunil',
    description: 'Learn the basics of Angular development and build your first web app.',
    enrollmentStatus: 'Open',
    thumbnail: '/angular.jpg',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    likes: '10',
    dueDate: "2024-06-01",
    progress: 100,
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Angular',
        content: 'Overview of Angular, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
      }
    ],
    students: [
      { id: 101, name: 'Alice Johnson', email: 'alice@example.com', progress: 100 },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com' , progress: 75 }
    ]
  },
  {
    id: 7,
    name: 'Introduction to Pandas',
    instructor: 'John Doe',
    description: 'Learn the basics of Pandas development and build your Model.',
    enrollmentStatus: 'Open',
    thumbnail: '/pandas.png',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    likes: '10',
    dueDate: "2024-06-01",
    progress: 50,
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Pandas',
        content: 'Overview of Pandas, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using Pandas components.'
      }
    ],
    students: [
      { id: 101, name: 'James Hall', email: 'alice@example.com' ,progress: 75 },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com' ,progress: 75 }
    ]
  },
  {
    id: 8,
    name: 'Introduction to Numpy',
    instructor: 'John Doe',
    description: 'Learn the basics of Numpy.',
    enrollmentStatus: 'Open',
    thumbnail: '/numpy.png',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    likes: '10',
    dueDate: "2024-06-01",
    progress: 50,
    prerequisites: ['Basic Python'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Numpy',
        content: 'Overview of Numpy, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using Numpy components.'
      }
    ],
    students: [
      { id: 101, name: 'James Hall', email: 'alice@example.com',progress: 75  },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com' ,progress: 75 }
    ]
  },
  {
    id: 9,
    name: 'Introduction to Matlab',
    instructor: 'John Doe',
    description: 'Learn the basics of matlab.',
    enrollmentStatus: 'Open',
    thumbnail: '/matlab.jpg',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    likes: '10',
    dueDate: "2024-06-01",
    progress: 50,
    prerequisites: ['Basic Maths knowledge'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Matlab',
        content: 'Overview of Matlab, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using Matlab components.'
      }
    ],
    students: [
      { id: 101, name: 'James Hall', email: 'alice@example.com',progress: 75  },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com',progress: 75  }
    ]
  },
  {
    id: 10,
    name: 'Introduction to Figma',
    instructor: 'John Doe',
    description: 'Learn the basics of development and build your design.',
    enrollmentStatus: 'Open',
    thumbnail: '/figma.jpg',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    likes: '10',
    dueDate: "2024-06-01",
    progress: 50,
    prerequisites: ['Basic Paint', 'Familiarity with Creative designs'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Figma',
        content: 'Overview of Figma, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using Figma components.'
      }
    ],
    students: [
      { id: 101, name: 'Sudhanshu', email: 'alice@example.com',progress: 75  },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com',progress: 75  }
    ]
  },
  {
    id: 11,
    name: 'Introduction to Azure Data tools',
    instructor: 'John Doe',
    description: 'Learn the basics of Azure Data tools development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: '/azure.jpg',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    likes: '10',
    dueDate: "2024-06-01",
    progress: 50,
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Azure Data tools',
        content: 'Overview of Azure Data tools, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using Azure Data tools components.'
      }
    ],
    students: [
      { id: 101, name: 'Alice', email: 'alice@example.com',progress: 75  },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com',progress: 75  }
    ]
  },
  {
    id: 12,
    name: 'Introduction to C++',
    instructor: 'John Doe',
    description: 'Learn the basics of C++ development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: '/cpp.jpg',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    likes: '10',
    dueDate: "2024-06-01",
    progress: 50,
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to C++',
        content: 'Overview of C++, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using C++ components.'
      }
    ],
    students: [
      { id: 101, name: 'Alice Johnson', email: 'alice@example.com',progress: 50  },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com',progress: 75  }
    ]
  },
  // Additional course objects...
];

const welcome= "Hello";


app.get('/', (req,res) => {
  res.json(welcome);
})

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.get('/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (course) {
    res.json(course);
  } else {
    res.status(404).send('Course not found');
  }
});

app.post('/courses/:id/like', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (course) {
    course.likes = parseInt(course.likes) + 1;
    res.json(course);
  } else {
    res.status(404).send('Course not found');
  }
});

app.delete('/courses/:id/like', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (course) {
    course.likes = parseInt(course.likes) - 1;
    res.json(course);
  } else {
    res.status(404).send('Course not found');
  }
});

app.get('/courses/:courseId/students/:studentId/progress', (req, res) => {
  const { courseId, studentId } = req.params;
  const course = courses.find(c => c.id === parseInt(courseId));
  if (course) {
    const student = course.students.find(s => s.id === parseInt(studentId));
    if (student) {
      res.json({ progress: student.progress });
    } else {
      res.status(404).send('Student not found');
    }
  } else {
    res.status(404).send('Course not found');
  }
});

app.post('/courses/:courseId/students/:studentId/progress', (req, res) => {
  const { courseId, studentId } = req.params;
  const { progress } = req.body;
  const course = courses.find(c => c.id === parseInt(courseId));
  if (course) {
    const student = course.students.find(s => s.id === parseInt(studentId));
    if (student) {
      student.progress = progress;
      res.json({ progress: student.progress });
    } else {
      res.status(404).send('Student not found');
    }
  } else {
    res.status(404).send('Course not found');
  }
});



// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
